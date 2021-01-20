<template>
  <div class="login">
    <NavAuth />
    <b-container>
      <div class="login__form">
        <b-card title="Login">
          <b-form>
            <b-row>
              <b-col cols="12">
                <b-form-input required :type="emailType" placeholder="Email">
                </b-form-input>
              </b-col>
              <b-col cols="12">
                <b-form-input
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
    };
  },
};
</script>

<style></style>;
