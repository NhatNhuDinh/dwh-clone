import { useParams, Navigate } from 'react-router';
import { isFlowTypeParam } from '@/features/data-flow/flowTypes';
import { DataEnrichmentView } from '@/features/data-flow/data-enrichment/DataEnrichmentView';

export default function DataEnrichmentPage() {
  const { flowType } = useParams<{ flowType: string }>();

  if (!flowType || !isFlowTypeParam(flowType)) {
    return <Navigate to="/data-flows/mssql/data-enrichment" replace />;
  }

  return <DataEnrichmentView flowType={flowType} />;
}
