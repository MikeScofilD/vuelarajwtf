<template>
  <div class="w-25">
    Registration
    <input
      type="name"
      v-model="name"
      name=""
      id=""
      class="form-control mt-3 mb-3"
      placeholder="name"
    />
    <input
      type="email"
      v-model="email"
      name=""
      id=""
      class="form-control mt-3 mb-3"
      placeholder="name"
    />
    <input
      type="password"
      v-model="password"
      name=""
      id=""
      class="form-control mb-3"
      placeholder="email"
    />
    <input
      type="password"
      v-model="password_confirmation"
      name=""
      id=""
      class="form-control mb-3"
      placeholder="password"
    />
    <input
      type="submit"
      @click.prevent="storeUser"
      name=""
      id=""
      class="btn btn-primary mb-3"
      placeholder="confirm password"
    />
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    storeUser() {
      axios.post("/api/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(
        res=>{
            console.log(res);
        }
      );
    },
  },
};

import axios from "axios";
</script>

<style lang="scss" scoped>
</style>
