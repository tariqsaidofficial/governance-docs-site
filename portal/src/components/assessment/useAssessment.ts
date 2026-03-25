import {useCallback, useMemo, useState} from 'react';
import type {
  AssessmentState,
  EvidenceStatus,
  EvaluationReport,
  OrgProfile,
} from './types';

const STORAGE_KEY = 'eatgf_assessment';

const DEFAULT_STATE: AssessmentState = {
  projectName: '',
  orgProfile: null,
  evidence: {},
  report: null,
};

function loadState(): AssessmentState {
  if (typeof window === 'undefined') {
    return DEFAULT_STATE;
  }

  const raw = window.sessionStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return DEFAULT_STATE;
  }

  try {
    return {...DEFAULT_STATE, ...(JSON.parse(raw) as Partial<AssessmentState>)};
  } catch {
    return DEFAULT_STATE;
  }
}

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>(() => loadState());

  const persist = useCallback((next: AssessmentState) => {
    setState(next);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const patch = useCallback(
    (partial: Partial<AssessmentState>) => {
      persist({...state, ...partial});
    },
    [persist, state],
  );

  const setProjectName = useCallback(
    (projectName: string) => patch({projectName}),
    [patch],
  );

  const setOrgProfile = useCallback(
    (orgProfile: OrgProfile) => patch({orgProfile}),
    [patch],
  );

  const setEvidenceStatus = useCallback(
    (controlId: string, status: EvidenceStatus) => {
      patch({evidence: {...state.evidence, [controlId]: status}});
    },
    [patch, state.evidence],
  );

  const setEvidenceBulk = useCallback(
    (evidence: Record<string, EvidenceStatus>) => patch({evidence}),
    [patch],
  );

  const setReport = useCallback(
    (report: EvaluationReport | null) => patch({report}),
    [patch],
  );

  const resetAssessment = useCallback(() => persist(DEFAULT_STATE), [persist]);

  return useMemo(
    () => ({
      state,
      setProjectName,
      setOrgProfile,
      setEvidenceStatus,
      setEvidenceBulk,
      setReport,
      resetAssessment,
    }),
    [
      resetAssessment,
      setEvidenceBulk,
      setEvidenceStatus,
      setOrgProfile,
      setProjectName,
      setReport,
      state,
    ],
  );
}
