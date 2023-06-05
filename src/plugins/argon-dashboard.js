import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

import "../assets/css/nucleo-icons.css";
import "../assets/scss/argon-dashboard.scss";
import SidebarPlugin from "../components/SidebarPlugin";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  install(app) {
    app.use(SidebarPlugin);
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
  },
};
