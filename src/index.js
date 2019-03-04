/* eslint-env browser */
import './assets/css/style.css';
import Vue from "vue";
import {
  VuePlugin
} from 'vuera'
import App from "./Components/App.vue";

Vue.use(VuePlugin);

const app = document.getElementById('app');

if (app) {
  // app.appendChild(title);
  // app.appendChild(tip);
  new Vue({
      el: "#app",
      render: (h) => h(App)
    });
}