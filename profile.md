# Pandurang Vajramatti – Career Profile and Portfolio Source

Nov 19, 2026 · @Vajr

This is the complete record of Pandurang's experience, projects and education. Use it as the source for CVs, cover letters, LinkedIn, interview prep and a personal portfolio website.

## Overview

Pandurang Arun Vajramatti (goes by Vajra) is an Android Software Engineer with over 2 years of commercial experience in Kotlin and Java. Holds an MSc in Advanced Computer Science with Distinction from Newcastle University, with a Distinction dissertation on on-device agentic AI for Android.

| Field | Detail |
| --- | --- |
| Headline | Android Software Engineer · Kotlin · Java · On-Device AI |
| Location | Newcastle upon Tyne, UK; open to relocation within the UK, hybrid or remote |
| Phone | +44 7353 803091 |
| Email | vajramattipandurang@gmail.com |
| LinkedIn | [linkedin.com/in/pandurang-arun-vajramatti-ab2944206](https://www.linkedin.com/in/pandurang-arun-vajramatti-ab2944206/) |
| GitHub | [github.com/pvajra](https://github.com/pvajra) |
| Right to work | UK Graduate visa (Post-Study Work), full right to work; no sponsorship needed at present |
| Target roles | Android Engineer, Mobile Software Engineer, On-Device / Edge AI Engineer |

**Short bio (about 50 words):** Android engineer with 2+ years building production apps in Kotlin and Java for retail billing, payments and agri-fintech, now holding an MSc in Advanced Computer Science (Distinction) from Newcastle University. Interested in offline-first mobile apps and running AI models directly on phones.

**What makes the profile distinctive:**

- Owned three nationally used production apps end to end within two years of graduating.
- Sole Android developer at an agri-fintech start-up, maintaining and building apps that feed a farmer credit score used by banks (65 field representatives, around 30,000 farmer records).
- Hands-on research running small language models on a real Android phone, with measured results.
- Breadth beyond Android: Kubernetes, Docker, federated learning, security and formal verification.

## Career Timeline

| Dates | Role / milestone | Organisation |
| --- | --- | --- |
| Aug 2026 | Submitted MSc dissertation (10 Aug); awarded Distinction (70.30) | Newcastle University |
| Sep 2025 – Aug 2026 | MSc Advanced Computer Science, Distinction | Newcastle University, UK |
| Jan 2025 – Aug 2025 | Software Development Engineer (Android), sole Android developer | Dvara E-Registry, Dharwad, India |
| Dec 2024 | Resigned to join Dvara E-Registry | TVS Electronics |
| Apr 2024 – Dec 2024 | Senior Executive, Software Development Engineer | TVS Electronics Limited, Bengaluru |
| Jul 2023 – Mar 2024 | Software Development Engineer – Trainee (full-time) | TVS Electronics Limited, Bengaluru |
| Jun 2023 | Graduated BEng Electronics and Communication, CGPA 8.38/10 | KLS Gogte Institute of Technology, Belagavi |
| Nov 2022 – Apr 2023 | Software Development Intern, first member of the new in-house Android team | TVS Electronics Limited, Bengaluru |
| Aug 2019 | Started BEng | KLS Gogte Institute of Technology |

## Experience in Full

### Dvara E-Registry – Software Development Engineer (Android) | Jan 2025 – Aug 2025 | Dharwad, India

Dvara E-Registry is an agri-fintech company based at IIT Dharwad. It collects farmer and market data and produces a farmer credit score, KhetScore, that partner banks use when deciding agricultural loans (similar in idea to a CIBIL score for individuals).

**Role:** the company's sole Android developer, owning design, development, release and support. Later trained an Android intern who joined the team.

**Projects**

- **Doordrishti (farmer data app, already in production when Pandurang joined; maintained it and contributed to new releases):** field representatives visit farmers and record full farmer records, including crop details, soil details and land data. This data feeds the farmer credit score, which partner banks use to assess agricultural loans.
- **Commodity price collection app:** field representatives record commodity prices at local markets and submit them to the central data platform.

**Technical work**

- Offline-first design: data is stored locally with Room and synced by WorkManager when connectivity returns, because much field work happens in low-signal rural areas.
- Backend integration with Django REST Framework and PostgreSQL through Retrofit and REST APIs.
- Debugging across the app, API and data layers; managed Android priorities independently.
- Kotlin, MVVM, Coroutines, Jetpack.

**Mentoring:** onboarded and trained an intern in Kotlin, MVVM and the codebase until they could build features independently.

**Why left:** resigned in August 2025, after about 8 months, to start the MSc in the UK.

### TVS Electronics Limited – Bengaluru, India | Nov 2022 – Dec 2024

**Background story:** TVS Electronics had acquired three Android applications from an outside vendor and decided to build its own in-house Android team to run them. Pandurang joined as an intern in November 2022 and was the first member of that team. The team was trained in Android development as it formed. After graduating in June 2023 Pandurang moved to a full-time Trainee role. Some months later the main (lead) developer left the company, and responsibility for all three apps passed to Pandurang, who informally owned the three products from then on, and in April 2024 was promoted to Senior Executive, Software Development Engineer, formally owning all three. Pandurang resigned in December 2024 to join Dvara E-Registry.

**The three applications** (each used by many business clients across India):

1. **Retail billing:** point-of-sale billing for retail stores, with payment gateway, receipt printer and barcode scanner integration.
2. **Parking solution / parking management:** billing and ticketing for parking operators.
3. **IRCTC food billing:** billing for food services on the Indian Railways (IRCTC) network.

**Senior Executive, Software Development Engineer (Apr 2024 – Dec 2024)**

- End-to-end owner of all three apps: features, defect fixes, Google Play Store releases and client issues.
- Coordinated work across Android colleagues and interns and reviewed changes before release.
- Led the migration of legacy Java modules to Kotlin without breaking existing behaviour.
- Built billing and payment flows with Razorpay and CCAvenue; integrated POS SDKs, receipt printers and barcode scanners.
- Diagnosed production issues in payments and hardware communication.

**Software Development Engineer – Trainee (Jul 2023 – Mar 2024)**

- Maintained and enhanced the three apps in Java and Kotlin; became the team's go-to person for the codebases.
- Contributed to the start of the Java-to-Kotlin migration.

**Software Development Intern (Nov 2022 – Apr 2023)**

- First member of the new in-house Android team; trained in Android development and supported the live apps.
- Offered a full-time role on graduation.

## MSc Dissertation in Full

**Title:** On-Device Agentic AI on Android: Deployment Layer Comparison and Checkpoint-Resume Recovery for SLM-Based Autonomous Agents

**Module / supervisor:** CSC8499 Project and Dissertation, Newcastle University; supervised by Dr Tomasz Szydlo. Submitted 10 August 2026. Mark: 70.30 (Distinction). A 7–8 minute demo video was submitted separately.

**Problem:** small language models (SLMs) can now run on phones, but Android aggressively kills memory-heavy background processes. An AI agent running on-device can lose its work mid-task. The project asks how the deployment layer affects agent reliability and performance, and whether checkpoint-resume recovery can make agents survive being killed.

**Setup**

- Device: Nothing Phone (1), Snapdragon 778G+, 8 GB RAM, Android 15.
- Inference: llama.cpp compiled for ARM64, called from Kotlin through a JNI bridge.
- Models: Phi-3 Mini 3.8B (Q4\_K\_M, about 2.2 GB) and LFM2.5 1.2B (about 731 MB).
- Five benchmark agent tasks (T1–T5).

**Deployment architectures compared**

| Config | How it runs | Recovery |
| --- | --- | --- |
| C1 | Standard background process | None |
| C2 | Background process with JSON-file checkpointing, sentinel-file kill detection and resume on rerun | Checkpoint and resume |
| C3 | Foreground service in a separate, higher-priority OS process, accessed over AIDL / Binder | Relies on higher process priority |

**Key results** (883 batch runs plus 10 kill trials)

| Measure | Result |
| --- | --- |
| Speed | LFM2.5 was 8–14× faster than Phi-3 Mini |
| Memory | LFM2.5 used about 72% less memory (about 12% vs 48% of device RAM) |
| Kill risk | Phi-3 Mini spent about 87% of runtime at oom\_score ≥ 850 (the danger zone) vs about 14% for LFM2.5 |
| Checkpoint cost | Median 24 ms (LFM2.5) / 30 ms (Phi-3 Mini) per write; no significant latency penalty vs C1 (Mann-Whitney U, p ≈ 0.49, rank-biserial ≈ 0.05) |
| Binder overhead | 46 ms (LFM2.5) / 137 ms (Phi-3 Mini) per task |
| Recovery | All 10 forced-kill trials recovered; recovery overhead 2–12 ms |
| Real-world evidence | One spontaneous OS kill of LFM2.5 under C1 was recorded, showing the reliability problem is real |

**Honest limitations** (useful for interviews): the experiment matrix was not uniform. LFM2.5 ran all five tasks × 30 runs on C1 and C3; Phi-3 Mini's C2 overhead was measured on one representative task at n = 15 because each run took a median of about 357 s. Energy results were too noisy to rank architectures. Phi-3 latency is reported as a median because of thermal-throttling outliers.

**Tech:** Kotlin, C++, JNI, Android NDK, llama.cpp, GGUF quantised models, AIDL, Binder IPC, foreground services, Coroutines, JSON, Linux, statistical testing.

## MSc Coursework Projects

### Energy-Aware Federated Learning for Green IoT (CSC8114 Research Methods and Group Project, Group 8)

**Title:** Multi-objective Optimisation of Energy Consumption in Federated Learning: Balancing Computation and Communication for Green IoT. Team of six students.

**Idea:** existing work optimises computation energy and communication energy separately. This framework optimises both together with three parts: an energy-aware client selection score (battery, CPU, data contribution, dropout risk), dynamic model compression, and a joint energy model (E\_total = E\_compute + E\_comm).

**Implementation** ([GitHub repo](https://github.com/pvajra/Research-Methods-and-Project-Group-8)): Flower + PyTorch simulation, 50 clients, 100 rounds, a small CNN trained on MNIST, three device profiles (low, mid, high battery/CPU), optional 16-bit quantisation of model updates.

| Experiment | Final accuracy | Total estimated energy | vs baseline |
| --- | --- | --- | --- |
| Proposed + quantisation | 92.1% | 15.89 | −59% |
| Proposed, no quantisation | 91.7% | 21.47 | −45% |
| FedAvg + quantisation | 92.2% | 30.14 | −23% |
| FedAvg baseline | 92.0% | 39.14 | — |

Energy units are relative (from the project's analytical energy model), summed over 100 rounds.

**Pandurang's contribution (per the team table):** studied federated learning fundamentals, reviewed two papers (Wang et al.; Avner et al.), and compiled, structured and integrated the full proposal. The GitHub repo is under Pandurang's account.

### Kubernetes Deployment and Monitoring (CSC8110 Cloud Computing)

- Deployed the Kubernetes Dashboard with a service account and cluster-admin role binding.
- Deployed a Java web app (Tomcat prime-check benchmark) and exposed it through a NodePort service.
- Built a monitoring stack: node-exporter as a DaemonSet, kube-state-metrics, Prometheus and Grafana, with Prometheus added as a Grafana data source.
- Wrote a load generator with configurable target and request rate via environment variables, measuring average response time and failures with a 10-second timeout. Packaged it as a Docker image, pushed it to a local registry on port 32000 and deployed it to the cluster.
- Built Grafana panels for container CPU (container\_cpu\_usage\_seconds\_total) and memory (container\_memory\_usage\_bytes) during benchmarking.
- Module also had a written exam.

### PC Ordering System (Advanced Programming in Java) – module mark 78%

- Java package that manages PC orders for preset manufacturer models and custom configurations.
- Order state machine: PLACED → FULFILLED or CANCELLED, with invalid transitions blocked.
- Credit card validation (exactly 8 digits, holder name, expiry date) through a factory that enforces uniqueness.
- Analytics: largest customer, most-ordered preset model, most-ordered custom part.
- Design: interfaces and two small class hierarchies, factory pattern, immutable objects and defensive copies, UML diagram.
- About 36 JUnit tests across six test classes.

### Secure Software Development (CSC8204)

- Risk analysis of the NSA Tokeneer ID Station case study: ranked business goals (NIST categories), business and technical risks, McGraw security principles and mitigations.
- SecureUML role-based access control design (EnclaveUser and Superuser roles, certificate resources, OCL constraints).
- Formal modelling of clearances, privileges, certificates and tokens in Dafny.
- Weakest-precondition proofs and Hoare triples for two methods.

### System Security (CSC8214)

- Host anomaly detection on Linux: traced system calls with strace, built syscall-frequency vectors and trained a One-Class SVM (scikit-learn) on benign programs. Evaluated with precision, recall, F1, ROC-AUC and PR-AUC.
- Password generator: PBKDF2-HMAC-SHA256 with 150,000 iterations and a random 16-byte salt per site, deriving strong site-specific passwords from one master phrase.
- Federated learning attack: pseudocode and simulation of a scaled model-poisoning (backdoor) attack on FedAvg.
- Time-expiring storage built on DNS TTL caching, implemented in Python.

### Data Visualisation

- Power BI coursework answering set questions and building a dashboard on CO2 emissions data by location, including an Azure map visual and a location slicer.

### Generative AI for Business

- Completed a written assignment. *Details to add.*

## Education

### MSc Advanced Computer Science | Newcastle University, UK | Sep 2025 – Aug 2026 | Distinction

| Module | Credits | How it was assessed |
| --- | --- | --- |
| Project and Dissertation (CSC8499) | 90 | Dissertation (70.30, Distinction) and demo video |
| Research Methods and Group Project (CSC8114) | 20 | Group research proposal and federated learning implementation |
| Systems Security (CSC8214) | 20 | Coursework: anomaly detection, password scheme, FL attack, DNS storage |
| Advanced Programming in Java | 10 | Java package (PC Ordering System), 78% |
| Cloud Computing (CSC8110) | 10 | Kubernetes coursework and written exam |
| Secure Software Development (CSC8204) | 10 | Coursework: risk analysis, SecureUML, Dafny |
| Data Visualisation | 10 | Power BI questions and dashboard |
| Generative AI for Business | 10 | Assignment |

### BEng Electronics and Communication Engineering | KLS Gogte Institute of Technology, Belagavi, India | Aug 2019 – Jun 2023

- CGPA 8.38/10.

## Skills

| Category | Skills | Where used |
| --- | --- | --- |
| Languages | Kotlin, Java, Python, SQL, C, C++ | Industry apps; dissertation (C++/JNI); coursework (Python) |
| Android | Android SDK, Jetpack, MVVM, Coroutines, Room, WorkManager, Retrofit, foreground services, background work, process lifecycle, AIDL, Binder IPC, JNI, NDK | TVS, Dvara, dissertation |
| Design & testing | OOP, SOLID, factory and repository patterns, offline-first apps, Java-to-Kotlin migration, JUnit | TVS, Dvara, Java module |
| Backend & data | REST APIs, JSON, SQLite, PostgreSQL, Django REST Framework | Dvara |
| Payments & hardware | Razorpay, CCAvenue, POS SDKs, receipt printers, barcode scanners | TVS |
| Cloud & DevOps | Docker, Kubernetes, Prometheus, Grafana, Linux | Cloud Computing |
| AI & ML | llama.cpp, on-device LLM inference (Phi-3 Mini, LFM2.5), GGUF quantisation, PyTorch, Flower, scikit-learn (One-Class SVM) | Dissertation, group project, System Security |
| Security | Threat modelling, risk analysis, SecureUML, Dafny formal verification, PBKDF2, strace | Secure Software Development, System Security |
| Research & analysis | Benchmark design, Mann-Whitney U testing, IEEE-style technical writing | Dissertation |
| Tools | Android Studio, Git, GitHub, Gradle, Google Play Console, Power BI, Google Colab | Throughout |

## Website Brief for Claude Code

Build a fast, single-page personal portfolio site from this document. Use only the facts above, and leave out anything listed under Facts to Confirm until it is confirmed.

**Goal:** a UK recruiter or engineering manager should understand within 10 seconds that Pandurang is an Android engineer with production experience and on-device AI research, then contact him or download the CV.

**Sections, in order**

1. **Hero:** name, headline (Android Software Engineer · Kotlin · On-Device AI), one-line bio, buttons for Download CV, LinkedIn, GitHub and Email.
2. **About:** the short bio from the Overview, plus the four distinctive points.
3. **Experience:** a vertical timeline from the Career Timeline table, with each role expandable to show the bullets from Experience in Full. Use professional wording, not the back-story.
4. **Featured project – On-Device Agentic AI:** problem, setup, the C1/C2/C3 table and 3–4 headline numbers as stat cards (8–14× faster, 72% less memory, 10/10 kill recoveries, 883 runs).
5. **More projects:** cards for federated learning (59% energy reduction, GitHub link), Kubernetes monitoring, PC Ordering System and Security coursework.
6. **Skills:** grouped chips from the Skills table.
7. **Education:** MSc (Distinction) and BEng.
8. **Contact:** email, LinkedIn, GitHub, location and right to work.

**Tone and design:** professional and concise, third person or first person but used consistently, no buzzwords. Clean, minimal layout, dark and light mode, mobile-first, accessible (WCAG AA contrast, alt text), with no stock photos or photo of a person unless supplied.

**Technical:** a static site (e.g. Astro, Next.js static export or plain HTML/CSS) deployable free on GitHub Pages, Netlify or Vercel. Include SEO meta tags, an Open Graph image, a link to the CV PDF in /public, and no tracking without consent.

**Keep private (do not publish):** phone number (email is enough), module marks other than the overall Distinction, student number, supervisor contact details.

## Facts to Confirm

- [ ] Spelling of "Durdrishti" (or "Doordrishti") and the credit score name "KhetScore".
- [ ] Internship start date: November 2022 (as on the original CV), not November 2020.
- [ ] Who wrote the federated learning simulation code. The repo is under Pandurang's account, but the team table lists proposal work only.
- [ ] Reviewing colleagues' changes before release at TVS.
- [ ] Open to relocation anywhere in the UK, and to hybrid or remote work.
- [ ] Approximate number of clients, users or devices for the TVS apps and Dvara field apps (would strengthen both the CV and the website).
- [ ] Generative AI for Business assignment topic.
- [ ] Whether the dissertation code repository is public, and its link.
- [ ] A README for the federated learning repo before linking it publicly.
