const STEPS = [
  'Chọn tổ chức',
  'Chọn nguồn',
  'Chọn connection',
  'Cấu hình làm giàu dữ liệu',
];

type Props = {
  currentStep: number;
};

export function EnrichmentSteps({ currentStep }: Props) {
  return (
    <ol className="space-y-3 text-sm">
      {STEPS.map((label, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isDone = step < currentStep;
        const isLast = step === STEPS.length;

        return (
          <li key={label} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className={[
                  'flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold',
                  isActive
                    ? 'border-[#c8872a] bg-[#c8872a] text-white'
                    : isDone
                      ? 'border-[#c8872a] bg-white text-[#c8872a]'
                      : 'border-slate-300 bg-white text-slate-500',
                ].join(' ')}
              >
                {step}
              </div>
              {!isLast && <div className="mt-1 h-6 w-px bg-slate-200" />}
            </div>
            <span
              className={[
                'mt-1 font-medium',
                isActive || isDone ? 'text-slate-900' : 'text-slate-500',
              ].join(' ')}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

