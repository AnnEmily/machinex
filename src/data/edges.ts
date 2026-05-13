import { MarkerType } from "@xyflow/react";

const markerEnd = {
  type: MarkerType.ArrowClosed,
  color: '#b1b1b7',
  width: 15,
  height: 15,
};

export const initialEdges = [
  {
    id: 'n1-n2',
    type: 'statusEdge',
    source: 'n1',
    target: 'n2',
    label: 'mixed',
    markerEnd,
  },
  {
    id: 'n2-n3',
    type: 'statusEdge',
    source: 'n2',
    target: 'n3',
    label: 'plastic',
    markerEnd,
  },
  {
    id: 'n2-n4',
    type: 'statusEdge',
    source: 'n2',
    target: 'n4',
    label: 'metal',
    markerEnd,
  },
  {
    id: 'n3-n5',
    type: 'statusEdge',
    source: 'n3',
    target: 'n5',
    label: 'plastic',
    markerEnd,
  },
  {
    id: 'n4-n6',
    type: 'statusEdge',
    source: 'n4',
    target: 'n6',
    label: 'metal',
    markerEnd,
  },
];
