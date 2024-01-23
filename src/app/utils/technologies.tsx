const bash = {
  name: "GNU Bash",
  href: "https://www.gnu.org/software/bash/",
  logo: "/assets/images/technologies/bash.png",
};
const css = {
  name: "CSS 3 ",
  href: "https://www.w3.org/Style/CSS/Overview.en.html",
  logo: "/assets/images/technologies/css.png",
};
const express = {
  name: "Express.js",
  href: "https://expressjs.com/",
  logo: "/assets/images/technologies/express.png",
};
const graphql = {
  name: "GraphQL",
  href: "https://graphql.org/",
  logo: "/assets/images/technologies/graphql.png",
};
const html = {
  name: "HTML 5",
  href: "https://html.spec.whatwg.org/",
  logo: "/assets/images/technologies/html.png",
};
const javascript = {
  name: "JavaScript",
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  logo: "/assets/images/technologies/javascript.png",
};
const mongodb = {
  name: "MongoDB",
  href: "https://www.mongodb.com/",
  logo: "/assets/images/technologies/mongodb.png",
};
const postcss = {
  name: "postcss",
  href: "https://postcss.org/",
  logo: "/assets/images/technologies/postcss.png",
};
const postgresql = {
  name: "PostgreSQL",
  href: "https://www.postgresql.org/",
  logo: "/assets/images/technologies/postgresql.png",
};
const node = {
  name: "node.js",
  href: "https://nodejs.org/en",
  logo: "/assets/images/technologies/node.png",
};
const react = {
  name: "React ",
  href: "https://react.dev/",
  logo: "/assets/images/technologies/react.png",
};
const reactRedux = {
  name: "React Redux",
  href: "https://react-redux.js.org/",
  logo: "/assets/images/technologies/react-redux.png",
};
const reactRouter = {
  name: "React Router",
  href: "https://reactrouter.com/en/main",
  logo: "/assets/images/technologies/react-router.png",
};
const sass = {
  name: "Sass ",
  href: "https://sass-lang.com/",
  logo: "/assets/images/technologies/sass.png",
};
const typescript = {
  name: "TypeScript",
  href: "https://www.typescriptlang.org/",
  logo: "/assets/images/technologies/typescript.png",
};

export interface Technology {
  name: string;
  href?: string;
  logo?: string;
}

export const allTechnologies = {
  bash,
  css,
  express,
  graphql,
  html,
  javascript,
  mongodb,
  postcss,
  postgresql,
  node,
  react,
  reactRedux,
  reactRouter,
  sass,
  typescript,
};

export const currentTechnologies = [
  javascript,
  typescript,
  react,
  node,
  express,
  css,
  html,
  graphql,
];
export const otherTechnologies = [
  reactRedux,
  reactRouter,
  postcss,
  sass,
  bash,
  postgresql,
  mongodb,
];
