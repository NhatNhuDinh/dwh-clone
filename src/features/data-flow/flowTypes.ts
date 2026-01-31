/** Giá trị flowType dùng trong URL (path param) */
export const FLOW_TYPE_PARAMS = [
  'mssql',
  'postgres',
  'mysql',
  'oracle',
  'file',
  'api',
] as const;

export type FlowTypeParam = (typeof FLOW_TYPE_PARAMS)[number];

/** Nhãn hiển thị cho từng luồng (breadcrumb, title) */
export const FLOW_TYPE_LABELS: Record<FlowTypeParam, string> = {
  mssql: 'MSSQL',
  postgres: 'PostgreSQL',
  mysql: 'MySQL',
  oracle: 'Oracle',
  file: 'File',
  api: 'API',
};

/** "Luồng lấy dữ liệu từ {label}" */
export function getFlowTypeFullLabel(flowType: FlowTypeParam): string {
  return `Luồng lấy dữ liệu từ ${FLOW_TYPE_LABELS[flowType]}`;
}

export type DataFlowSection =
  | 'sources'
  | 'processes'
  | 'versions'
  | 'data-enrichment'
  | 'sources-create';

/** Tiêu đề theo section */
export const SECTION_TITLES: Record<
  DataFlowSection,
  (flowType: FlowTypeParam) => string
> = {
  sources: (flowType) => `Danh sách nguồn dữ liệu ${FLOW_TYPE_LABELS[flowType]}`,
  processes: (flowType) =>
    `Danh sách tiến trình lấy dữ liệu ${FLOW_TYPE_LABELS[flowType]}`,
  versions: (flowType) =>
    `Quản lý phiên bản dữ liệu ${FLOW_TYPE_LABELS[flowType]}`,
  'data-enrichment': (flowType) =>
    `Làm giàu dữ liệu tự động ${FLOW_TYPE_LABELS[flowType]}`,
  'sources-create': (flowType) =>
    `Thêm mới nguồn dữ liệu ${FLOW_TYPE_LABELS[flowType]}`,
};

/** Breadcrumb location string (Luồng dữ liệu / ... / Title) */
export function getLocationString(
  flowType: FlowTypeParam,
  section: DataFlowSection,
): string {
  if (section === 'sources-create') {
    return `Luồng dữ liệu / ${getFlowTypeFullLabel(flowType)} / ${SECTION_TITLES.sources(flowType)} / ${SECTION_TITLES['sources-create'](flowType)}`;
  }
  return `Luồng dữ liệu / ${getFlowTypeFullLabel(flowType)} / ${SECTION_TITLES[section](flowType)}`;
}

export function isFlowTypeParam(value: string): value is FlowTypeParam {
  return FLOW_TYPE_PARAMS.includes(value as FlowTypeParam);
}
