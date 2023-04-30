<template>
    <div class="toolbar">
        <div class="tools">
            
            <router-link to="/about" tag="button">
                <v-icon name="la-plus-solid" scale="1.3"/>
            </router-link>
            <router-link to="/about" tag="button">
                <v-icon name="bi-person-plus-fill" scale="1.3"/>
            </router-link>
            <router-link to="/about" tag="button">
                <v-icon name="ri-checkbox-multiple-fill" scale="1.3"/>
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
        </div>
    </div>

    <div class="app-name">
        <h1>Taskar.io</h1>
    </div>

    <label class="account" ref="acntMenu">
        <div class="user">
            <p class="username">mili-ae</p>
            <button href="" class="btn" id="account-menu-button" @click="toggleMenu" scale="2" ref="acntMenu">
                <img src="../images/37480555.jpg" alt="avatar" ref="acntMenu">
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
</template>

<style scoped>

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

</style>

<script>

    export default {
        data() {
            return {
                isMenuOpen: false,
            };
        },
        mounted() {
            document.addEventListener("click", this.handleOutsideClick);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.handleOutsideClick);
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen
            },
            handleOutsideClick(event) {
                if (!this.$refs.acntMenu.contains(event.target)) {
                    console.log("Clicked Outside: " + event.target);
                    if (this.isMenuOpen == false) { return }

                    this.toggleMenu();
                }
            }
        }
    }

</script>