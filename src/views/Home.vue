<template>
  <div class="todo">
    <TodoTitle title="Todo list" />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoTitle from "@/components/TodoTitle.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoTitle,
    TodoInput,
    TodoList,
  },
};
</script>

<style lang="scss" scoped>
.todo {
  padding: 25px;
  margin: 0 auto;
  max-width: 600px;
}
</style>
