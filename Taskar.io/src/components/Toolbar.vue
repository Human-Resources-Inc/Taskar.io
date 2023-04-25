<template>
    <div class="toolbar">
        <div class="tools">
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

    <div class="account">
        <div class="user">
            <p class="username">John Doe</p>
            <button href="" class="btn" scale="2">
                <img src="" alt="avatar">
            </button>
        </div>
    </div>
</template>

<style scoped>
    button {
        background-color: transparent;
        color: white;
        border-radius: 50%;
        width: 3em;
        height: 3em;
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
</style>