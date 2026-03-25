import type {
  ControlRegistryEntry,
  ControlsResponse,
  EvaluateRequest,
  EvaluationReport,
} from './types';

const API_BASE_URL =
  (typeof process !== 'undefined' && process.env.EATGF_ENGINE_API_BASE_URL) ||
  'http://localhost:8000';

async function parseError(response: Response): Promise<string> {
  try {
    const body = await response.json();
    if (body?.detail?.message) {
      return String(body.detail.message);
    }
    if (body?.message) {
      return String(body.message);
    }
    return `Request failed with status ${response.status}`;
  } catch {
    return `Request failed with status ${response.status}`;
  }
}

export async function fetchControls(): Promise<ControlRegistryEntry[]> {
  const response = await fetch(`${API_BASE_URL}/controls`);
  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const data = (await response.json()) as ControlsResponse;
  return data.controls;
}

export async function evaluateAssessment(
  payload: EvaluateRequest,
): Promise<EvaluationReport> {
  const response = await fetch(`${API_BASE_URL}/evaluate`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return (await response.json()) as EvaluationReport;
}
