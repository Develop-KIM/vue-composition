<template>
  <h1>{{ appTitle }}</h1>
  <h4>{{ newTitle }}</h4>
</template>

<script>
import { computed } from "vue";

export default {
  props: ['appTitle'],
  setup(props) {
    const newTitle = computed(() => {
      return props.appTitle + ' - TODO 앱';
    })

    return { newTitle };
  }
}
</script>
