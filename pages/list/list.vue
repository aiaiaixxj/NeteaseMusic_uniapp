<template>
	<view class="list">

		<view class="fixbg" :style="{'background-image':'url('+playlist.coverImgUrl+')'}">
			<!-- <image src="../../static/logo.png" mode=""></image> -->
		</view>
		<musichead title="音乐列表" :icons="true" color="white"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
                <view class="list-top">
                	  <view class="list-top-img">
                	  	   <image :src="playlist.coverImgUrl" mode=""></image>
						   <text>{{playlist.playCount}}</text>
                	  </view>
					  <view class="list-top-text">
					  	    <text>测试文字</text>
							<view class="list-top-text-image">
								<image :src="playlist.creator.avatarUrl" mode=""></image>
																<text>{{playlist.creator.nickname}}</text>
							</view>
							  <text>{{playlist.creator.detailDescription}}</text>
							 
					  </view>
					  
                </view>
				<!-- #ifdef MP-WEIXIN -->
				<button class="iconfont icon-fenxiang" open-type="share">
					<text>分享给微信好友</text>
				</button>
				<!-- #endif -->
				<view class="list-context">
					
				</view>
                 
				

			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	import {
		getlist
	} from '../../common/api.js'
	export default {
		data() {
			return {
				playlist:{
					creator:{
					
					}
				}
			}
		},
		components: {
			musichead
		},
		onLoad (e) {
			// let self = this
			getlist(e.listId).then((res)=> {
				  this.playlist = res[1].data.playlist
				 console.log(res[1].data.playlist)
			})
			console.log(e)
		},
		methods: {

		}
	}
</script>

<style scoped>
	button{
		width: 400rpx;
		background-color: rgba(0,0,0,0.1);
		color: white;
	}
.list-top{
	 width: 100%;
	 height: 390rpx;
	/* background-color: #007AFF; */
	 display: flex;
	 flex-direction: row;
}
.list-top-img{
	/* display: flex;
	align-items: center; */
	position: relative;
	
}
.list-top-img image{
	 width: 300rpx;
	 height: 300rpx;
	 margin: 44rpx;
	border-radius: 30rpx;
}
.list-top-img text{
	position: absolute;
	 margin: 44rpx;
	 left: 88rpx;
	 color: white;
	 
}
.list-top-text{
	display: flex;
	flex-direction: column;
	flex: 1;
	color: white;
}
.list-top-text text:nth-child(1){
	margin-top: 30rpx;
	font-size: 40rpx;
}
.list-top-text text:nth-child(2){
	margin-left: 10rpx;
}
.list-top-text text:nth-child(3){
	margin-top: 20rpx;
}
.list-top-text image{
	width: 50rpx;
	height: 50rpx;
	border-radius: 30rpx;
}
.list-top-text-image{
	display: flex;
	align-items: center;
	margin-top: 20rpx;
}
.list-context{
	width: 90%;
	height: 500rpx;
	background-color: white;
	border-radius: 30rpx;
	margin: 36rpx;
}
</style>
