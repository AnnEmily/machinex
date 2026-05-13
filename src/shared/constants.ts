import { MachineStatus } from "./types";

export const statusColor: Record<MachineStatus, string> = {
  ONLINE: '#20ac53',
  IDLE: '#f97316',
  STOPPED: '#ef4444',
};
