const binanceImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682026205/g6vjzwrdqhzrzohia5c4.webp";
const disneyImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682372330/zhzhargcokmb3unqbh9o.webp";
const xboxoneImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682026217/eptov0p9fliuzkxiftkj.webp";

// use this words to ref icons {react, node.js, mongodb, express.js, github, javascript, css, html}
const projects = [
  {
    title: "You News",
    image: disneyImage,
    aboutText: {
      en: "here would be the EN texat",
      pt: "BR BR BR BR BR BR BR BR",
    },
    gitHubLink: "githublink.something",
    liveDemoLink: "livedemo.something.",
    skills: [
      "React",
      "Node.js",
      "mongodb",
      "express.js",
      "github",
      "javascript",
      "css",
      "html",
    ],
  },
  {
    title: "Project 2",
    image: binanceImage,
    aboutText: {
      en: "here would be the EN texat",
      pt: "BR BR BR BR BR BR BR BR",
    },
    gitHubLink: "githublink.something",
    liveDemoLink: "livedemo.something.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Project 3",
    image: xboxoneImage,
    aboutText: {
      en: "here would be the EN texat",
      pt: "BR BR BR BR BR BR BR BR",
    },
    gitHubLink: "githublink.something",
    liveDemoLink: "livedemo.something.",
    skills: ["github", "javascript", "css", "html"],
  },
];

module.exports = { projects };
