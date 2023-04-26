<template>

  <div class="login-window" id="login-window">
    <div class="login-container">
      <h2>Taskar.io</h2>
      <div class="user-name">
        <v-icon class="icon" name="co-user" scale="1.5" />
        <input type="text">
      </div>
      
      <div class="password">
        <v-icon class="icon" name="bi-key" scale="1.5" />
        <input type="text">
      </div>
      
      <button @click="hideLoginWindow">Log-in</button>
    </div>
  </div>

  <header class="hidden">
    <toolbar></toolbar>
  </header>
  <main class="hidden">
    <board></board>
  </main>
  
</template>

<style scoped>
  .login-window {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: solid white 0.1em;
    border-radius: 0.5em;
    padding: 2em;
  }

  .login-container {
    display: flexbox;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .user-name,
  .password {
    display: flex;
    align-items: center;

  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .icon {
    align-self: center;
    margin-right: 5px;
    top: 0.2em;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid white;
    background-color: #282828;
    color: white
  }

  input:focus {
    outline: none;
  }

  button {
    left: 50%;
    transform: translate(-50%);
    background: none;
    border: solid white;
    padding: 0.5em;
    border-radius: 0.1em;
    font-size: large;
    color: white;
    margin-top: 1em;
    transition: background 50ms ease-in;
  }

  button:hover {
    background: white;
    color: black
  }

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

  .hidden {
    display: none;
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

<script setup>

  function hideLoginWindow() {
    var header = document.querySelector("header");
    var main = document.querySelector("main");
    var loginWindow = document.getElementById("login-window");

    loginWindow.classList.add("hidden");
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    return
  }

</script>
