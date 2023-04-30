<template>

    <div class="login-window" id="login-window">
      <div class="login-container">
        <h2>Taskar.io</h2>
        <div class=".user-name">
          <v-icon class="icon" name="co-user" scale="1.5" />
          <input id="username" type="text">
        </div>
        
        <div class="password">
          <v-icon class="icon" name="bi-key" scale="1.5" />
          <input id="password" type="text">
        </div>
        
        <button @click="loginButtonClick">Log-in</button>
      </div>
    </div>
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
      background-color: #282828;
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
      color:white;
      text-align: center;
      text-transform: uppercase;
      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  
    .icon {
      color: white;
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
      background: #282828;
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
      background-color: #282828;
      display: inline-flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 10px none white;
    }
  
    main {
      display:grid;
      background-color: #282828;
    }
  
    .hidden {
      display: none;
    }
  </style>
  
  <script>
  import axios from 'axios';
  

  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async loginButtonClick() {
        try {
        const response = await axios.post('http://localhost:3000/user/login', {
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        });
        console.log(response);
        if (response){
          localStorage.setItem('jwt', response.data.token);
          this.$router.push('/board');
        }
      } catch (error) {
        console.log(error);
      }


        // axios.post('/user/login', {
        //   email: document.getElementById('email').value,
        //   password: document.getElementById('password').value
        // })
        // .then(response => {
        //   if (response){
        //     console.log(response);
        //     this.$router.push('/board');
        //   }
        //   else{
        //     console.log("empty response");
        //   }
        // })
        // .catch(error => {
        //   console.log(error);
        // });
        
      },
      redirectToRegister() {
        this.$router.push('/register');
      }
    },
  };
  </script>