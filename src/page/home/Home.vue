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
            text-align: center;
            width: 100%;
            line-height: 49px;
            &.router-link-exact-active {

            }

            &.router-link-active{
                color: #c5483c;
            }
        }
    }
</style>
<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .home-main {
            flex: 1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: scroll;
            display: flex;
        }
        .home-footer {
            height: 49px;
            border-top: 1px solid #ededed;
        }

    }
</style>