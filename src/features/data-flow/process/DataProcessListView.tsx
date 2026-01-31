import { useState } from 'react';
import { Link } from 'react-router';
import type { FlowTypeParam } from '@/features/data-flow/flowTypes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCcw, PanelTop, Settings2, Search } from 'lucide-react';
import { ProcessTable } from '@/features/data-flow/process/ProcessTable';
import type { DataProcessItem } from '@/features/data-flow/process/ProcessTable';
import { dataProcessListMock } from '@/features/data-flow/process/data';

type Props = {
  flowType: FlowTypeParam;
};

export function DataProcessListView({ flowType }: Props) {
  const [keyword, setKeyword] = useState('');

  const filtered: DataProcessItem[] = dataProcessListMock.filter((item) => {
    if (!keyword) return true;
    const q = keyword.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.sourceName.toLowerCase().includes(q) || item.targetName.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-4">
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
            <Button asChild size="sm" className="bg-[#c8872a] hover:bg-[#b4741e] text-xs" type="button">
              <Link to={`/data-flows/${flowType}/processes/create`}>+ Thêm mới</Link>
            </Button>
            <Button variant="outline" size="icon-sm" type="button" className="bg-white" onClick={() => setKeyword('')}>
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
        <ProcessTable
          data={filtered}
          onView={(row) => console.log('view process', row)}
          onViewHistory={(row) => console.log('view history', row)}
        />
      </div>
    </div>
  );
}
