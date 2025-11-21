export interface AgentStatus {
  id: string;
  status: 'active' | 'idle' | 'maintenance';
  last_activity: string;
  current_call_id?: string;
  session_start?: string;
}

export interface LiveCall {
  id: string;
  agent_id: string;
  caller_number: string;
  start_time: string;
  status: 'ringing' | 'connected' | 'on_hold' | 'transferring';
  duration?: number;
  call_type: 'reservation' | 'order' | 'support' | 'general';
}

export interface CallMetrics {
  total_calls: number;
  completed_calls: number;
  missed_calls: number;
  average_duration: number;
  calls_today: number;
  active_agents: number;
}

export interface AgentConfig {
  id: string;
  agent_id: string;
  voice_settings: {
    voice_id: string;
    speed: number;
    pitch: number;
  };
  behavior_settings: {
    greeting_message: string;
    transfer_conditions: string[];
    max_call_duration: number;
  };
  integration_settings: {
    pos_system?: string;
    calendar_integration?: boolean;
    sms_notifications?: boolean;
  };
}

export interface WebSocketMessage {
  type: 'agent_status' | 'call_update' | 'metrics_update';
  data: any;
  timestamp: string;
}
