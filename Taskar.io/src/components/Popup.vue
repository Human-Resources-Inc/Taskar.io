<template>
    <div class="background popup" v-if="popupVisible">
        <div class="card-info">
            <div class="card-title">
                <div class="card-name">
                    <v-icon name="bi-window-desktop" />
                    <h3>Lorem, ipsum dolor.</h3>
                </div>
                <button id="closeWindow" @click="closePopup"><v-icon name="io-close-outline" /></button>
            </div>
            <div class="card-content">
                <div class="card-members">
                <div class="participants">
                    <p>Участники</p>
                    <div class="user-avatars">
                        <img src="../images/37480555.jpg" alt="">
                        <button id="add-participant"><v-icon name= "la-plus-solid" scale="1.3"/></button> 
                    </div>
                </div>
                <div class="deadline">
                    <p>Дедлайн</p>
                    <label class="interactable-date">
                        <input type="checkbox" name="" id="">
                        <p class="date">завтра в 17:04</p>
                    </label>
                </div>
                </div>
                <div class="card-description">
                    <div class="description-top">
                        <v-icon name="bi-text-left" scale="1.3" />
                        <h3>Описание</h3>
                    </div>
                    <label>
                        <p id="text-holder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio maxime harum officia quod ullam dolorem libero placeat voluptatem velit deleniti quos, fugiat omnis itaque qui corporis quibusdam reprehenderit dolore.</p>
                        <input type="text" name="" id="" placeholder="" style="">
                    </label>
                    
                </div>
            </div>
            <div class="card-comments">
                <div class="comments-top">
                    <v-icon name="la-comment-alt" scale="1.3" />
                    <h3>Комментарии</h3>
                </div>
                <div class="comments-input">
                    <img src="../images/37480555.jpg" alt="avatar">
                    <input type="text" name="" id="" placeholder="Ваш комментарий">
                </div>
                <comment></comment>
                <comment></comment>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .background {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.236);
        width: 100vw;
        height: 100vh;
    }

    .card-info {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        background-color: rgb(224, 230, 230);
        border-radius: 5px;
        padding: 2em;
        width: 50em
    }

    .card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;
        padding-bottom: 15px;
        border-bottom: 2px solid black;
    }

    .card-name {
        display: flex;
        align-items: center;
    }

    h3 {
        margin-left: 15px;
        margin-right: 5px
    }

    .card-title button {
        background: none;
        border: none;
        border-radius: 50%;
        padding: 5px
    }

    .card-title button:hover {
        background: rgb(122, 122, 122);
    }

    .card-members {
        position: inherit;
        display: flex;
    }

    .participants p,
    .deadline p {
        font-size: small;
        margin-bottom: 0.2em;
    }

    .participants {
        margin-right: 5em;
    }

    .interactable-date {
        display: flex;
        margin-top: 0.8em;
    }

    .deadline input {
        display: none;
        margin-right: 10px;
    }

    .deadline input:checked {
        display: block;
    }

    .date {
        font-size: medium !important;
    }

    .user-avatars {
        display: flex;
        width: 3em;
        height: 3em;
    }

    .user-avatars img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin-right: 5px;
        flex-shrink: 0;
    }

    .user-avatars button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        flex-shrink: 0;
        border: none;
        background: none;
    }

    .user-avatars button:hover {
        background: rgb(122, 122, 122);
    }

    .card-description {
        margin-top: 2em;
        border-bottom: 2px solid black;
    }

    .description-top {
        display: flex;
        align-items: center;
    }

    .card-description input {
        padding: 0.6em;
        margin: 10px;
        font-size: small;
        width: 100%;
        height: fit-content;
        background: none;
        border:none;
        border-radius: 0.2em;
        outline:none;
        cursor: pointer;
    }

    .card-description input:focus {
        border: 2px solid rgb(122, 122, 122);
        cursor: auto;
    }

    .comments-top {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    
    .comments-input {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .comments-input img {
        width: 3em;
        height: 3em;
        border-radius: 50%;
    }

    .comments-input input {
        margin-left: 1em;
        padding: 1em;
        width: 100%;
        outline:none;
    }

    .comments-input input:focus {
        border: 2px solid rgb(122, 122, 122);
        cursor: auto;
    }

    .popup-open {
        overflow: hidden;
    }

</style>

<script>
    import Comment from "./Comment.vue";

    export default {
        data() {
            return {
                popupVisible: false
            }
        },
        created() {
            this.emitter.on("show-popup", this.showPopup);
        },
        methods: {
            showPopup() {
                this.popupVisible = true;
            },
            closePopup() {
                this.popupVisible = false;
            }
        },
        components: {
        "comment"  :   Comment,
        }
    }
</script>