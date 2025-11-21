export interface Organization {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  locations?: Location[];
}

export interface Location {
  id: string;
  organization_id: string;
  name: string;
  address: string;
  phone: string;
  created_at: string;
  updated_at: string;
  agents?: Agent[];
}

export interface Agent {
  id: string;
  location_id: string;
  name: string;
  status: 'active' | 'idle' | 'maintenance';
  calls_today: number;
  created_at: string;
  updated_at: string;
}

export interface Call {
  id: string;
  agent_id: string;
  caller_number: string;
  duration_seconds: number;
  status: 'completed' | 'missed' | 'in_progress';
  recording_url: string | null;
  created_at: string;
}

export interface OrganizationWithLocations extends Organization {
  locations: LocationWithAgents[];
}

export interface LocationWithAgents extends Location {
  agents: Agent[];
}
