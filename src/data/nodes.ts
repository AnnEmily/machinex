import { Status } from "../shared/constants";
import { MachineStatus, Connectors } from "../shared/types";

const offsetX = 0;
const offsetY = 0;

export const initialNodes = [
  {
    id: 'n1',
    type: 'machine',
    data: {
      label: 'Conveyor A',
      status: Status.ONLINE as MachineStatus,
      connectors: 'out' as Connectors,
     },
    position: { x: 0 + offsetX, y: 0 + offsetY },
  },
  {
    id: 'n2',
    type: 'machine',
    data: {
      label: 'Sorter S',
      status: Status.STOPPED as MachineStatus,
      connectors: 'both' as Connectors,
    },
    position: { x: 200 + offsetX, y: 0 + offsetY },
  },
  {
    id: 'n3',
    type: 'machine',
    data: {
      label: 'Conveyor B1',
      status: Status.STOPPED as MachineStatus,
      connectors: 'both' as Connectors,
    },
    position: { x: 400 + offsetX, y: -50 + offsetY },
  },
  {
    id: 'n4',
    type: 'machine',
    data: {
      label: 'Conveyor B2',
      status: Status.STOPPED as MachineStatus,
      connectors: 'both' as Connectors,
    },
    position: { x: 400 + offsetX, y: 50 + offsetY },
  },
  {
    id: 'n5',
    type: 'machine',
    data: {
      label: 'Shredder S',
      status: Status.STOPPED as MachineStatus,
      connectors: 'in' as Connectors,
    },
    position: { x: 600 + offsetX, y: -50 + offsetY },
  },
  {
    id: 'n6',
    type: 'machine',
    data: {
      label: 'Compactor C',
      status: Status.STOPPED as MachineStatus,
      connectors: 'in' as Connectors,
    },
    position: { x: 600 + offsetX, y: 50 + offsetY },
  },
];
