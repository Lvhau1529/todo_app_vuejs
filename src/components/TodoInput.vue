<template>
  <div class="todo-form">
    <input
      v-model="nameTodo"
      type="text"
      placeholder="Enter your task here"
      class="todo-input"
      @change="getNameTodo"
    />
    <button @click="addTodo" class="todo-submit">Add</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      nameTodo: "",
    };
  },
  methods: {
    getNameTodo() {
      this.$store.commit("addNameTodo", this.nameTodo);
    },
    addTodo() {
      const todo = {
        id: Math.floor(Math.random() * 100),
        name: this.$store.state.nameTodo,
        completed: false,
      };
      this.$store.commit("addTodo", todo);
      this.nameTodo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo-submit {
  padding: 20px;
  border: 0;
  background-color: #2979ff;
  color: white;
  border-radius: 0 10px 10px 0;
  flex-shrink: 0;
  cursor: pointer;
}
.todo-input {
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 15px;
  border-radius: 10px 0 0 10px;
}
</style>
