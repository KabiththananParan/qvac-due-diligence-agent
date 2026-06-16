# agent-architecture.md

# QVAC Due Diligence Agent - Agent Architecture

## Purpose

This document defines the architecture of the multi-agent system used in the QVAC Due Diligence Agent.

The goal is to transform startup documents into a structured investment recommendation through a series of specialized AI agents.

Each agent has a clearly defined responsibility, input, and output.

---

# Architecture Overview

Uploaded Documents
↓
Document Analyst
↓
Startup Profile
↓
────────────────────────────
↓            ↓            ↓            ↓
Market     Team        Risk      Financial
Analyst    Analyst     Analyst   Analyst
↓            ↓            ↓            ↓
────────────────────────────
↓
Investment Advisor
↓
Final Report

---

# Design Principles

## Single Responsibility

Each agent performs one specialized task.

Agents should not overlap responsibilities.

---

## Structured Communication

Agents communicate using structured data objects rather than raw documents.

---

## Explainability

Every score must be supported by evidence and reasoning.

---

## Independence

Market, Team, Risk, and Financial Analysts operate independently.

No direct communication occurs between analyst agents in Version 1.

---

# Agent 1 - Document Analyst

## Purpose

Convert uploaded startup documents into a structured startup profile.

This agent acts as the entry point of the AI pipeline.

---

## Input

Uploaded Documents

Examples:

* pitch-deck.pdf
* financials.pdf
* whitepaper.pdf

---

## Responsibilities

Extract:

* Startup Name
* Industry
* Startup Stage
* Funding Request
* Problem Statement
* Proposed Solution
* Business Model
* Revenue Model
* Target Customers
* Key Features
* Competitive Advantage

---

## Output

Startup Profile

The Startup Profile becomes the primary input for all downstream agents.

---

# Agent 2 - Market Analyst

## Purpose

Evaluate the startup's market opportunity and competitive position.

---

## Input

Startup Profile

---

## Key Questions

* How large is the addressable market?
* Is the market growing?
* How competitive is the industry?
* Does the startup solve a meaningful problem?
* Is there evidence of demand?

---

## Responsibilities

Analyze:

* Market Size
* Growth Potential
* Industry Trends
* Competition
* Product Positioning

---

## Output

Market Analysis Result

Includes:

* Market Score
* Strengths
* Weaknesses
* Evidence
* Insights
* Confidence Level

---

# Agent 3 - Team Analyst

## Purpose

Evaluate the quality and readiness of the startup team.

---

## Input

Startup Profile

---

## Key Questions

* Do founders have relevant expertise?
* Does the team possess required skills?
* Are important roles missing?
* Is the team capable of execution?

---

## Responsibilities

Analyze:

* Founder Experience
* Team Composition
* Skill Coverage
* Execution Capability

---

## Output

Team Analysis Result

Includes:

* Team Score
* Strengths
* Weaknesses
* Evidence
* Insights
* Confidence Level

---

# Agent 4 - Risk Analyst

## Purpose

Identify risks that could negatively impact startup success.

---

## Input

Startup Profile

---

## Key Questions

* What business risks exist?
* What technical risks exist?
* What market risks exist?
* What regulatory risks exist?
* What execution risks exist?

---

## Responsibilities

Analyze:

* Business Risks
* Technical Risks
* Market Risks
* Regulatory Risks
* Operational Risks

---

## Output

Risk Analysis Result

Includes:

* Risk Score
* Strengths
* Weaknesses
* Evidence
* Insights
* Confidence Level

---

# Agent 5 - Financial Analyst

## Purpose

Evaluate the startup's financial assumptions and funding strategy.

---

## Input

Startup Profile

---

## Key Questions

* Is the funding request reasonable?
* Is the revenue model realistic?
* Are growth assumptions credible?
* Is the business financially sustainable?

---

## Responsibilities

Analyze:

* Funding Requirements
* Revenue Strategy
* Monetization Model
* Financial Sustainability

---

## Output

Financial Analysis Result

Includes:

* Financial Score
* Strengths
* Weaknesses
* Evidence
* Insights
* Confidence Level

---

# Agent 6 - Investment Advisor

## Purpose

Generate a final investment recommendation based on all specialist analyses.

The Investment Advisor does not perform new analysis.

Its role is to synthesize and summarize findings from all analyst agents.

---

## Input

Market Analysis Result

Team Analysis Result

Risk Analysis Result

Financial Analysis Result

---

## Responsibilities

Combine:

* Market Evaluation
* Team Evaluation
* Risk Evaluation
* Financial Evaluation

Generate:

* Overall Score
* Recommendation
* Confidence Level
* Executive Summary
* Investment Rationale

---

## Recommendation Categories

### INVEST

Overall Score:

80 - 100

Indicates strong investment potential.

---

### CONSIDER INVESTMENT

Overall Score:

60 - 79

Indicates moderate potential with manageable risks.

---

### HIGH RISK / AVOID

Overall Score:

0 - 59

Indicates significant concerns or uncertainty.

---

## Output

Investment Recommendation

Includes:

* Overall Score
* Recommendation
* Confidence Level
* Executive Summary
* Key Strengths
* Key Risks
* Investment Rationale

---

# Agent Execution Strategy

## Phase 1

Document Processing

Uploaded Documents
↓
Document Analyst
↓
Startup Profile

---

## Phase 2

Parallel Analysis

Startup Profile
↓
────────────────────────────
↓            ↓            ↓            ↓
Market     Team        Risk      Financial
Analyst    Analyst     Analyst   Analyst

All four analyst agents execute independently.

This reduces processing time and improves scalability.

---

## Phase 3

Investment Recommendation

Market Analysis
+
Team Analysis
+
Risk Analysis
+
Financial Analysis
↓
Investment Advisor
↓
Final Recommendation

---

# Agent Communication Rules

## Allowed

Document Analyst
→ Startup Profile

Startup Profile
→ Analyst Agents

Analyst Agents
→ Investment Advisor

Investment Advisor
→ Final Report

---

## Not Allowed

Market Analyst
→ Team Analyst

Risk Analyst
→ Financial Analyst

Team Analyst
→ Market Analyst

Analyst-to-Analyst communication is intentionally excluded from Version 1.

---

# Future Architecture Enhancements

Version 2

* Chat With Analysis
* Interactive Follow-Up Questions

Version 3

* Agent Debate System
* Historical Startup Comparisons
* Local RAG Knowledge Base
* Evidence Retrieval Layer

These features are intentionally excluded from the MVP to maintain simplicity and development speed.

---

# Success Criteria

The system successfully:

1. Extracts structured startup information from uploaded documents.
2. Executes specialized analyst agents independently.
3. Produces transparent and explainable evaluations.
4. Generates a final investment recommendation.
5. Operates entirely on-device using QVAC.
