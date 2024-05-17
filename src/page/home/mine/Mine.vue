<script>
    export default {
        components: {},

        data() {
            return {
                show: false,
            };
        },

        computed: {},

        watch: {},

        methods: {
            showPopup() {
                this.show = true;
            },
            goLogin(){
                this.show = false;
                this.$router.push('/login')
            }
        },

        beforeCreate() {},

        created() {},

        beforeMount() {},

        mounted() {},

        beforeUpdate() {},

        updated() {},

        beforeDestroy() {},

        destroyed() {},

        activated() {},

        deactivated() {}
    }
</script>
<template>
    <div class="main">
        <header class="header">
            <div class="tab">
                <svg @click="showPopup"
                     t="1714373797968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1550" width="32"
                     height="32">
                    <path
                        d="M897.427256 249.003144 126.57172 249.003144c-34.673707 0-62.73174-28.088732-62.73174-62.73174s28.058033-62.73174 62.73174-62.73174l770.855536 0c34.673707 0 62.73174 28.088732 62.73174 62.73174S932.101987 249.003144 897.427256 249.003144z"
                        fill="#666d77" p-id="1551"></path>
                    <path
                        d="M897.427256 574.73174 126.57172 574.73174c-34.673707 0-62.73174-28.088732-62.73174-62.73174s28.058033-62.73174 62.73174-62.73174l770.855536 0c34.673707 0 62.73174 28.088732 62.73174 62.73174S932.101987 574.73174 897.427256 574.73174z"
                        fill="#666d77" p-id="1552"></path>
                    <path
                        d="M897.427256 900.460336 126.57172 900.460336c-34.673707 0-62.73174-28.088732-62.73174-62.73174 0-34.643008 28.058033-62.73174 62.73174-62.73174l770.855536 0c34.673707 0 62.73174 28.088732 62.73174 62.73174C960.16002 872.371604 932.101987 900.460336 897.427256 900.460336z"
                        fill="#666d77" p-id="1553"></path>
                </svg>
            </div>
            <div class="user">
                <van-image
                    round
                    width="1.6rem"
                    height="1.6rem"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                >
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
                <span @click="goLogin">立即登录</span>
            </div>

        </header>

        <van-popup v-model="show" position="left" :style="{ height: '100vh',width:'80vw' }">
            <van-button plain hairline type="primary" @click="goLogin">登录</van-button>
            <van-button plain hairline type="danger">退出登录</van-button>
        </van-popup>
    </div>
</template>

<style scoped lang="scss">
    .main {
        width: 100vw;
        display: flex;
        padding: 0.587rem;
        flex-direction: column;
        box-sizing: content-box;
        font-size: 0.427rem;

        .header {

            .user {
                margin-top: 0.533rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>