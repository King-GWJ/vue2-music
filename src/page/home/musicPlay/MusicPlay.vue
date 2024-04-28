<script>
    export default {
        components: {
        },

        data() {
            return {
                add: [1,2,3,4,5,6,7,8,9],
                float: true, // 图片是否旋转
                xinxin: true, // 是否收藏，默认收藏

            };
        },

        computed: {},

        watch: {},

        methods: {},

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
    <div class="box">
        <div class="musicHead">
            <div class="zhankai">
                <img src="../../../icon/icon-zhankai.png" alt="">
            </div>
            <div class="text">
                <span>私人漫游 · 默认模式</span>
            </div>
            <div class="fenxiang" >
                <img src="../../../icon/icon-fenxiang2.png" alt="">
            </div>
        </div>
        <div class="musicImg">
            <div class="imgAb">
                <img src="../../../icon/needle-ab.png" alt="">
            </div>
            <div :class="['imgA',{imgActive:float}]">
                <div class="imgB">
                    <div class="imgC">
                        <img src="https://img2.baidu.com/it/u=4046032575,170739907&fm=253&fmt=auto&app=138&f=JPEG?w=479&h=500" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="musicName">
            <div class="name">
                <div class="nameTitle">
                    <p>冬天的密码</p>
                    <p class="nameVip">vip</p>
                </div>
                <div class="nameText">
                    <p>周冬雨</p>
                    <p class="nameVip">关注</p>
                </div>
            </div>
            <div class="xin" @click="xinxin = !xinxin">
                <img v-if="xinxin" src="../../../icon/icon-collect.png" alt="">
                <img v-else="xinxin" src="../../../icon/like.png" alt="">
            </div>
            <div class="pinlun">
                <img src="../../../icon/icon-pinlun.png" alt="">
            </div>
        </div>
        <div class="musicSlider" >
            <div v-for="(item,index) in add" :key="index">{{ item }}</div>
        </div>
        <div class="musicBtn">
            <div class="btn1">
                <img src="../../../icon/icon-light.png" alt="">
            </div>
            <div class="btn2">
                <img src="../../../icon/icon-shangyishou.png" alt="">
            </div>
            <div class="btn3">
                <img src="../../../icon/incon-blackbofang.png" alt="">
            </div>
            <div class="btn4">
                <img src="../../../icon/icon-next.png" alt="">
            </div>
            <div class="btn5">
                <img src="../../../icon/icon-liebiao.png" alt="">
            </div>
        </div>
        <div class="musicSettings">
            <div>
                <img src="../../../icon/icon-hengpin.png" alt="">
            </div>
            <div>
                <img src="../../../icon/icon-xiaz.png" alt="">
            </div>
            <div>
                <img src="../../../icon/icon-gd.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    background-color: #4B4B4B;
    .musicHead{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .zhankai{
            width: 30px;
            height: 30px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .fenxiang{
            width: 30px;
            height: 30px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .text{
            flex: 1;
            text-align: center;
        }
    }
    .musicImg{
        width: 100%;
        flex: 1;
        position: relative;
        .imgAb{
            width: 100px;
            height: calc(100px * 1.6);
            position: absolute;
            left: 59%;
            top: 24%;
            transform: translate(-50%,-50%);
            z-index: 10;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .imgA{
            width: 260px;
            height: 260px;
            background-color: #ead9d9;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 60%;
            transform: translate(-50%,-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            &.imgActive{
                left: 14%;
                top: 26%;
                animation: rotate 2s linear infinite;
            }
            .imgB{
                width: 230px;
                height: 230px;
                border-radius: 50%;
                background-color: #4B4B4B;
                display: flex;
                align-items: center;
                justify-content: center;
                .imgC{
                    width: 160px;
                    height: 160px;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: antiquewhite;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        @keyframes rotate {
		  from {
		    transform: rotate(0deg);
		  }
		  to {
		    transform: rotate(360deg);
		  }
		}
    }
    .musicName{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
            width: 60%;
            .nameTitle{
                display: flex;
                color: #a4a4a4;
                font-size: 20px;
                align-items: center;

                .nameVip{
                    color: #bfbfbf;
                    background-color: #444444;
                    border-radius: 4px;
                    padding:0px 6px;
                    // font-weight: normal;
                    font-size: 16px;
                    margin-left: 6px;
                    display: flex;
                    align-items: center;
                    height: 20px;
                }
            }
            .nameText{
                display: flex;
                margin-top: 8px;
                color: #888888;
                font-weight: bold;
                font-size: 16px;
                align-items: center;
                .nameVip{
                    color: #bfbfbf;
                    background-color: #444444;
                    border-radius: 50px;
                    padding: 2px 8px;
                    margin-left:6px;
                    // font-weight: normal;
                    height: 20px;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .xin{
            width: 40px;
            height: 40px;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .pinlun{
            width: 40px;
            height: 40px;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .musicSlider{
        width: 100%;
        height: 50px;
        display: flex;
        overflow: hidden;
        overflow-x: auto;
        &::-webkit-scrollbar{height:0px};
        align-items: center;
        >div{
            width: 100px;
            flex-shrink: 0;
        }
    }
    .musicBtn{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        >div{
            width: 40px;
            height: 40px;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .btn1{
            width: 30px;
            height: 30px;
        }
        .btn5{
            width: 30px;
            height: 30px;
        }
        .btn4,.btn2{
            width: 40px;
            height: 40px;
        }
        .btn3{
            width: 50px;
            height: 50px;
        }
    }
    .musicSettings{
        padding: 30px 0;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        >div{
            width: 20px;
            height: 20px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>