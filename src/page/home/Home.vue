<script>
    export default {
        components: {

        },

        data() {
            return {};
        },

        computed: {

        },

        watch: {

        },

        methods: {

        },

        beforeCreate() {},

        created() {

        },

        beforeMount() {},

        mounted() {

        },

        beforeUpdate() {},

        updated() {},

        beforeDestroy() {},

        destroyed() {},

        activated() {},

        deactivated() {}
    }
</script>

<template>
    <div class="home">
        
        <main class="home-main">
            <keep-alive>
                <router-view />
            </keep-alive>
        </main>
        <footer class="home-footer">
            <nav>
                <router-link to="/home/discover">发现</router-link>
                <router-link to="/home/blogs">博客</router-link>
                <router-link to="/home/musicPlay">漫游</router-link>
                <router-link to="/home/community">社区</router-link>
                <router-link to="/home/mine">我的</router-link>
            </nav>
        </footer>
    </div>
</template>

<style lang="scss">
    nav {
        display: flex;
        a {
            flex: 1;
            //font-weight: bold;
            color: #797d82;
            font-size: 0.267rem;
            text-align: center;
            width: 100vw;
            line-height: 49px;
            &.router-link-active{
                color: #c5483c;
            }
        }
    }
</style>
<style scoped lang="scss">
    .home {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .home-main {
            flex: 1;
            width: 100vw;
            overflow: hidden;
            overflow-y: scroll;
            display: flex;
        }
        .home-footer {
            height: 1.307rem;
            border-top: 1px solid #ededed;
        }

    }
</style>