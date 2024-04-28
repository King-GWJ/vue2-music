<template>
    <div class="box">
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },

    methods: {
    
    },

}
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
    background: rgb(246,248,251);
}

::v-deep .van-search__content{
    background: white;
}
</style>