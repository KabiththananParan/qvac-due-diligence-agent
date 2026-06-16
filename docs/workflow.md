# workflow.md

# QVAC Due Diligence Agent

## Project Overview

QVAC Due Diligence Agent is a privacy-first, local AI platform that helps investors, accelerators, and evaluators analyze startup documents and generate investment insights entirely on-device using QVAC.

The system uses multiple specialized AI agents to evaluate different aspects of a startup and provide a transparent, explainable recommendation.

No data leaves the user's device.

---

# Problem Statement

Evaluating startup opportunities is time-consuming and requires reviewing multiple documents such as:

* Pitch decks
* Whitepapers
* Business plans
* Financial reports

Investors often spend hours extracting key information, identifying risks, and comparing opportunities.

QVAC Due Diligence Agent automates the first stage of this process using local AI.

---

# Target Users

* Venture Capital Firms
* Angel Investors
* Startup Accelerators
* Grant Evaluation Committees
* Innovation Programs

---

# Core Value Proposition

* 100% Local AI Inference
* Privacy-Preserving Analysis
* Multi-Agent Evaluation
* Explainable Recommendations
* No Cloud Dependencies

---

# MVP Scope (Version 1)

Version 1 focuses on a complete end-to-end workflow.

Users can:

1. Upload startup documents
2. Analyze documents locally
3. View agent-by-agent evaluations
4. Receive an overall investment recommendation

Supported Files:

* PDF

Maximum Documents:

* Up to 5 documents per analysis

Examples:

* Pitch Deck
* Whitepaper
* Financial Report
* Business Plan

---

# User Journey

## Step 1

User opens the application.

---

## Step 2

User uploads one or more startup documents.

Example:

* pitch-deck.pdf
* financials.pdf
* whitepaper.pdf

---

## Step 3

System validates:

* File type
* File size
* Upload success

---

## Step 4

System extracts text from uploaded documents.

---

## Step 5

Document Analyst processes the documents and extracts:

* Startup name
* Industry
* Problem statement
* Proposed solution
* Business model
* Funding request

---

## Step 6

Market Analyst evaluates:

* Market opportunity
* Market size
* Competitive landscape
* Growth potential

Outputs:

* Market Score
* Market Insights

---

## Step 7

Team Analyst evaluates:

* Founder experience
* Team strengths
* Team weaknesses

Outputs:

* Team Score
* Team Insights

---

## Step 8

Risk Analyst evaluates:

* Business risks
* Market risks
* Technical risks
* Regulatory risks

Outputs:

* Risk Score
* Risk Insights

---

## Step 9

Financial Analyst evaluates:

* Revenue assumptions
* Funding requirements
* Financial sustainability

Outputs:

* Financial Score
* Financial Insights

---

## Step 10

Investment Advisor combines all evaluations and generates:

* Overall Score
* Recommendation
* Confidence Level

Recommendations:

* INVEST
* CONSIDER INVESTMENT
* HIGH RISK / AVOID

---

## Step 11

User views the final report.

---

# System Workflow

User Uploads Documents
↓
File Validation
↓
Text Extraction
↓
Document Analyst
↓
Market Analyst
↓
Team Analyst
↓
Risk Analyst
↓
Financial Analyst
↓
Investment Advisor
↓
Final Report

---

# Input

Version 1

* PDF Documents
* Maximum 5 Documents

Future Versions

* PDF
* PPTX
* DOCX

---

# Output

Generated Due Diligence Report

Fields:

* Startup Name
* Industry
* Executive Summary

Market Analysis

* Market Score
* Market Insights

Team Analysis

* Team Score
* Team Insights

Risk Analysis

* Risk Score
* Risk Insights

Financial Analysis

* Financial Score
* Financial Insights

Final Recommendation

* Overall Score
* Recommendation
* Confidence Level

---

# Example Output

Startup: HealthAI

Industry: Healthcare AI

Market Score: 82/100

Market Insight:
Strong market growth and increasing demand.

Team Score: 75/100

Team Insight:
Founders have relevant healthcare and AI experience.

Risk Score: 61/100

Risk Insight:
Regulatory approval may slow adoption.

Financial Score: 74/100

Financial Insight:
Revenue projections are reasonable but optimistic.

Overall Score: 73/100

Recommendation:
CONSIDER INVESTMENT

Confidence:
81%

---

# Future Versions

Version 2

* Chat with Analysis
* Follow-up Questions
* Interactive Insights

Examples:

* Why is the Risk Score low?
* What competitors were identified?
* What assumptions affected the Financial Score?

Version 3

* Local RAG
* Multi-document Knowledge Base
* Agent Debate System
* PDF Export
* Historical Comparison
* Offline Demonstration Mode

---

# Success Criteria

A user can upload multiple startup documents and receive a detailed, explainable investment evaluation generated entirely on-device using QVAC.

The report should provide transparent agent-level analysis, numerical scoring, and a final investment recommendation without relying on cloud-based AI services.
