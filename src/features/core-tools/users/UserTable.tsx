import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@/components/ui/button';
import { Pencil, EyeOff } from 'lucide-react';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { UserItem } from './data';

const EMPTY_MESSAGE = 'Không có người dùng nào.';

type Props = {
  data: UserItem[];
  loading?: boolean;
  onEdit?: (row: UserItem) => void;
  onToggleActive?: (row: UserItem) => void;
};

export function UserTable({ data, loading, onEdit, onToggleActive }: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-20 px-3 py-2 text-left font-semibold text-slate-700">STT</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên người dùng</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Email</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên hiển thị</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Số điện thoại</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tổ chức</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Phòng ban</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Vai trò</th>
              <th className="w-28 px-3 py-2 text-left font-semibold text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="p-0 align-top">
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
      <Column field="username" header="Tên người dùng" />
      <Column field="email" header="Email" />
      <Column field="displayName" header="Tên hiển thị" />
      <Column field="phone" header="Số điện thoại" />
      <Column field="organization" header="Tổ chức" />
      <Column field="department" header="Phòng ban" />
      <Column
        field="roles"
        header="Vai trò"
        body={(row: UserItem) => (
          <div className="flex flex-col gap-1">
            {row.roles.map((role) => (
              <span
                key={role}
                className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
              >
                {role}
              </span>
            ))}
          </div>
        )}
      />
      <Column
        header="Thao tác"
        body={(row: UserItem) => (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onEdit?.(row)}
              aria-label="Sửa"
            >
              <Pencil className="h-3.5 w-3.5 text-[#c8872a]" />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              type="button"
              onClick={() => onToggleActive?.(row)}
              aria-label="Ẩn/hiện"
            >
              {/* Demo: luôn hiển thị EyeOff, có thể thay bằng state active nếu cần */}
              <EyeOff className="h-3.5 w-3.5 text-slate-400" />
            </Button>
          </div>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

