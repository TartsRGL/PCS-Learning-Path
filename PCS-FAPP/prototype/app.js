/**
 * FAPP - SaaS Project Value Architect
 * Frontend Prototype Engine
 * Developed by BotCentralHub
 */

// Track-specific configurations, questionnaires, and static pricing templates
const projectTracks = {
    ai: {
        name: "AI Solution",
        questions: [
            {
                id: "summary",
                label: "Project Summary",
                desc: "Describe the AI solution in 2-3 sentences. What is its main purpose?",
                placeholder: "e.g., An AI-powered customer service assistant for our e-commerce site to resolve basic order tracking queries."
            },
            {
                id: "diagnosis",
                label: "Problem Diagnosis",
                desc: "What manual bottlenecks or high-effort tasks are you trying to solve?",
                placeholder: "e.g., Support reps spend 4 hours daily manually copying tracking codes and answering simple shipment questions."
            },
            {
                id: "targetState",
                label: "Target State",
                desc: "How will users interact with the AI and what is the ideal workflow?",
                placeholder: "e.g., A floating chat widget on our website that interacts naturally, accesses shipping data, and hands off to humans for complex issues."
            },
            {
                id: "businessValue",
                label: "Business Value & ROI",
                desc: "What is the expected quantitative or qualitative value (hours saved, error reduction)?",
                placeholder: "e.g., Expected to save 20 hours/week of support agent time and reduce customer wait time to zero."
            },
            {
                id: "scope",
                label: "Recommended Scope (MVP)",
                desc: "What are the absolute must-have features needed for the initial launch?",
                placeholder: "e.g., Shopify order status API integration, PDF FAQ knowledge base upload, basic web chat interface."
            },
            {
                id: "outOfScope",
                label: "What is Outside MVP (Out of Scope)",
                desc: "What features should be explicitly left for future phases to prevent creep?",
                placeholder: "e.g., Multi-language support, automated package refunds, direct CRM database writing."
            },
            {
                id: "risks",
                label: "Risks & Open Questions",
                desc: "What technical uncertainties or external API dependencies exist?",
                placeholder: "e.g., LLM hallucination risks on return policy, Shopify API rate limits, customer data privacy compliance."
            },
            {
                id: "nextSteps",
                label: "Suggested Next Steps",
                desc: "What are the immediate next actions to kick off this project?",
                placeholder: "e.g., Gather past customer support logs for testing, configure OpenAI API keys, and define exact fallback behavior."
            }
        ],
        packages: [
            {
                name: "Essential (MVP)",
                desc: "Core conversational RAG agent running on static documentation.",
                scope: "1 PDF/FAQ source, standard web chat widget, default styles.",
                value: "Automates general FAQ responses and handles basic inquiries instantly.",
                recommended: "Validation of AI usefulness with low budget.",
                isRecommended: false
            },
            {
                name: "Professional",
                desc: "Dynamic AI Assistant with external live API integrations.",
                scope: "Shopify API integration, custom brand UI/UX styling, human-handoff system, chat logs.",
                value: "Resolves transactional inquiries (e.g. order status) automatically, saving agent hours.",
                recommended: "Standard e-commerce and SaaS support automation.",
                isRecommended: true
            },
            {
                name: "Scale",
                desc: "Enterprise Agent with multi-source memory and custom fine-tuning.",
                scope: "Active database editing, custom fine-tuning, dashboard analytics, 24/7 priority SLA.",
                value: "End-to-end task execution and deeply tailored responses across complex customer data.",
                recommended: "High-volume support operations requiring deep data access.",
                isRecommended: false
            }
        ]
    },
    web: {
        name: "Web Application",
        questions: [
            {
                id: "summary",
                label: "Project Summary",
                desc: "Describe the web application in 2-3 sentences. What is its main purpose?",
                placeholder: "e.g., A secure client onboarding portal for our design agency to streamline document collection and approvals."
            },
            {
                id: "diagnosis",
                label: "Problem Diagnosis",
                desc: "What manual bottlenecks or high-effort tasks are you trying to solve?",
                placeholder: "e.g., Clients send files via email, Slack, and Drive. It is difficult to track what has been approved or completed."
            },
            {
                id: "targetState",
                label: "Target State",
                desc: "How will users interact with the app and what is the ideal workflow?",
                placeholder: "e.g., Clients log in, view a progress checklist, upload assets, and click 'approve' on design mockups in one central dashboard."
            },
            {
                id: "businessValue",
                label: "Business Value & ROI",
                desc: "What is the expected quantitative or qualitative value (hours saved, error reduction)?",
                placeholder: "e.g., Cuts onboarding delay from 5 days to 1 day, reducing project management overhead by 30%."
            },
            {
                id: "scope",
                label: "Recommended Scope (MVP)",
                desc: "What are the absolute must-have features needed for the initial launch?",
                placeholder: "e.g., Client login, drag-and-drop file uploader, comment panel on mockups, simple status dashboard."
            },
            {
                id: "outOfScope",
                label: "What is Outside MVP (Out of Scope)",
                desc: "What features should be explicitly left for future phases to prevent creep?",
                placeholder: "e.g., Automatic payment/invoicing, team member workspaces, notification settings panel."
            },
            {
                id: "risks",
                label: "Risks & Open Questions",
                desc: "What technical uncertainties or external API dependencies exist?",
                placeholder: "e.g., Handling large files (200MB+), web security and folder authorization logic."
            },
            {
                id: "nextSteps",
                label: "Suggested Next Steps",
                desc: "What are the immediate next actions to kick off this project?",
                placeholder: "e.g., Finalize wireframes for the client view, determine storage requirements, and list required client data fields."
            }
        ],
        packages: [
            {
                name: "Essential (MVP)",
                desc: "Single-user dashboard with core file upload and status checks.",
                scope: "Core page views, direct database storage, default responsive stylesheet.",
                value: "Validates application flow and user interaction with minimum cost.",
                recommended: "Testing core concept workflows with a small cohort of users.",
                isRecommended: false
            },
            {
                name: "Professional",
                desc: "Fully-featured responsive multi-role SaaS application.",
                scope: "Multi-role login system, Stripe checkout integration, design comments, custom brand CSS.",
                value: "Ready-to-market portal with client authorization, asset uploads, and basic billing.",
                recommended: "Deploying a public SaaS or primary client dashboard.",
                isRecommended: true
            },
            {
                name: "Scale",
                desc: "High-performance enterprise platform with analytics.",
                scope: "Team workspaces, custom analytics charts, action audit logs, priority database indexing, premium SLA.",
                value: "Enterprise-grade scaling, granular permissions, and data-driven insights.",
                recommended: "Replacing legacy operational portals or B2B enterprise software.",
                isRecommended: false
            }
        ]
    },
    automation: {
        name: "Automation Pipeline",
        questions: [
            {
                id: "summary",
                label: "Project Summary",
                desc: "Describe the automation pipeline in 2-3 sentences. What is its main purpose?",
                placeholder: "e.g., Real-time webhook integration to sync Facebook Ads leads directly into Salesforce CRM."
            },
            {
                id: "diagnosis",
                label: "Problem Diagnosis",
                desc: "What manual bottlenecks or high-effort tasks are you trying to solve?",
                placeholder: "e.g., Sales team downloads lead CSVs from Facebook once a day and manually inputs them. Leads go cold in 24 hours."
            },
            {
                id: "targetState",
                label: "Target State",
                desc: "How will systems interact and what is the ideal workflow?",
                placeholder: "e.g., Instantly when a user clicks submit on Facebook, a webhook triggers, maps fields, cleans phone numbers, and inserts a contact."
            },
            {
                id: "businessValue",
                label: "Business Value & ROI",
                desc: "What is the expected quantitative or qualitative value (hours saved, error reduction)?",
                placeholder: "e.g., Cuts lead response time from 24 hours to 5 minutes, boosting overall sales conversion rate by 15%."
            },
            {
                id: "scope",
                label: "Recommended Scope (MVP)",
                desc: "What are the absolute must-have features needed for the initial launch?",
                placeholder: "e.g., Webhook listener, field-to-field mapping, basic error notification to Slack."
            },
            {
                id: "outOfScope",
                label: "What is Outside MVP (Out of Scope)",
                desc: "What features should be explicitly left for future phases to prevent creep?",
                placeholder: "e.g., Multi-channel ad ingestion (LinkedIn/Google), complex lead scoring algorithms, auto-assign rules."
            },
            {
                id: "risks",
                label: "Risks & Open Questions",
                desc: "What technical uncertainties or external API dependencies exist?",
                placeholder: "e.g., API rate-limits on Salesforce, structure changes in Facebook Lead payload."
            },
            {
                id: "nextSteps",
                label: "Suggested Next Steps",
                desc: "What are the immediate next actions to kick off this project?",
                placeholder: "e.g., Request Facebook Developer App access, obtain Salesforce Sandbox credentials, and list core fields."
            }
        ],
        packages: [
            {
                name: "Essential (MVP)",
                desc: "Single trigger-action API synchronizer.",
                scope: "One trigger, direct field mapping to one target system, standard log file output.",
                value: "Reduces daily manual CSV import tasks and saves copy-paste errors.",
                recommended: "Simple data syncs with low complexity.",
                isRecommended: false
            },
            {
                name: "Professional",
                desc: "Multi-step automated pipeline with data cleaning.",
                scope: "Conditional pathways, phone/email format cleaning, multi-system sync (CRM & email list), Slack alerts.",
                value: "Ensures standardized data lands across all systems in real-time.",
                recommended: "Standard lead routing and multi-tool automation.",
                isRecommended: true
            },
            {
                name: "Scale",
                desc: "High-throughput enterprise pipeline with retry queue.",
                scope: "Bulk processing capabilities, failure retry queue system, end-to-end data encryption, API limit throttling.",
                value: "Guaranteed zero-loss data pipes for business-critical transactions.",
                recommended: "Financial transactions or syncing high-volume user activity.",
                isRecommended: false
            }
        ]
    }
};

// State Variables
let currentTrack = "ai";
let proposalData = null;

// DOM Elements
const trackSelector = document.getElementById("track-selector");
const questionsContainer = document.getElementById("dynamic-questions-container");
const discoveryForm = document.getElementById("discovery-form");
const previewPlaceholder = document.getElementById("preview-placeholder");
const proposalOutput = document.getElementById("proposal-output");
const copyBtn = document.getElementById("copy-btn");
const downloadBtn = document.getElementById("download-btn");
const toast = document.getElementById("toast");
const resetBtn = document.getElementById("reset-btn");
const projectNameInput = document.getElementById("project-name");

// Render discovery questions based on the active track
function renderQuestions(trackKey) {
    const track = projectTracks[trackKey];
    questionsContainer.innerHTML = "";

    track.questions.forEach(q => {
        const formGroup = document.createElement("div");
        formGroup.className = "form-group";

        const label = document.createElement("label");
        label.setAttribute("for", `q-${q.id}`);
        label.textContent = q.label;

        const desc = document.createElement("p");
        desc.className = "form-desc";
        desc.textContent = q.desc;

        const textarea = document.createElement("textarea");
        textarea.id = `q-${q.id}`;
        textarea.name = q.id;
        textarea.rows = 3;
        textarea.placeholder = q.placeholder;

        formGroup.appendChild(label);
        formGroup.appendChild(desc);
        formGroup.appendChild(textarea);
        questionsContainer.appendChild(formGroup);
    });
}

// Set active class and load track
function handleTrackChange(trackKey) {
    currentTrack = trackKey;
    
    // Update active UI states
    const buttons = trackSelector.querySelectorAll(".track-btn");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-track") === trackKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderQuestions(trackKey);
}

// Generate the proposal preview from user answers
function generateProposal(event) {
    event.preventDefault();

    const formData = new FormData(discoveryForm);
    const track = projectTracks[currentTrack];
    
    // Project name
    const projectNameVal = projectNameInput.value.trim();
    const projectName = projectNameVal || "Untitled FAPP Project";

    // Calculate completeness
    const totalFields = track.questions.length;
    let filledFields = 0;
    
    proposalData = {
        projectName: projectName,
        trackName: track.name,
        timestamp: new Date().toLocaleDateString(),
        answers: {}
    };

    track.questions.forEach(q => {
        const value = formData.get(q.id).trim();
        proposalData.answers[q.id] = value || "Not specified yet.";
        if (value.length > 0) {
            filledFields++;
        }
    });

    // Determine clarity status
    let clarityStatus = "Low clarity";
    let statusClass = "status-low";
    if (filledFields >= 7) {
        clarityStatus = "High clarity";
        statusClass = "status-high";
    } else if (filledFields >= 4) {
        clarityStatus = "Medium clarity";
        statusClass = "status-medium";
    }
    
    proposalData.completeness = `${filledFields} / ${totalFields} fields`;
    proposalData.clarityStatus = clarityStatus;

    // Recommendation
    let recommendation = "";
    if (currentTrack === "ai") {
        recommendation = "Validate data sources and fallback behavior first.";
    } else if (currentTrack === "web") {
        recommendation = "Validate user roles and core workflow first.";
    } else if (currentTrack === "automation") {
        recommendation = "Validate source/target API access and error handling first.";
    }
    proposalData.recommendation = recommendation;

    // Proposal Quality Assistant analysis
    const weakFields = [];
    const followUps = [];
    const followUpQuestionsMap = {
        summary: "What is the primary goal of this solution? Can you define who the end users are?",
        diagnosis: "What specific manual steps are currently taken? How long does each step take or how much does it cost?",
        targetState: "What is the detailed step-by-step user journey? How does the solution integrate with other tools?",
        businessValue: "What is the estimated ROI? What are the key success metrics for the business?",
        scope: "What features are absolutely required for the very first launch vs nice-to-haves?",
        outOfScope: "What is the most tempting feature to add that must be kept out of scope to avoid delays?",
        risks: "What dependencies, API limits, or security restrictions might we encounter?",
        nextSteps: "What is the first action to take today to kick off this project?"
    };

    track.questions.forEach(q => {
        const val = formData.get(q.id).trim();
        if (val.length < 25) {
            weakFields.push(q.label);
            followUps.push(followUpQuestionsMap[q.id]);
        }
    });

    // Value framing recommendation
    let valueFraming = "";
    if (currentTrack === "ai") {
        valueFraming = "Frame the value around time saved, response quality, data reliability, and safe fallback behavior.";
    } else if (currentTrack === "web") {
        valueFraming = "Frame the value around user workflow clarity, conversion, reduced admin effort, and maintainability.";
    } else if (currentTrack === "automation") {
        valueFraming = "Frame the value around manual work removed, speed of execution, lower error rate, and system reliability.";
    }

    proposalData.qualityAssistant = {
        weakFields: weakFields,
        followUps: followUps,
        valueFraming: valueFraming,
        checklist: [
            "Is the problem clearly stated?",
            "Is the MVP scope narrow enough?",
            "Are risks and assumptions visible?",
            "Is the recommended package easy to justify?",
            "Are next steps actionable?"
        ]
    };

    // Populate proposal preview document DOM
    document.getElementById("out-project-title").textContent = proposalData.projectName.toUpperCase();
    document.getElementById("out-track-type").textContent = proposalData.trackName;
    
    // Completeness & Clarity status indicators
    document.getElementById("out-completeness").textContent = proposalData.completeness;
    const claritySpan = document.getElementById("out-clarity-status");
    claritySpan.textContent = proposalData.clarityStatus;
    claritySpan.className = statusClass;

    document.getElementById("out-summary").textContent = proposalData.answers.summary;
    document.getElementById("out-diagnosis").textContent = proposalData.answers.diagnosis;
    document.getElementById("out-target-state").textContent = proposalData.answers.targetState;
    document.getElementById("out-business-value").textContent = proposalData.answers.businessValue;
    document.getElementById("out-recommended-scope").textContent = proposalData.answers.scope;
    document.getElementById("out-out-of-scope").textContent = proposalData.answers.outOfScope;
    document.getElementById("out-risks").textContent = proposalData.answers.risks;
    document.getElementById("out-next-steps").textContent = proposalData.answers.nextSteps;

    // System Recommendation
    document.getElementById("out-recommendation").textContent = proposalData.recommendation;

    // Render Quality Assistant DOM
    const qaContainer = document.getElementById("out-quality-assistant");
    qaContainer.innerHTML = "";

    // Weak fields section
    const weakSection = document.createElement("div");
    weakSection.className = "qa-sub-section";
    const weakTitle = document.createElement("h4");
    weakTitle.textContent = "Missing / Weak Areas";
    weakSection.appendChild(weakTitle);
    
    if (weakFields.length === 0) {
        const successDiv = document.createElement("div");
        successDiv.className = "qa-success-msg";
        successDiv.innerHTML = "<span>✨ All fields have strong clarity! Excellent draft.</span>";
        weakSection.appendChild(successDiv);
    } else {
        const weakList = document.createElement("ul");
        weakList.className = "qa-list";
        weakFields.forEach(field => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="qa-badge-weak">Weak</span> <strong>${field}</strong>: Needs more detail (fewer than 25 characters).`;
            weakList.appendChild(li);
        });
        weakSection.appendChild(weakList);
    }
    qaContainer.appendChild(weakSection);

    // Follow-up questions section
    const followSection = document.createElement("div");
    followSection.className = "qa-sub-section";
    const followTitle = document.createElement("h4");
    followTitle.textContent = "Suggested Follow-up Questions";
    followSection.appendChild(followTitle);

    if (followUps.length === 0) {
        const successDiv = document.createElement("div");
        successDiv.className = "qa-success-msg";
        successDiv.innerHTML = "<span>✨ None - proposal is complete and clear.</span>";
        followSection.appendChild(successDiv);
    } else {
        const followList = document.createElement("ul");
        followList.className = "qa-list";
        followUps.forEach(q => {
            const li = document.createElement("li");
            li.textContent = q;
            followList.appendChild(li);
        });
        followSection.appendChild(followList);
    }
    qaContainer.appendChild(followSection);

    // Value framing recommendation section
    const valueSection = document.createElement("div");
    valueSection.className = "qa-sub-section";
    const valueTitle = document.createElement("h4");
    valueTitle.textContent = "Value Framing Recommendation";
    valueSection.appendChild(valueTitle);
    
    const valueP = document.createElement("p");
    valueP.style.fontStyle = "italic";
    valueP.style.color = "var(--text-secondary)";
    valueP.textContent = valueFraming;
    valueSection.appendChild(valueP);
    
    qaContainer.appendChild(valueSection);

    // Before you send checklist section
    const checkSection = document.createElement("div");
    checkSection.className = "qa-sub-section";
    const checkTitle = document.createElement("h4");
    checkTitle.textContent = "Before You Send Checklist";
    checkSection.appendChild(checkTitle);

    const checkList = document.createElement("ul");
    checkList.className = "qa-checklist";
    
    proposalData.qualityAssistant.checklist.forEach((item, idx) => {
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `chk-qa-${idx}`;
        
        const label = document.createElement("label");
        label.setAttribute("for", `chk-qa-${idx}`);
        label.textContent = item;
        label.style.cursor = "pointer";
        
        li.appendChild(checkbox);
        li.appendChild(label);
        checkList.appendChild(li);
    });
    checkSection.appendChild(checkList);
    qaContainer.appendChild(checkSection);

    // Render pricing package cards
    const packagesContainer = document.getElementById("pricing-packages-container");
    packagesContainer.innerHTML = "";

    track.packages.forEach(pkg => {
        const pkgCard = document.createElement("div");
        pkgCard.className = `package-card ${pkg.isRecommended ? 'recommended' : ''}`;

        if (pkg.isRecommended) {
            const badge = document.createElement("div");
            badge.className = "badge-recommended";
            badge.textContent = "RECOMMENDED";
            pkgCard.appendChild(badge);
        }

        pkgCard.innerHTML += `
            <h4 class="package-title">${pkg.name}</h4>
            <p class="package-desc">${pkg.desc}</p>
            <div class="package-meta-item">
                <strong>Scope Included</strong>
                <span>${pkg.scope}</span>
            </div>
            <div class="package-meta-item">
                <strong>Value Framed</strong>
                <span>${pkg.value}</span>
            </div>
            <div class="package-meta-item">
                <strong>Recommended Use Case</strong>
                <span>${pkg.recommended}</span>
            </div>
        `;

        packagesContainer.appendChild(pkgCard);
    });

    // Show/Hide output sections
    previewPlaceholder.classList.add("hidden");
    proposalOutput.classList.remove("hidden");

    // Enable export actions
    copyBtn.removeAttribute("disabled");
    downloadBtn.removeAttribute("disabled");

    // Scroll to preview on mobile/tablets
    if (window.innerWidth <= 1024) {
        proposalOutput.scrollIntoView({ behavior: 'smooth' });
    }
}

// Construct Proposal Markdown Structure
function generateMarkdown() {
    if (!proposalData) return "";

    const track = projectTracks[currentTrack];
    
    let md = `# ${proposalData.projectName.toUpperCase()}\n\n`;
    md += `**Date:** ${proposalData.timestamp}\n`;
    md += `**Project Track:** ${proposalData.trackName}\n`;
    md += `**Discovery Completeness:** ${proposalData.completeness}\n`;
    md += `**Clarity Status:** ${proposalData.clarityStatus}\n`;
    md += `**Generated By:** FAPP by BotCentralHub\n\n`;
    md += `---\n\n`;
    
    md += `## 1. Project Summary\n${proposalData.answers.summary}\n\n`;
    md += `## 2. Problem Diagnosis\n${proposalData.answers.diagnosis}\n\n`;
    md += `## 3. Target State\n${proposalData.answers.targetState}\n\n`;
    md += `## 4. Business Value\n${proposalData.answers.businessValue}\n\n`;
    md += `## 5. Recommended Scope (MVP)\n${proposalData.answers.scope}\n\n`;
    md += `## 6. What is Outside MVP (Out of Scope)\n${proposalData.answers.outOfScope}\n\n`;
    md += `## 7. Risks and Open Questions\n${proposalData.answers.risks}\n\n`;
    md += `## 8. Suggested Next Steps\n${proposalData.answers.nextSteps}\n\n`;
    md += `## 9. System Recommendation\n${proposalData.recommendation}\n\n`;
    
    md += `## 10. Proposal Quality Assistant\n\n`;
    
    md += `### Missing / Weak Areas\n`;
    if (proposalData.qualityAssistant.weakFields.length === 0) {
        md += `* All fields have strong clarity! Excellent draft.\n\n`;
    } else {
        proposalData.qualityAssistant.weakFields.forEach(field => {
            md += `* **${field}**: Needs more detail (fewer than 25 characters)\n`;
        });
        md += `\n`;
    }

    md += `### Suggested Follow-up Questions\n`;
    if (proposalData.qualityAssistant.followUps.length === 0) {
        md += `* None - proposal is complete and clear.\n\n`;
    } else {
        proposalData.qualityAssistant.followUps.forEach(q => {
            md += `* ${q}\n`;
        });
        md += `\n`;
    }

    md += `### Value Framing Recommendation\n${proposalData.qualityAssistant.valueFraming}\n\n`;

    md += `### Before You Send Checklist\n`;
    proposalData.qualityAssistant.checklist.forEach(item => {
        md += `- [ ] ${item}\n`;
    });
    md += `\n`;
    
    md += `## 11. Pricing & Packaging Options\n\n`;
    
    track.packages.forEach(pkg => {
        md += `### ${pkg.name} ${pkg.isRecommended ? '(Recommended)' : ''}\n`;
        md += `* **Description:** ${pkg.desc}\n`;
        md += `* **Scope:** ${pkg.scope}\n`;
        md += `* **Value:** ${pkg.value}\n`;
        md += `* **Use Case:** ${pkg.recommended}\n\n`;
    });

    return md;
}

// Fallback copy method for non-secure / file:// protocols
function fallbackCopyToClipboard(text, onSuccess) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // Keep it off-screen and static
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "2em";
    textarea.style.height = "2em";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "none";
    textarea.style.background = "transparent";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        const successful = document.execCommand("copy");
        if (successful) {
            onSuccess();
        } else {
            console.error("Fallback copy command was unsuccessful");
        }
    } catch (err) {
        console.error("Fallback copy failed: ", err);
    } finally {
        document.body.removeChild(textarea);
    }
}

// Copy markdown to clipboard with fallback
function copyToClipboard() {
    const markdownText = generateMarkdown();
    if (!markdownText) return;

    function showToast() {
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 2500);
    }

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(markdownText).then(() => {
            showToast();
        }).catch(err => {
            console.warn("navigator.clipboard failed, trying fallback: ", err);
            fallbackCopyToClipboard(markdownText, showToast);
        });
    } else {
        fallbackCopyToClipboard(markdownText, showToast);
    }
}

// Download markdown file
function downloadMarkdownFile() {
    const markdownText = generateMarkdown();
    if (!markdownText) return;

    const sanitizedName = proposalData.projectName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    
    const filename = `${sanitizedName || "untitled-fapp-project"}.md`;
    const blob = new Blob([markdownText], { type: "text/markdown;charset=utf-8;" });
    
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Reset form to initial state
function resetForm() {
    discoveryForm.reset();
    proposalData = null;
    
    // Reset outputs
    document.getElementById("out-project-title").textContent = "PROJECT VALUE ARCHITECTURE";
    document.getElementById("out-track-type").textContent = "-";
    document.getElementById("out-completeness").textContent = "-";
    const claritySpan = document.getElementById("out-clarity-status");
    claritySpan.textContent = "-";
    claritySpan.className = "";
    
    document.getElementById("out-summary").textContent = "";
    document.getElementById("out-diagnosis").textContent = "";
    document.getElementById("out-target-state").textContent = "";
    document.getElementById("out-business-value").textContent = "";
    document.getElementById("out-recommended-scope").textContent = "";
    document.getElementById("out-out-of-scope").textContent = "";
    document.getElementById("out-risks").textContent = "";
    document.getElementById("out-next-steps").textContent = "";
    document.getElementById("out-recommendation").textContent = "";
    document.getElementById("out-quality-assistant").innerHTML = "";
    document.getElementById("pricing-packages-container").innerHTML = "";
    
    // Show/Hide sections
    previewPlaceholder.classList.remove("hidden");
    proposalOutput.classList.add("hidden");
    
    // Disable export actions
    copyBtn.setAttribute("disabled", "true");
    downloadBtn.setAttribute("disabled", "true");
}

// Setup Event Listeners
function setupEventListeners() {
    // Track selector clicks
    trackSelector.addEventListener("click", (e) => {
        const btn = e.target.closest(".track-btn");
        if (btn) {
            const trackKey = btn.getAttribute("data-track");
            handleTrackChange(trackKey);
        }
    });

    // Form submission
    discoveryForm.addEventListener("submit", generateProposal);

    // Export buttons
    copyBtn.addEventListener("click", copyToClipboard);
    downloadBtn.addEventListener("click", downloadMarkdownFile);

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener("click", resetForm);
    }
}

// Initialize Application
function init() {
    setupEventListeners();
    // Default load AI Track
    handleTrackChange("ai");
}

document.addEventListener("DOMContentLoaded", init);
