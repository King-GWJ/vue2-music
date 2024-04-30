<script>
    
    import Handpick from './Handpick.vue'
    import Vip from  './VIP.vue'
    import { createLogger, mapMutations } from "vuex";
    import {  toplistApi ,anyToplistApi}  from '../../../base/api/index';
   

    export default {
        components: {
            "Handpick":Handpick,
            "Vip":Vip
        },

        data() {
            return {
                list:['音乐','博客','听书','直播','派对'],
                navlist:['精选','排行榜','VIP','歌单','SunoAl','助眠','欧美','原创','学习','经典','粤语','说唱','国风','电音','运动','民谣','K-Pop','摇滚','R&B','全球','R&B','全球','儿歌','HiFi','爵士','古典','ACG','DJ'],
                CurIndex:0, //头部当前下标
                navCurIndex:0,//nav当前下标
                songList:[] , //顶部榜单三个
                everyList:[],//各类榜单数据
                listDetail:[], //榜单详情
            };
        },

        computed: {
           

        },

        watch: {},

        methods: {
            //点击头部切换分页
            changeTab(index){
                this.CurIndex=index
                console.log(this.CurIndex)
                this.$refs.swip.swipeTo(index)
	        },
            //点击nav切换子页面
            changeChild(index){
                this.navCurIndex=index
                this.$refs.child.swipeTo(index)
            },
            //子页面切换，nav响应切换
            changeChildren(e){
                this.navCurIndex=e
            },
         

         },
            
           


        beforeCreate() {},

        created() {},

        beforeMount() {},

        mounted() {
            // songList:[] , //榜单数据
            // everyList:[],//各类榜单数据
            //     listDetail:[], //榜单详情
            toplistApi ().then(res =>{
                console.log(res)
                this.listDetail=res.list.filter(v=>v.tags.length>0)
                this.everyList=res.list.filter(v=>v.tags.length===0)
                this.songList=this.everyList.splice(0,3)
                console.log(this.listDetail)
                console.log(this.everyList)
                console.log(this.songList)

            }).catch(err => {
                console.log("222:",err)
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
    <div class="discover">
        <div class="muen">
            <div class="header">
                <div class="img libiao"><img src="../../../icon/lb.png" alt=""></div>
                <div class="text">
                    <p :class="{active:CurIndex===index}" @click="changeTab(index)"  v-for="(item,index) in list" :key="index">{{ item }}</p>
                </div>
                <div class="img search"><img src="../../../icon/search.png" alt=""></div>
            </div>
        </div>
        <div class="content">
            <div class="swiper">
                <van-swipe class="my-swipe" ref="swip" :show-indicators="false">
                    <van-swipe-item >
                        <header> 
                          <p :class="{active:navCurIndex===index}"  @click="changeChild(index)"  v-for="(item,index) in navlist" :key="index">{{ item }}</p>
                        </header>
                        <!--  -->
                        <van-swipe class="my-swipe" ref="child" @change="changeChildren"  :show-indicators="false">
                            <!-- 精选 -->
                            <van-swipe-item>
                               <Handpick/>
                            </van-swipe-item>
                            <!-- 排行榜 -->  
                            <van-swipe-item>
                                <div class="center">
                                    <div class="recommend">
                                        <h4>推荐榜单</h4>
                                        <div class="list">
                                            <div class="list-item"  v-for="(item,index) in songList" :key="index">
                                                <img :src="item.coverImgUrl" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="official">
                                        <div class="offtitle">
                                            <img src="../../../icon/icon-wangyiyun.png" alt="">
                                            <h4>官方榜</h4>
                                        </div>
                                        <div class="offlist">
                                             <div class="offitem" v-for="(item,index) in listDetail" :key="index">
                                                <div class="title">
                                                    <h3>{{item.name}}</h3>
                                                    <div class="update">刚刚更新</div>
                                                </div>
                                                <div class="hotList">
                                                    <img src="" alt="">
                                                    <ul>
                                                        <li>
                                                            <div class="name"></div>
                                                            <div class="differ">新</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                                    <!-- 精选 -->
                                    <div class="selected">
                                        <h3>精选榜</h3>
                                        <div class="selectItem">
                                            <div class="every"></div>
                                        </div>
                                    </div>
                                    <!-- 曲风 -->
                                    <div class="selected">
                                        <h3>曲风榜<div>更多</div></h3>
                                        <div class="selectItem">
                                            <div class="every"></div>
                                        </div>
                                    </div>
                                </div>
                            </van-swipe-item>
                            <!-- vip -->
                            <van-swipe-item>
                                <Vip/>
                            </van-swipe-item>
                            <!-- 歌单 -->
                            <van-swipe-item>4</van-swipe-item>
                            <!-- sun -->
                            <van-swipe-item>4</van-swipe-item>
                            <!-- 歌单 -->
                            <van-swipe-item>4</van-swipe-item>
                            <!-- 歌单 -->
                            <van-swipe-item>4</van-swipe-item>
                        </van-swipe>
                        <!--  -->
                    </van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                 
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
*{
    padding:0;
    margin:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
    .discover{
        width:100%;
        height:100%;
        display: flex;
        flex-direction:column;
        padding:0 10px;
    }
    .muen{
        display: flex;
        .header{
            width:100%;
            height:45px;
            display: flex;
            align-items: center;
            .img{
                width:30px;
                height:30px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .text{
                flex:1;
                display: flex;
                overflow-x:auto;
                padding:0 8px;
                &::-webkit-scrollbar{height:0px}
                p{
                    width:50px;
                    height:25px;
                    flex-shrink: 0;
                    text-align: center;
                    line-height: 25px;
                    font-family: "黑体";
                    margin:0 10px;
                    &.active{
                        border-bottom: 2px solid red;
                    }
                }
            }
        }
    }
    .content{
        flex:1;
        overflow-y:auto;
        .swiper{
            width:100%;
            height:100%;
            .my-swipe{
                width:100%;
                height:100%;
                overflow-y: auto;
                .van-swipe-item {
                    height:100%;
                    background-color: #e1f3a3;
                    display: flex;
                    flex-direction: column;
                       header{
                            height:40px;
                            display: flex;
                            overflow-x:auto;
                            align-items: center;
                            &::-webkit-scrollbar{height:0px}
                            p{
                                height:25px;
                                line-height: 25px;
                                padding:0 10px; 
                                flex-shrink: 0;
                                font-size: 14px;
                                &.active{
                                    border-radius: 15px;
                                    background: #eee;
                                }
                            }
                        }
                        .center{
                            flex:1;
                            background: paleturquoise;
                            display: flex;
                            flex-direction: column;
                            overflow-y:auto;
                            .recommend{
                                height:30%;
                                margin-top: 15px;
                                display: flex;
                                flex-direction: column;
                                .list{
                                    margin-top:10px;
                                    overflow-x: auto;
                                    display: flex;
                                    .list-item{
                                        width:100px;
                                        height:100px;

                                        margin-right:15px;
                                        img{
                                            width:100%;
                                            height:100%;
                                            border-radius: 15px;
                                        }
                                    }
                                }
                            }
                            .official{
                                margin-top:25px;
                                flex:1;
                                display: flex;
                                flex-direction: column;
                                background: palegreen;
                                .offtitle{
                                    display: flex;
                                    img{
                                        width:20px;
                                        height:20px;
                                    }
                                }
                                .offlist{
                                    margin-top: 10px;
                                   overflow: hidden;
                                   overflow-y: auto;
                                   .offitem{
                                    height:150px;
                                    border-radius: 10px;
                                    background: #fff;
                                    padding:0 10px;
                                    display: flex;
                                    flex-direction: column;
                                    .title{
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-between;
                                        margin:10px 0;
                                        .update{
                                            font-size: 13px;
                                            color: #808080;
                                        }
                                    }
                                    .hotList{
                                        display: flex;
                                        img{
                                            width:100px;
                                            height:100px;
                                        }
                                        ul{
                                            flex:1;
                                            margin-left: 10px;
                                            height:100%;
                                            background: #e1f3a3;
                                            li{
                                                height:25px;
                                                background: pink;
                                                margin-top:5px 0;
                                                display: flex;
                                                align-items: center;
                                                justify-content: space-between;
                                                name{
                                                    flex:1;
                                                }
                                                .differ{
                                                    width:30px;
                                                    background: burlywood;
                                                    text-align: center;
                                                }
                                            }
                                        }
                                    }
                                   }
                                }
                            }
                        }
                    }
                }
            }
            // 精选
            .selected{
                display: flex;
                flex-direction: column;
                padding:0 10px;
                h3{
                        margin:10px 0;
                        display: flex;
                        align-items: center;
                        div{
                            font-size: 13px;
                            background: #bdbcbc;
                            border-radius: 15px;
                            padding:0 10px;
                            margin:0 10px;
                        }
                    }
                .selectItem{
                    display: flex;
                    flex-wrap: nowrap;
                    flex-shrink: 0;
                    .every{
                        width:100px;
                        height:100px;
                        background: rgb(83, 159, 159);
                        border-radius: 10px;
                    }
                }

            }
        
        }
    
</style>

