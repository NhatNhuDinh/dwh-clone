import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RefreshCcw, Settings2, Download, FileDown } from 'lucide-react';
import { accessLogMock, interactionLogMock, logConfigMock, type LogConfigItem } from './data';

type TabKey = 'access' | 'interaction' | 'config';

export function SystemLogsView() {
  const [activeTab, setActiveTab] = useState<TabKey>('access');
  const [keyword, setKeyword] = useState('');

  const filterText = keyword.toLowerCase();

  const accessFiltered = accessLogMock.filter((item) => {
    if (!filterText) return true;
    return (
      item.time.toLowerCase().includes(filterText) ||
      item.userName.toLowerCase().includes(filterText) ||
      item.ip.toLowerCase().includes(filterText) ||
      item.action.toLowerCase().includes(filterText)
    );
  });

  const interactionFiltered = interactionLogMock.filter((item) => {
    if (!filterText) return true;
    return (
      item.time.toLowerCase().includes(filterText) ||
      item.userName.toLowerCase().includes(filterText) ||
      item.ip.toLowerCase().includes(filterText) ||
      item.action.toLowerCase().includes(filterText)
    );
  });

  const configFiltered = logConfigMock.filter((item) => {
    if (!filterText) return true;
    return (
      item.code.toLowerCase().includes(filterText) ||
      item.name.toLowerCase().includes(filterText) ||
      item.status.toLowerCase().includes(filterText)
    );
  });

  const renderTabs = () => (
    <div className="mb-3 flex border-b border-slate-200 text-sm">
      {[
        { key: 'access' as TabKey, label: 'Lịch sử truy cập' },
        { key: 'interaction' as TabKey, label: 'Lịch sử tương tác hệ thống' },
        { key: 'config' as TabKey, label: 'Cấu hình log' },
      ].map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            className={[
              'relative px-4 py-2 font-medium',
              isActive ? 'text-[#c8872a]' : 'text-slate-600',
            ].join(' ')}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {isActive ? (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#c8872a]" />
            ) : null}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-4">
      {renderTabs()}

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
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon-sm" type="button" className="bg-white">
              <FileDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon-sm" type="button" className="bg-white">
              <Download className="h-4 w-4" />
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
              <Settings2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {activeTab === 'access' && <AccessLogTable data={accessFiltered} />}
        {activeTab === 'interaction' && <InteractionLogTable data={interactionFiltered} />}
        {activeTab === 'config' && <LogConfigTable data={configFiltered} />}
      </div>
    </div>
  );
}

type AccessProps = {
  data: typeof accessLogMock;
};

function AccessLogTable({ data }: AccessProps) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (data.length === 0) {
    return (
      <p className="py-4 text-center text-xs text-slate-500">
        Không có lịch sử truy cập nào.
      </p>
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
      emptyMessage="Không có lịch sử truy cập nào."
      className="w-full text-xs"
      currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
    >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="time" header="Thời gian" />
      <Column field="userName" header="Tên người dùng" />
      <Column field="ip" header="IP" />
      <Column field="action" header="Hành động" />
      <Column
        header="Thao tác"
        body={() => (
          <button type="button" className="text-xs font-medium text-[#c8872a]">
            Xem chi tiết
          </button>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

type InteractionProps = {
  data: typeof interactionLogMock;
};

function InteractionLogTable({ data }: InteractionProps) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (data.length === 0) {
    return (
      <p className="py-4 text-center text-xs text-slate-500">
        Không có lịch sử tương tác hệ thống nào.
      </p>
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
      emptyMessage="Không có lịch sử tương tác hệ thống nào."
      className="w-full text-xs"
      currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
    >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="time" header="Thời gian" />
      <Column field="userName" header="Tên người dùng" />
      <Column field="ip" header="IP" />
      <Column field="action" header="Hành động" />
      <Column
        header="Thao tác"
        body={() => (
          <button type="button" className="text-xs font-medium text-[#c8872a]">
            Xem chi tiết
          </button>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

type ConfigProps = {
  data: typeof logConfigMock;
};

function LogConfigTable({ data }: ConfigProps) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (data.length === 0) {
    return (
      <p className="py-4 text-center text-xs text-slate-500">
        Không có cấu hình log nào.
      </p>
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
      emptyMessage="Không có cấu hình log nào."
      className="w-full text-xs"
      currentPageReportTemplate="Hiển thị từ {first} đến {last} trong tổng số {totalRecords}"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
    >
      <Column
        header="STT"
        body={(_, options) => options.rowIndex + 1}
        style={{ width: '80px' }}
      />
      <Column field="code" header="Code" />
      <Column field="name" header="Tên log" />
      <Column field="status" header="Trạng thái" />
      <Column
        header="Thao tác"
        body={(row: LogConfigItem) => (
          <button
            type="button"
            className="text-xs font-medium text-[#c8872a]"
            onClick={() =>
              console.log('toggle status', row.code, '=>', row.status === 'Mở' ? 'Tắt' : 'Mở')
            }
          >
            {row.status === 'Mở' ? 'Tắt' : 'Mở'}
          </button>
        )}
        style={{ width: '120px' }}
      />
    </DataTable>
  );
}

