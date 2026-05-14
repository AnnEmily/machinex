import { Node } from '@xyflow/react';

export type MachineStatus = 'ONLINE' | 'STOPPED' | 'IDLE';
export type Connectors = 'in' | 'out' | 'both';

export type OpParam = {
  value: number;
  max: number;
  unit: string;
  name: string;
};

export type MachineNodeData = {
  label: string;
  status: MachineStatus;
  connectors: Connectors;
  opParam: OpParam;
};

export type MachineNodeType = Node<MachineNodeData, 'machine'>;
