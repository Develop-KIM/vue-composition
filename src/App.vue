<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const message = ref('hello');

    function changeMessage() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
