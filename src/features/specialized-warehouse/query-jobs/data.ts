export type QueryJobItem = {
  id: string;
  enabled: boolean;
  jobName: string;
  status: string;
  owner: string;
  schedule: string;
  lastRun: string;
  nextRun: string;
};

export const queryJobMock: QueryJobItem[] = [];
