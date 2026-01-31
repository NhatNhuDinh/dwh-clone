import type { ApiExtractionDataSource } from '@/features/data-extraction/data-sharing/shared-api-access/data';
import { SearchableSelectTable } from '@/features/data-extraction/data-sharing/SearchableSelectTable';

type Props = {
  data: ApiExtractionDataSource[];
  selectedId?: string;
  onSelectedIdChange?: (id: string | undefined) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
};

const COLUMNS = [
  {
    field: 'name' as const,
    header: 'Tên nguồn cơ sở dữ liệu',
    sortable: true,
  },
];

export function DataSourceSelectTable({
  data,
  selectedId,
  onSelectedIdChange,
  searchValue = '',
  onSearchChange,
}: Props) {
  return (
    <SearchableSelectTable<ApiExtractionDataSource>
      data={data}
      selectedId={selectedId}
      onSelectedIdChange={onSelectedIdChange}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      columns={COLUMNS}
      emptyMessage="Không có nguồn CSDL nào."
    />
  );
}
