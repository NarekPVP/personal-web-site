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
  }
};

export const siteConfig: TSiteConfig = {
  url: "https://narekhovhannisyan.com",
  githubRepoUrl: "https://github.com/NarekPVP/personal-web-site",
  profilePictureUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHtNCb48nW-5g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693147221019?e=1750896000&v=beta&t=KuACXZE72WLl6cByvxup8eq7BgdBgeRdmHfHosX6t6A",
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
    instagram: "https://www.instagram.com/hovhannisyan4893"
  }
};
