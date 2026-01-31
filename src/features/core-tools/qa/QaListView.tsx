import { useState } from 'react';
import { QaTable } from './QaTable';
import { qaListMock } from './data';
import type { QaItem } from './data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCcw, PanelTop, Settings2, Search, Plus } from 'lucide-react';

export function QaListView() {
  const [keyword, setKeyword] = useState('');

  const filtered = qaListMock.filter((item: QaItem) => {
    if (!keyword) return true;
    const searchLower = keyword.toLowerCase();
    return (
      item.questionTitle.toLowerCase().includes(searchLower) ||
      item.answerContent.toLowerCase().includes(searchLower) ||
      item.topicName.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="rounded-md bg-white p-4 text-xs shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 rounded-md border border-input bg-white px-3 py-1.5">
            <Input
              placeholder="Nhập nội dung tìm kiếm"
              className="h-8 border-0 px-0 text-sm shadow-none focus-visible:ring-0"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Search className="h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-[#c8872a] hover:bg-[#b4741e] text-xs" type="button">
            <Plus className="mr-1 h-3.5 w-3.5" />
            Thêm mới
          </Button>
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
      <QaTable
        data={filtered}
        onEdit={(row) => console.log('edit', row)}
        onDelete={(row) => console.log('delete', row)}
      />
    </div>
  );
}

