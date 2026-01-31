/** Tổ chức cho bước Chọn tổ chức (Cấu hình - cấp quyền) */
export type ConfigAccessOrganization = {
  id: string;
  orgCode: string;
  name: string;
};

export const configAccessOrganizationsMock: ConfigAccessOrganization[] = [
  { id: '1', orgCode: 'H50.17', name: 'Ban Quản lý Khu Kinh tế tỉnh' },
  { id: '2', orgCode: 'H50.12', name: 'Sở Nông nghiệp và PTNT Tỉnh Quảng Trị' },
  { id: '3', orgCode: 'H50.6', name: 'Sở Nội Vụ tỉnh Quảng Trị' },
  { id: '4', orgCode: 'H50.10', name: 'Sở Xây Dựng tỉnh Quảng Trị' },
  { id: '5', orgCode: 'H50.7', name: 'Sở Tài Chính tỉnh Quảng Trị' },
  { id: '6', orgCode: 'H50.8', name: 'Sở Kế Hoạch và Đầu Tư tỉnh Quảng Trị' },
  { id: '7', orgCode: 'H50.18', name: 'Sở Văn Hóa Thể Thao và Du Lịch tỉnh Quảng Trị' },
  { id: '8', orgCode: 'H50.19', name: 'Sở Khoa học & Công nghệ (TTTT CŨ)' },
  { id: '9', orgCode: 'H50.5', name: 'Sở Lao Động Thương Binh và Xã Hội tỉnh Quảng Trị' },
  { id: '10', orgCode: 'H50.13', name: 'Sở Giao Thông Vận Tải tỉnh Quảng Trị' },
  { id: '11', orgCode: 'H50.20', name: 'Sở Thông tin và Truyền thông tỉnh Quảng Trị' },
  { id: '12', orgCode: 'H50.21', name: 'Sở Tư pháp tỉnh Quảng Trị' },
  { id: '13', orgCode: 'H50.22', name: 'Sở Y tế tỉnh Quảng Trị' },
];
