<template>
  <div class="main">
    <NavMain />
    <b-container class="main-grid">
      <b-row>
        <b-col class="mt-2">
          <b-button @click="showModal = true" variant="outline-primary"
            >Add new</b-button
          >
        </b-col>
      </b-row>
      <div class="todos">
        <Todo
          class="m-2"
          v-for="(todo, key) in todos"
          :key="key"
          :id="key"
          :title="todo.title"
          :descr="todo.descr"
          :time="todo.time"
          :status="todo.status"
        />
      </div>
    </b-container>
    <b-modal
      id="add-modal"
      v-model="showModal"
      title="Add new Todo"
      hide-footer
    >
      <b-form v-on:submit.prevent="addTodo">
        <b-form-input
          class="mb-3"
          v-model="title"
          required
          placeholder="Title"
        ></b-form-input>
        <b-form-input
          class="mb-3"
          v-model="description"
          required
          placeholder="Description"
        ></b-form-input>
        <b-button type="submit" variant="primary">Add</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import NavMain from "../components/NavMain";
import Todo from "../components/Todo";

export default {
  components: { NavMain, Todo },
  data() {
    return {
      title: "",
      description: "",
      modalFooter: false,
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      let data = {
        title: this.title,
        descr: this.description,
        time: +new Date(),
        status: false,
      };
      this.$store.dispatch("addTodo", data);
      this.$store.dispatch("getAllTodos");
      this.showModal = false;
      this.title = "";
      this.description = "";
    },
  },
  mounted() {
    this.$store.dispatch("getAllTodos");
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<style scoped>
.main-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todos {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
