<template>
  <div class="todo mb-3">
    <b-card :title="title">
      <b-card-text>{{ descr }}</b-card-text>
      <b-row>
        <b-col>
          <b-card-text class="text--gray">Date: {{ parsedDate }}</b-card-text>
        </b-col>
        <b-col>
          <b-card-text class="todo__time text--gray">{{
            parsedTimeLeft
          }}</b-card-text>
        </b-col>
      </b-row>
      <b-button
        class="todo__button mt-3"
        size="sm"
        @click="removeTodo"
        variant="outline-primary"
      >
        <b-icon-trash></b-icon-trash>
      </b-button>
    </b-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Todo",
  props: ["title", "descr", "status", "time", "id"],
  methods: {
    removeTodo() {
      const id = this.id;
      this.$store.dispatch("removeTodo", { id });
      this.$store.dispatch("getAllTodos");
    },
  },
  computed: {
    parsedDate() {
      return new Date(this.time).toLocaleDateString();
    },
    parsedTimeLeft() {
      return moment(this.time).fromNow();
    },
  },
};
</script>

<style>
.todo {
  min-width: 290px;
  display: flex;
  align-items: center;
  background-color: white;
  transition: 0.5s;
}
.todo .card {
  width: 100%;
}

.todo:hover {
  box-shadow: 0px 0px 15px 3px rgba(34, 60, 80, 0.2);
}

.todo__title {
  border-bottom: 1px solid rgb(158, 158, 158);
}

.todo__time {
  text-align: right;
}
</style>