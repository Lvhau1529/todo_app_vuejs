<template>
  <div>
    <ul class="todo-list" v-for="todo in todos" :key="todo.id">
      <li class="todo-item" :class="{ 'todo-completed': todo.completed }">
        <span
          @click="markTodoCompleted(todo.id)"
          v-if="showEdit"
          class="todo-text"
          >{{ todo.name }}</span
        >
        <input
          v-model="nameEdit"
          v-if="!showEdit"
          type="text"
          :placeholder="todo.name"
        />
        <div class="todo-action" v-if="showEdit">
          <div class="todo-config" @click="toggleEdit">
            <ion-icon name="create-outline"></ion-icon>
          </div>
          <div class="todo-remove" @click="deleteTodo(todo.id)">
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
        <div v-else class="todo-edit">
          <div class="todo-save" @click="editNameTodo(todo.id)">
            <ion-icon name="save-outline"></ion-icon>
          </div>
          <div class="todo-cancel" @click="toggleEdit">
            <ion-icon name="return-down-back-outline"></ion-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TodoList",
  data() {
    return {
      showEdit: true,
      nameEdit: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    toggleEdit() {
      this.showEdit = !this.showEdit;
    },
    editNameTodo(todoId) {
      const dataEdit = {
        id: todoId,
        name: this.nameEdit,
      };
      this.$store.commit("editNameTodo", dataEdit);
      this.showEdit = !this.showEdit;
    },
    markTodoCompleted(idTodo) {
      this.$store.commit("markTodoCompleted", idTodo);
    },
    deleteTodo(idTodo) {
      this.$store.commit("deleteTodo", idTodo);
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
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    input {
      flex: 1;
      display: flex;
      align-items: center;
      margin-right: 10px;
      padding: 0;
      font-size: 16px;
      background: #fafafa;
    }
    .todo-action {
      display: flex;
      align-items: center;
      .todo-config,
      .todo-remove {
        padding: 10px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
      }
      .todo-config {
        color: #2979ff;
        &:hover {
          color: #fff;
          background-color: #2979ff;
        }
      }
      .todo-remove {
        color: red;
        margin-left: 10px;
        &:hover {
          color: #fff;
          background-color: red;
        }
      }
    }
    .todo-edit {
      display: flex;
      align-items: center;
      .todo-save,
      .todo-cancel {
        padding: 10px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
      }
      .todo-save {
        color: #42b983;
        &:hover {
          color: #fff;
          background-color: #42b983;
        }
      }
      .todo-cancel {
        color: red;
        margin-left: 10px;
        &:hover {
          color: #fff;
          background-color: red;
        }
      }
    }
  }
  .todo-completed {
    background-color: #fafafa;
    span {
      text-decoration: line-through;
    }
  }
}
</style>
