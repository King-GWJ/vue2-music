import {request} from "../request/axiosRequest";

//搜索建议接口
export const searchSuggestApi = (keywords) => {
    return request({
        url: '/search/suggest',
        params: {
            keywords
        }
    })
}

// //搜索接口
export const searchApi = (val, offset) => {
    return request({
        url: '/search',
        params: {
            keywords: val,
            offset: offset
        }
    })
}

// 游客登录
export const anonimousLoginApi = () => {
    return request({
        url: '/register/anonimous',
        method: 'GET'
    })
}

// 邮箱登录
export const emailLoginApi = (email, password) => {
    return request({
        url: '/login',
        method: 'GET',
        params: {
            email,
            password
        }
    })
}

// 手机号登录
export const phoneLoginApi = (phone, password) => {
    return request({
        url: '/login/cellphone',
        method: 'GET',
        params: {
            phone,
            password
        }
    })
}

// 二维码 key 生成接口
export const qrKeyApi = () => {
    return request({
        url: '/login/qr/key',
        method: 'GET',
        params: {
            timestamp: Date.now()
        }
    })
}

// 二维码生成接口
export const qrCreateApi = (key) => {
    return request({
        url: '/login/qr/create?qrimg',
        method: 'GET',
        params: {
            key,
            timestamp: Date.now()
        }
    })
}

// 二维码检测扫码状态接口
export const qrCheckApi = (key) => {
    return request({
        url: '/login/qr/check',
        method: 'GET',
        params: {
            key,
            timestamp: Date.now()
        }
    })
}

// 登录状态
export const loginStatusApi = () => {
    return request({
        url: '/login/status',
    })
}

// 退出登录
export const logoutApi = () => {
    return request({
        url: '/logout',
        method: 'GET'
    })
}

// 退出登录
export const userAccount = () => {
    return request({
        url: '/user/account',
        method: 'GET'
    })
}

// 获取用户详情
export const userDetailApi = (uid) => {
    return request({
        url: '/user/detail',
        method: 'GET',
        params: {
            uid,
        }
    })
}
// 获取用户歌单
export const userPlayListApi = (uid) => {
    return request({
        url: '/user/playlist',
        method: 'GET',
        params: {
            uid,
            timestamp: Date.now()
        }
    })
}

//轮播图
export const bannerApi = () => {
    return request({
        url: '/banner'
    })
}

// 博客列表
export const voiceApi = (val) => {
    return request({
        url: '/voicelist/search',
        params: {
            limit: val.limit,
            offset: val.offset
        }
    })
}

// 数字专辑-新碟上架
export const valbumApi = (val) => {
    return request({
        url: '/album/list',
        params: {
            limit: val.limit,
            offset: val.offset
        }
    })
}

//所有榜单
export const toplistApi = () => {
    return request({
        url: '/toplist'
    })
}


// 获取不同榜单的数据
export const anyToplistApi = (idx) => {
	return request({
		url: '/top/list',
		data: {
			idx
		}
	})
}





//推荐歌单
export const personalizedApi = (num) => {
    return request({
        url: '/personalized',
        params: {
            limit: num
        }
    })
}

//推荐新音乐
export const newsongApi = (num) => {
    return request({
        url: '/personalized/newsong',
        params: {
            limit: num
        }
    })
}

//每日推荐歌曲
export const songsApi = () => {
    return request({
        url: '/recommend/songs'
    })
}

//热搜列表
export const hotApi = () => {
    return request({
        url: '/search/hot'
    })
}


//获取歌单所有歌曲
export const trackAllApi = (id, limit, offset) => {
    return request({
        url: '/playlist/track/all',
        params: {
            id: id,
            limit: limit,
            offset: offset
        }
    },)
}


// 最新专辑
export const newestApi = () => {
    return request({
        url: '/album/newest'
    })
}

// 电台banner
export const djBannerApi = () => {
    return request({
        url: '/dj/banner'
    })
}

// 电台推荐
export const personalizeApi = (val) => {
    return request({
        url: '/dj/personalize/recommend',
        params: {
            limit: val
        }
    })
}
// 歌单详情
export const SongdetailApi = (id, s = 10) => {
    return request({
        url: '/playlist/detail',
        params: {
            id,
            s
        }
    })
}

// 歌曲详情
export const songDetailApi = (ids) => {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

// 歌词
export const lyricApi = (id) => {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

// 评论
export const commentApi = (type, id) => {
    return request({
        url: `/comment/${type}`,
        params: {
            id
        }
    })
}

// 音乐播放url
export const songUrlApi = (id, level) => {
    return request({
        url: '/song/url/v1',
        params: {
            id: id,
            level: level
        }
    })
}

// 用户关注列表
export const userFollowApi = (val) => {
    return request({
        url: '/user/follows',
        params: {
            uid: val.uid,
        }
    })
}

// 获取用户粉丝列表
export const userFollowedsApi = (val) => {
    return request({
        url: '/user/followeds',
        params: {
            uid: val.uid,
            limit: val.limit || 30
        }
    })
}


//歌单添加删除歌曲
export const playListChange = (op, pid, tracks) => {
    return request({
        url: '/playlist/tracks',
        params: {
            op,
            pid,
            tracks,
            timestamp: Date.now()
        }
    })
}

// 查看专辑
export const getalbumApi = (id) => {
    return request({
        url: '/album',
        params: {
            id: id
        }
    })
}

//分享歌曲
export const getashareApi = (id) => {
    return request({
        url: '/share/resource',
        params: {
            id: id
        }
    })
}

//mv播放地址
export const mvDetailApi = (id) => {
    return request({
        url: '/mv/url',
        method: 'POST',
        params: {
            id: id
        }
    })
}
// mv详情数据
export const mvUrlApi = (id) => {
    return request({
        url: '/mv/detail',
        method: 'POST',
        params: {
            mvid: id
        }
    })
}
// mv评论详情
export const mvInfoApi = (id) => {
    return request({
        url: '/mv/detail/info',
        method: 'POST',
        params: {
            mvid: id
        }
    })
}


// mv推荐视频列表
export const mvrecommendApi = (id) => {
    return request({
        url: '/video/timeline/recommend',
    })
}
//新版评论
export const newCommentApi = (id, type, sortType) => {
    return request({
        url: '/comment/new',
        params: {
            id,
            type,
            sortType,
            timestamp: Date.now()
        }
    })
}

//评论点赞
export const goodApi = (id, cid, t, type) => {
    return request({
        url: '/comment/like',
        params: {
            id,
            cid,
            t,
            type,
            timestamp: Date.now()
        }
    })
}

//发送评论
export const sendCommentApi = (t, type, id, content, commentId) => {
    return request({
        url: '/comment',
        params: {
            t,
            type,
            id,
            content,
            commentId
        }
    })
}

//楼层评论
export const floorCommentApi = (parentCommentId, id, type) => {
    return request({
        url: '/comment/floor',
        params: {
            parentCommentId,
            id,
            type
        }
    })
}