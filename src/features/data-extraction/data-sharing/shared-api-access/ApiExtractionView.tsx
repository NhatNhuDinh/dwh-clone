import { useState, useMemo } from 'react';
import { ApiExtractionSteps } from '@/features/data-extraction/data-sharing/shared-api-access/ApiExtractionSteps';
import { DataSourceSelectTable } from '@/features/data-extraction/data-sharing/shared-api-access/DataSourceSelectTable';
import { apiExtractionDataSourcesMock } from '@/features/data-extraction/data-sharing/shared-api-access/data';
import { Button } from '@/components/ui/button';

export function ApiExtractionView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSourceId, setSelectedSourceId] = useState<string | undefined>();
  const [search, setSearch] = useState('');

  const filteredSources = useMemo(() => {
    if (!search.trim()) return apiExtractionDataSourcesMock;
    const q = search.trim().toLowerCase();
    return apiExtractionDataSourcesMock.filter((s) =>
      s.name.toLowerCase().includes(q),
    );
  }, [search]);

  const canContinueStep1 = !!selectedSourceId;

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 shadow-sm">
        <div className="flex gap-8">
          <div className="w-64 shrink-0 border-r border-slate-200 pr-6">
            <ApiExtractionSteps currentStep={currentStep} />
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            {currentStep === 1 && (
              <>
                <h2 className="text-sm font-semibold text-slate-900">
                  Chọn nguồn cơ sở dữ liệu
                </h2>
                <DataSourceSelectTable
                  data={filteredSources}
                  selectedId={selectedSourceId}
                  onSelectedIdChange={setSelectedSourceId}
                  searchValue={search}
                  onSearchChange={setSearch}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    size="sm"
                    type="button"
                    className="bg-[#c8872a] text-xs hover:bg-[#b4741e]"
                    disabled={!canContinueStep1}
                    onClick={() => setCurrentStep(2)}
                  >
                    Tiếp tục
                  </Button>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <h2 className="text-sm font-semibold text-slate-900">
                  Chọn bảng
                </h2>
                <p className="text-xs text-slate-500">
                  (Nội dung bước 2 – đang phát triển)
                </p>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="text-xs"
                    onClick={() => setCurrentStep(1)}
                  >
                    Quay lại
                  </Button>
                  <Button
                    size="sm"
                    type="button"
                    className="bg-[#c8872a] text-xs hover:bg-[#b4741e]"
                    onClick={() => setCurrentStep(3)}
                  >
                    Tiếp tục
                  </Button>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <h2 className="text-sm font-semibold text-slate-900">
                  Danh sách API chia sẻ
                </h2>
                <p className="text-xs text-slate-500">
                  (Nội dung bước 3 – đang phát triển)
                </p>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="text-xs"
                    onClick={() => setCurrentStep(2)}
                  >
                    Quay lại
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
