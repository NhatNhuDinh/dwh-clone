import { WizardSteps } from '@/features/data-extraction/data-sharing/WizardSteps';

const STEPS = [
  'Chọn tổ chức',
  'Chọn tổ chức con',
  'Chọn nguồn CSDL',
  'Chọn bảng',
] as const;

type Props = {
  currentStep: number;
};

export function ConfigAccessSteps({ currentStep }: Props) {
  return <WizardSteps steps={STEPS} currentStep={currentStep} />;
}
