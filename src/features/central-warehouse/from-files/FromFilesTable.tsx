import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Folder, File as FileIcon, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmptyTableState } from '@/components/ui/empty-table-state';
import type { FileIntegrationItem } from '@/features/central-warehouse/from-files/data';

const EMPTY_MESSAGE = 'Chưa có tập tin nào.';

type Props = {
  data: FileIntegrationItem[];
  onDelete?: (row: FileIntegrationItem) => void;
};

export function FromFilesTable({ data, onDelete }: Props) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selected, setSelected] = useState<FileIntegrationItem[]>([]);

  if (data.length === 0) {
    return (
      <div className="w-full overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="w-12 px-3 py-2" />
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Tên tập tin</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Loại tập tin</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Kích cỡ</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700">Ngày cập nhật tập tin</th>
              <th className="w-24 px-3 py-2 text-left font-semibold text-slate-700">Hành động</th>
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
        paginator={data.length > 0}
        first={first}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50]}
        onPage={(e) => {
          setFirst(e.first);
          setRows(e.rows);
        }}
        size="small"
        emptyMessage="Chưa có tập tin nào."
        className="w-full text-xs"
        currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        selectionMode="multiple"
        selection={selected}
        onSelectionChange={(e) => setSelected((e.value ?? []) as unknown as FileIntegrationItem[])}
        dataKey="id"
      >
      <Column selectionMode="multiple" headerStyle={{ width: '48px' }} />
      <Column field="name" header="Tên tập tin" sortable />
      <Column
        field="type"
        header="Loại tập tin"
        body={(row) => (
          <span className="flex items-center gap-1.5">
            {row.type === 'directory' ? (
              <Folder className="h-4 w-4 text-amber-600" />
            ) : (
              <FileIcon className="h-4 w-4 text-slate-500" />
            )}
            {row.type === 'directory' ? 'Thư mục' : 'Tập tin'}
          </span>
        )}
      />
      <Column field="size" header="Kích cỡ" />
      <Column field="updatedAt" header="Ngày cập nhật tập tin" />
      <Column
        header="Hành động"
        body={(row) => (
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
        )}
        style={{ width: '90px' }}
      />
    </DataTable>
  );
}
