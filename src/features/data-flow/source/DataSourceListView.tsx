import { useState } from 'react';
import { Link } from 'react-router';
import { SourceFilters } from '@/features/data-flow/source/SourceFilters';
import { SourceTable } from '@/features/data-flow/source/SourceTable';
import type { DataSourceFilters } from '@/features/data-flow/source/SourceFilters';
import type { FlowTypeParam } from '@/features/data-flow/flowTypes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RefreshCcw, PanelTop, Settings2, Search } from 'lucide-react';
import { dataSourceListMock } from '@/features/data-flow/source/data';

const TYPE_OPTIONS = [
  { label: 'Microsoft SQL Server (MSSQL)', value: 'Microsoft SQL Server (MSSQL)' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'MySQL', value: 'MySQL' },
  { label: 'Oracle', value: 'Oracle' },
  { label: 'File', value: 'File' },
  { label: 'API', value: 'API' },
];

type Props = {
  flowType: FlowTypeParam;
};

export function DataSourceListView({ flowType }: Props) {
  const [filters, setFilters] = useState<DataSourceFilters>({});

  const filtered = dataSourceListMock.filter((item) => {
    if (filters.type && item.type !== filters.type) return false;
    if (filters.keyword && !item.name.toLowerCase().includes(filters.keyword.toLowerCase())) return false;
    if (filters.organizationId && item.organization !== filters.organizationId) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <SourceFilters
        value={filters}
        onChange={setFilters}
        onReset={() => setFilters({})}
        onApply={() => {}}
        typeOptions={TYPE_OPTIONS}
        organizationOptions={[
          { label: 'Sở Khoa học & Công nghệ (TTTT Cũ)', value: 'Sở Khoa học & Công nghệ (TTTT Cũ)' },
        ]}
      />

      <div className="rounded-md bg-white p-4 text-xs shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 rounded-md border border-input bg-white px-3 py-1.5">
              <Input
                placeholder="Nhập nội dung tìm kiếm"
                className="h-8 border-0 px-0 text-sm shadow-none focus-visible:ring-0"
                value={filters.keyword ?? ''}
                onChange={(e) => setFilters((prev) => ({ ...prev, keyword: e.target.value || undefined }))}
              />
              <Search className="h-4 w-4 text-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-[#c8872a] hover:bg-[#b4741e] text-xs" type="button">
              <Link to={`/data-flows/${flowType}/sources/create`}>+ Thêm mới</Link>
            </Button>
            <Button variant="outline" size="icon-sm" type="button" className="bg-white" onClick={() => setFilters((prev) => ({ ...prev, keyword: undefined }))}>
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
        <SourceTable
          data={filtered}
          onEdit={(row) => console.log('edit', row)}
          onDelete={(row) => console.log('delete', row)}
        />
      </div>
    </div>
  );
}
