/**
 * All site content lives here. Edit text in this file and the page updates.
 * Components in src/components only render this data.
 *
 * Style guide: first person, concise, no buzzwords, no semicolons in text.
 */

export const site = {
  url: 'https://pvajra.github.io',
  title: 'Pandurang Vajramatti | Android Software Engineer',
  description:
    'Android Software Engineer with 2+ years building production apps in Kotlin and Java, and MSc research on running AI agents directly on Android phones.',
  ogImage: '/og-image.png',
  cvFile: '/Pandurang_Arun_Vajramatti_Android_Engineer_CV.pdf',
};

export const person = {
  name: 'Pandurang Vajramatti',
  fullName: 'Pandurang Arun Vajramatti',
  initials: 'PV',
  headline: 'Android Software Engineer | Kotlin · Java · On-Device AI',
  tagline:
    'I build production Android apps in Kotlin and Java, and research running AI models directly on phones.',
  location: 'Newcastle upon Tyne, UK',
  relocation: 'Open to relocation within the UK',
  rightToWork: 'Full right to work in the UK. No sponsorship needed.',
  email: 'vajramattipandurang@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pandurang-arun-vajramatti-ab2944206/',
  linkedinLabel: 'linkedin.com/in/pandurang-arun-vajramatti',
  github: 'https://github.com/pvajra',
  githubLabel: 'github.com/pvajra',
  status: 'Open to Android roles in the UK',
};

/** Key numbers shown under the hero. Keep to four. */
export const metrics = [
  { value: '2+ yrs', label: 'Commercial Android in Kotlin and Java' },
  { value: '~60,000', label: 'Licences across apps I owned at TVS' },
  { value: '100%', label: 'Legacy Java modules migrated to Kotlin' },
  { value: 'MSc', label: 'Advanced Computer Science, Distinction' },
];

/** Shown in the Kotlin code card in the hero (desktop only). */
export const codeCard = {
  fileName: 'Engineer.kt',
  stack: ['Kotlin', 'Java', 'Jetpack', 'Coroutines'],
  focus: ['Offline-first apps', 'On-device AI'],
};

export const about: { bio: string[]; highlights: { title: string; icon: IconName; text: string }[] } = {
  bio: [
    'I am an Android engineer with over two years of commercial experience building production apps in Kotlin and Java for retail billing, payments and agri-fintech.',
    'I hold an MSc in Advanced Computer Science with Distinction from Newcastle University, where my dissertation looked at running agentic AI on Android devices. I am most interested in offline-first mobile apps and on-device AI.',
  ],
  highlights: [
    {
      title: 'Production ownership',
      icon: 'layers',
      text: 'Owned three nationally used production apps end to end within two years of graduating, used across around 60,000 licences.',
    },
    {
      title: 'Sole Android developer',
      icon: 'phone',
      text: 'Built and maintained the Android apps at an agri-fintech company, used by 65 field representatives to record around 30,000 farmer records for a credit score used by banks.',
    },
    {
      title: 'On-device AI research',
      icon: 'cpu',
      text: 'Ran small language models on a real Android phone and measured speed, memory and kill recovery across 883 benchmark runs.',
    },
    {
      title: 'Breadth beyond Android',
      icon: 'cloud',
      text: 'Hands-on work with Kubernetes, Docker, federated learning, security and formal verification.',
    },
  ],
};

export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  tech?: string[];
};

export const experience: Role[] = [
  {
    title: 'Software Development Engineer (Android)',
    company: 'Dvara E-Registry',
    location: 'Dharwad, India',
    start: 'Jan 2025',
    end: 'Aug 2025',
    summary:
      'Sole Android developer at an agri-fintech company that produces a farmer credit score used by partner banks to assess agricultural loans.',
    bullets: [
      'Owned Android design, development, release and support across the company’s field apps.',
      'Maintained the Doordrishti farmer data app and contributed to its new releases. Field representatives use it to record crop, soil and land data that feeds the credit score.',
      'Built a commodity price collection app from scratch, used to record local market prices and submit them to the central data platform.',
      'Designed the commodity price app to work offline first, storing data locally with Room and syncing it with WorkManager when connectivity returns in low-signal rural areas.',
      'Supported 65 field representatives working with around 30,000 farmer records.',
      'Integrated the apps with a Django REST Framework and PostgreSQL backend through Retrofit and REST APIs.',
      'Onboarded and trained an Android intern in Kotlin, MVVM and the codebase until they could build features independently.',
    ],
    tech: ['Kotlin', 'MVVM', 'Coroutines', 'Jetpack', 'Room', 'WorkManager', 'Retrofit'],
  },
  {
    title: 'Senior Executive, Software Development Engineer',
    company: 'TVS Electronics Limited',
    location: 'Bengaluru, India',
    start: 'Apr 2024',
    end: 'Dec 2024',
    summary:
      'Owned three production Android apps used by business clients across India for retail billing, parking management and IRCTC food billing.',
    bullets: [
      'Owned all three apps end to end, covering features, defect fixes, Google Play Store releases and client issues.',
      'The apps were used across around 60,000 licences, with 50,000 for retail billing and 10,000 for parking.',
      'Led the migration of 100% of legacy Java modules to Kotlin without breaking existing behaviour.',
      'Built billing and payment flows with Razorpay and CCAvenue, and integrated POS SDKs, receipt printers and barcode scanners.',
      'Coordinated work across Android colleagues and interns.',
      'Diagnosed production issues in payments and hardware communication.',
    ],
    tech: ['Kotlin', 'Java', 'Razorpay', 'CCAvenue', 'POS SDKs', 'Google Play Console'],
  },
  {
    title: 'Software Development Engineer – Trainee',
    company: 'TVS Electronics Limited',
    location: 'Bengaluru, India',
    start: 'Jul 2023',
    end: 'Mar 2024',
    summary: 'Full-time role maintaining and extending the company’s three production Android apps.',
    bullets: [
      'Maintained and enhanced the retail billing, parking and IRCTC food billing apps in Java and Kotlin.',
      'Became the team’s go-to person for the three codebases.',
      'Contributed to the start of the Java-to-Kotlin migration.',
    ],
    tech: ['Java', 'Kotlin', 'Android SDK'],
  },
  {
    title: 'Software Development Intern',
    company: 'TVS Electronics Limited',
    location: 'Bengaluru, India',
    start: 'Nov 2022',
    end: 'Apr 2023',
    summary: 'First member of the company’s new in-house Android team.',
    bullets: [
      'Trained in Android development and supported the live production apps.',
      'Offered a full-time role on graduation.',
    ],
  },
];

export const featured = {
  title: 'On-Device Agentic AI on Android',
  label: 'MSc dissertation · Distinction',
  fullTitle:
    'Deployment layer comparison and checkpoint-resume recovery for SLM-based autonomous agents',
  problem:
    'Small language models can now run on phones, but Android aggressively kills memory-heavy background processes, so an on-device AI agent can lose its work mid-task. I studied how the deployment layer affects agent reliability and performance, and whether checkpoint-resume recovery lets an agent survive being killed.',
  setup: [
    { label: 'Device', value: 'Nothing Phone (1), Snapdragon 778G+, 8 GB RAM, Android 15' },
    { label: 'Inference', value: 'llama.cpp compiled for ARM64, called from Kotlin through a JNI bridge' },
    { label: 'Models', value: 'Phi-3 Mini 3.8B (Q4_K_M, about 2.2 GB) and LFM2.5 1.2B (about 731 MB)' },
    { label: 'Workload', value: 'Five benchmark agent tasks' },
  ],
  architectures: [
    {
      id: 'C1',
      name: 'Standard background process',
      how: 'The agent runs in a normal background process.',
      recovery: 'None',
    },
    {
      id: 'C2',
      name: 'Background process with checkpointing',
      how: 'Progress is saved to JSON checkpoint files. A sentinel file detects a kill and the agent resumes on rerun.',
      recovery: 'Checkpoint and resume',
    },
    {
      id: 'C3',
      name: 'Foreground service in a separate process',
      how: 'The model runs in a higher-priority OS process, accessed over AIDL and Binder IPC.',
      recovery: 'Higher process priority',
    },
  ],
  stats: [
    { value: '8–14×', label: 'faster', detail: 'LFM2.5 compared with Phi-3 Mini' },
    { value: '~72%', label: 'less memory', detail: 'About 12% vs 48% of device RAM' },
    { value: '10/10', label: 'kill recoveries', detail: 'Forced-kill trials, 2–12 ms recovery overhead' },
    { value: '883', label: 'benchmark runs', detail: 'Batch runs across models and configurations' },
  ],
  findings: [
    'Checkpointing cost a median of 24 ms (LFM2.5) and 30 ms (Phi-3 Mini) per write, with no significant latency penalty compared with C1.',
    'Phi-3 Mini spent about 87% of its runtime in the high kill-risk zone, compared with about 14% for LFM2.5.',
    'I recorded a spontaneous OS kill of LFM2.5 under C1, which confirmed the reliability problem is real.',
  ],
  tech: ['Kotlin', 'C++', 'JNI', 'Android NDK', 'llama.cpp', 'GGUF', 'AIDL', 'Binder IPC', 'Foreground services', 'Coroutines'],
};

export type IconName = 'layers' | 'phone' | 'cpu' | 'cloud' | 'leaf' | 'code' | 'shield';

export type Project = {
  title: string;
  icon: IconName;
  context: string;
  description: string;
  stat?: { value: string; label: string };
  points?: string[];
  tech: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    title: 'Energy-Aware Federated Learning',
    icon: 'leaf',
    context: 'MSc group project · team of six',
    description:
      'A federated learning framework for green IoT that optimises computation and communication energy together, using energy-aware client selection, dynamic model compression and a joint energy model.',
    stat: { value: '59%', label: 'less energy than FedAvg at ~92% accuracy' },
    points: [
      'Simulated with Flower and PyTorch across 50 clients and 100 rounds.',
      'I reviewed the literature and compiled, structured and integrated the full research proposal.',
    ],
    tech: ['Python', 'PyTorch', 'Flower'],
    link: {
      href: 'https://github.com/pvajra/Research-Methods-and-Project-Group-8',
      label: 'View on GitHub',
    },
  },
  {
    title: 'Kubernetes Deployment and Monitoring',
    icon: 'cloud',
    context: 'MSc Cloud Computing',
    description:
      'Deployed a Java web app to Kubernetes and built a monitoring stack to observe it under load.',
    points: [
      'Set up Prometheus, Grafana, node-exporter and kube-state-metrics.',
      'Wrote a configurable load generator, packaged it as a Docker image and deployed it from a local registry.',
      'Built Grafana panels for container CPU and memory during benchmarking.',
    ],
    tech: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Linux'],
  },
  {
    title: 'PC Ordering System',
    icon: 'code',
    context: 'MSc Advanced Programming in Java',
    description:
      'A Java package that manages PC orders for preset manufacturer models and custom configurations.',
    points: [
      'Order state machine that blocks invalid transitions.',
      'Payment card validation through a factory that enforces uniqueness.',
      'Immutable objects, defensive copies and about 36 JUnit tests.',
    ],
    tech: ['Java', 'JUnit', 'OOP', 'Design patterns'],
  },
  {
    title: 'Security Coursework',
    icon: 'shield',
    context: 'MSc Secure Software Development and System Security',
    description:
      'Security analysis, formal verification and applied security across two modules.',
    points: [
      'Risk analysis and SecureUML access control design for the NSA Tokeneer ID Station, modelled formally in Dafny.',
      'Host anomaly detection with a One-Class SVM trained on system call traces.',
      'A PBKDF2-HMAC-SHA256 site password generator and a simulated model-poisoning attack on FedAvg.',
    ],
    tech: ['Dafny', 'SecureUML', 'Python', 'scikit-learn', 'strace'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Android',
    items: [
      'Android SDK', 'Jetpack', 'MVVM', 'Coroutines', 'Room', 'WorkManager', 'Retrofit',
      'Foreground services', 'Background work', 'Process lifecycle', 'AIDL', 'Binder IPC', 'JNI', 'NDK',
    ],
  },
  { group: 'Languages', items: ['Kotlin', 'Java', 'Python', 'SQL', 'C', 'C++'] },
  {
    group: 'Design and testing',
    items: ['OOP', 'SOLID', 'Factory pattern', 'Repository pattern', 'Offline-first apps', 'Java-to-Kotlin migration', 'JUnit'],
  },
  { group: 'Backend and data', items: ['REST APIs', 'JSON', 'SQLite', 'PostgreSQL', 'Django REST Framework'] },
  { group: 'Payments and hardware', items: ['Razorpay', 'CCAvenue', 'POS SDKs', 'Receipt printers', 'Barcode scanners'] },
  { group: 'Cloud and DevOps', items: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Linux'] },
  {
    group: 'AI and ML',
    items: ['llama.cpp', 'On-device LLM inference', 'GGUF quantisation', 'PyTorch', 'Flower', 'scikit-learn'],
  },
  {
    group: 'Security',
    items: ['Threat modelling', 'Risk analysis', 'SecureUML', 'Dafny', 'PBKDF2', 'strace'],
  },
  {
    group: 'Tools',
    items: ['Android Studio', 'Git', 'GitHub', 'Gradle', 'Google Play Console', 'Power BI', 'Google Colab'],
  },
];

export const education = [
  {
    degree: 'MSc Advanced Computer Science',
    result: 'Distinction',
    school: 'Newcastle University',
    location: 'Newcastle upon Tyne, UK',
    start: 'Sep 2025',
    end: 'Aug 2026',
    note: 'Dissertation on on-device agentic AI for Android.',
  },
  {
    degree: 'BEng Electronics and Communication Engineering',
    result: '',
    school: 'KLS Gogte Institute of Technology',
    location: 'Belagavi, India',
    start: 'Aug 2019',
    end: 'Jun 2023',
    note: '',
  },
];

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
