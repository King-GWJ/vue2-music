<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: 0;
        cursor: default;
        //user-select: none;
        text-decoration: none;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

</style>

<style lang="scss" scoped>
    #app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
<script setup>
</script>