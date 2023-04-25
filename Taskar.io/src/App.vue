<template>
  <header>
    <toolbar></toolbar>
  </header>

  <main>

  </main>
</template>

<style scoped>
  header,
  main {
    display:grid;
  }

  header {
    background-color: none;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  main {
    background-color: --vt-c-black-soft;
  }
</style>

<script>
  import Toolbar from './components/Toolbar.vue';

  export default {
    name: "app",
    components: {
      "toolbar": Toolbar,
    }
  }
</script>
