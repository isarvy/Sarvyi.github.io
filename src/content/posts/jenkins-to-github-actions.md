---
title: Moving 70+ pipelines from Jenkins to GitHub Actions
date: 2026-10-15
summary: Draft outline of what worked when standardizing CI/CD with reusable workflows.
---

> **Draft.** This is a starter outline taken from my resume. I will expand it with details and examples.

## Context

An enterprise customer had 70+ Jenkins pipelines with a lot of duplicated logic across teams.

## Approach

- Reusable workflows for the common build, test and deploy stages.
- Composite actions for small repeated steps.
- Policy and security checks (Checkov, Kyverno) gating infrastructure changes before deployment.

## To write up

- How the migration was sequenced to avoid downtime.
- What the reusable workflow interface looks like.
- Lessons learned.
