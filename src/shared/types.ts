import { Node } from '@xyflow/react';

export type MachineStatus = 'ONLINE' | 'STOPPED' | 'IDLE';
export type Connectors = 'in' | 'out' | 'both';

export type MachineNodeData = {
  label: string;
  status: MachineStatus;
  connectors: Connectors;
};

export type MachineNode = Node<MachineNodeData, 'machine'>;
