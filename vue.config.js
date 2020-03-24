module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/mediaquery.scss";`
        }
      }
    }
  };