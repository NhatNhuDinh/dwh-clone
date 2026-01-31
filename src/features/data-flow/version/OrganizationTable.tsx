import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { EmptyTableState } from '@/components/ui/empty-table-state';

export type VersionOrganization = {
  id: string;
  name: string;
  orgCode: string;
  countryCode: string;
  phone: string;
};

const EMPTY_MESSAGE = 'Không có tổ chức nào.';

type Props = {
  data: VersionOrganization[];
  loading?: boolean;
  selectedId?: string;
  onSelectedIdChange?: (id: string | undefined) => void;
};

export function OrganizationTable({
  data,
  loading,
  selectedId,
  onSelectedIdChange,
}: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const selectedRow = data.find((item) => item.id === selectedId) ?? null;

  if (!loading && data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-[60px] px-3 py-2" />
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên tổ chức</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Mã tổ chức</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Mã quốc gia</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Điện thoại liên hệ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="p-0 align-top">
                <EmptyTableState message={EMPTY_MESSAGE} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <DataTable
        value={data}
        loading={loading}
        paginator={data.length > 0}
        first={first}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50]}
        onPage={(e) => {
          setFirst(e.first);
          setRows(e.rows);
        }}
        size="small"
        emptyMessage={EMPTY_MESSAGE}
        className="w-full text-xs"
        currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        selectionMode="single"
        selection={selectedRow}
        dataKey="id"
        onSelectionChange={(e) =>
          onSelectedIdChange?.((e.value as VersionOrganization | null)?.id)
        }
      >
      <Column selectionMode="single" headerStyle={{ width: '60px' }} />
      <Column field="name" header="Tên tổ chức" />
      <Column field="orgCode" header="Mã tổ chức" />
      <Column field="countryCode" header="Mã quốc gia" />
      <Column field="phone" header="Điện thoại liên hệ" />
    </DataTable>
  );
}

