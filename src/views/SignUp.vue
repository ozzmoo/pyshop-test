<template>
  <div class="signup">
    <NavAuth />

    <b-container class="auth-container">
      <div class="auth-form signup__form mt-5">
        <b-card title="Sign Up">
          <b-form>
            <b-row>
              <b-col cols="12" class="mb-3">
                <b-form-input required :type="emailType" placeholder="Email">
                </b-form-input>
              </b-col>
              <b-col cols="12" class="mb-3">
                <b-form-input
                  required
                  :type="passType"
                  placeholder="Password"
                ></b-form-input>
              </b-col>
              <b-col cols="12" class="mb-3">
                <b-form-input
                  required
                  :type="passType"
                  placeholder="Repeat password"
                ></b-form-input>
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
    };
  },
};
</script>

<style>
</style>