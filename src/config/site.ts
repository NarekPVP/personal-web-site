type TSiteConfig = {
  url: string
  githubRepoUrl: string
  profilePictureUrl: string;
  username: string
  email: string
  phone: string
  address: string
  CVUrl: string
  socialMedia: {
    linkedIn: string
    telegram: string
    twitter: string
    github: string
    instagram: string
    telegram: string
  }
};

export const siteConfig: TSiteConfig = {
  url: "http://localhost:3000",
  githubRepoUrl: "https://github.com/NarekPVP/personal-web-site",
  profilePictureUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHtNCb48nW-5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693147221019?e=1730332800&v=beta&t=OnWBAnG9W1zPYSjOyBr-cTtGyLssZACNo_s7nfswi7k",
  username: "NarekDev",
  email: "hnarek2005@gmail.com",
  phone: "+374 99 691 641",
  address: "Yerevan, Armenia",
  CVUrl: "/CV.docx",
  socialMedia: {
    linkedIn: "https://www.linkedin.com/in/narek-hovhannisyan-dev",
    telegram: "https://t.me/NarekDev",
    twitter: "https://x.com/hnarek2005",
    github: "https://github.com/NarekPVP",
    instagram: "https://www.instagram.com/hovhannisyan4893",
    telegram: "https://t.me/NarekDev"
  }
};
