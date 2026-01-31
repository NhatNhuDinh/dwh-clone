import { useState } from 'react';
import { QueryJobTable } from './QueryJobTable';
import { queryJobMock } from './data';
import type { QueryJobItem } from './data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCcw, PanelTop, Settings2, Search } from 'lucide-react';

export function QueryJobListView() {
  const [keyword, setKeyword] = useState('');

  const filtered = queryJobMock.filter((item: QueryJobItem) => {
    if (!keyword) return true;
    const searchLower = keyword.toLowerCase();
    return (
      item.jobName.toLowerCase().includes(searchLower) ||
      item.status.toLowerCase().includes(searchLower) ||
      item.owner.toLowerCase().includes(searchLower) ||
      item.schedule.toLowerCase().includes(searchLower) ||
      item.lastRun.toLowerCase().includes(searchLower) ||
      item.nextRun.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="rounded-md bg-white p-4 text-xs shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="max-w-md flex-1">
          <div className="flex items-center gap-2 rounded-md border border-input bg-white px-3 py-1.5">
            <Input
              placeholder="Nhập nội dung tìm kiếm"
              className="h-8 border-0 px-0 text-sm shadow-none focus-visible:ring-0"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            type="button"
            className="bg-white"
            onClick={() => setKeyword('')}
          >
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon-sm" type="button" className="bg-white">
            <PanelTop className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon-sm" type="button" className="bg-white">
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <QueryJobTable
        data={filtered}
        onToggle={(row) => console.log('toggle', row)}
        onEdit={(row) => console.log('edit', row)}
        onDelete={(row) => console.log('delete', row)}
      />
    </div>
  );
}
