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
  // Sigma Track
  {
    title: "Sigma Track",
    projectType: "FullStack",
    headerLineEN: "Subscription tracking app.",
    headerLineAM: "Բաժանորդագրությունների հետևման հավելված:",
    contentEN:
      "Sigma Track is a full-stack subscription management app built with Next.js and TypeScript. It lets you track all your recurring subscriptions in one place, showing upcoming payments, spending insights, and custom categories. Features include an intuitive dashboard, a quick-add subscription modal, and category organisation with emoji support.",
    contentAM:
      "Sigma Track-ը Next.js-ով և TypeScript-ով կառուցված բաժանորդագրությունների կառավարման հավելված է: Այն թույլ է տալիս հետևել բոլոր կրկնվող բաժանորդագրություններին մեկ տեղում՝ ցուցադրելով առաջիկա վճարումները, ծախսերի վերլուծությունը և հատուկ կատեգորիաները: Ֆունկցիոնալությունը ներառում է ինտուիտիվ dashboard, բաժանորդագրություն ավելացնելու modal պատուհան և emoji-ի աջակցությամբ կատեգորիաների կազմակերպում:",
    slug: "sigma-track",
    tags: [
      {
        label: "Next.js",
        url: "https://nextjs.org",
        color: "#000000",
        textColor: "#fff",
      },
      {
        label: "React",
        url: "https://react.dev",
        color: "#58C4DC",
        textColor: "#fff",
      },
      {
        label: "TypeScript",
        url: "https://www.typescriptlang.org",
        color: "#3178C6",
        textColor: "#fff",
      },
    ],
    images: [
      { src: "/sigma-track/01-landing-hero.png", width: 1440, height: 900 },
      { src: "/sigma-track/01-landing-page.png", width: 1440, height: 1616 },
      { src: "/sigma-track/02-dashboard-empty.png", width: 1440, height: 900 },
      { src: "/sigma-track/03-dashboard-with-subscriptions.png", width: 1440, height: 900 },
      { src: "/sigma-track/04-upcoming.png", width: 1440, height: 900 },
      { src: "/sigma-track/05-insights.png", width: 1440, height: 900 },
      { src: "/sigma-track/06-categories.png", width: 1440, height: 900 },
      { src: "/sigma-track/07-settings.png", width: 1440, height: 900 },
      { src: "/sigma-track/08-add-subscription-modal.png", width: 1440, height: 900 },
      { src: "/sigma-track/09-categories-new-emoji-mode.png", width: 1440, height: 900 },
    ],
  },
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
