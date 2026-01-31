import { useState, useMemo } from 'react';
import { ConfigAccessSteps } from '@/features/data-extraction/data-sharing/access-control/ConfigAccessSteps';
import { OrganizationSelectTable } from '@/features/data-extraction/data-sharing/access-control/OrganizationSelectTable';
import { configAccessOrganizationsMock } from '@/features/data-extraction/data-sharing/access-control/data';
import { Button } from '@/components/ui/button';

export function ConfigAccessView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOrgId, setSelectedOrgId] = useState<string | undefined>();
  const [search, setSearch] = useState('');

  const filteredOrgs = useMemo(() => {
    if (!search.trim()) return configAccessOrganizationsMock;
    const q = search.trim().toLowerCase();
    return configAccessOrganizationsMock.filter(
      (o) =>
        o.orgCode.toLowerCase().includes(q) ||
        o.name.toLowerCase().includes(q),
    );
  }, [search]);

  const canContinueStep1 = !!selectedOrgId;

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 shadow-sm">
        <div className="flex gap-8">
          <div className="w-64 shrink-0 border-r border-slate-200 pr-6">
            <ConfigAccessSteps currentStep={currentStep} />
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            {currentStep === 1 && (
              <>
                <h2 className="text-base font-semibold text-slate-900">
                  Chọn tổ chức
                </h2>
                <OrganizationSelectTable
                  data={filteredOrgs}
                  selectedId={selectedOrgId}
                  onSelectedIdChange={setSelectedOrgId}
                  searchValue={search}
                  onSearchChange={setSearch}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="text-xs"
                  >
                    Quay lại
                  </Button>
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
                <h2 className="text-base font-semibold text-slate-900">
                  Chọn tổ chức con
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
                  Chọn nguồn CSDL
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
                  <Button
                    size="sm"
                    type="button"
                    className="bg-[#c8872a] text-xs hover:bg-[#b4741e]"
                    onClick={() => setCurrentStep(4)}
                  >
                    Tiếp tục
                  </Button>
                </div>
              </>
            )}
            {currentStep === 4 && (
              <>
                <h2 className="text-sm font-semibold text-slate-900">
                  Chọn bảng
                </h2>
                <p className="text-xs text-slate-500">
                  (Nội dung bước 4 – đang phát triển)
                </p>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="text-xs"
                    onClick={() => setCurrentStep(3)}
                  >
                    Quay lại
                  </Button>
                  <Button
                    size="sm"
                    type="button"
                    className="bg-[#c8872a] text-xs hover:bg-[#b4741e]"
                  >
                    Hoàn thành
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
