export type ActionItem = {
  id: string;
  code: string;
  displayName: string;
  description: string;
  status: string;
};

export const actionListMock: ActionItem[] = [
  {
    id: '1',
    code: 'data_connection.view1',
    displayName: 'data_connection.view',
    description: 'data_connection.view',
    status: 'Hoạt động',
  },
  {
    id: '2',
    code: 'dashboard-tong-quan.view',
    displayName: 'Tổng quan view',
    description: 'Tổng quan view',
    status: 'Hoạt động',
  },
  {
    id: '3',
    code: 'data_warehouse_csdl.delete',
    displayName: 'Cơ sở dữ liệu - delete',
    description: 'Cơ sở dữ liệu - delete',
    status: 'Hoạt động',
  },
  {
    id: '4',
    code: 'thong-tin-truyen-thong.edit',
    displayName: 'Ngành Thông tin và Truyền thông - edit',
    description: 'Ngành Thông tin và Truyền thông - edit',
    status: 'Hoạt động',
  },
  {
    id: '5',
    code: 'data_governance_card_classify.delete',
    displayName: 'Danh sách phân loại thẻ - delete',
    description: 'Danh sách phân loại thẻ - delete',
    status: 'Hoạt động',
  },
  {
    id: '6',
    code: 'working_space.view',
    displayName: 'Không gian làm việc - view',
    description: 'Không gian làm việc - view',
    status: 'Hoạt động',
  },
];

