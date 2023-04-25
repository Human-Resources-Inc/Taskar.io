<template>
  <header>
    <toolbar></toolbar>
  </header>

  <main>
    <board></board>
  </main>
</template>

<style scoped>
  header {
    background-color: none;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 10px none white;
  }

  main {
    display:grid;
    background-color: none;
  }
</style>

<script>
  import Toolbar from './components/Toolbar.vue';
  import Board from "./components/Board.vue";

  export default {
    name: "app",
    components: {
      "toolbar" : Toolbar,
      "board"   : Board
    }
  }
</script>
