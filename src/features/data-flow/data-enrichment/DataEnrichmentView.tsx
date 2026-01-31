import { useState } from 'react';
import { EnrichmentSteps } from '@/features/data-flow/data-enrichment/EnrichmentSteps';
import { OrganizationTable } from '@/features/data-flow/version/OrganizationTable';
import { enrichmentOrganizationsMock } from '@/features/data-flow/data-enrichment/data';
import type { FlowTypeParam } from '@/features/data-flow/flowTypes';
import { Button } from '@/components/ui/button';

type Props = {
  flowType: FlowTypeParam;
};

export function DataEnrichmentView({ flowType: _flowType }: Props) {
  const [currentStep] = useState(1);
  const [selectedOrgId, setSelectedOrgId] = useState<string | undefined>('');

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 shadow-sm">
        <div className="flex gap-8">
          <div className="w-64 border-r border-slate-200 pr-6">
            <EnrichmentSteps currentStep={currentStep} />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-base font-semibold text-slate-900">Chọn tổ chức</h2>
            <OrganizationTable
              data={enrichmentOrganizationsMock}
              selectedId={selectedOrgId}
              onSelectedIdChange={setSelectedOrgId}
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm" type="button" className="text-xs">
                Quay lại
              </Button>
              <Button size="sm" type="button" className="bg-[#c8872a] text-xs hover:bg-[#b4741e]" disabled={!selectedOrgId}>
                Tiếp tục
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
