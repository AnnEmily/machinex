import React, { FC } from 'react';
import { Circle, Power, PauseCircle, PlayCircle } from 'lucide-react';
import { Status } from '../../shared/constants';

export type StatusType = (typeof Status)[keyof typeof Status];

interface NodeLabelProps {
  status: StatusType;
  label: string;
}

export const NodeLabel: FC<NodeLabelProps> = ({ status, label }) => {
  const getStatusConfig = () => {
    switch (status) {
      case Status.ONLINE:
        return { icon: <PlayCircle size={14} />, color: '#22c55e' };
      case Status.IDLE:
        return { icon: <PauseCircle size={14} />, color: '#eab308' };
      case Status.STOPPED:
        return { icon: <Power size={14} />, color: '#ef4444' };
      default:
        return { icon: <Circle size={14} />, color: '#94a3b8' };
    }
  };

  const { icon, color } = getStatusConfig();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      justifyContent: 'center',
      padding: '2px 4px'
    }}>
      <span style={{ color, display: 'flex', alignItems: 'center' }}>
        {icon}
      </span>
      <span style={{
        whiteSpace: 'pre-wrap',
        fontWeight: 500,
        fontSize: '13px',
        color: '#334155'
      }}>
        {label}
      </span>
    </div>
  );
};

// // 3. Exemple d'utilisation dans vos nodes
// export const initialNodes = [
//   {
//     id: '1',
//     position: { x: 0, y: 0 },
//     data: { label: <NodeLabel status={Status.ONLINE} label="Serveur\nPrincipal" /> },
//     sourcePosition: 'right',
//     style: { width: 120, borderRadius: '8px' }
//   },
//   {
//     id: '2',
//     position: { x: 250, y: 0 },
//     data: { label: <NodeLabel status={Status.STOPPED} label="Base de\nDonnées" /> },
//     targetPosition: 'left',
//     style: { width: 120, borderRadius: '8px' }
//   }
// ];
