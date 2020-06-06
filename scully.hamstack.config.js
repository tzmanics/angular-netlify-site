exports.config = {
  projectRoot: "./src",
  projectName: "angular-netlify-site",
  outDir: "./dist/static",
  routes: {
    "/blog/:title": {
      type: "contentFolder",
      title: {
        folder: "./blog",
      },
    },
  },
};
