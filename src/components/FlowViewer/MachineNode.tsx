import { FC } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import { MachineNodeData, MachineStatus } from '../../shared/types';
import { Status } from '../../shared/constants';

type MachineNodeRef = Node<MachineNodeData, 'machine'>;

const nodeStyle = {
  padding: '12px',
  borderRadius: '8px',
  background: 'white',
  minWidth: '80px',
  display: 'flex',
  justifyContent: 'center',
};

const handleStyle = {
  background: 'transparent',
  border: 'none',
  minWidth: '1px',
  minHeight: '1px',
};

export const MachineNode: FC<NodeProps<MachineNodeRef>> = ({ data }) => {
  const borderColor = {
    [Status.ONLINE]: '#20ac53',
    [Status.IDLE]: '#f97316',
    [Status.STOPPED]: '#ef4444',
  }[data.status as MachineStatus] || '#ccc';

  const needsInput = data.connectors === 'in' || data.connectors === 'both';
  const needsOutput = data.connectors === 'out' || data.connectors === 'both';

  return (
    <div style={{ ...nodeStyle, border: `2px solid ${borderColor}`, }}>
      {needsInput && <Handle type="target" position={Position.Left} style={handleStyle} />}
      <div style={{ color: 'black', fontSize: '10px' }}>{data.label}</div>
      {needsOutput && <Handle type="source" position={Position.Right} style={handleStyle}/>}
    </div>
  );
};
