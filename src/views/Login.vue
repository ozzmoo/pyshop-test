<template>
  <div class="login">
    <NavAuth />
    <b-container class="auth-container">
      <div class="auth-form login__form mt-5">
        <b-card title="Login">
          <b-form>
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
                  placeholder="Password"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavAuth from "../components/NavAuth";

export default {
  name: "Login",
  components: { NavAuth },
  data() {
    return {
      emailType: "email",
      passType: "password",
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.auth-form {
  max-width: 600px;
}

.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>;
