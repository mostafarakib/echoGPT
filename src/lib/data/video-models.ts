export interface VideoModel {
  id: string;
  name: string;
  provider: string;
}

export const videoModels: VideoModel[] = [
  { id: "veo-3-1-fast", name: "Veo 3.1 fast", provider: "Google" },
  { id: "kling-3-0", name: "Kling 3.0", provider: "Kuaishou" },
  { id: "seedance-2-0", name: "Seedance 2.0", provider: "ByteDance" },
];
