<template>
  <div class="nav--main">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand>Todo</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavMain",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
</style>