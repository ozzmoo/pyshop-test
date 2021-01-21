<template>
  <div class="nav--auth">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand>Todo</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/signup">Sign up</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavAuth",
};
</script>

<style>
</style>