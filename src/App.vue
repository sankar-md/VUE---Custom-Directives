<template>
  <div v-size v-highlight>Hello World!</div>
</template>

<script>
const highlight = {
  mounted: (el) => el.classList.add("is-highlight"),
};
export default {
  name: "App",
  components: {},
  directives: {
    highlight,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.is-highlight {
  background-color: orange;
  color: red;
  padding: 10px;
  border-radius: 5px;
}
</style>
