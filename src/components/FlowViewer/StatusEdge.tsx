import { FC } from 'react';
import { BaseEdge, EdgeProps, getBezierPath, EdgeLabelRenderer, useNodes } from '@xyflow/react';

import { MachineNode } from '../../shared/types';

export const StatusEdge: FC<EdgeProps> = ({
  id,
  source,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  label,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Retrieve node list and find the node feeding the edge
  const nodes = useNodes<MachineNode>();
  const sourceNode = nodes.find((node) => node.id === source);

  // If status of feeding node is ONLINE, enable animated edge
  const isAnimated = sourceNode?.data?.status === 'ONLINE';
  const edgeColor = isAnimated ? '#22c55e' : '#b1b1b7';
  const customMarkerId = `arrow-marker-${id}`;

  return (
    <>
      {/* Inject a SVG marker for the edge instead of the default marker */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <marker
            id={customMarkerId}
            markerWidth="10"
            markerHeight="12"
            refX="9" /* distance from tip to node border */
            refY="6"
            orient="auto-start-reverse"
            markerUnits="strokeWidth"
          >
            {/* Classic ArrowClosed shape as pure SVG */}
            <path d="M0,2 L12,6 L0,10 z" fill={edgeColor} />
          </marker>
        </defs>
      </svg>
      
      <BaseEdge
        path={edgePath}
        markerEnd={`url(#${customMarkerId})`}
        style={{
          ...style,
          strokeWidth: 1,
          stroke: edgeColor,
          strokeDasharray: isAnimated ? '5,4' : '0',
          animation: isAnimated ? 'dashdraw 0.5s linear infinite' : 'none',
        }}
      />

      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all', /* allow label click if needed */

              color: '#dbdbdb',
              backgroundColor: '#1d2226',

              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: 10,
            }}
            className="nodrag nopan" /* avoid dragging graph on label click */
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};
