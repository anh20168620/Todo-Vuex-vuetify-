<template>
  <div>
    <v-tabs fixed-tabs background-color="cyan" color="basil" dark>
      <v-tabs-slider color="indigo darken-4"></v-tabs-slider>
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        @click="handleClickFilter(tab)"
      >
        {{ tab }}({{
          tab === "Tất cả"
            ? listTodo.length
            : tab === "Đã xong"
            ? listTodoDone.length
            : listTodoUnDone.length
        }})
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tabs", "listTodo", "listTodoDone", "listTodoUnDone"]),
  },

  methods: {
    handleClickFilter(value) {
      if (value === "Tất cả") {
        this.$store.commit("SET_TYPE_FILTER", 1);
      } else if (value === "Đã xong") {
        this.$store.commit("SET_TYPE_FILTER", 2);
      } else if (value === "Chưa xong") {
        this.$store.commit("SET_TYPE_FILTER", 3);
      }
    },
  },
};
</script>
