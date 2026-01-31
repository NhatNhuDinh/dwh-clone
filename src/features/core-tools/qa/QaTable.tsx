import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { QaItem } from './data';

const EMPTY_MESSAGE = 'Không có câu hỏi nào.';

type Props = {
  data: QaItem[];
  loading?: boolean;
  onEdit?: (row: QaItem) => void;
  onDelete?: (row: QaItem) => void;
};

export function QaTable({ data, loading, onEdit, onDelete }: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (!loading && data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-20 px-3 py-2 text-left font-semibold text-slate-700">STT</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tiêu đề câu hỏi</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">
                Nội dung câu trả lời
              </th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên chủ đề</th>
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
      <Column field="questionTitle" header="Tiêu đề câu hỏi" />
      <Column field="answerContent" header="Nội dung câu trả lời" />
      <Column field="topicName" header="Tên chủ đề" />
      <Column
        header="Thao tác"
        body={(row: QaItem) => (
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

