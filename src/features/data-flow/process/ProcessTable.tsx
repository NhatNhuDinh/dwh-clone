import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Eye, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmptyTableState } from '@/components/ui/empty-table-state';

export type DataProcessItem = {
  id: string;
  name: string;
  sourceName: string;
  targetName: string;
  lastSync: string;
};

const EMPTY_MESSAGE = 'Không có tiến trình nào.';

type Props = {
  data: DataProcessItem[];
  loading?: boolean;
  onView?: (row: DataProcessItem) => void;
  onViewHistory?: (row: DataProcessItem) => void;
};

export function ProcessTable({ data, loading, onView, onViewHistory }: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-20 px-3 py-2 text-left font-semibold text-slate-700">STT</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên nguồn</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên điểm đến</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Đồng bộ lần cuối</th>
              <th className="w-28 px-3 py-2 text-left font-semibold text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="p-0 align-top">
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
    >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="name" header="Tên" />
      <Column field="sourceName" header="Tên nguồn" />
      <Column field="targetName" header="Tên điểm đến" />
      <Column field="lastSync" header="Đồng bộ lần cuối" />
      <Column
        header="Thao tác"
        body={(row) => (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onView?.(row)}
              aria-label="Xem chi tiết"
            >
              <Eye className="h-3.5 w-3.5 text-[#c8872a]" />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onViewHistory?.(row)}
              aria-label="Lịch sử đồng bộ"
            >
              <Clock3 className="h-3.5 w-3.5 text-slate-500" />
            </Button>
          </div>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

