<template>
  <div class="w-25">
    Login
    <input
      v-model="email"
      type="email"
      name=""
      id=""
      class="form-control mt-3 mb-3"
      placeholder="email"
    />
    <input
      v-model="password"
      type="password"
      name=""
      id=""
      class="form-control mb-3"
      placeholder="password"
    />
    <input
      @click.prevent="login"
      type="submit"
      name=""
      id=""
      class="btn btn-primary"
    />
    <div v-if="error" class="danger">{{this.error}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    login() {
      axios
        .post("/api/auth/login", { email: this.email, password: this.password })
        .then((res) => {
          console.log(res);
          //   localStorage.access_token = res.data.access_token;
          localStorage.setItem("access_token", res.data.access_token);
          this.$router.push({name: 'user.personal'})

          //   const data = {
          //     name: "test",
          //     token: res.data.access_token,
          //   };
          //   localStorage.setItem("some_data", JSON.stringify(data));
          //   console.log(JSON.parse(localStorage.getItem("some_data")));
        })
        .catch(error=>{
            this.error = error.response.data.error;
        });;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
