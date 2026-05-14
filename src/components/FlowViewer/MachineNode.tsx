import { FC } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';

import { MachineNodeData } from '../../shared/types';
import { statusColor } from '../../shared/constants';

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

export const MachineNode: FC<NodeProps<MachineNodeRef>> = ({ data, selected }) => {
  const borderColor = statusColor[data.status] || '#ccc';
  const backgroundColor = (selected ?? false) ? `${borderColor}76` : 'white';

  const needsInput = data.connectors === 'in' || data.connectors === 'both';
  const needsOutput = data.connectors === 'out' || data.connectors === 'both';

  const innerStyle = {
    ...nodeStyle,
    backgroundColor,
    border: `2px solid ${borderColor}`,
  };

  const labelStyle= {
    color: selected ? 'white' : 'black',
    fontSize: '10px',
  };

  return (
    <div style={innerStyle}>
      {needsInput && <Handle type="target" position={Position.Left} style={handleStyle} />}
      <div style={labelStyle}>{data.label}</div>
      {needsOutput && <Handle type="source" position={Position.Right} style={handleStyle}/>}
    </div>
  );
};
