import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";
import QuestionEditor from "../views/QuestionEditor.vue";
import AnswerEditor from '../views/AnswerEditor.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    // props: true ensures that the slug param gets passed as prop to component
    path: "/question/:slug",
    name: "question",
    component: Question,
    props: true
  },
  {
    // the ? in the path makes the slug param optional
    path: "/ask/:slug?",
    name: "question-editor",
    component: QuestionEditor,
    props: true
  },
  {
    // props: true ensures that the slug param gets passed as prop to component
    path: "/answer/:id",
    name: "answer-editor",
    component: AnswerEditor,
    props: true
  },
  {
    path: '*',
    name: "page-not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
