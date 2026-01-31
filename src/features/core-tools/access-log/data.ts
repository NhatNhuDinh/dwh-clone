export type AccessLogItem = {
  id: string;
  time: string;
  userName: string;
  ip: string;
  action: string;
};

export const accessLogMock: AccessLogItem[] = [
  { id: '1', time: '09:56 31/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '2', time: '17:22 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '3', time: '17:14 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '4', time: '17:04 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '5', time: '16:50 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '6', time: '16:44 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
  { id: '7', time: '16:38 30/01/2026', userName: 'Pham Thien Dat', ip: '10.230.200.254', action: 'access' },
];
