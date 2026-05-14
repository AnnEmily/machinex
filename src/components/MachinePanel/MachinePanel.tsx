import { FC } from 'react';
import { type Node } from '@xyflow/react';

import { MachineNodeData, MachineStatus } from '../../shared/types';
import { StatusButtonGroup } from './StatusButtonGroup';

interface MachinePanelProps {
  node: Node<MachineNodeData>;
  onChangeStatus: (_newStatus: MachineStatus) => void;
}

export const MachinePanel: FC<MachinePanelProps> = ({ node, onChangeStatus }) => {
  const statusToString = (status: MachineStatus): string => {
    if (status === 'ONLINE') {
      return 'POWER ON AND ACTIVE';
    } else if (status === 'IDLE') {
      return 'POWER ON BUT INACTIVE';
    } else if (status === 'STOPPED') {
      return 'POWER OFF';
    }
  };

  return (
    <div>
      <h3>{`Machine: ${node.data.label}`}</h3>
      {/* <p>{`ID: ${node.id}`}</p> */}
      <p>{`Status: ${statusToString(node.data.status)}`}</p>
      <StatusButtonGroup status={node.data.status} onAction={onChangeStatus} />
    </div>
  );
};

export default MachinePanel;
