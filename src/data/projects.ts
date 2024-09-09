import { Image as TImage } from "react-grid-gallery";

export type TProject = {
  title: string;
  headerLineEN: string;
  headerLineAM: string;
  contentEN: string;
  contentAM: string;
  slug: string;
  tags?: { label: string; url: string; color: string; textColor: string }[];
  githubRepoUrl?: string;
  images?: TImage[];
  video?: string;
};

export const projects: TProject[] = [
  // NMath
  {
    title: "NMath",
    headerLineEN: "Open Source function research app.",
    headerLineAM: "Բաց կոդով ֆունկցիայի հետազոտության հավելված:",
    contentEN: "The long english text here...",
    contentAM: "The long armenian text here...",
    slug: "nmath",
    tags: [
      {
        label: ".NET",
        url: "https://dotnet.microsoft.com",
        color: "#512BD4",
        textColor: "#fff",
      },
      {
        label: "C#",
        url: "https://dotnet.microsoft.com/en-us/languages/csharp",
        color: "#4CBB17",
        textColor: "#fff",
      },
      {
        label: "React",
        url: "https://react.dev",
        color: "#58C4DC",
        textColor: "#fff",
      },
      {
        label: "React Native",
        url: "https://reactnative.dev",
        color: "#087EA4",
        textColor: "#fff",
      },
    ],
    githubRepoUrl: "https://github.com/NarekPVP/NMath",
    images: [
      {
        src: "/nmath/mobile-research-page.png",
        width: 848,
        height: 899,
      },
      {
        src: "/nmath/mobile-research-final.png",
        width: 842,
        height: 896,
      },
      {
        src: "/nmath/mobile-iphone-se.png",
        width: 398,
        height: 846,
      },
      {
        src: "/nmath/mobile-history.png",
        width: 433,
        height: 901,
      },
      {
        src: "/nmath/mobile-settings-theme.png",
        width: 858,
        height: 905,
      },
      {
        src: "/nmath/web-starterpage-showcase.png",
        width: 1431,
        height: 690,
      },
      {
        src: "/nmath/web-showcase.png",
        width: 1431,
        height: 686,
      },
    ],
    video: "/nmath/NMath-showcase.mp4",
  },
];
