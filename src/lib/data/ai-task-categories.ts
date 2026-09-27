import {
  Lightbulb,
  Rocket,
  Compass,
  Sparkles,
  Zap,
  Gauge,
  Users,
  FileText,
  Mail,
  MessageSquare,
  Gamepad2,
  Clapperboard,
  Bike,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { FaXTwitter, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface AiTask {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  badgeClassName?: string;
}

export interface AiTaskCategory {
  id: string;
  label: string;
  tasks: AiTask[];
}

export const aiTaskCategories: AiTaskCategory[] = [
  {
    id: "ideas",
    label: "Ideas",
    tasks: [
      {
        id: "think-outside-the-box",
        title: "Think Outside the Box",
        description: "Breakthrough ideas await your discovery",
        icon: Lightbulb,
      },
      {
        id: "startup",
        title: "Startup",
        description:
          "Get a list of ambitious startup ideas based on your area of interest",
        icon: Rocket,
      },
      {
        id: "innovate-and-elevate",
        title: "Innovate and Elevate",
        description: "Your guide to unique and fresh ideas",
        icon: Compass,
      },
      {
        id: "unleashing-creativity",
        title: "Unleashing Creativity",
        description: "Explore a world of brilliant ideas",
        icon: Sparkles,
      },
      {
        id: "idea-sparks",
        title: "Idea Sparks",
        description: "Ignite your creativity for innovative solutions",
        icon: Zap,
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    tasks: [
      {
        id: "max-productivity",
        title: "Max Productivity",
        description: "Max productivity, achieve more, stress less",
        icon: Gauge,
      },
      {
        id: "recruiting",
        title: "Recruiting",
        description: "Define the qualifications for any position",
        icon: Users,
      },
      {
        id: "cv-builder",
        title: "CV Builder",
        description: "Generate a creative resume",
        icon: FileText,
      },
      {
        id: "email",
        title: "Email",
        description: "Get help to craft a compelling email",
        icon: Mail,
      },
      {
        id: "interview-tips",
        title: "Interview Tips",
        description: "Receive helpful tips for your interview",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: "fun",
    label: "Fun",
    tasks: [
      {
        id: "gaming",
        title: "Gaming",
        description: "Get game recommendations and tips for your next session",
        icon: Gamepad2,
      },
      {
        id: "movie-time",
        title: "Movie Time",
        description: "Find the perfect movie for tonight's mood",
        icon: Clapperboard,
      },
      {
        id: "cycling-day",
        title: "Cycling Day",
        description: "Plan routes and tips for your next ride",
        icon: Bike,
      },
      {
        id: "outdoor-activities",
        title: "Outdoor Activities",
        description: "Discover fun things to do outside today",
        icon: Trees,
      },
      {
        id: "fun-with-buddies",
        title: "Fun with Buddies",
        description: "Get ideas for hanging out with friends",
        icon: Users,
      },
    ],
  },
  {
    id: "online-content",
    label: "Online Content",
    tasks: [
      {
        id: "x-posts",
        title: "X Posts",
        description: "Summarize your text into a post (Tweet)",
        icon: FaXTwitter,
        badgeClassName: "bg-black text-white",
      },
      {
        id: "youtube-scripts",
        title: "YouTube Scripts",
        description: "Create a script for your video on any topic",
        icon: FaYoutube,
        badgeClassName: "bg-red-600 text-white",
      },
      {
        id: "tiktok-posts",
        title: "TikTok Posts",
        description: "Craft TikTok posts on any topic",
        icon: FaTiktok,
        badgeClassName: "bg-black text-white",
      },
      {
        id: "tiktok-captions",
        title: "TikTok Captions",
        description: "Boost your TikTok views with appealing captions",
        icon: FaTiktok,
        badgeClassName: "bg-black text-white",
      },
      {
        id: "insta-content",
        title: "Insta Content",
        description: "Create Instagram posts on any topic",
        icon: FaInstagram,
        badgeClassName:
          "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white",
      },
      {
        id: "insta-reels",
        title: "Insta Reels",
        description: "Get creative descriptions for your Instagram Reels",
        icon: FaInstagram,
        badgeClassName:
          "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white",
      },
    ],
  },
];
