import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RefreshCcw, PanelTop, Settings2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmptyTableState } from '@/components/ui/empty-table-state';

type ColumnConfig<T> = {
  field: keyof T;
  header: string;
  sortable?: boolean;
};

type Props<T extends { id: string }> = {
  data: T[];
  selectedId?: string;
  onSelectedIdChange?: (id: string | undefined) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  columns: ColumnConfig<T>[];
  emptyMessage: string;
  onReload?: () => void;
  onItemSize?: () => void;
  onSettings?: () => void;
};

export function SearchableSelectTable<T extends { id: string }>({
  data,
  selectedId,
  onSelectedIdChange,
  searchValue = '',
  onSearchChange,
  columns,
  emptyMessage,
  onReload,
  onItemSize,
  onSettings,
}: Props<T>) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const selectedRow = data.find((item) => item.id === selectedId) ?? null;

  const isEmpty = data.length === 0;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center gap-2">
        <div className="flex w-64 max-w-md items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1.5 focus-within:border-[#c8872a] focus-within:ring-1 focus-within:ring-[#c8872a]">
          <input
            type="text"
            placeholder="Nhập nội dung tìm kiếm"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="h-8 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
        </div>
        <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          type="button"
          className="shrink-0 bg-white"
          onClick={() => onReload?.()}
          aria-label="Tải lại"
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          type="button"
          className="shrink-0 bg-white"
          onClick={() => onItemSize?.()}
          aria-label="Kích thước hiển thị"
        >
          <PanelTop className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          type="button"
          className="shrink-0 bg-white"
          onClick={() => onSettings?.()}
          aria-label="Cài đặt"
        >
          <Settings2 className="h-4 w-4" />
        </Button>
        </div>
      </div>
      {isEmpty ? (
        <div className="w-full overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="w-[60px] px-3 py-2" />
                {columns.map((col) => (
                  <th key={String(col.field)} className="px-3 py-2 text-left font-semibold text-slate-700">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={columns.length + 1} className="p-0 align-top">
                  <EmptyTableState message={emptyMessage} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
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
          className="w-full text-xs"
          currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          selectionMode="single"
          selection={selectedRow}
          dataKey="id"
          onSelectionChange={(e) =>
            onSelectedIdChange?.((e.value as T | null)?.id)
          }
        >
          <Column selectionMode="single" headerStyle={{ width: '60px' }} />
          {columns.map((col) => (
            <Column
              key={String(col.field)}
              field={String(col.field)}
              header={col.header}
              sortable={col.sortable}
            />
          ))}
        </DataTable>
      )}
    </div>
  );
}
