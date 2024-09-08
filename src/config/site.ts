type TSiteConfig = {
  url: string
  profilePictureUrl: string;
  socialMedia: {
    linkedIn: string
    telegram: string
    github: string
  }
};

export const siteConfig: TSiteConfig = {
  url: "http://localhost:3000",
  profilePictureUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHtNCb48nW-5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693147221019?e=1730332800&v=beta&t=OnWBAnG9W1zPYSjOyBr-cTtGyLssZACNo_s7nfswi7k",
  socialMedia: {
    linkedIn: "https://www.linkedin.com/in/narek-hovhannisyan-241544255/",
    telegram: "",
    github: ""
  }
};
