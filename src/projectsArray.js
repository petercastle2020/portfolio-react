const younewsIMG = "./images/younews-responsive.jpg";
const memesApiIMG = "./images/meme-api-cover.jpg";
const twitterExtIMG = "./images/hidden128-2x.png";

// use this words to ref icons {react, node.js, mongodb, express.js, github, javascript, css, html}
const projects = [
  {
    title: "YouNews",
    image: younewsIMG,
    aboutText: {
      en: "YouNews is a web application where users can post and read articles on various topics. It provides a platform for news and other related content. It offers a user-friendly interface, search functionality, and the ability to write your own articles.",
      pt: "YouNews é um aplicativo web onde os usuários podem publicar e ler artigos sobre diversos tópicos. Oferece uma plataforma para notícias e outros conteúdos relacionados. O aplicativo possui uma interface amigável, funcionalidade de busca e a capacidade de publicar seus próprios artigos.",
    },
    gitHubLink: "https://github.com/petercastle2020/YouNews",
    liveDemoLink: "https://younews.onrender.com/",
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
    title: "Programming memes API",
    image: memesApiIMG,
    aboutText: {
      en: "The Programming Memes API is a fun and engaging tool that provides a collection of programming memes for entertainment and light-hearted humor. Developers and users can fetch random memes, and search for specific memes.",
      pt: "A API de Memes de Programação é uma ferramenta divertida que oferece uma coleção de memes de programação para entretenimento e diversão. Desenvolvedores e usuários podem buscar memes aleatórios, ou pesquisar por memes específicos.",
    },
    gitHubLink: "https://github.com/petercastle2020/programming-memes-api",
    liveDemoLink: "https://programming-memes-api.onrender.com/",
    skills: [
      "Node.js",
      "mongodb",
      "express.js",
      "github",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Twitter hide it",
    image: twitterExtIMG,
    aboutText: {
      en: "Twitter Hide-it is a browser extension that allows users to hide tweets containing certain keywords or phrases on Twitter. Additionally, it also has a function to hide the trending section on the platform.",
      pt: "O Twitter Hide-it é uma extensão para navegador que permite aos usuários ocultarem tweets que contenham determinadas palavras-chave ou frases no Twitter. Além disso, também possui uma função para ocultar a seção de 'Trending' na plataforma.",
    },
    gitHubLink: "https://github.com/petercastle2020/Twitter-Hide-it",
    liveDemoLink: null,
    skills: ["github", "javascript", "css", "html"],
  },
];

module.exports = { projects };
