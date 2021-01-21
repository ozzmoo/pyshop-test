<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  mounted() {
    if (firebase.auth().currentUser == null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.text--gray {
  color: rgb(155, 155, 155);
}
</style>
