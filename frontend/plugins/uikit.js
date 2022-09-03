import Vue from "vue";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);
UIkit.container = "#__nuxt";

Vue.use({
  install(vue) {
    vue.prototype.$uikit = UIkit;
  },
});
