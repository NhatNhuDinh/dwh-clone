export type AccessLogItem = {
  id: string;
  time: string;
  userName: string;
  ip: string;
  action: string;
};

export type InteractionLogItem = AccessLogItem;

export type LogConfigItem = {
  id: string;
  code: string;
  name: string;
  status: 'Mở' | 'Tắt';
};

export const accessLogMock: AccessLogItem[] = [
  {
    id: '1',
    time: '16:50 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'login',
  },
  {
    id: '2',
    time: '16:44 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'login',
  },
  {
    id: '3',
    time: '16:38 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'login',
  },
];

export const interactionLogMock: InteractionLogItem[] = [
  {
    id: '1',
    time: '16:50 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'access',
  },
  {
    id: '2',
    time: '16:45 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'access',
  },
  {
    id: '3',
    time: '16:44 30/01/2026',
    userName: 'Pham Thien Dat',
    ip: '10.230.200.254',
    action: 'access',
  },
];

export const logConfigMock: LogConfigItem[] = [
  {
    id: '1',
    code: 'delete_source',
    name: 'Xóa nguồn dữ liệu',
    status: 'Tắt',
  },
  {
    id: '2',
    code: 'update_source',
    name: 'Cập nhật nguồn dữ liệu',
    status: 'Mở',
  },
  {
    id: '3',
    code: 'create_source',
    name: 'Tạo nguồn dữ liệu',
    status: 'Mở',
  },
  {
    id: '4',
    code: 'access',
    name: 'Truy cập sử dụng',
    status: 'Mở',
  },
  {
    id: '5',
    code: 'logout',
    name: 'Đăng xuất',
    status: 'Mở',
  },
];

