<template>
  <div>
    list of fruits
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fruit in fruits">
          <th scope="row">{{fruit.id}}</th>
          <td>{{fruit.name}}</td>
          <td>{{fruit.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Index",
  data() {
    return {
        fruits: '',
    };
  },
  mounted() {
    this.getFruits();
  },
  methods: {
    getFruits(){
        axios.get('/api/fruits')
        .then(res=>{
            console.log(res);
            this.fruits = res.data.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
