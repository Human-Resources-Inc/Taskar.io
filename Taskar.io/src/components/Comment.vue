<template>

    <div class="comment">
        <img src="../images/37480555.jpg" alt="avatar" class="avatar">
        <div class="right-side">
            <div class="commentator">
                <p class="user-name">mili-ae</p>
                <p class="date">17.07.69 13:37</p>
            </div>
            
            <p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        
    </div>

</template>

<style scoped>

    .comment {
        display: flex;
        margin-top: 2em;
        align-items: center;
    }

    .comment img {
        align-self: flex-start;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        margin-right: 1em;
        flex-shrink: 0;
    }

    .commentator {
        display: flex;
    }

    .user-name {
        margin-right: 10px;
        font-weight: bold;
    }

    .date {
        color: rgb(79, 79, 79)
    }

    .right-side {
        width: 100%;
    }

    .comment-text {
        background-color: white;
        border: 1.8px solid rgb(172, 172, 172);
        padding: 0.4em;
        border-radius: 0.3em;
        width: 100%;
    }

</style>