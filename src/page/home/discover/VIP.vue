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
    <div class="vip">
        
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


<style scoped lang="scss">
    .vip{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        
    }
</style>