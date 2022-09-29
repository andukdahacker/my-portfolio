import {
  SiApollographql,
  SiCodeproject,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { ProjectData, TechDetails } from "./types";

const techStacks: Record<string, TechDetails> = {
  NextJS: {
    name: "NextJS",
    icon: SiNextdotjs,
    intro: "",
    purpose: "",
    bgColor: "black",
    txtColor: "white",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    intro: "CSS Framework",
    purpose: "CSS without all the headache",
    bgColor: "cyan",
    txtColor: "black",
  },
  ApolloClient: {
    name: "Apollo Client",
    icon: SiApollographql,
    intro:
      "Apollo Client is a comprehensive state management library for JavaScript.",
    purpose: "Manage both local and remote data with GraphQL.",
    bgColor: "purple",
    txtColor: "black",
  },
  NodeJS: {
    name: "NodeJS",
    icon: SiNodedotjs,
    intro: "JS Server Runtime",
    purpose: "Server",
    bgColor: "green",
    txtColor: "white",
  },

  ReactJS: {
    name: "ReactJS",
    icon: SiCodeproject,
    intro: "",
    purpose: "",
    bgColor: "cyan",
    txtColor: "black",
  },
};

export const projectData: ProjectData[] = [
  {
    projectName: "Sparkle",
    idea: "Learning buddiesttttttttttttttttttttttttttttttttttttt",
    architecture: [
      {
        ["Client"]: [
          techStacks.NextJS,
          techStacks.TailwindCSS,
          techStacks.ApolloClient,
        ],
        ["Server"]: [techStacks.NodeJS],
      },
    ],
    learningPoints: [
      {
        ["Front end skills"]: [
          {
            point: "Component Composition",
            detail: "how to compose component effectively",
          },
        ],
      },
    ],
    image: "",
    date: "March",
    link: "",
    repoLink: "https://github.com/andukdahacker/stud-bud",
  },

  {
    projectName: "Cookie Station",
    idea: "Send love cookies",
    architecture: [
      {
        ["frontend"]: [techStacks.ReactJS],
      },
    ],
    learningPoints: [
      {
        ["frontend"]: [
          {
            point: "",
            detail: "",
          },
        ],
      },
    ],
    image: "",
    date: "March",
    link: "",
    repoLink: "",
  },

  {
    projectName: "Portfolio",
    idea: "portfolio",
    architecture: [
      {
        ["frontend"]: [techStacks.NextJS],
      },
    ],
    learningPoints: [
      {
        ["frontend"]: [
          {
            point: "",
            detail: "",
          },
        ],
      },
    ],
    image: "",
    date: "",
    link: "",
    repoLink: "",
  },
];
