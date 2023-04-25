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
        grid-template-columns: repeat(5, 1fr);
        position: absolute;
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