<template>
  <div class="todo-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-title {
  text-align: center;
}
</style>
