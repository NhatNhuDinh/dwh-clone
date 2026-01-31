export type DepartmentItem = {
  id: string;
  name: string;
  parentName: string;
};

export const departmentListMock: DepartmentItem[] = [
  {
    id: '1',
    name: 'Ban kế hoạch',
    parentName: 'Sở Khoa học & Công nghệ (TTTT Cũ)',
  },
  {
    id: '2',
    name: 'Phòng hành chính sở GTVT',
    parentName: 'Sở Giao Thông Vận Tải tỉnh Quảng Trị',
  },
  {
    id: '3',
    name: 'Phòng Văn hoá và Thông tin huyện Quảng An',
    parentName: 'Sở Khoa học & Công nghệ (TTTT Cũ)',
  },
];

