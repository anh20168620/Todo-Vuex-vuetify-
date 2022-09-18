<template>
  <v-list>
    <v-list-item v-for="todo in listFilter" :key="todo.id">
      <template>
        <v-list-item-action>
          <v-checkbox v-model="todo.isDone" color="primary"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': todo.isDone }"
            >{{ todo.text }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="deleteTodo(todo.id)" icon>
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listTodo", "listTodoDone", "listTodoUnDone", "typeFilter"]),

    listFilter() {
      if (this.typeFilter === 1) {
        this.$store.commit("SET_LIST_FILTER", this.listTodo);
      } else if (this.typeFilter === 2) {
        this.$store.commit("SET_LIST_FILTER", this.listTodoDone);
      } else if (this.typeFilter === 3) {
        this.$store.commit("SET_LIST_FILTER", this.listTodoUnDone);
      }
      return this.$store.getters.listFilter;
    },
  },

  methods: {
    deleteTodo(id) {
      console.log(id);
      this.$store.commit("DELETE_TODO", id);
    },
  },
};
</script>
