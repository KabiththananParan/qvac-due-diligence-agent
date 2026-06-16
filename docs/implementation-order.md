# implementation-order.md

# QVAC Due Diligence Agent - Implementation Order

## Purpose

This document defines the exact development sequence for the project.

The goal is to ensure that:

* A working demo exists as early as possible.
* Every completed task adds visible value.
* Development risk is minimized.
* Feature creep is avoided.

---

# Core Rule

Never start the next task until the current task works.

Every task must end with a testable outcome.

---

# Milestone 1 - Project Runs

## Task 1.1

Frontend Initialization

Goal:

Start the React application successfully.

Success Criteria:

* Frontend runs locally
* No errors
* Routing works

---

## Task 1.2

Backend Initialization

Goal:

Start backend server successfully.

Success Criteria:

* Backend runs locally
* No errors
* Health endpoint responds

---

## Task 1.3

Frontend ↔ Backend Connection

Goal:

Verify communication.

Success Criteria:

* Frontend receives backend response
* Basic API call works

---

# Milestone 2 - Upload System

## Task 2.1

Upload UI

Goal:

Create upload screen.

Features:

* Drag and drop area
* File selection
* Uploaded file list

Success Criteria:

* User can select files

---

## Task 2.2

Backend Upload Endpoint

Goal:

Accept uploaded PDFs.

Success Criteria:

* File reaches server
* File stored successfully

---

## Task 2.3

File Validation

Goal:

Validate uploads.

Rules:

* PDF only
* Maximum 5 files
* File size limits

Success Criteria:

* Invalid uploads rejected

---

## Task 2.4

Upload Integration

Goal:

Connect frontend and backend.

Success Criteria:

* User uploads files successfully
* Uploaded files displayed in UI

---

# Milestone 3 - Document Extraction

## Task 3.1

PDF Text Extraction

Goal:

Extract text from uploaded PDFs.

Success Criteria:

* Text successfully extracted

---

## Task 3.2

Extraction Verification

Goal:

Display extracted text for debugging.

Success Criteria:

* Extracted text visible
* Text quality verified

---

## Task 3.3

Extraction Pipeline

Goal:

Automatically process uploaded files.

Success Criteria:

Upload
↓
Extraction
↓
Text Available

---

# Milestone 4 - Startup Profile Generation

## Task 4.1

Document Analyst Design

Goal:

Define startup profile generation process.

Input:

Extracted Text

Output:

Startup Profile

---

## Task 4.2

Document Analyst Implementation

Goal:

Generate structured startup information.

Extract:

* Startup Name
* Industry
* Problem
* Solution
* Business Model
* Funding Request

Success Criteria:

Structured startup profile generated.

---

## Task 4.3

Startup Profile Viewer

Goal:

Display startup profile.

Success Criteria:

User can review extracted startup information.

---

# Milestone 5 - Market Analyst

## Task 5.1

Market Analysis Prompt Design

Goal:

Define market evaluation logic.

---

## Task 5.2

Market Analyst Implementation

Generate:

* Market Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Task 5.3

Market Analysis Display

Success Criteria:

Market analysis visible in UI.

---

# Milestone 6 - Risk Analyst

## Task 6.1

Risk Analysis Prompt Design

---

## Task 6.2

Risk Analyst Implementation

Generate:

* Risk Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Task 6.3

Risk Analysis Display

Success Criteria:

Risk analysis visible.

---

# Milestone 7 - Team Analyst

## Task 7.1

Team Analysis Prompt Design

---

## Task 7.2

Team Analyst Implementation

Generate:

* Team Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Task 7.3

Team Analysis Display

Success Criteria:

Team analysis visible.

---

# Milestone 8 - Financial Analyst

## Task 8.1

Financial Analysis Prompt Design

---

## Task 8.2

Financial Analyst Implementation

Generate:

* Financial Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Task 8.3

Financial Analysis Display

Success Criteria:

Financial analysis visible.

---

# Milestone 9 - Investment Advisor

## Task 9.1

Recommendation Logic Design

Inputs:

* Market Analysis
* Team Analysis
* Risk Analysis
* Financial Analysis

---

## Task 9.2

Investment Advisor Implementation

Generate:

* Overall Score
* Recommendation
* Confidence Level
* Executive Summary

---

## Task 9.3

Recommendation Display

Success Criteria:

Final recommendation visible.

---

# Milestone 10 - Analysis Screen

## Task 10.1

Agent Status System

States:

* Waiting
* Running
* Completed
* Failed

---

## Task 10.2

Progress Tracking

Display:

* Current Agent
* Progress Percentage

---

## Task 10.3

Activity Feed

Display events such as:

* Documents Processed
* Market Analysis Completed
* Recommendation Generated

---

# Milestone 11 - Report Screen

## Task 11.1

Startup Summary Section

---

## Task 11.2

Agent Analysis Sections

Display:

* Market Analysis
* Team Analysis
* Risk Analysis
* Financial Analysis

---

## Task 11.3

Final Recommendation Section

Display:

* Overall Score
* Recommendation
* Confidence
* Executive Summary

---

# Milestone 12 - QVAC Integration

## Task 12.1

Research QVAC SDK

Understand:

* Local inference
* Model loading
* Prompt execution

---

## Task 12.2

Connect Agents to QVAC

Replace mock outputs with QVAC-generated outputs.

---

## Task 12.3

Validate Local Execution

Success Criteria:

* No cloud dependency
* Inference performed locally

---

# Milestone 13 - Polish

## Task 13.1

Error Handling

---

## Task 13.2

Loading States

---

## Task 13.3

Empty States

---

## Task 13.4

Responsive Layout

---

# Milestone 14 - Submission Preparation

## Task 14.1

Architecture Diagram

---

## Task 14.2

README Completion

---

## Task 14.3

Screenshots

---

## Task 14.4

Demo Video

---

## Task 14.5

Hackathon Submission

---

# Emergency Cut Plan

If time is running out:

Keep:

* Upload System
* Document Analyst
* Market Analyst
* Risk Analyst
* Investment Advisor
* Report Screen

Remove:

* Team Analyst
* Financial Analyst
* Chat Features
* RAG Features
* Export Features

A working 4-agent system is better than an unfinished 6-agent system.

---

# Definition of Done

The project is complete when a user can:

1. Upload startup documents.
2. Extract document content.
3. Generate a startup profile.
4. Run multiple analyst agents.
5. Receive a transparent investment recommendation.
6. View a complete due diligence report.
7. Perform all AI processing locally through QVAC.
