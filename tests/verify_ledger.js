import fs from 'fs';
import path from 'path';

const LEDGER_PATH = path.join(process.cwd(), 'data/omega9-ledger/events.jsonl');

function verify() {
    console.log('Verifying ledger...');
    if (!fs.existsSync(LEDGER_PATH)) {
        console.error('Ledger file not found!');
        process.exit(1);
    }

    const testEvent = {
        timestamp: new Date().toISOString(),
        source: 'VerificationScript',
        repo: 'OTC15203/openai-nexus',
        eventType: 'verification',
        severity: 'info',
        summary: 'Testing ledger append',
        payload: { success: true },
        traceId: 'test-trace-id'
    };

    fs.appendFileSync(LEDGER_PATH, JSON.stringify(testEvent) + '\n', 'utf8');
    console.log('Appended test event.');

    const content = fs.readFileSync(LEDGER_PATH, 'utf8');
    const lines = content.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    const parsed = JSON.parse(lastLine);

    if (parsed.summary === 'Testing ledger append' && parsed.eventType === 'verification') {
        console.log('Verification successful: Event correctly logged and retrieved.');
    } else {
        console.error('Verification failed: Event data mismatch.');
        process.exit(1);
    }
}

verify();
