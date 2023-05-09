const binanceImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682026205/g6vjzwrdqhzrzohia5c4.webp";
const disneyImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682372330/zhzhargcokmb3unqbh9o.webp";
const xboxoneImage =
  "https://res.cloudinary.com/dqjwxv8ck/image/upload/v1682026217/eptov0p9fliuzkxiftkj.webp";

// use this words to ref icons {react, node.js, mongodb, express.js, github, javascript, css, html}
const projects = [
  {
    title: "Project 1",
    image: disneyImage,
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales tortor urna, eget maximus magna porttitor nec. Proin nunc purus, finibus vel magna at, semper tincidunt mauris. Aenean eu velit enim. Morbi et lorem ligula. Proin ac eros vel sem bibendum placerat. Class aptent taciti sociosqu ad litora torquent per.",
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
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales tortor urna, eget maximus magna porttitor nec. Proin nunc purus, finibus vel magna at, semper tincidunt mauris. Aenean eu velit enim. Morbi et lorem ligula. Proin ac eros vel sem bibendum placerat. Class aptent taciti sociosqu ad litora torquent per.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Project 3",
    image: xboxoneImage,
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales tortor urna, eget maximus magna porttitor nec. Proin nunc purus, finibus vel magna at, semper tincidunt mauris. Aenean eu velit enim. Morbi et lorem ligula. Proin ac eros vel sem bibendum placerat. Class aptent taciti sociosqu ad litora torquent per.",
    skills: ["github", "javascript", "css", "html"],
  },
];

module.exports = { projects };
