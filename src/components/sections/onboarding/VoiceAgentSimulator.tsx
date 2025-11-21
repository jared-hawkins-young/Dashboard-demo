import { useState, useEffect } from 'react'
import { Play, Pause, Volume2, Phone, PhoneOff, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

interface ConversationMessage {
  speaker: 'ai' | 'customer'
  text: string
  timestamp?: string
}

interface Scenario {
  id: string
  title: string
  description: string
  businessType: string
  duration: number
  conversation: ConversationMessage[]
}

interface VoiceAgentSimulatorProps {
  scenario: Scenario
  onScenarioComplete?: (scenarioId: string) => void
}

/**
 * VoiceAgentSimulator - Interactive voice agent simulation component
 * Simulates real phone conversations with typing effects and realistic timing
 */
export function VoiceAgentSimulator({ scenario, onScenarioComplete }: VoiceAgentSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1)
  const [currentText, setCurrentText] = useState('')
  const [progress, setProgress] = useState(0)
  const [callStatus, setCallStatus] = useState<'idle' | 'ringing' | 'connected' | 'completed'>('idle')

  // Reset when scenario changes
  useEffect(() => {
    setIsPlaying(false)
    setCurrentMessageIndex(-1)
    setCurrentText('')
    setProgress(0)
    setCallStatus('idle')
  }, [scenario.id])

  // Handle message progression
  useEffect(() => {
    if (!isPlaying || currentMessageIndex >= scenario.conversation.length) {
      if (currentMessageIndex >= scenario.conversation.length && callStatus !== 'completed') {
        setCallStatus('completed')
        setIsPlaying(false)
        onScenarioComplete?.(scenario.id)
      }
      return
    }

    const currentMessage = scenario.conversation[currentMessageIndex]
    if (!currentMessage) return

    // Typing effect for current message
    let charIndex = 0
    const typingSpeed = currentMessage.speaker === 'ai' ? 50 : 80 // AI types faster

    const typeMessage = () => {
      if (charIndex < currentMessage.text.length) {
        setCurrentText(currentMessage.text.slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeMessage, typingSpeed)
      } else {
        // Message complete, pause before next message
        setTimeout(() => {
          if (isPlaying) {
            setCurrentMessageIndex(prev => prev + 1)
            setCurrentText('')
          }
        }, currentMessage.speaker === 'ai' ? 1500 : 2000) // Longer pause after customer speaks
      }
    }

    // Start typing current message
    setTimeout(typeMessage, 500) // Initial delay

    // Update progress
    const newProgress = ((currentMessageIndex + 1) / scenario.conversation.length) * 100
    setProgress(newProgress)

  }, [isPlaying, currentMessageIndex, scenario.conversation.length, scenario.id, callStatus, onScenarioComplete])

  const handlePlayPause = () => {
    if (callStatus === 'idle') {
      setCallStatus('ringing')
      setTimeout(() => {
        setCallStatus('connected')
        setCurrentMessageIndex(0)
        setIsPlaying(true)
      }, 2000) // Simulate ringing
    } else if (callStatus === 'completed') {
      // Restart
      setCallStatus('idle')
      setCurrentMessageIndex(-1)
      setCurrentText('')
      setProgress(0)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const getCallStatusText = () => {
    switch (callStatus) {
      case 'idle': return 'Ready to Start Demo'
      case 'ringing': return 'Incoming Call...'
      case 'connected': return 'Call in Progress'
      case 'completed': return 'Call Completed'
      default: return 'Ready'
    }
  }

  const getVisibleMessages = () => {
    if (currentMessageIndex < 0) return []
    
    const messages = scenario.conversation.slice(0, currentMessageIndex + 1)
    if (currentText && currentMessageIndex < scenario.conversation.length) {
      const currentMessage = scenario.conversation[currentMessageIndex]
      messages[currentMessageIndex] = {
        ...currentMessage,
        text: currentText
      }
    }
    return messages
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>{scenario.title}</span>
            </CardTitle>
            <CardDescription>{scenario.description}</CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <span>{Math.floor(scenario.duration / 60)}:{(scenario.duration % 60).toString().padStart(2, '0')}</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Call Status */}
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              callStatus === 'ringing' ? 'bg-yellow-500 animate-pulse' :
              callStatus === 'connected' ? 'bg-green-500 animate-pulse' :
              callStatus === 'completed' ? 'bg-blue-500' :
              'bg-gray-400'
            }`} />
            <span className="font-medium">{getCallStatusText()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            {callStatus === 'connected' && (
              <Badge variant="outline" className="animate-pulse">LIVE</Badge>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Demo Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Play Control */}
        <div className="flex justify-center">
          <Button
            onClick={handlePlayPause}
            size="lg"
            className={`px-8 ${callStatus === 'ringing' ? 'animate-pulse' : ''}`}
          >
            {callStatus === 'idle' ? (
              <>
                <Play className="h-4 w-4 mr-2" />
                Start Demo Call
              </>
            ) : callStatus === 'ringing' ? (
              <>
                <Phone className="h-4 w-4 mr-2" />
                Answering...
              </>
            ) : callStatus === 'completed' ? (
              <>
                <Play className="h-4 w-4 mr-2" />
                Replay Demo
              </>
            ) : isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Resume
              </>
            )}
          </Button>
        </div>

        {/* Conversation Display */}
        <div className="border rounded-lg p-4 bg-background min-h-[300px] max-h-[400px] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold flex items-center">
              <Bot className="h-4 w-4 mr-2 text-blue-600" />
              Live Conversation
            </h4>
            {callStatus === 'connected' && (
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span>Recording</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {getVisibleMessages().map((message, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-3 ${
                  message.speaker === 'customer' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.speaker === 'ai' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {message.speaker === 'ai' ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.speaker === 'ai' 
                      ? 'bg-blue-50 text-blue-900' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {index === currentMessageIndex && currentText !== message.text && (
                    <div className="inline-block w-1 h-4 bg-current animate-pulse ml-1" />
                  )}
                </div>
              </div>
            ))}

            {callStatus === 'ringing' && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-muted-foreground">
                  <PhoneOff className="h-5 w-5 animate-bounce" />
                  <span>Incoming call from customer...</span>
                </div>
              </div>
            )}

            {callStatus === 'idle' && (
              <div className="text-center py-8 text-muted-foreground">
                <p>Click "Start Demo Call" to begin the simulation</p>
              </div>
            )}
          </div>
        </div>

        {/* Scenario Info */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Business Type</div>
            <div className="font-medium">{scenario.businessType}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Call Duration</div>
            <div className="font-medium">{Math.floor(scenario.duration / 60)}:{(scenario.duration % 60).toString().padStart(2, '0')}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Outcome</div>
            <div className="font-medium text-green-600">Successful</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
