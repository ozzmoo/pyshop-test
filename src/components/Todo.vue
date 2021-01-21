<template>
  <div class="todo mb-3">
    <b-card :title="title">
      <b-card-text>{{ descr }}</b-card-text>
      <b-card-text>{{ time }}</b-card-text>
      <b-button @click="removeTodo" variant="outline-primary">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </b-card>
  </div>
</template>

<script>
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
  mounted() {},
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
</style>