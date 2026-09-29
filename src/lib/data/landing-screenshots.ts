export interface LandingScreenshot {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const landingScreenshots: LandingScreenshot[] = [
  {
    id: "chat",
    src: "/screenshots/new-chat.png",
    alt: "EchoGPT chat interface",
    caption: "Chat with any model, one workspace",
  },
  {
    id: "compare",
    src: "/screenshots/compare.png",
    alt: "EchoGPT Compare mode",
    caption: "Compare responses side by side",
  },
  {
    id: "jobAnalysis",
    src: "/screenshots/job-analysis.png",
    alt: "EchoGPT job analysis",
    caption: "Your Job Application mentor",
  },
];
