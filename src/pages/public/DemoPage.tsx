import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Declare the ElevenLabs custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string
      }
    }
  }
}

/**
 * DemoPage - Live ElevenLabs Voice Agent Demo
 * Uses the official ElevenLabs ConvAI widget
 */
export default function DemoPage() {
  // Multiple agent configurations
  const agents = [
    {
      id: 'agent_1901k60y3kctfsqrnen4mvpg828k',
      name: 'Restaurant Assistant',
      description: 'Handles reservations and menu questions'
    },
    {
      id: 'agent_3401k5y7ntzveqxb042sf6nyts0v',
      name: 'Customer Service', 
      description: 'General support and inquiries'
    },
    {
      id: 'agent_6601k5y7ctz5f1vt0f2y83dqz4t1',
      name: 'Sales Assistant',
      description: 'Product information and sales support'
    }
  ]
  
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(0)
  const selectedAgent = agents[selectedAgentIndex]
  const agentId = selectedAgent.id

  // Load ElevenLabs widget when agent changes
  useEffect(() => {
    console.log('Loading ElevenLabs widget for agent:', agentId)
    
    // Remove any existing widget first
    const existingWidget = document.querySelector('elevenlabs-convai')
    if (existingWidget) {
      existingWidget.remove()
    }
    
    // Load ElevenLabs script
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector('script[src*="convai-widget-embed"]')) {
          resolve(true)
          return
        }

        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
        script.async = true
        script.type = 'text/javascript'
        
        script.onload = () => {
          console.log('ElevenLabs script loaded successfully')
          resolve(true)
        }
        
        script.onerror = (error) => {
          console.error('Failed to load ElevenLabs script:', error)
          reject(error)
        }
        
        document.body.appendChild(script)
      })
    }

    const createWidget = () => {
      console.log('Creating widget for agent:', agentId)
      
      const widget = document.createElement('elevenlabs-convai')
      widget.setAttribute('agent-id', agentId)
      document.body.appendChild(widget)
      
      console.log('ElevenLabs widget added to page')
    }

    // Load script then create widget
    loadScript()
      .then(() => {
        setTimeout(createWidget, 1000) // Wait for script to initialize
      })
      .catch(() => {
        createWidget() // Create anyway to test
      })

    // Cleanup function
    return () => {
      const widget = document.querySelector('elevenlabs-convai')
      if (widget) {
        widget.remove()
      }
    }
  }, [agentId])

  return (
    <>
      <Helmet>
        <title>Live AI Voice Agent Demo | Voice Agent Platform</title>
        <meta name="description" content="Experience our AI voice agent live! Try real voice interaction powered by ElevenLabs technology." />
        <meta name="keywords" content="AI voice agent demo, live voice AI, ElevenLabs integration, restaurant automation" />
        <link rel="canonical" href="https://voiceagent.com/demo" />

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Live AI Voice Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience real-time AI voice conversation powered by ElevenLabs technology. 
              Choose an agent and look for the widget in the bottom right corner.
            </p>
          </div>
        </section>

        {/* Main Agent Selection Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Agent Selection Grid - The Main Focus */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your AI Agent
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Select an agent below to activate the voice widget in the bottom right corner.
              </p>
            </div>

            {/* Agent Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {agents.map((agent, index) => (
                <Card 
                  key={agent.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedAgentIndex === index 
                      ? 'bg-purple-600/30 border-purple-400 ring-2 ring-purple-400/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15'
                  } backdrop-blur-sm`}
                  onClick={() => setSelectedAgentIndex(index)}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-white text-xl">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-4">{agent.description}</p>
                    {selectedAgentIndex === index && (
                      <div className="flex items-center justify-center space-x-2 text-purple-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Active Agent</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Currently Active Agent Display */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Currently Active:</h3>
                <p className="text-purple-300 text-2xl font-bold">{selectedAgent.name}</p>
                <p className="text-gray-300 text-sm mt-2">{selectedAgent.description}</p>
                <div className="mt-4 text-sm text-gray-300">
                  Look for the voice widget in the bottom right corner!
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
