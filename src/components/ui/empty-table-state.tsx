import { Inbox } from 'lucide-react';

type Props = {
  message: string;
};

export function EmptyTableState({ message }: Props) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 py-12 text-slate-400">
      <Inbox className="h-14 w-14" strokeWidth={1} />
      <span className="text-xs">{message}</span>
    </div>
  );
}
