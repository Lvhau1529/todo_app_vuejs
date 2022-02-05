import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameTodo: "",
    todos: [],
  },
  getters: {
    todos: (state) => {
      return state.todos;
    },
    completedTodo: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
  mutations: {
    addNameTodo: (state, payload) => {
      state.nameTodo = payload;
    },
    addTodo: (state, payload) => {
      state.todos.unshift(payload);
    },
    markTodoCompleted: (state, payload) => {
      state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
      });
    },
    editNameTodo: (state, payload) => {
      state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.name = payload.name;
        }
      });
    },
    deleteTodo: (state, payload) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  actions: {},
  modules: {},
});
