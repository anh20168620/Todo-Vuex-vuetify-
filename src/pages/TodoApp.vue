<template>
  <v-app>
    <div>
      <div class="blue text-center py-3">
        <span class="white--text font-weight-medium display-3">TODO LIST</span>
      </div>

      <v-card class="mx-auto mt-5 pa-5" max-width="500">
        <input-text></input-text>
        <filter-bar></filter-bar>
        <list-todo></list-todo>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import InputText from "../components/InputText.vue";
import FilterBar from "../components/FilterBar.vue";
import ListTodo from "../components/ListTodo.vue";

export default {
  components: {
    InputText,
    FilterBar,
    ListTodo,
  },
};
</script>
<style></style>
