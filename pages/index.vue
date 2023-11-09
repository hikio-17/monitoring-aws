<script setup>
   const counter = ref(1);

   const add = () => counter.value = counter.value + 1;
</script>

<!-- <script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addCounter () {
        this.counter++
      }
    }
  }
</script> -->

<template>
  <section>
    <h1>{{ counter }}</h1>

    <button class="btn btn-primary" @click="add">Add</button>
  </section>
</template>
