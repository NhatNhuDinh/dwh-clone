export type IntegrationConnection = {
  id: string;
  name: string;
  connection: string;
};

/** Mock cho Tích hợp Dữ liệu từ các Cơ sở Dữ liệu cục bộ */
export const fromDatabasesMock: IntegrationConnection[] = [
  { id: '1', name: 'Đích Sở Thông Tin Truyền Thông_DTI', connection: 'Postgres' },
  { id: '2', name: 'Đích sở KHDT', connection: 'Postgres' },
  { id: '3', name: 'Đích DL trạm BTS', connection: 'MS SQL Server' },
  { id: '4', name: 'DIC BTS', connection: 'Postgres' },
];

/** Tích hợp Dữ liệu từ URL: danh sách trống mặc định */
export const fromUrlMock: IntegrationConnection[] = [];
