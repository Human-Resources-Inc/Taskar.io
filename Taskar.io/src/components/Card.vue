<template>
    <div class="card">
        <div class="card-top">
            <p class="card-name">Lorem ipsum dolor sit amet, consectetur adipisicing ad officia!</p>
            <button @click="showPopup"><v-icon name="co-pencil" /></button>
            
        </div>
        <div class="card-bottom">
            <div class="card-date">
                <v-icon name="bi-clock"/>
                <p>27 Apr</p>
            </div>
            <img src="../images/37480555.jpg" alt="pfp" class="card-avatar" title="John Doe">
        </div>
    </div>
</template>

<style scoped>

    .card {
        background-color: white;
        border-radius: 10px;
        margin: 1rem 1rem 0 1rem;
        padding: 0.5rem;
        width: 17rem;
        height: fit-content;
        transition: background-color 50ms ease-in;
    }

    .card-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .card-top {
        display: flex;
        align-items: start;
        padding: 0 0 1.7em 0;
    }

    .card-name {
        
        margin-right: 0.5em;
        width: 15em
    }

    .card-top > button {
        background: none;
        border: none;
        display: none;
        border-radius: 5px;
        padding: 1px;
    }

    .card-date {
        display: inline-flex;
        align-items: center;
    }

    .card-date > p {
        margin-left: 4px
    }

    .card-avatar {
        border-radius: 50%;
        width: 2em;
        height: 2em;
    }

    .card:hover {
        background-color: rgb(174, 174, 174);
    }

    .card:hover > .card-top > button {
        display: flex;
    }

    .card-top > button:hover {
        background-color: rgb(103, 103, 103);
    }

</style>

<script>
    export default {
        methods: {
            showPopup() {
                this.emitter.emit("show-popup")
                // eventBus.$emit("show-popup");
            }
        }
    }
</script>
