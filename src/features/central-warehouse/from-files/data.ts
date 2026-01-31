export type FileIntegrationItem = {
  id: string;
  name: string;
  type: 'file' | 'directory';
  size: string;
  updatedAt: string;
};

export const fromFilesMock: FileIntegrationItem[] = [
  { id: '1', name: 'destination/Sở Bảo Hiểm và Xã Hội /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '2', name: 'destination/Sở Giao Thông Vận Tải /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '3', name: 'destination/Sở Giáo dục và Đào tạo /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '4', name: 'destination/Sở Kế Hoạch Đầu Tư /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '5', name: 'destination/Sở Lao Động Thương Binh và Xã Hội /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '6', name: 'destination/Sở Nội Vụ /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '7', name: 'destination/Sở Thông Tin Truyền Thông /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '8', name: 'destination/Sở Tài Chính Kho Bac /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '9', name: 'destination/Sở Tư Pháp /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
  { id: '10', name: 'destination/Sở Văn Hóa Thể Thao và Du Lịch /', type: 'directory', size: '0 Bytes', updatedAt: '-' },
];
