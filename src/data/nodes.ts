import { MachineNodeType } from "../shared/types";

const offsetX = 0;
const offsetY = 0;

export const initialNodes: MachineNodeType[] = [
  {
    id: 'n1',
    type: 'machine',
    data: {
      label: 'Conveyor A',
      status: 'STOPPED',
      connectors: 'out',
     },
    position: { x: 0 + offsetX, y: 0 + offsetY },
  },
  {
    id: 'n2',
    type: 'machine',
    data: {
      label: 'Sorter S',
      status: 'STOPPED',
      connectors: 'both',
    },
    position: { x: 200 + offsetX, y: 0 + offsetY },
  },
  {
    id: 'n3',
    type: 'machine',
    data: {
      label: 'Conveyor B1',
      status: 'STOPPED',
      connectors: 'both',
    },
    position: { x: 400 + offsetX, y: -50 + offsetY },
  },
  {
    id: 'n4',
    type: 'machine',
    data: {
      label: 'Conveyor B2',
      status: 'STOPPED',
      connectors: 'both',
    },
    position: { x: 400 + offsetX, y: 50 + offsetY },
  },
  {
    id: 'n5',
    type: 'machine',
    data: {
      label: 'Shredder S',
      status: 'STOPPED',
      connectors: 'in',
    },
    position: { x: 600 + offsetX, y: -50 + offsetY },
  },
  {
    id: 'n6',
    type: 'machine',
    data: {
      label: 'Compactor C',
      status: 'STOPPED',
      connectors: 'in',
    },
    position: { x: 600 + offsetX, y: 50 + offsetY },
  },
];
