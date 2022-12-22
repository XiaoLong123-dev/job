import Footer from "./footer";
import TopNav from "./topNav";

export default {
  install(Vue) {
    Vue.component("Footer", Footer);
    Vue.component("TopNav", TopNav);
  },
};
