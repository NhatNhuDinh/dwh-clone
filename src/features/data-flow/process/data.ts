import type { DataProcessItem } from '@/features/data-flow/process/ProcessTable';

export const dataProcessListMock: DataProcessItem[] = [
  {
    id: '1',
    name: 'Lấy dữ liệu trạm BTS MSSQL',
    sourceName: 'Nguồn dữ liệu tại IDC SKHCN',
    targetName: 'Đích DL trạm BTS',
    lastSync: '18:27 28/01/2026',
  },
  {
    id: '2',
    name: 'Ngoc BTS',
    sourceName: 'Dữ liệu BTS',
    targetName: 'DIC BTS',
    lastSync: '21:55 26/01/2026',
  },
  {
    id: '3',
    name: 'Tiến trình lấy dữ liệu từ MSSQL',
    sourceName: 'nguon_test_18_t9',
    targetName: 'Đích Sở Thông Tin Truyền Thông_DTI',
    lastSync: '14:11 21/01/2026',
  },
];
