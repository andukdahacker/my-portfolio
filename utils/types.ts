import { IconType } from "react-icons";

export interface TimelineData {
  date: string;
  title: string;
  content: string;
  icon: IconType[];
  link: string;
}

export interface ProjectData {
  projectName: string;
  idea: string;
  architecture: Array<ArchitectureContent>;
  learningPoints: Array<LearningPointContent>;
  image: string;
  date: string;
  link: string;
  repoLink: string;
}

export interface ArchitectureContent {
  [key: string]: Array<TechDetails>;
}

export interface LearningPointContent {
  [key: string]: Array<LearningPointDetail>;
}

export interface TechDetails {
  name: string;
  icon: IconType;
  intro: string;
  purpose: string;
  txtColor: string;
  bgColor: string;
}

export interface LearningPointDetail {
  point: string;
  detail: string;
}
