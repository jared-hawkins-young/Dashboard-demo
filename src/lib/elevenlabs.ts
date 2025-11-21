// ElevenLabs Voice Agent Integration
// This file provides the interface for connecting to ElevenLabs conversational AI

export interface ElevenLabsConfig {
  apiKey: string
  agentId: string
}

export interface ConversationMessage {
  role: 'user' | 'agent'
  message: string
  timestamp: string
}

export interface VoiceAgentCallbacks {
  onConnect?: () => void
  onDisconnect?: () => void
  onMessage?: (message: ConversationMessage) => void
  onError?: (error: string) => void
}

export class ElevenLabsVoiceAgent {
  private config: ElevenLabsConfig
  private websocket: WebSocket | null = null
  private callbacks: VoiceAgentCallbacks = {}

  constructor(config: ElevenLabsConfig) {
    this.config = config
  }

  setCallbacks(callbacks: VoiceAgentCallbacks) {
    this.callbacks = callbacks
  }

  async startConversation(): Promise<void> {
    try {
      // In a real implementation, you would:
      // 1. Create an ElevenLabs agent using their API
      // 2. Get WebSocket connection URL
      // 3. Connect to their WebSocket for real-time conversation
      
      // For now, we'll simulate the connection
      console.log('Starting ElevenLabs conversation with agent:', this.config.agentId)
      
      // Simulate WebSocket connection
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.callbacks.onConnect?.()
      
      // Simulate initial agent message
      setTimeout(() => {
        this.callbacks.onMessage?.({
          role: 'agent',
          message: 'Hello! I\'m your AI voice assistant. How can I help you today?',
          timestamp: new Date().toLocaleTimeString()
        })
      }, 500)
      
    } catch (error) {
      console.error('Error starting conversation:', error)
      this.callbacks.onError?.('Failed to start conversation')
    }
  }

  async endConversation(): Promise<void> {
    if (this.websocket) {
      this.websocket.close()
      this.websocket = null
    }
    
    this.callbacks.onDisconnect?.()
  }

  // In a real implementation, this would send audio data to ElevenLabs
  sendAudioData(audioData: Blob): void {
    console.log('Sending audio data to ElevenLabs:', audioData.size, 'bytes')
    
    // Simulate processing and response
    setTimeout(() => {
      this.callbacks.onMessage?.({
        role: 'user',
        message: '(Audio message received)',
        timestamp: new Date().toLocaleTimeString()
      })
      
      // Simulate agent response
      setTimeout(() => {
        this.callbacks.onMessage?.({
          role: 'agent',
          message: 'I understand. Let me help you with that.',
          timestamp: new Date().toLocaleTimeString()
        })
      }, 1000)
    }, 500)
  }
}

// Factory function to create ElevenLabs agent
export function createElevenLabsAgent(config?: Partial<ElevenLabsConfig>): ElevenLabsVoiceAgent {
  const defaultConfig: ElevenLabsConfig = {
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY || 'demo-key',
    agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'demo-agent'
  }

  return new ElevenLabsVoiceAgent({ ...defaultConfig, ...config })
}

// Example usage with actual ElevenLabs SDK (commented out for demo)
/*
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

export async function createRealElevenLabsAgent() {
  const elevenlabs = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
  });

  const agent = await elevenlabs.conversationalAi.agents.create({
    name: "Voice Agent Demo",
    conversationConfig: {
      agent: {
        prompt: {
          prompt: `You are a helpful AI voice assistant for a restaurant. You can:
          - Take reservations
          - Answer questions about menu items
          - Provide restaurant information
          - Handle customer service inquiries
          
          Be friendly, professional, and efficient. Always confirm important details like reservation times and party sizes.`,
        }
      },
    },
  });

  return agent;
}
*/
