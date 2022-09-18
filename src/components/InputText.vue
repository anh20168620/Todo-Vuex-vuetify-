<template>
  <div>
    <v-text-field
      autofocus
      clearable
      solo
      placeholder="Nhập việc cần làm"
      v-model="todoInput"
      @keydown.enter="addTodo"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  computed: {
    todoInput: {
      get() {
        return this.$store.getters.todoInput;
      },
      set(value) {
        this.$store.commit("SET_TODO_INPUT", value);
      },
    },

    listTodo() {
      return this.$store.getters.listTodo;
    },
  },

  methods: {
    addTodo() {
      this.listTodo.push({
        id: parseInt(Date.now()),
        text: this.todoInput,
        isDone: false,
      });

      this.todoInput = "";
    },
  },
};
</script>
