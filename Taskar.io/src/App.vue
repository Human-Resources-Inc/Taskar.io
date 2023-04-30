<template>
    <header>
    <div class="toolbar">
        <div class="tools">
            <router-link to="/board" v-if="isLoggedIn">
                Board
            </router-link>
            <router-link to="/app_">
                Перейти на старую версию
            </router-link>
            <router-link to="/about" tag="button">
                <v-icon name="bi-info-circle-fill" scale="1.3"/>
            </router-link>
            <button href="" class="btn" title="Создать новое задание">
                <v-icon name= "la-plus-solid" scale="1.3"/>
            </button>
            <button href="" class="btn" title="Дать сотруднику задание">
                <v-icon name= "bi-person-plus-fill" scale="1.3"/>
            </button>
            <button href="" class="btn" title="Выбрать несколько заданий">
                <v-icon name= "ri-checkbox-multiple-fill" scale="1.3"/>
            </button>
            <button v-if="!isLoggedIn" @click="redirectToLogin">Login</button>
            <button v-if="!isLoggedIn" @click="redirectToRegister">Register</button>
            <button v-if="isLoggedIn" @click="logout">Logout</button>
        </div>
    </div>

    <div class="app-name">
        <h1>Taskar.io</h1>
    </div>

    <label class="account" ref="acntMenu">
        <div class="user">
            <p class="username">mili-ae</p>
            <button href="" class="btn" id="account-menu-button" @click="toggleMenu" scale="2" ref="acntMenu">
                <img src="./images/37480555.jpg" alt="avatar" ref="acntMenu">
            </button>
            <div class="account-menu" ref="acntMenu" v-if="isMenuOpen">
                <ul class="menu">
                    <li>
                        <v-icon name="io-settings-sharp" />
                        Настройки
                    </li>
                    <li>
                        <v-icon name="io-log-out-outline" />
                        Выйти
                    </li>
                </ul>
            </div>
        </div>
    </label>
</header>
<body>
    <router-view></router-view>
</body>

</template>

<style scoped>
    body {
        background-color: #282828;
    }

    button {
        background-color: transparent;
        border: 1px solid white;
        color: white;
        border-radius: 50%;
        width: 3em;
        height: 3em;
        transition: color 50ms ease-in;
        transition: border-color 50ms ease-in;
    }

    p, h1 {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    h1 {
        font-weight: bold;
        text-transform: uppercase;
        color: white;
    }

    button > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    router-link > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .toolbar,
    .account {
        padding: 0 2rem;
    }

    .toolbar {
        justify-content: left;
    }

    .tools > .btn {
        margin-right: 10px;
    }

    .account {
        justify-content: right;
    }

    .user {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .username {
        margin-right: 10px;
        font-size: 20px;
    }

    button:hover, router-link:hover {
        background-color: white;
        color: black
    }

    .menu {
        display: flex;
        list-style: none;
        padding: 0.5em 0.5em;
        width: 8.5em;
        background: rgb(179, 179, 179);
        color: black;
        border-radius: 0.5em;
        position: absolute;
        top: 1.5em;
        right: 1em;
        z-index: 1;
        flex-wrap: wrap;
    }

    .menu li {
        width: 100%;
        padding: 5px;
        border-radius: 0.5em;
    }

    .menu li:hover {
        background: rgb(222, 222, 222);
    }
    header {
        background-color: #282828;
        display: inline-flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 10px none white;
      }
</style>

<script>

    export default {
        created () {
        const jwt = localStorage.getItem('jwt');

            if (jwt) {
                // check if token is still valid
                const decodedToken = JSON.parse(atob(jwt.split('.')[1]));
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp > currentTime) {
                    this.isLoggedIn = true;
                }
                else {
                    this.logout();
                }
            }
            else{
                this.logout();
            }
        },
        data() {
            return {
                isLoggedIn: false,
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen
            },
            redirectToLogin() {
                this.$router.push('/login');
            },
            redirectToRegister() {
                this.$router.push('/register');
            },
            logout() {
            // perform logout logic here
                localStorage.removeItem('jwt');
                this.isLoggedIn = false;
                this.$router.push('/login')
            },
        }
    }

</script>