export type QaItem = {
  id: string;
  questionTitle: string;
  answerContent: string;
  topicName: string;
};

export const qaListMock: QaItem[] = [
  {
    id: '1',
    questionTitle: 'Kho dữ liệu chuyên ngành',
    answerContent: 'Kho dữ liệu chuyên ngành được hiểu như thế nào?',
    topicName: 'Chủ đề 1',
  },
  {
    id: '2',
    questionTitle: 'Thêm mới người dùng',
    answerContent: 'Thêm mới người dùng có được trùng tên hay không?',
    topicName: 'Danh mục 1',
  },
  {
    id: '3',
    questionTitle: 'Luồng dữ liệu',
    answerContent: 'Luồng dữ liệu được lấy qua các nguồn nào?',
    topicName: 'Danh mục 1',
  },
];

