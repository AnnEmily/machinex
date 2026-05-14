import { CSSProperties, FC } from 'react';
import GaugeChart from 'react-gauge-chart';
import { type Node } from '@xyflow/react';

import { MachineNodeData, MachineStatus } from '../../shared/types';
import { StatusButtonGroup } from './StatusButtonGroup';

const titleStyle: CSSProperties = {
  border: '1px solid white',
  borderRadius: '8px',
  color: 'white',
  backgroundColor: 'transparent',
  fontSize: '22px',
  padding: '5px',
  marginBottom: '44px',
  textAlign: 'center',
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '70px 180px',
  gridTemplateRows: 'auto auto auto',
  gap: '0px',
  width: 'max-content'
};

const itemStyle: CSSProperties = {
  // border: '1px solid #ccc',
  padding: '5px',
  textAlign: 'left'
};

const fullWidthStyle: CSSProperties = {
    ...itemStyle,
    paddingTop: '40px',
    gridColumn: '1 / span 2',
  };

interface MachinePanelProps {
  node: Node<MachineNodeData>;
  onChangeStatus: (_newStatus: MachineStatus) => void;
}

export const MachinePanel: FC<MachinePanelProps> = ({ node, onChangeStatus }) => {
  const statusToString = (status: MachineStatus): string => {
    if (status === 'ONLINE') {
      return 'power on and active';
    } else if (status === 'IDLE') {
      return 'power on but inactive';
    } else if (status === 'STOPPED') {
      return 'power off';
    }
  };

  const value = node.data.status === 'STOPPED'
    ? 0
    : node.data.status === 'IDLE'
      ? node.data.opParam.value / 5
      : node.data.opParam.value;
  
  const percent = value / node.data.opParam.max;
  const gaugeString = `${node.data.opParam.name}: ${value} ${node.data.opParam.unit}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={titleStyle}>
        {node.data.label}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '300px' }}>
          <div style={gridStyle}>
            <div style={itemStyle}>{"Status:"}</div>
            <div style={itemStyle}>{node.data.status}</div>
            <div style={itemStyle}>{"Activity:"}</div>
            <div style={itemStyle}>{statusToString(node.data.status)}</div>
            <div style={fullWidthStyle}><StatusButtonGroup status={node.data.status} onAction={onChangeStatus} /></div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
          
          <div style={{ width: '400px' }}>
            <GaugeChart id="gauge-chart2"
              nrOfLevels={20}
              percent={percent}
              hideText
            />
          </div>

          <div>
            {gaugeString}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachinePanel;
