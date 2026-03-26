import type {ControlStatus, EvidenceStatus} from './types';

export const STATUS_LABELS: Record<ControlStatus, string> = {
  COMPLIANT: 'Compliant',
  NON_COMPLIANT: 'Non-Compliant',
  PARTIAL: 'Partially Compliant',
  NOT_TESTED: 'Not Tested',
  NOT_APPLICABLE: 'Not Applicable',
};

export function getStatusLabel(status: EvidenceStatus | ControlStatus): string {
  return STATUS_LABELS[status];
}
