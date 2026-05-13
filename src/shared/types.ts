export type MachineStatus = 'ONLINE' | 'STOPPED' | 'IDLE';
export type Connectors = 'in' | 'out' | 'both';

export type MachineNodeData = {
  label: string;
  status: MachineStatus;
  connectors: Connectors;
};
