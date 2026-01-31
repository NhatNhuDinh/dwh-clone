export type UserItem = {
  id: string;
  username: string;
  email: string;
  displayName: string;
  phone: string;
  organization: string;
  department?: string;
  roles: string[];
};

export const userListMock: UserItem[] = [
  {
    id: '1',
    username: 'vanlam',
    email: 'lam2003@gmail.com',
    displayName: 'Nguyễn Văn Lâm',
    phone: '0373696603',
    organization: 'H50.19',
    department: '',
    roles: ['SNN.TP', 'Nhóm quyền quản trị hệ thống'],
  },
  {
    id: '2',
    username: 'qthtt_quang_tri',
    email: 'quantrihethong@gmail.com',
    displayName: 'Quản Trị Hệ Thống Quảng Trị',
    phone: '0983357474',
    organization: 'H50.19',
    department: '',
    roles: ['ADMIN SYSTEM'],
  },
  {
    id: '3',
    username: 'qtdv_quang_tri',
    email: 'qtdvquangtri@gmail.com',
    displayName: 'Quản Trị Đơn Vị Quảng Trị',
    phone: '0397115997',
    organization: 'H50.19',
    department: '',
    roles: ['Nhóm quyền quản trị đơn vị'],
  },
  {
    id: '4',
    username: 'lddv_quang_tri',
    email: 'lddvquangtri@gmail.com',
    displayName: 'Lãnh đạo đơn vị Quảng Trị',
    phone: '0397115998',
    organization: 'H50.19',
    department: '',
    roles: ['Nhóm quyền Lãnh Đạo Đơn Vị'],
  },
  {
    id: '5',
    username: 'cbnv_quang_tri',
    email: 'cbnvquangtri@gmail.com',
    displayName: 'CBNV Quảng Trị',
    phone: '0397115999',
    organization: 'H50.19',
    department: '',
    roles: ['SNN.TP', 'Nhóm quyền Cán Bộ Nhân Viên'],
  },
];

