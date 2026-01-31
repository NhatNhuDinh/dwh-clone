export type PermissionItem = {
  id: string;
  code: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const permissionListMock: PermissionItem[] = [
  {
    id: '1',
    code: 'SNN.TP',
    description:
      'Trưởng Phòng quản lý xây dựng công trình (Construction management Division)',
    createdAt: '24/05/2024',
    updatedAt: '18/09/2025',
  },
  {
    id: '2',
    code: 'Nhóm quyền Lãnh Đạo Đơn Vị',
    description: 'Nhóm quyền dành cho lãnh đạo đơn vị',
    createdAt: '16/05/2024',
    updatedAt: '31/05/2024',
  },
  {
    id: '3',
    code: 'Nhóm quyền Cán Bộ Nhân Viên',
    description: 'Nhóm quyền dành cho cán bộ nhân viên',
    createdAt: '16/05/2024',
    updatedAt: '03/06/2024',
  },
  {
    id: '4',
    code: 'Nhóm quyền quản trị hệ thống',
    description: 'Nhóm quyền dành cho quản trị hệ thống',
    createdAt: '16/05/2024',
    updatedAt: '28/05/2024',
  },
  {
    id: '5',
    code: 'Nhóm quyền quản trị đơn vị',
    description: 'Nhóm quyền dành cho quản trị viên của các tổ chức',
    createdAt: '16/05/2024',
    updatedAt: '29/05/2024',
  },
  {
    id: '6',
    code: 'ADMIN SYSTEM',
    description: 'Nhóm quyền admin hệ thống',
    createdAt: '15/05/2024',
    updatedAt: '31/05/2024',
  },
  {
    id: '7',
    code: 'NQ_001',
    description: 'Nhóm quyền của Sở Thông tin Truyền Thông tỉnh Quảng Trị',
    createdAt: '15/05/2024',
    updatedAt: '27/05/2025',
  },
];

