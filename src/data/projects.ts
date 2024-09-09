import { Image as TImage } from "react-grid-gallery";

export type TProject = {
  title: string;
  projectType: "FullStack" | "BackEnd" | "FrontEnd" | "Mobile" | "Desktop";
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
    projectType: "FullStack",
    headerLineEN: "Open Source function research app.",
    headerLineAM: "Բաց կոդով ֆունկցիայի հետազոտության հավելված:",
    contentEN:
      "This project is a math app I built using .NET C# for the backend, React for the web, and React Native (Expo) for mobile. The app lets users enter a math function, then finds things like the derivative and other details. It also draws a graph of the function. There is a history feature, so users can easily look up their previous functions if they want to research them again. The app has a settings section for customization and works smoothly on both web and mobile platforms.",
    contentAM:
      "Այս նախագիծը մաթեմատիկական հավելված է, որը ես ստեղծել եմ՝ օգտագործելով .NET C#՝ backend-ի համար, React՝ վեբի համար, և React Native (Expo)՝ բջջային հավելվածի համար: Հավելվածը թույլ է տալիս օգտատերերին մուտքագրել մաթեմատիկական ֆունկցիա, այնուհետև հետազոտել այն։ Կա պատմության առանձնահատկություն, այնպես որ օգտատերերը կարող են հեշտությամբ փնտրել իրենց նախկին հետազոտված ֆունկցիաները, եթե ցանկանում են նորից հետազոտել դրանք: Հավելվածն ունի կարգավորումների բաժին և սահուն աշխատում է ինչպես վեբ, այնպես էլ բջջային հարթակներում:",
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
