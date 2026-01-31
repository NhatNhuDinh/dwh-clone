export type OrganizationItem = {
  id: string;
  code: string;
  name: string;
  description?: string;
  countryCode: string;
  phone: string;
};

export const organizationListMock: OrganizationItem[] = [
  {
    id: '1',
    code: 'H50.17',
    name: 'Ban Quản lý Khu Kinh tế tỉnh',
    description: '',
    countryCode: '+84',
    phone: '2333859713',
  },
  {
    id: '2',
    code: 'H50.12',
    name: 'Sở Nông nghiệp và PTNT Tỉnh Quảng Trị',
    description: '',
    countryCode: '+84',
    phone: '989960586',
  },
  {
    id: '3',
    code: 'H50.6',
    name: 'Sở Nội vụ',
    description: 'Sở Nội vụ',
    countryCode: '+84',
    phone: '2333859713',
  },
  {
    id: '4',
    code: 'H50.10',
    name: 'Sở Tài chính',
    description: '',
    countryCode: '+84',
    phone: '2333859713',
  },
  {
    id: '5',
    code: 'H50.7',
    name: 'Sở Kế hoạch và Đầu tư',
    description: '',
    countryCode: '+84',
    phone: '2333859713',
  },
];
