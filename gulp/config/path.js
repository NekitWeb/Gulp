const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
  build: {
    build: buildFolder,
    html: `${buildFolder}/`,
    style: `${buildFolder}/`,
    images: `${buildFolder}/assets/images/`,
  },
  src: {
    html: `${srcFolder}/html/pages/*.html`,
    style: `${srcFolder}/style/style.scss`,
    images: `${srcFolder}/images/**/*.*`,
  },
  watcher: {
    html: `${srcFolder}/html/**/*.html`,
    style: `${srcFolder}/style/**/*.scss`,
    images: `${srcFolder}/images/**/*.*`,
  },
};
