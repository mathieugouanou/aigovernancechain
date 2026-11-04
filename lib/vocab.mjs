// Controlled vocabularies for the Obligation Atlas and AI_GOVERNANCE.md (v0.1).
// Keep in sync with atlas/FORMAT.md and spec/AI_GOVERNANCE-spec.md.

export const JURISDICTIONS = {
  EU: 'European Union',
  COE: 'Council of Europe',
  US: 'United States (federal)',
  'US-CA': 'California',
  'US-CO': 'Colorado',
  'US-TX': 'Texas',
  'US-NY': 'New York State',
  'US-NY-NYC': 'New York City',
  'US-IL': 'Illinois',
  CN: 'China',
  KR: 'South Korea',
  JP: 'Japan',
  VN: 'Vietnam',
  IN: 'India',
  GB: 'United Kingdom',
  SG: 'Singapore',
  CH: 'Switzerland',
  INTL: 'International standards',
};

export const EU_MEMBERS = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE'];
export const COE_PARTIES_HINT = ['CH', 'GB', 'EU'];

export const ROLES = ['provider','deployer','importer','distributor','product-manufacturer','authorised-representative','gpai-provider','developer','platform','public-body','employer','any'];

export const USES = ['any-ai','chatbot','agent','generated-media','deepfake','emotion-recognition','biometric-categorisation','remote-biometric-id','hiring','credit','insurance','education','essential-services','healthcare','law-enforcement','migration','justice','critical-infrastructure','significant-decision','profiling','recommender','companion','minors','gpai-model','frontier-model','public-sector-use','safety-component'];

export const CONTROLS = {
  ai_disclosure: 'People are told they are dealing with an AI',
  content_marking: 'Synthetic outputs carry machine-readable marking',
  deepfake_label: 'Visible label on deepfakes and AI-generated public-interest text',
  human_oversight: 'Competent humans can monitor, intervene, approve or override',
  tool_scope: 'Agent tools follow least privilege',
  spend_limits: 'Hard limits on money, actions or resources an agent can use',
  kill_switch: 'The system can be stopped safely',
  audit_log: 'Events and decisions are logged and kept',
  risk_management: 'Documented, ongoing risk management',
  impact_assessment: 'Impact assessment (FRIA, DPIA, AIA)',
  bias_testing: 'Bias or disparate-impact testing',
  data_governance: 'Training, validation and test data are governed',
  technical_documentation: 'Technical documentation is kept up to date',
  incident_reporting: 'Serious incidents are reported on time',
  transparency_notice: 'Affected people get notice and explanation',
  contest_and_appeal: 'People can contest a decision and reach a human',
  ai_literacy: 'Staff who run or use AI are trained',
  prohibited_practices_screen: 'Use case screened against banned practices',
  registration: 'Registered or filed with an authority',
  local_representative: 'Local or authorised representative appointed',
  safety_framework: 'Frontier safety framework published and followed',
  copyright_policy: 'Copyright compliance policy (GPAI)',
  training_data_summary: 'Training data summary or documentation',
  security_testing: 'Adversarial testing, red-teaming, cybersecurity',
  quality_management: 'Quality management system',
  post_market_monitoring: 'Performance monitored after release',
  conformity_assessment: 'Conformity assessment, declaration, marking',
  accuracy_robustness: 'Accuracy and robustness measured and declared',
  privacy_compliance: 'Personal-data law duties linked to the AI use',
  user_controls: 'Opt-out, consent or user choice',
  minors_protection: 'Safeguards for children and vulnerable users',
  content_moderation: 'Notice-and-removal or moderation of harmful AI content',
};

export const INSTRUMENT_TYPES = ['statute','regulation','executive-order','rule','guidance','standard','treaty','bill','code-of-practice'];
export const LEGAL_FORCE = ['binding','framework-no-penalties','voluntary','proposed','treaty'];
export const INSTRUMENT_STATUS = ['in-force','partially-applicable','enacted-not-yet-applicable','proposed','repealed','voluntary'];
export const OBLIGATION_STATUS = ['applicable','not-yet-applicable','proposed','voluntary','repealed'];
export const CONFIDENCE = ['high','medium','low'];
export const REVIEW_STATUS = ['draft-unreviewed','community-reviewed','expert-reviewed'];

export const CONTROL_STATUS = ['implemented','partial','planned','not-applicable','todo'];

export function normalizeJurisdiction(code) {
  const c = String(code).trim().toUpperCase();
  if (c === 'UK') return 'GB';
  if (c === 'NYC') return 'US-NY-NYC';
  return c;
}

// Expand a user's list of jurisdictions into every regime code that can apply.
export function expandJurisdictions(list) {
  const out = new Set();
  for (const raw of list || []) {
    const c = normalizeJurisdiction(raw);
    out.add(c);
    if (c.startsWith('US-')) out.add('US');
    if (c === 'US-NY-NYC') out.add('US-NY');
    if (EU_MEMBERS.includes(c)) out.add('EU');
    if (c === 'EU' || EU_MEMBERS.includes(c) || c === 'CH' || c === 'GB') out.add('COE');
  }
  out.add('INTL');
  return [...out];
}
