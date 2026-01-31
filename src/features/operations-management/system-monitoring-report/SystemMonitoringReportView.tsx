import { useState } from 'react';

type TabId = 'overview' | 'gateway';

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Tổng quan ứng dụng' },
  { id: 'gateway', label: 'Cổng truy xuất hệ thống' },
];

export function SystemMonitoringReportView() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 shadow-sm">
        {/* Tabs */}
        <div className="mb-4 border-b border-slate-200">
          <div className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-4 py-2 text-sm font-medium transition-colors',
                  activeTab === tab.id
                    ? 'border-b-2 border-[#c8872a] text-[#c8872a]'
                    : 'text-slate-600 hover:text-slate-900',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="flex items-center justify-center py-20 text-slate-500">
              <p className="text-base">
                Nội dung tab &quot;Tổng quan ứng dụng&quot; sẽ được nhúng vào đây
              </p>
            </div>
          )}
          {activeTab === 'gateway' && (
            <div className="flex items-center justify-center py-20 text-slate-500">
              <p className="text-base">
                Nội dung tab &quot;Cổng truy xuất hệ thống&quot; sẽ được nhúng vào đây
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
