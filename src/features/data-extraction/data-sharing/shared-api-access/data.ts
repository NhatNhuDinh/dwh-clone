/** Nguồn CSDL cho bước Chọn nguồn (Truy xuất API) */
export type ApiExtractionDataSource = {
  id: string;
  name: string;
};

export const apiExtractionDataSourcesMock: ApiExtractionDataSource[] = [
  { id: '1', name: '154_115_Đích Sở Thông Tin Truyền Thông_GIS' },
  { id: '2', name: '154_115_Đích Sở Thông Tin Truyền Thông_Sở Tài Chính (vật giá)' },
  { id: '3', name: '154_115_Đích Sở Giao Thông Vận Tải' },
  { id: '4', name: '154_115_DW_SO_THONG_TIN_TRUYEN_THONG' },
  { id: '5', name: '154_115_DW_SO_GIAO_THONG_VAN_TAI' },
];
