import { useParams, Navigate } from 'react-router';
import { isFlowTypeParam } from '@/features/data-flow/flowTypes';
import { DataProcessListView } from '@/features/data-flow/process/DataProcessListView';

export default function DataProcessListPage() {
  const { flowType } = useParams<{ flowType: string }>();

  if (!flowType || !isFlowTypeParam(flowType)) {
    return <Navigate to="/data-flows/mssql/processes" replace />;
  }

  return <DataProcessListView flowType={flowType} />;
}
