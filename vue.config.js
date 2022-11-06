const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/utilities/_variables.scss";
          @import "@/assets/scss/utilities/_mixins.scss";
          @import "@/assets/scss/utilities/_placeholders.scss";
          @import "@/assets/scss/themes/_theme.scss";
        `
      }
    }
  }
})