<script>
    import {bannerApi,request} from "@/base/api/index";

    export default {
        components: {},

        data() {
            return {};
        },

        computed: {},

        watch: {},

        methods: {

        },

        beforeCreate() {},

        created() {},

        beforeMount() {},

        mounted() {
            bannerApi().then(response =>{
                console.log("ggg",response)
            }).catch(err => {
                console.log("ggg:",err)
            })
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
    <div>
        发现
    </div>
</template>

<style scoped lang="scss">

</style>