# mvp-roadmap.md

# QVAC Due Diligence Agent - MVP Roadmap

## Purpose

This roadmap defines the implementation order for the project.

The primary objective is to achieve a working end-to-end demo as quickly as possible.

Rule:

Always maintain a working system.

Do not build advanced features before the core workflow works.

---

# Development Philosophy

## Build Vertically

Avoid building all frontend first and all backend later.

Instead:

Build one complete feature at a time.

Example:

Upload
↓
Backend Upload
↓
Frontend Upload
↓
Test

Then move to the next feature.

---

# MVP Definition

A successful MVP allows a user to:

1. Upload startup documents
2. Extract document text
3. Generate startup profile
4. Run analyst agents
5. Generate recommendation
6. View report

Everything else is optional.

---

# Phase 1 - Foundation

## Goal

Create a runnable application structure.

---

## Tasks

Frontend Setup

* React
* TypeScript
* Routing

Backend Setup

* Node.js
* Express
* Environment Configuration

Project Setup

* README
* Documentation
* Git Repository

---

## Success Criteria

Application starts successfully.

Frontend and backend communicate successfully.

No AI functionality required.

---

# Phase 2 - Document Upload System

## Goal

Allow users to upload startup documents.

---

## Tasks

Frontend

* Upload Screen
* Drag and Drop Area
* File List
* Validation Messages

Backend

* Upload Endpoint
* File Storage
* File Validation

---

## Supported Files

Version 1

* PDF

Maximum

* 5 Files

---

## Success Criteria

User uploads one or more PDF documents successfully.

---

# Phase 3 - Document Extraction

## Goal

Convert uploaded documents into usable text.

---

## Tasks

Document Processing

* PDF Reading
* Text Extraction

Storage

* Store extracted text
* Associate extracted text with uploaded documents

---

## Output

Document Text

Example:

Startup Name

Problem Statement

Business Information

Financial Information

---

## Success Criteria

System successfully extracts readable text from uploaded PDFs.

---

# Phase 4 - Startup Profile Generation

## Goal

Generate a structured startup profile from extracted text.

---

## Tasks

Document Analyst

Responsibilities:

* Identify startup name
* Identify industry
* Identify problem
* Identify solution
* Identify business model
* Identify funding request

---

## Output

Startup Profile

---

## Success Criteria

System generates a structured startup profile.

---

# Phase 5 - Analyst Agents

## Goal

Implement specialist analyst agents.

---

## Agent 1

Market Analyst

Output:

* Market Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Agent 2

Team Analyst

Output:

* Team Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Agent 3

Risk Analyst

Output:

* Risk Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Agent 4

Financial Analyst

Output:

* Financial Score
* Strengths
* Weaknesses
* Evidence
* Insights

---

## Success Criteria

All analyst agents return structured outputs.

---

# Phase 6 - Investment Advisor

## Goal

Generate final investment recommendation.

---

## Inputs

* Market Analysis
* Team Analysis
* Risk Analysis
* Financial Analysis

---

## Outputs

* Overall Score
* Recommendation
* Confidence Level
* Executive Summary

---

## Recommendation Categories

80 - 100

INVEST

60 - 79

CONSIDER INVESTMENT

0 - 59

HIGH RISK / AVOID

---

## Success Criteria

System generates final recommendation successfully.

---

# Phase 7 - Analysis Screen

## Goal

Visualize agent execution.

---

## Tasks

Progress Tracking

Agent Status Cards

Activity Feed

Execution Updates

---

## Example

✓ Documents Processed

✓ Startup Profile Generated

✓ Market Analysis Complete

✓ Risk Analysis Complete

✓ Financial Analysis Complete

✓ Recommendation Generated

---

## Success Criteria

User can observe system progress.

---

# Phase 8 - Report Screen

## Goal

Display complete due diligence report.

---

## Sections

Startup Summary

Market Analysis

Team Analysis

Risk Analysis

Financial Analysis

Final Recommendation

---

## Success Criteria

User receives a complete investment report.

---

# Phase 9 - Demo Preparation

## Goal

Prepare submission assets.

---

## Tasks

README

Architecture Diagram

Screenshots

Demo Video

Submission Documentation

---

## Demo Flow

Open Application

Upload Documents

Run Analysis

Display Agent Progress

Display Report

Show Final Recommendation

---

# Stretch Goals

Only begin after MVP is complete.

---

## Version 2

Chat With Analysis

Example Questions:

* Why is Risk Score low?
* Which competitors were identified?
* What assumptions affected Financial Score?

---

## Version 3

Local RAG

Document Retrieval

Knowledge Base

Follow-up Reasoning

---

## Version 4

Agent Debate System

Analyst Collaboration

Counterarguments

Consensus Building

---

## Version 5

PDF Export

Report Download

Professional Investment Report

---

# Features Explicitly Excluded From MVP

Do Not Build Initially

* User Authentication
* Multi-Tenant Architecture
* Cloud Deployment
* Agent Debate System
* RAG Pipelines
* Vector Databases
* Database Optimization
* Historical Comparisons
* Mobile App

---

# Emergency Plan

If deadline approaches:

Keep:

* Upload
* Document Extraction
* Startup Profile
* Market Analyst
* Risk Analyst
* Investment Advisor
* Report Screen

Remove:

* Team Analyst
* Financial Analyst
* Chat Features
* RAG Features

A smaller working system is better than a larger unfinished system.

---

# MVP Success Criteria

A user can upload startup documents and receive a structured, explainable investment recommendation generated entirely on-device using QVAC.

The project demonstrates:

* Local AI
* Multi-Agent Architecture
* Privacy-First Processing
* Explainable Decision Making
* Real-World Business Value
