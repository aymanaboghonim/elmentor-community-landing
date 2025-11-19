Objective:

Your primary task is to act as an expert senior frontend developer. Before writing any code, you must first generate two essential documents for building the "Elmentor Community" landing page:

A Project Constitution: A set of non-negotiable rules and principles that will govern the entire development process.

A Development Plan: A high-level, phased roadmap for building and deploying the project.

Project Context:

Project Name: Elmentor Community Landing Page

Description: A modern, static, single-page website.

Core Sections: Hero, About, Circles, News & Activities, Founders, and a Call-to-Action (CTA).

Part 1: Generate the Project Constitution

Create a formal document titled "Project Constitution" that outlines the following guiding principles. This document will serve as our quality and standards guide.

The Constitution must include the following principles:

Technology & Tooling:

Core Stack: The project must use Vite as the build tool and React as the UI library.

Version Control: Only the latest stable, official, or LTS versions of all frameworks, libraries, and tools are permitted.

Sources: Development must rely on official documentation as the primary source of truth.

Architecture & Design:

Application Type: The final output must be a purely static site with no backend dependencies.

Responsiveness: A mobile-first, fully responsive design is a mandatory requirement. The site must render perfectly on all modern devices.

User Interface: The design must be modern, clean, and professional.

User Experience: Navigation between sections must be implemented with smooth scrolling.

Deployment & Workflow:

Hosting Platform: The application will be optimized for and deployed to GitHub Pages.

Deployment Method: Deployment must be automated using a modern GitHub Actions workflow. This workflow should build the project and deploy the resulting artifact.

Forbidden Practices: The classic method of pushing a build folder to a gh-pages branch is strictly prohibited.

Part 2: Generate the Development Plan

Based on the project context, create a high-level "Development Plan" that breaks the project down into logical, iterative phases.

The plan should follow this general structure:

Phase 1: Foundation & Scaffolding

This phase focuses on creating the project's skeleton. It involves setting up the Vite + React project and creating placeholder components for each required section and the navbar. The output is a functional but unstyled local application.

Phase 2: Deployment & Live MVP

This phase is dedicated to establishing the CI/CD pipeline. It involves initializing the Git repository, pushing it to GitHub, and configuring the GitHub Actions workflow to deploy the barebones application. The output is a live, publicly accessible MVP on GitHub Pages.

Phase 3: Iterative Development & Styling

This phase involves fleshing out the application. It includes implementing the UI/UX, styling the components, adding content, and ensuring responsiveness. This should be an iterative process, building upon the live MVP.

Phase 4: Finalization & Polish

This final phase includes code cleanup, final testing across browsers and devices, and ensuring all principles from the Project Constitution have been met.

Your Task:

Please generate these two documents now. Await confirmation before proceeding to execute Phase 1 of the Development Plan.