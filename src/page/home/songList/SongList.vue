<script>
    import { trackAllApi } from "@/base/api/index.js"
    export default {
        components: {},

        data() {
            return {};
        },

        computed: {},

        watch: {},

        methods: {},

        beforeCreate() {},

        created() {
            // trackAllApi(localStorage.getItem('typeId')).then(res => {
            //     console.log(res);
            // })
            trackAllApi().then(res => {
                // console.log(res);
            })
            
        },

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
    <div>
       <div>231313</div>
       <div>231313</div>
       <div>231313</div>
       <div>231313</div>

       <div>231313</div>
       <div>231313</div>
       <div>231313</div>
       <div>231313</div>
    </div>
</template>

<style scoped lang="scss">

</style>