<template>
  <div class="signup">
    <NavAuth />

    <b-container class="auth-container">
      <div class="auth-form signup__form mt-5">
        <b-card title="Sign Up">
          <b-form v-on:submit.prevent="signUp">
            <b-row>
              <b-col cols="12" class="mb-3">
                <b-form-input
                  v-model="email"
                  required
                  :type="emailType"
                  placeholder="Email"
                >
                </b-form-input>
              </b-col>
              <b-col cols="12" class="mb-3">
                <b-form-input
                  v-model="password"
                  required
                  :type="passType"
                  placeholder="Password (6-12 characters)"
                ></b-form-input>
              </b-col>
              <b-col cols="12" class="mb-3">
                <b-form-input
                  v-model="repeatPassword"
                  required
                  :type="passType"
                  placeholder="Repeat password"
                ></b-form-input>
              </b-col>
              <b-col cols="12" class="mb-3">
                <b-alert variant="danger" :show="errorShow">{{
                  error
                }}</b-alert>
              </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Sign Up</b-button>
          </b-form>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavAuth from "../components/NavAuth";

export default {
  components: { NavAuth },
  data() {
    return {
      passType: "password",
      emailType: "email",
      repeatPassword: "",
      email: "",
      password: "",
      errorShow: false,
      error: "",
    };
  },
  methods: {
    signUp() {
      if (!this.passwordEqual()) {
        this.errorShow = true;
        this.error = "Password must be equal";
        return 0;
      }

      if (!this.passwordCorrect()) {
        this.errorShow = true;
        this.error = "Must be 6 - 12 characters in password";
        return 0;
      } else {
        let signUpData = {
          email: this.email,
          password: this.password,
        };
        try {
          this.$store.dispatch("signUp", signUpData);
          if (this.currentUser != null) {
            console.log(this.currentUser);
            this.$router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    passwordEqual() {
      return this.password == this.repeatPassword;
    },
    passwordCorrect() {
      return (
        this.passwordEqual &&
        this.password.length >= 6 &&
        this.password.length <= 12
      );
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style>
</style>