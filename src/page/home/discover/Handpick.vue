<script>
    import {   bannerApi  }  from '../../../base/api/index';
    // import { anyToplistApi } from '../../../base/api/index';


    export default {
        components: {},

        data() {
            return {
                banner:[]
            };
        },

        computed: {},

        watch: {},

        methods: {},

        beforeCreate() {},

        created() {},

        beforeMount() {},

        mounted() {
            //轮播图
            bannerApi().then(res =>{
                this.banner=res.banners
            }).catch(err => {
                console.log("123:",err)
            })
            //榜单fenlei
            // anyToplistApi().then(res=>{
            //     console.log(res)
            // }).catch(err => {
            //     console.log("555:",err)
            // })
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
    <div class="handpick">
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <div  class="image" v-for="(item,index) in banner" :key="index">
                   <van-swipe-item><img :src="item.imageUrl" alt=""></van-swipe-item>
                </div>
            </van-swipe>
        </div>
        <div class="songlist">
            <h4>榜单</h4>
            <div class="selsect">
                <div class="every">
                    <img src="" alt="">
                    <p>去有风的地方，去有风的地方，去有风的地方，</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
  .handpick{
     width:100%;
     height:100%;
     overflow-y: auto;
  }
  .swiper{
    height:120px;
    display: flex;
    
    margin-top: 10px;
    overflow: hidden;
    overflow-x: auto;
    .my-swipe {border-radius: 8px;
        width:100%;
        .van-swipe-item{
            width:100%;
            img{
                width:100%;
            }
        }
    }
    
  }
  .songlist{
    margin-top:15px;
    .selsect{
        background: palevioletred;
        height:120px;
        overflow: hidden;
        overflow-x: auto;
        .every{
            width:100px;
            height:100%;
            display: flex;
            flex-direction: column;
            background: papayawhip;
            img{
                width:90px;
                height:90px;
                border-radius: 8px;
            }
            p{
                height:20px;
                font-size: 13px;
                white-space: nowrap; 
                overflow: hidden;     
                text-overflow: ellipsis; 
            }
        }
    }
  }
 

</style>
