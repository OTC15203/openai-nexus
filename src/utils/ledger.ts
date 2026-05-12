import fs from 'fs';
import path from 'path';

export interface LedgerEvent {
  timestamp: string;
  source: string;
  repo: string;
  eventType: string;
  severity: 'info' | 'warn' | 'error' | 'critical';
  summary: string;
  payload: any;
  traceId: string;
}

const LEDGER_PATH = path.join(process.cwd(), 'data/omega9-ledger/events.jsonl');

export function appendToLedger(event: Omit<LedgerEvent, 'timestamp'>): void {
  const fullEvent: LedgerEvent = {
    ...event,
    timestamp: new Date().toISOString(),
  };

  const line = JSON.stringify(fullEvent) + '\n';

  // Ensure directory exists
  const dir = path.dirname(LEDGER_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.appendFileSync(LEDGER_PATH, line, 'utf8');
}

export function readLedger(): LedgerEvent[] {
  if (!fs.existsSync(LEDGER_PATH)) {
    return [];
  }
  const content = fs.readFileSync(LEDGER_PATH, 'utf8');
  return content
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => JSON.parse(line) as LedgerEvent);
}
