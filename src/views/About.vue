<template>
  <div class="todo">
    <TodoTitle title="Todo Completed" />
    <TodoCompleted />
  </div>
</template>
<script>
// @ is an alias to /src
import TodoTitle from "@/components/TodoTitle.vue";
import TodoCompleted from "@/components/TodoCompleted.vue";

export default {
  name: "About",
  components: {
    TodoTitle,
    TodoCompleted,
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
