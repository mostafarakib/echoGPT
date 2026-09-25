export interface ImageModel {
  id: string;
  name: string;
  provider: string;
}

export const imageModels: ImageModel[] = [
  { id: "nano-banana-2-lite", name: "Nano Banana 2 Lite", provider: "Google" },
  { id: "nano-banana-pro", name: "Nano Banana Pro", provider: "Google" },
  { id: "midjourney-v8-1", name: "Midjourney v8.1", provider: "Midjourney" },
  { id: "gpt-image-2", name: "GPT Image 2", provider: "OpenAI" },
  { id: "flux-2", name: "Flux 2", provider: "Black Forest Labs" },
];
