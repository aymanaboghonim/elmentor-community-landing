# Project Constitution: Elmentor Community Landing Page

**Document Version:** 1.0  
**Last Updated:** November 18, 2025  
**Status:** Active

---

## Purpose

This document establishes the non-negotiable rules, principles, and standards that govern the development, deployment, and maintenance of the Elmentor Community Landing Page. All technical decisions, code contributions, and architectural choices must align with these principles.

---

## Article I: Technology & Tooling Standards

### Section 1.1: Core Technology Stack

**Mandatory Requirements:**
- **Build Tool:** Vite (latest stable version)
- **UI Library:** React (latest stable version)
- **Language:** JavaScript/TypeScript (ES6+ syntax required)

### Section 1.2: Version Control Policy

**Non-Negotiable Rules:**
- Only the **latest stable, official, or LTS (Long-Term Support)** versions of all frameworks, libraries, and tools are permitted
- Pre-release, beta, or experimental versions are **strictly prohibited** in production code
- All dependencies must be actively maintained with recent updates (within the last 12 months)

### Section 1.3: Documentation as Source of Truth

**Mandatory Practice:**
- Official documentation must serve as the **primary source of truth** for all implementation decisions
- Community tutorials, Stack Overflow solutions, or third-party guides may be consulted but must be validated against official documentation
- When conflicts arise, official documentation takes precedence

### Section 1.4: Dependency Management

**Requirements:**
- Minimize external dependencies; prefer native solutions when practical
- All dependencies must be explicitly justified and documented
- Regular security audits of dependencies are mandatory

---

## Article II: Architecture & Design Principles

### Section 2.1: Application Architecture

**Mandatory Requirements:**
- The final application must be a **purely static site** with zero backend dependencies
- No server-side rendering (SSR) or server-side logic permitted
- All functionality must execute client-side in the browser
- The build output must consist solely of static HTML, CSS, and JavaScript files

### Section 2.2: Responsive Design Standards

**Non-Negotiable Requirements:**
- **Mobile-first design approach** is mandatory
- The site must be fully responsive across all modern devices:
  - Mobile phones (320px - 480px)
  - Tablets (481px - 768px)
  - Laptops (769px - 1024px)
  - Desktops (1025px+)
- Touch interactions must be optimized for mobile devices
- All content must be accessible without horizontal scrolling on any device

### Section 2.3: User Interface Standards

**Mandatory Characteristics:**
- Design must be **modern, clean, and professional**
- Consistent visual hierarchy across all sections
- Readable typography with appropriate contrast ratios (WCAG AA minimum)
- Coherent color scheme and branding
- Intuitive navigation patterns

### Section 2.4: User Experience Requirements

**Navigation Standards:**
- **Smooth scrolling** must be implemented for all section transitions
- Navigation must be intuitive and predictable
- Page load time must be optimized (target: under 3 seconds on 3G)
- Interactive elements must provide clear visual feedback
- Accessibility standards (WCAG 2.1 Level AA minimum) must be met

### Section 2.5: Required Page Sections

**Mandatory Sections:**
1. **Hero Section** - Primary landing area with compelling call-to-action
2. **About Section** - Overview of Elmentor Community
3. **Circles Section** - Community circles or groups information
4. **News & Activities Section** - Latest updates and events
5. **Founders Section** - Information about community founders
6. **Call-to-Action (CTA) Section** - Final engagement opportunity

---

## Article III: Deployment & Workflow Standards

### Section 3.1: Hosting Platform

**Mandatory Requirement:**
- The application **must be optimized for and deployed to GitHub Pages**
- The build configuration must account for GitHub Pages base URL requirements
- All assets must use relative or properly configured absolute paths

### Section 3.2: Deployment Automation

**Non-Negotiable Requirements:**
- Deployment **must be fully automated** using GitHub Actions
- The workflow must:
  - Trigger on pushes to the main/master branch
  - Build the project using the production configuration
  - Deploy the build artifact to GitHub Pages
  - Provide clear status indicators for deployment success/failure

### Section 3.3: Forbidden Practices

**Strictly Prohibited:**
- Manual deployment processes
- The classic method of **pushing a build folder to a `gh-pages` branch is strictly forbidden**
- Committing build artifacts (dist/, build/) to version control
- Manual file uploads to hosting services
- Any deployment method that bypasses the CI/CD pipeline

### Section 3.4: Repository Standards

**Requirements:**
- Clear, descriptive commit messages following conventional commit format
- Regular commits with logical, atomic changes
- Protected main branch with required status checks
- Comprehensive README.md with setup and deployment instructions

---

## Article IV: Code Quality & Standards

### Section 4.1: Code Organization

**Requirements:**
- Logical component structure following React best practices
- Clear separation of concerns (components, styles, utilities, assets)
- Consistent naming conventions (PascalCase for components, camelCase for functions)
- Modular, reusable component design

### Section 4.2: Performance Standards

**Mandatory Optimizations:**
- Lazy loading for images and heavy assets
- Minified and bundled production builds
- Optimized asset sizes (compressed images, tree-shaken code)
- Efficient rendering (minimize unnecessary re-renders)

### Section 4.3: Browser Compatibility

**Requirements:**
- Support for all modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- Graceful degradation for older browsers where practical
- Progressive enhancement approach

---

## Article V: Development Workflow

### Section 5.1: Development Environment

**Standards:**
- Local development server with hot module replacement (HMR)
- Environment-specific configurations (development vs. production)
- Clear error messages and debugging capabilities

### Section 5.2: Testing Standards

**Requirements:**
- Manual testing on multiple devices and browsers before deployment
- Validation of all interactive elements
- Verification of responsive behavior at all breakpoints
- Accessibility testing with keyboard navigation and screen readers

### Section 5.3: Version Control Workflow

**Standards:**
- Meaningful branch names for feature development
- Regular synchronization with the main branch
- Clean commit history with descriptive messages

---

## Article VI: Amendment Process

### Section 6.1: Constitution Updates

This constitution may be amended only when:
- Technical requirements change due to platform updates
- New best practices emerge that significantly improve quality
- Security considerations necessitate changes

All amendments must be documented with clear justification and effective date.

---

## Article VII: Enforcement

### Section 7.1: Compliance

**All code, configurations, and deployments must comply with this constitution.**

Non-compliance may result in:
- Code review rejection
- Deployment rollback
- Required refactoring

---

**By proceeding with this project, all contributors agree to uphold the principles and standards outlined in this constitution.**

---

*End of Project Constitution*
