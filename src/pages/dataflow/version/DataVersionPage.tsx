import { useParams, Navigate } from 'react-router';
import { isFlowTypeParam } from '@/features/data-flow/flowTypes';
import { DataVersionView } from '@/features/data-flow/version/DataVersionView';

export default function DataVersionPage() {
  const { flowType } = useParams<{ flowType: string }>();

  if (!flowType || !isFlowTypeParam(flowType)) {
    return <Navigate to="/data-flows/mssql/versions" replace />;
  }

  return <DataVersionView flowType={flowType} />;
}
