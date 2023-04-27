<template>
    <div class="board">
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        
        <popup></popup>
    </div>
</template>

<style scoped>

    .board {
        color: black;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 10em;
    }

    

</style>

<script>
    import Card from './Card.vue';
    import Popup from './Popup.vue';

    export default {
        name: "app",
        components: {
        "card"  :   Card,
        "popup" :   Popup
        }
    }
</script>