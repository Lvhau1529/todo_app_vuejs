<template>
  <div>
    <ul class="todo-list" v-for="todo in completedTodo" :key="todo.id">
      <li class="todo-item">
        <span class="todo-text">{{ todo.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoCompleted",
  computed: {
    completedTodo() {
      return this.$store.getters.completedTodo;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 0;
  .todo-item {
    padding: 10px 20px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    &:hover {
      background-color: #fafafa;
    }
    .todo-text {
      flex: 1;
    }
  }
}
</style>
