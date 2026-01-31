import { WizardSteps } from '@/features/data-extraction/data-sharing/WizardSteps';

const STEPS = [
  'Chọn nguồn CSDL',
  'Chọn bảng',
  'Danh sách API chia sẻ',
] as const;

type Props = {
  currentStep: number;
};

export function ApiExtractionSteps({ currentStep }: Props) {
  return <WizardSteps steps={STEPS} currentStep={currentStep} />;
}
