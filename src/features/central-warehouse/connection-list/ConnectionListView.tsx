import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCcw, PanelTop, Settings2, Search } from 'lucide-react';
import { ConnectionListTable } from '@/features/central-warehouse/connection-list/ConnectionListTable';
import type { IntegrationConnection } from '@/features/central-warehouse/connection-list/data';

type Props = {
  data: IntegrationConnection[];
  emptyMessage?: string;
  onAddNew?: () => void;
  onLink?: (row: IntegrationConnection) => void;
  onEdit?: (row: IntegrationConnection) => void;
  onDelete?: (row: IntegrationConnection) => void;
};

export function ConnectionListView({
  data,
  emptyMessage = 'Chưa có dữ liệu.',
  onAddNew,
  onLink,
  onEdit,
  onDelete,
}: Props) {
  const [keyword, setKeyword] = useState('');
  const filtered = useMemo(() => {
    if (!keyword.trim()) return data;
    const q = keyword.trim().toLowerCase();
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.connection.toLowerCase().includes(q),
    );
  }, [data, keyword]);

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 text-xs shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex w-64 max-w-md items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1.5 focus-within:border-[#c8872a] focus-within:ring-1 focus-within:ring-[#c8872a]">
            <Input
              placeholder="Nhập nội dung tìm kiếm"
              className="h-8 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              type="button"
              className="bg-[#c8872a] text-xs hover:bg-[#b4741e]"
              onClick={() => onAddNew?.()}
            >
              + Thêm mới
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              className="shrink-0 bg-white"
              onClick={() => setKeyword('')}
              aria-label="Tải lại"
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              className="shrink-0 bg-white"
              aria-label="Kích thước hiển thị"
            >
              <PanelTop className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              className="shrink-0 bg-white"
              aria-label="Cài đặt"
            >
              <Settings2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ConnectionListTable
          data={filtered}
          emptyMessage={emptyMessage}
          onLink={onLink}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
