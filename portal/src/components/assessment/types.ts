export type Environment = 'Cloud' | 'SaaS' | 'On-Prem' | 'Hybrid';

export type EvidenceStatus =
  | 'COMPLIANT'
  | 'NON_COMPLIANT'
  | 'PARTIAL'
  | 'NOT_TESTED';

export type ControlStatus = EvidenceStatus | 'NOT_APPLICABLE';

export interface OrgProfile {
  environment: Environment;
  ai_usage: boolean;
  apis_exposed: boolean;
}

export interface ControlApplicability {
  environments: string[];
  ai_usage: string;
  mandatory: boolean;
}

export interface ControlRegistryEntry {
  control_id: string;
  domain: string;
  atomic_objective: string;
  primary_authority: string;
  authority_class: string;
  applicability: ControlApplicability;
}

export interface Summary {
  applicable_controls: number;
  compliant: number;
  non_compliant: number;
  partial: number;
  not_tested: number;
  compliance_score_percent: number;
}

export interface DomainSummary {
  applicable: number;
  score_percent: number;
}

export interface ControlResult {
  control_id: string;
  domain: string;
  status: ControlStatus;
  applicable: boolean;
}

export interface EvaluationReport {
  engine_version: string;
  registry_version: string;
  evaluation_timestamp: string;
  summary: Summary;
  domain_breakdown: Record<string, DomainSummary>;
  controls: ControlResult[];
  controls_registry: Record<string, ControlRegistryEntry>;
}

export interface EvaluateRequest {
  org_profile: OrgProfile;
  evidence: Record<string, {status: EvidenceStatus}>;
}

export interface ControlsResponse {
  registry_version: string;
  controls: ControlRegistryEntry[];
}

export interface AssessmentState {
  projectName: string;
  orgProfile: OrgProfile | null;
  evidence: Record<string, EvidenceStatus>;
  report: EvaluationReport | null;
}
