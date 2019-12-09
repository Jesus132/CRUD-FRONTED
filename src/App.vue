<template>
  <div id="app">
    <StudentsComponent />
  </div>
</template>

<script>
import StudentsComponent from "./components/StudentsComponent";

export default {
  name: "app",
  components: {
    StudentsComponent
  },
  //variables que se almacenan en cache
  computed: {}
};
</script>

<style></style>