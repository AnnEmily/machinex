import { CSSProperties, FC } from 'react';

import { MachineStatus } from '../../shared/types';
import { statusColor } from '../../shared/constants';

const ATTENUATION = 'E0';
const BG_COLOR_DISABLED = 'gray';
const FG_COLOR_DISABLED = 'white';

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  padding: '4px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  width: 'fit-content',
};

const baseButtonStyle: CSSProperties = {
  padding: '8px 16px',
  fontSize: '14px',
  fontWeight: 500,
  borderRadius: '6px',
  border: '1px solid black',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  color: 'black',
};

const disabledButtonStyle: CSSProperties = {
  ...baseButtonStyle,
  cursor: 'not-allowed',
  backgroundColor: BG_COLOR_DISABLED,
  color: FG_COLOR_DISABLED,
  // boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  // transform: 'scale(1.02)',
};

const BUTTON_LABELS: Record<MachineStatus, string> = {
  ONLINE: 'Start',
  IDLE: 'Idle',
  STOPPED: 'Stop',
};

interface StatusButtonGroupProps {
  status: MachineStatus;
  onAction: (_newStatus: MachineStatus) => void;
}

export const StatusButtonGroup: FC<StatusButtonGroupProps> = ({ status, onAction }) => {
  const keys = Object.keys(BUTTON_LABELS) as MachineStatus[];

  return (
    <div style={containerStyle}>
      {keys.map((key) => {
        const isActive = status === key;
        const color = statusColor[key];

        const dynamicButtonStyle = isActive
          ? disabledButtonStyle
          : { ...baseButtonStyle, backgroundColor: `${color}${ATTENUATION}` };

        return (
          <button
            key={key}
            type="button"
            disabled={isActive}
            onClick={() => onAction(key)}
            style={dynamicButtonStyle}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = color;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = `${color}${ATTENUATION}`;
              }
            }}
          >
            {BUTTON_LABELS[key]}
          </button>
        );
      })}
    </div>
  );
};
