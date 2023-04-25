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

    export default {
        name: "app",
        components: {
        "card" : Card,
        }
    }
</script>