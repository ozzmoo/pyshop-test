<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    /* Не забыть убрать */
    this.$router.push("/login");
  },
};
</script>

<style>
</style>
