export type TProject = {
  title: string;
  contentEN: string;
  contentAM: string;
  slug: string;
  githubRepoUrl?: string;
  images?: string[];
  video?: string;
};

export const projects: TProject[] = [
  // NMath
  {
    title: "NMath",
    contentEN: "The long english text here...",
    contentAM: "The long armenian text here...",
    slug: "nmath",
    githubRepoUrl: "https://github.com/NarekPVP/NMath",
    images: ['/nmath/mobile-research-page.png', '/nmath/mobile-research-final.png', '/nmath/mobile-iphone-se.png', '/nmath/mobile-history.png', '/nmath/mobile-settings-theme.png', '/nmath/web-starterpage-showcase.png', '/nmath/web-showcase.png'],
    video: "/nmath/NMath-showcase.mp4",
  },
  {
    title: "NMath",
    contentEN: "The long english text here...",
    contentAM: "The long armenian text here...",
    slug: "nmath",
    githubRepoUrl: "https://github.com/NarekPVP/NMath",
    images: ['/nmath/mobile-research-page.png', '/nmath/mobile-research-final.png', '/nmath/mobile-iphone-se.png', '/nmath/mobile-history.png', '/nmath/mobile-settings-theme.png', '/nmath/web-starterpage-showcase.png', '/nmath/web-showcase.png'],
    video: "/nmath/NMath-showcase.mp4",
  },
  
];
