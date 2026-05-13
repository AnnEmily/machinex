import { FC } from 'react';
import { type Node } from '@xyflow/react';

import { MachineNodeData, MachineStatus } from '../../shared/types';
import { StatusButtonGroup } from './StatusButtonGroup';

interface MachinePanelProps {
  node: Node<MachineNodeData>;
  onChangeStatus: (_newStatus: MachineStatus) => void;
  onClose: () => void;
}

export const MachinePanel: FC<MachinePanelProps> = ({ node, onChangeStatus, onClose }) => {
  
  return (
    <>
      <h3>{`Machine: ${node.data.label}`}</h3>
      <p>{`ID: ${node.id}`}</p>
      <p>{`Status: ${node.data.status}`}</p>
      <StatusButtonGroup status={node.data.status} onAction={onChangeStatus} />
      <button onClick={onClose}>{"Close"}</button>
    </>
  );
};

export default MachinePanel;
