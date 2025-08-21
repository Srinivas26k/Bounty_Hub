import React from "react";

export interface DocSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const docsSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started Guide",
    content: (
      <>
        <h2>Getting Started</h2>
        <p>
          Welcome to OS Hub! Learn how to create an account, manage your profile, and understand the basics of the platform.
        </p>
      </>
    ),
  },
  {
    id: "maintainer-guide",
    title: "Maintainer's Guide",
    content: (
      <>
        <h2>Maintainer's Guide</h2>
        <p>
          Step-by-step instructions for posting issues, setting bounty amounts, and reviewing submissions.
        </p>
      </>
    ),
  },
  {
    id: "contributor-guide",
    title: "Contributor's Guide",
    content: (
      <>
        <h2>Contributor's Guide</h2>
        <p>
          Guidance on browsing bounties, claiming tasks, submitting pull requests, and earning rewards.
        </p>
      </>
    ),
  },
  {
    id: "api-docs",
    title: "API Documentation",
    content: (
      <>
        <h2>API Documentation</h2>
        <p>
          Find API endpoints, usage examples, and authentication methods here.
        </p>
      </>
    ),
  },
  {
    id: "faq",
    title: "Frequently Asked Questions (FAQ)",
    content: (
      <>
        <h2>FAQ</h2>
        <p>
          Answers to common questions about using OS Hub and troubleshooting tips.
        </p>
      </>
    ),
  },
  {
    id: "best-practices",
    title: "Best Practices & Workflow",
    content: (
      <>
        <h2>Best Practices & Workflow</h2>
        <p>
          Learn how to follow recommended workflows and maintain high code quality.
        </p>
      </>
    ),
  },
];
