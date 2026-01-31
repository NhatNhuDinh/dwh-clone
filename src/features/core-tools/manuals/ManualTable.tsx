import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { ManualItem } from './data';

const EMPTY_MESSAGE = 'Không có hướng dẫn sử dụng nào.';

type Props = {
  data: ManualItem[];
  loading?: boolean;
  onView?: (row: ManualItem) => void;
  onEdit?: (row: ManualItem) => void;
  onDelete?: (row: ManualItem) => void;
};

function renderContentCell(row: ManualItem, onView?: () => void) {
  const lines = row.content.split('\n');

  // Rút gọn hiển thị: chỉ lấy tối đa ~60 ký tự của dòng đầu tiên
  const firstLine = lines[0] ?? '';
  const maxPreviewLength = 60;
  const preview =
    firstLine.length > maxPreviewLength
      ? firstLine.slice(0, maxPreviewLength).trimEnd() + '...'
      : firstLine;

  return (
    <div className="space-y-1">
      <p className="whitespace-pre-wrap">{preview}</p>
      {row.content.length > maxPreviewLength && onView ? (
        <button
          type="button"
          className="mt-1 text-xs font-medium text-[#c8872a]"
          onClick={onView}
        >
          Xem thêm
        </button>
      ) : null}
    </div>
  );
}

export function ManualTable({ data, loading, onView, onEdit, onDelete }: Props) {
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
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Nội dung</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên chức năng</th>
              <th className="w-28 px-3 py-2 text-left font-semibold text-slate-700">Thao tác</th>
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
    >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="title" header="Tên" />
      <Column
        field="content"
        header="Nội dung"
        body={(row: ManualItem) => renderContentCell(row, () => onView?.(row))}
      />
      <Column field="featureName" header="Tên chức năng" />
      <Column
        header="Thao tác"
        body={(row: ManualItem) => (
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
              onClick={() => onDelete?.(row)}
              aria-label="Xóa"
            >
              <Trash2 className="h-3.5 w-3.5 text-slate-400" />
            </Button>
          </div>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

