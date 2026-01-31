import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { LoginStatusItem } from './data';

const EMPTY_MESSAGE = 'Trống';

type Props = {
  data: LoginStatusItem[];
  loading?: boolean;
  onAction?: (row: LoginStatusItem) => void;
};

export function LoginStatusTable({ data, loading, onAction }: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-20 px-3 py-2 text-left font-semibold text-slate-700">STT</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Thời gian</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên người dùng</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">IP</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Trang web người dùng</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Hành động</th>
              <th className="w-28 px-3 py-2 text-left font-semibold text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="p-0 align-top">
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
      <Column field="time" header="Thời gian" />
      <Column field="userName" header="Tên người dùng" />
      <Column field="ip" header="IP" />
      <Column field="userWebPage" header="Trang web người dùng" />
      <Column field="action" header="Hành động" />
      <Column
        header="Thao tác"
        body={(row: LoginStatusItem) => (
          <button
            type="button"
            className="text-xs font-medium text-[#c8872a] hover:underline"
            onClick={() => onAction?.(row)}
          >
            Xem chi tiết
          </button>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}
