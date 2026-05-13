export const Status = {
  ONLINE: 'online',
  IDLE: 'idle',
  STOPPED: 'stopped',
} as const;

export const STATUS_COLORS = {
  [Status.ONLINE]: '#22c55e',
  [Status.IDLE]: '#f97316',
  [Status.STOPPED]: '#ef4444',
};
