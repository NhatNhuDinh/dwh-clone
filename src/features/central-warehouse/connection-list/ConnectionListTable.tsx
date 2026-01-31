import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link2, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { IntegrationConnection } from '@/features/central-warehouse/connection-list/data';

type Props = {
  data: IntegrationConnection[];
  emptyMessage?: string;
  onLink?: (row: IntegrationConnection) => void;
  onEdit?: (row: IntegrationConnection) => void;
  onDelete?: (row: IntegrationConnection) => void;
};

export function ConnectionListTable({
  data,
  emptyMessage = 'Chưa có dữ liệu.',
  onLink,
  onEdit,
  onDelete,
}: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full" style={{ fontSize: 'var(--table-font-size)' }}>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-20 px-3 py-2 text-left font-semibold text-slate-700">STT</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Kết nối</th>
              <th className="w-28 px-3 py-2 text-left font-semibold text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="p-0 align-top">
                <EmptyTableState message={emptyMessage} />
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
        paginator={data.length > 0}
        first={first}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50]}
        onPage={(e) => {
          setFirst(e.first);
          setRows(e.rows);
        }}
        size="small"
        emptyMessage={emptyMessage}
        className="w-full"
        currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="name" header="Tên" />
      <Column field="connection" header="Kết nối" />
      <Column
        header="Thao tác"
        body={(row) => (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onLink?.(row)}
              aria-label="Liên kết"
            >
              <Link2 className="h-3.5 w-3.5 text-slate-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onEdit?.(row)}
              aria-label="Sửa"
            >
              <Pencil className="h-3.5 w-3.5 text-slate-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onDelete?.(row)}
              aria-label="Xóa"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}
