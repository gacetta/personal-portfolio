const BASH = {
  NAME: "GNU Bash",
  HREF: "https://www.gnu.org/software/bash/",
  LOGO: "/assets/images/technologies/bash.png",
};
const CSS = {
  NAME: "CSS 3 ",
  HREF: "https://www.w3.org/Style/CSS/Overview.en.html",
  LOGO: "/assets/images/technologies/css.png",
};
const EXPRESS = {
  NAME: "Express.js",
  HREF: "https://expressjs.com/",
  LOGO: "/assets/images/technologies/express.png",
};
const GRAPHQL = {
  NAME: "GraphQL",
  HREF: "https://graphql.org/",
  LOGO: "/assets/images/technologies/graphql.png",
};
const HTML = {
  NAME: "HTML 5",
  HREF: "https://html.spec.whatwg.org/",
  LOGO: "/assets/images/technologies/html.png",
};
const JAVASCRIPT = {
  NAME: "JavaScript",
  HREF: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  LOGO: "/assets/images/technologies/javascript.png",
};
const MONGODB = {
  NAME: "MongoDB",
  HREF: "https://www.mongodb.com/",
  LOGO: "/assets/images/technologies/mongodb.png",
};
const POSTCSS = {
  NAME: "postcss",
  HREF: "https://postcss.org/",
  LOGO: "/assets/images/technologies/postcss.png",
};
const POSTGRESQL = {
  NAME: "PostgreSQL",
  HREF: "https://www.postgresql.org/",
  LOGO: "/assets/images/technologies/postgresql.png",
};
const NODE = {
  NAME: "node.js",
  HREF: "https://nodejs.org/en",
  LOGO: "/assets/images/technologies/node.png",
};
const REACT = {
  NAME: "React ",
  HREF: "https://react.dev/",
  LOGO: "/assets/images/technologies/react.png",
};
const REACT_REDUX = {
  NAME: "React Redux",
  HREF: "https://react-redux.js.org/",
  LOGO: "/assets/images/technologies/react-redux.png",
};
const REACT_ROUTER = {
  NAME: "React Router",
  HREF: "https://reactrouter.com/en/main",
  LOGO: "/assets/images/technologies/react-router.png",
};
const SASS = {
  NAME: "Sass ",
  HREF: "https://sass-lang.com/",
  LOGO: "/assets/images/technologies/sass.png",
};
const TYPESCRIPT = {
  NAME: "TypeScript",
  HREF: "https://www.typescriptlang.org/",
  LOGO: "/assets/images/technologies/typescript.png",
};

export interface Technology {
  NAME: string;
  HREF?: string;
  LOGO?: string;
}

export const allTechnologies = {
  BASH,
  CSS,
  EXPRESS,
  GRAPHQL,
  HTML,
  JAVASCRIPT,
  MONGODB,
  POSTCSS,
  POSTGRESQL,
  NODE,
  REACT,
  REACT_REDUX,
  REACT_ROUTER,
  SASS,
  TYPESCRIPT,
};

export const currentTechnologies = [
  CSS,
  EXPRESS,
  GRAPHQL,
  HTML,
  JAVASCRIPT,
  NODE,
  TYPESCRIPT,
  REACT,
];
export const otherTechnologies = [
  BASH,
  MONGODB,
  POSTCSS,
  POSTGRESQL,
  REACT_REDUX,
  REACT_ROUTER,
  SASS,
];
