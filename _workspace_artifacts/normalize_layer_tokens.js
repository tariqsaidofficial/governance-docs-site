const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'framework');
const replacements = {
  '00_FOUNDATION': '00 Foundation',
  '01_MANAGEMENT_SYSTEMS': '01 Management Systems',
  '02_CONTROL_ARCHITECTURE': '02 Control Architecture',
  '03_GOVERNANCE_MODELS': '03 Governance Models',
  '04_POLICY_LAYER': '04 Policy Layer',
  '05_DOMAIN_FRAMEWORKS': '05 Domain Frameworks',
  '06_AUDIT_AND_ASSURANCE': '06 Audit and Assurance',
  '07_REFERENCE_AND_EVOLUTION': '07 Reference and Evolution',
  '08_DEVELOPER_GOVERNANCE_LAYER': '08 Developer Governance Layer',
  '01_SECURE_SDLC': '01 Secure SDLC',
  '02_API_GOVERNANCE': '02 API Governance',
  '03_DEVSECOPS_GOVERNANCE': '03 DevSecOps Governance',
  '04_INFRASTRUCTURE_RUNTIME': '04 Infrastructure Runtime',
  '05_SAAS_AND_CLOUD_GOVERNANCE': '05 SaaS and Cloud Governance',
  '06_APPLICATION_LIFECYCLE_GOVERNANCE': '06 Application Lifecycle Governance',
  '07_TECHNICAL_ACCOUNTABILITY_MODEL': '07 Technical Accountability Model'
};

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const files = walk(root);
const changedFiles = [];
const tokenCounts = Object.fromEntries(Object.keys(replacements).map(k => [k, 0]));

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const lines = original.split(/\r?\n/);
  let inCodeFence = false;
  let fileChanged = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trimStart().startsWith('```')) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) continue;

    let updated = line;
    for (const [token, human] of Object.entries(replacements)) {
      const rx = new RegExp(`(?<![A-Za-z0-9_./-])${escapeRegex(token)}(?![A-Za-z0-9_./-])`, 'g');
      const matches = updated.match(rx);
      if (matches) {
        tokenCounts[token] += matches.length;
        updated = updated.replace(rx, human);
      }
    }

    if (updated !== line) {
      lines[i] = updated;
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(file, lines.join('\n'));
    changedFiles.push(path.relative(process.cwd(), file).replace(/\\/g, '/'));
  }
}

console.log('CHANGED_FILES=' + changedFiles.length);
for (const f of changedFiles) console.log(f);
console.log('TOKEN_COUNTS_START');
for (const [k, v] of Object.entries(tokenCounts)) {
  if (v > 0) console.log(`${k}:${v}`);
}
console.log('TOKEN_COUNTS_END');
