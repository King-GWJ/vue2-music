<template>
    <div class="box">
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                action-text="搜索"
                @search="onSearch"
                @cancel="onCancel"
                @input="onInput"
            />
        </form>
        <van-cell-group>
            <van-cell @click="getResultList(item)" v-for="item in suggestList" icon="search" :title="item"/>
        </van-cell-group>
        <van-list
            finished-text="没有更多了"
            >
            <van-cell v-for="item in resultList" @click="goPlay(item.id)" :title="item.name" >
                <template #right-icon>
                    <van-icon name="play-circle" class="search-icon" />
                </template>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { searchSuggestApi,searchApi } from '@/base/api';

export default {

    data() {
        return {
            value:'',
            suggestList:[],
            resultList:[],
            timer:null
        }
    },
    methods: {
        onSearch() {
            this.getResultList()
        },
        onCancel() {
            this.getResultList()
        },
        onInput() {
            if(this.timer)clearTimeout(this.timer)
            this.timer = setTimeout(async () => {
                this.resultList=[]
                this.suggestList=[]
                if(this.value.length<=0) return
                const res = await searchSuggestApi(this.value)
                res.result.songs.forEach(v=>{
                    this.suggestList.push(v.name)
                })
            }, 200);
        },
        getResultList(val=this.value) {
            this.value=val
            searchApi(this.value).then(res=>{
                this.suggestList=[]
            this.resultList=res.result.songs
            })
            
        },
        goPlay(id) {
            console.log(id)
        }
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