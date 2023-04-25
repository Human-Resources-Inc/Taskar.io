<template>
    <div class="toolbar">
        <div class="tools">
            <button href="" class="btn" title="Создать новое задание">
                <v-icon name= "la-plus-solid" scale="1.3"/>
            </button>
            <button href="" class="btn" title="Дать сотруднику задание">
                <v-icon name= "bi-person-plus-fill" scale="1.3"/>
            </button>
            <button href="" class="btn" title="Выбрать несколько заданий" onclick="Test">
                <v-icon name= "ri-checkbox-multiple-fill" scale="1.3"/>
            </button>
        </div>
    </div>

    <div class="app-name">
        <h1>Taskar.io</h1>
    </div>

    <div class="account">
        <div class="user">
            <p class="username">mili-ae</p>
            <button href="" class="btn" scale="2">
                <img src="../images/37480555.jpg" alt="avatar">
            </button>
        </div>
    </div>
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

    button:hover {
        background-color: white;
        color: black
    }

</style>