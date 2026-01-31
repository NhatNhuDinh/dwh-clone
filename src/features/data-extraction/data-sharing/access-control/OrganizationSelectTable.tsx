import type { ConfigAccessOrganization } from '@/features/data-extraction/data-sharing/access-control/data';
import { SearchableSelectTable } from '@/features/data-extraction/data-sharing/SearchableSelectTable';

type Props = {
  data: ConfigAccessOrganization[];
  selectedId?: string;
  onSelectedIdChange?: (id: string | undefined) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
};

const COLUMNS = [
  { field: 'orgCode' as const, header: 'Mã tổ chức', sortable: true },
  { field: 'name' as const, header: 'Tên tổ chức', sortable: true },
];

export function OrganizationSelectTable({
  data,
  selectedId,
  onSelectedIdChange,
  searchValue = '',
  onSearchChange,
}: Props) {
  return (
    <SearchableSelectTable<ConfigAccessOrganization>
      data={data}
      selectedId={selectedId}
      onSelectedIdChange={onSelectedIdChange}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      columns={COLUMNS}
      emptyMessage="Không có tổ chức nào."
    />
  );
}
