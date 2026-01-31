export type ManualItem = {
  id: string;
  title: string;
  content: string;
  featureName: string;
};

export const manualListMock: ManualItem[] = [
  {
    id: '1',
    title: 'HSDS - Thêm mới nguồn dữ liệu Oracle',
    content:
      '1. Nhấn chọn Luồng lấy dữ liệu từ Oracle > Danh sách nguồn dữ liệu từ Oracle\n' +
      '2. Nhấn nút Thêm mới\n' +
      '3. Khai báo các thông tin tại màn hình Thêm mới\n' +
      '4. Nhấn nút Thêm mới để hoàn thành việc thêm nguồn dữ liệu',
    featureName: 'Luồng lấy dữ liệu từ Oracle',
  },
  {
    id: '2',
    title: 'HDSD - Thêm nguồn dữ liệu',
    content:
      'Bước 1: Chọn menu Luồng dữ liệu -> Luồng dữ liệu từ MSSQL\n' +
      'Bước 2: Nhấn nút Thêm mới để tạo mới nguồn dữ liệu\n' +
      'Bước 3: Nhập đầy đủ thông tin cấu hình kết nối\n' +
      'Bước 4: Nhấn Lưu để hoàn tất',
    featureName: 'Luồng dữ liệu từ MSSQL',
  },
  {
    id: '3',
    title: 'HDSD_Dữ liệu',
    content:
      'Luồng dữ liệu >> Luồng dữ liệu từ MSSQL >> Làm giàu dữ liệu tự động\n' +
      '1. Chọn nguồn dữ liệu cần làm giàu\n' +
      '2. Chọn các bước làm giàu phù hợp\n' +
      '3. Nhấn Thực hiện để chạy job làm giàu dữ liệu',
    featureName: 'data-source-connect',
  },
  {
    id: '4',
    title: 'Hướng dẫn sử dụng Quản lý nhóm người dùng',
    content:
      'Bước 1: Bấm vào nút \"Thêm mới\" để thêm mới nhóm người dùng\n' +
      'Bước 2: Nhập tên nhóm, mô tả và chọn danh sách quyền\n' +
      'Bước 3: Nhấn Lưu để hoàn thành việc tạo nhóm',
    featureName: 'Công cụ nền',
  },
];

