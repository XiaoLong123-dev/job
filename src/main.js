import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//  引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入全部的自定义全局组件
import Component from "@/components/index";
Vue.use(Component);

// 引入样式文件
import "@/style/index.less";

// 引入路由
import router from "@/router";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
