<script>
    
    import Handpick from './Handpick.vue'
    import Vip from  './VIP.vue'
    import { toplistApi }  from '../../../base/api/index';
   

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
                if(index > 1){
                    this.$refs.text.scrollTo({left: this.$refs.text.childNodes[index].offsetLeft - this.$refs.text.childNodes[1].offsetLeft, behavior: 'smooth'})
                }else{
                this.$refs.text.scrollTo({left:0, behavior: 'smooth'})
                }
                this.CurIndex=index
                this.$refs.swiperA.swipeTo(index)
	        },
            //点击nav切换子页面
            changeChild(index){
                if(index > 2){
                    this.$refs.header.scrollTo({left: this.$refs.header.childNodes[index].offsetLeft - this.$refs.header.childNodes[2].offsetLeft, behavior: 'smooth'})
                }else{
                this.$refs.header.scrollTo({left:0, behavior: 'smooth'})
                }
                this.navCurIndex=index
                this.$refs.swiperB.swipeTo(index)
            },
            //子页面切换，nav响应切换
            changeChildren(e){
                this.changeChild(e)
                this.$store.commit('leaderboard')
            },
            // 跳转歌曲详情
            toggle(id){
                localStorage.setItem('typeId', id)
                this.$router.push('/path/songlist');
                this.$store.commit('leaderboard',id)
            }

         },
            
           


        beforeCreate() {},

        created() {
            toplistApi().then(res => {
                if(res.code === 200){
                    this.everyList = res.list.filter(item => item.tags.length > 0)
                    this.listDetail = res.list.filter(item => item.tags.length === 0)
                    this.songList = this.everyList.splice(0,3)
                }
            })
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
    <div class="discover">
        <div class="muen">
            <div class="header">
                <div class="img libiao"><img src="../../../icon/lb.png" alt=""></div>
                <div class="text" ref="text">
                    <p :class="{active:CurIndex===index}" @click="changeTab(index)"  v-for="(item,index) in list" :key="index">{{ item }}</p>
                </div>
                <div class="img search"><img src="../../../icon/search.png" alt=""></div>
            </div>
        </div>
        <van-swipe class="swiperA" :show-indicators="false" ref="swiperA">
            <van-swipe-item>
                <header ref="header">
                    <p  
                        :class="{active:navCurIndex===index}" 
                        v-for="(item,index) in navlist" 
                        :key="index"
                        @click="changeChild(index)"
                    >{{ item }}</p>
                </header>
                    <van-swipe class="swiperB" @change="changeChildren" :show-indicators="false" ref="swiperB">
                    <van-swipe-item>精选</van-swipe-item>
                    <van-swipe-item class="music">
                        <p class="recommended">榜单推荐</p>
                        <div class="img">
                            <div 
                                v-for="(item,index) in songList" 
                                :key="index"
                                @click="toggle(item.id)"
                                ><img :src="item.coverImgUrl" alt="">
                            </div>
                        </div>
                        <div class="authority">
                            <div><img src="../../../icon/icon-wangyiyun.png" alt=""></div>
                            <p>官方榜</p>
                        </div>
                        <div class="list" 
                            v-for="(item,index) in listDetail" 
                            :key="index"
                            @click="toggle(item.id)"
                            ><div class="name">
                                <p class="nameA">{{ item.name }}</p>
                                <p class="nameB">{{ item.updateFrequency }}</p>
                            </div>
                            <div class="text">
                                <div class="textImg">
                                    <img :src="item.coverImgUrl" alt="">
                                </div>
                                <div class="textList">
                                    <div>
                                        <p class="p1">1</p>
                                        <div class="p">
                                            <p class="p2">如果可以</p>
                                            <p class="p3">-</p>
                                            <p class="p3">理查德</p>
                                        </div>
                                        <div>
                                            <p class="type">新</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="p1">2</p>
                                        <div class="p">
                                            <p class="p2">如果可以</p>
                                            <p class="p3">-</p>
                                            <p class="p3">理查德</p>
                                        </div>
                                        <div>
                                            <p class="type">新</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="p1">3</p>
                                        <div class="p">
                                            <p class="p2">如果可以</p>
                                            <p class="p3">-</p>
                                            <p class="p3">理查德</p>
                                        </div>
                                        <div>
                                            <p class="type">新</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="recommended">精选榜</p>
                        <div class="winnow" >
                            <div 
                                v-for="(item,index) in everyList" 
                                :key="index"
                                @click="toggle(item.id)"
                                ><img :src="item.coverImgUrl" alt="">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>精选3</van-swipe-item>
                    <van-swipe-item>精选4</van-swipe-item>
                    <van-swipe-item>精选3</van-swipe-item>
                    <van-swipe-item>精选4</van-swipe-item>
                    <van-swipe-item>精选3</van-swipe-item>
                    <van-swipe-item>精选4</van-swipe-item>
                </van-swipe>
                
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
        </van-swipe>
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
        background-color: #eaecf6;
    }
    .muen{
        width: 100%;
        display: flex;
        .header{
            width:100%;
            height:45px;
            display: flex;
            align-items: center;
            .img{
                width:28px;
                height:28px;
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
                font-size: 0.5rem;
                &::-webkit-scrollbar{height:0px}
                p{
                    width:50px;
                    height:25px;
                    flex-shrink: 0;
                    text-align: center;
                    line-height: 25px;
                    font-family: "黑体";
                    margin:0 10px;
                    color: #808080;
                    &.active{
                        border-bottom: 2px solid red;
                        color: black;
                    }
                }
            }
        }
    }
    .swiperA{
        width: 100%;
        flex:1;
        overflow-y:auto;
        .van-swipe-item{
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        header{
            width: 100%;
            display: flex;
            overflow-x: auto;
            &::-webkit-scrollbar{height:0px};
            transition: 1s;
            >p{
                flex-shrink: 0;
                font-size: 14px;
                padding: 4px 10px;
                display: flex;
                align-items: center;
                color: #808080;
                &.active{
                    color: black;
                    background-color: #d6d2d2;
                    border-radius: 50px
                }
            }
        }
        .swiperB{
            flex: 1;
            .music{
                height: 100%;
                overflow-y: auto;
                &::-webkit-scrollbar{width:0px}; 
            }
            .recommended{
                padding: 5px 0; 
                font-size: 20px;
                font-weight: bold;
                margin-top: 10px;
                width: 100%;
            }
            .img{
                width: 100%;
                display: flex;
                justify-content: space-between;
                >div{
                    width: 100px;
                    height: 100px;
                    background-color: #808080;
                    border-radius: 10px;
                    overflow: hidden;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .authority{
                width: 100%;
                display: flex;
                margin-top: 10px;
                align-items: center;
                >div{
                    width: 26px;
                    height: 26px;
                    margin-right: 5px;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
                >p{
                    font-size: 20px;
                    font-weight: bold;
                }
            }
            .list{
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 10px 15px;
                background-color: #fff;
                border-radius: 10px;
                margin-top: 10px;
                .name{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .nameA{
                        font-size: 22px;
                        font-weight: bold;
                        width: 60%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .nameB{
                        font-size: 16px;
                        color: #aaa7a7;
                    }
                }
                .text{
                    width: 100%;
                    display: flex;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    .textImg{
                        width: 70px;
                        height: 70px;
                        border-radius: 10px;
                        overflow: hidden;
                        background-color: #808080;   
                        >img{
                            width: 100%;
                            height: 100%;
                        }                     
                    }
                    .textList{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-left: 20px;
                        >div{
                            display: flex;
                            flex: 1;
                            align-items: center;
                            justify-content: space-between;
                            .p1{
                                font-weight: bold;
                                font-size: 16px;
                            }
                            .p{
                                flex: 1;
                                display: flex;
                                margin-left: 5px;
                                padding-right: 20px;
                                overflow: hidden;
                                .p2{
                                    color: black;
                                    font-size: 16px;
                                    margin-left: 5px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }   
                                .p3{
                                    color: #ccc;
                                    font-size: 16px;
                                    margin-left: 5px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }
                            >div{
                                width: 20px;
                                height: 20px;
                                display: flex;
                                align-items: center;
                                .type{
                                    width: 100%;
                                    height: 100%;
                                    color: #40C093;
                                    font-size: 16px;
                                }
                                >img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .winnow{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                >div{
                    width: 100px;
                    height: 100px;
                    background-color: #808080;
                    border-radius: 10px;
                    overflow: hidden;
                    flex-shrink: 0;
                    margin-left: 14px;
                    margin-bottom: 10px;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    
</style>

