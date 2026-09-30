# EchoGPT Redesigned

A frontend redesign of the EchoGPT ecosystem, covering the web application, a marketing landing page, and a redesigned Chrome extension concept.

The main focus was not only on visual changes, but also on improving the overall navigation, responsiveness, usability, and consistency of the product.

**Live Demo:** https://echo-gpt-nine.vercel.app/  
**Extension Concept:** https://echo-gpt-nine.vercel.app/extension

---

## Project Overview

The project is divided into three main parts:

### 1. Landing Page

**Route:** `/`

A complete marketing page for EchoGPT with:

- Hero section
- Features
- AI models
- Product screenshots
- Pricing
- Testimonials
- FAQ
- Call-to-action
- Footer

The landing page is connected to the rest of the application where appropriate, rather than being treated as a completely separate mockup.

### 2. EchoGPT Web App

**Route:** `/chat` and other application routes

This is where most of the frontend work was done.

The redesigned application includes:

- Responsive and collapsible sidebar
- Mobile sidebar drawer
- Global search
- Recent chats with incremental loading
- Chat interface with model switching
- Compare mode for using multiple models
- Focus mode
- Image Studio
- Video Studio
- Connectors / MCP server interface
- Chat history with search and filtering
- Store for browsing available models
- AI Tasks with ready-made prompts
- AI Job Analysis
- AI SOP Builder with a multi-step workflow
- Dark, light, and system themes
- Settings with configurable default model

The interface is designed so that the sidebar and main content have independent scrolling areas, while important navigation elements remain accessible.

### 3. Chrome Extension Concept

**Route:** `/extension`

For the Chrome extension, I created a functional concept page that is styled around the constraints of a browser extension popup.

Rather than building and packaging an actual Chrome extension, I implemented the concept within the Next.js application so it could be demonstrated alongside the rest of the project.

It is also connected to the same frontend state used by the main application. For example, sending a message from the extension concept updates the chat history used by the main app instead of behaving like a disconnected static mockup.

### Extension Navigation Decision

The original extension uses a vertical navigation area on the side. Since an extension popup already provides a relatively narrow viewport, keeping a persistent vertical navigation area takes away valuable horizontal space from the main interaction area.

For the redesign, I moved the primary navigation to a bottom tab bar. This keeps the main sections easily accessible while giving the conversation and prompt interface the full available width.

---

## Additional UX Improvements

### Collapsible Sidebar

The sidebar can be expanded or minimized on larger screens, while mobile devices use a drawer-based navigation pattern.

This allows the user to keep more space available for the actual application when the full navigation is not needed.

### Global Search

I added a global search interface to make navigation and finding previous conversations more convenient.

### Recent Chats

Recent conversations are shown directly in the sidebar instead of being hidden behind a separate page.

The list loads in small batches rather than rendering the entire history at once. In a real application, chat history could eventually contain hundreds or thousands of conversations, so loading everything immediately would be unnecessary. Incremental loading keeps the sidebar lighter while still allowing older conversations to be accessed when needed.

### Help & Support

I moved lower-frequency items such as Support, Newsletter, Subscriptions, API Platform, and Discord out of the main sidebar navigation and into a menu accessible from the Settings area.

These options remain easy to reach, while the main sidebar has more room for actions users are likely to access regularly, including recent chats.

### Settings

Settings are organized into separate tabs such as:

- General
- Appearance
- Account
- Billing

The goal was to avoid turning the settings modal into one long list as more options are added in the future.

---

## Technologies

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Zustand
- Framer Motion
- next-themes
- Lucide React
- React Icons

### State Management

Zustand is used for client-side state such as:

- Sidebar state
- Chat state
- Compare mode
- Settings
- Modals

The state is separated into smaller stores rather than putting everything into one global store.

---

## Setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/mostafarakib/echoGPT.git
cd echoGPT
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

No environment variables or API keys are required for the current version.

## Assumptions & Limitations

This project focuses on demonstrating the frontend experience, so several backend-dependent features are mocked.

- There is no real backend or AI inference service. AI responses, image generation, video generation, and SOP generation are simulated with short delays.
- Authentication is not implemented. The application assumes an authenticated user and uses local/mock user data where needed.
- Account and Billing sections in Settings are currently placeholders.
- The History page includes a share action in the interface, but the actual sharing functionality is not connected to a backend.
- The model names shown in the interface are used for demonstrating the model-selection experience. No real model API is connected.
- Testimonials on the landing page are example content created for the redesign and are not presented as real customer testimonials.
- Compare mode is limited to three models at a time. This was mainly a UI decision so that multiple responses remain readable without making the interface too cramped.

## Design & Implementation Notes

A few of the changes were made specifically based on the constraints of the existing product rather than only visual preference.

For example, the sidebar was reorganized around the frequency of use: commonly accessed actions remain visible, while less frequently used support-related options are grouped together.

Similarly, the extension navigation was moved from the side to the bottom because the extension popup has much less horizontal space than the full web application.

The goal throughout the redesign was to keep the interface familiar enough to understand quickly while making navigation, spacing, responsiveness, and information hierarchy more practical.
