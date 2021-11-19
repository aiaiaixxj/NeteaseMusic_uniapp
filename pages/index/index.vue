<template>
	<view class="index">
		<musichead title="网易云音乐" :icons="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont icon-sousuo"></text>
					<input type="text" placeholder="输入歌曲名" />
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item,index) in musiclist" v-bind:key="index" @tap="handleToList(item.listId)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item,index) in musiclist[index].tracks" v-bind:key="index">
								<text>{{index+1}}.{{item.first}} {{item.second}}</text>
							</view>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>

	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	import {
		gettoplist
	} from '../../common/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				musiclist: []
			}
		},
		components: {
			musichead
		},
		onLoad() {
			gettoplist().then((res) => {
				this.musiclist = res
				console.log(res)
			})
		},

		methods: {
            handleToList(listId){
				uni.navigateTo({
					url:'../list/list?listId='+listId
				})
				console.log(listId)
				
			}
		}
	}
</script>

<style scoped>
	.index-search {
		display: flex;
		align-items: center;
		background-color: #f7f7f7;
		height: 70rpx;
		border-radius: 50rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
	}

	.index-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 26rpx;
	}

	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}

	.index-list {}

	.index-list-item {
		display: flex;
		/* 	flex-direction: row; */
		width: 80vw;
		height: 200rpx;
		margin-left: 40rpx;
		margin-bottom: 20rpx;
		/* justify-content: center; */

	}

	.index-list-img {
		display: flex;
		overflow: hidden;
		margin-right: 40rpx;
		position: relative;
		/* flex-direction: column; */
	}

	.index-list-img image {
		width: 500rpx;
		height: 200rpx;
		border-radius: 30rpx;
	}

	.index-list-img text {
		position: absolute;
		bottom: 0;
		left: 18rpx;
		color: white;
	}

	.index-list-text {
		/* display: flex; */
		/* flex-direction: column; */
		width: 600rpx;
		/* background-color: #4CD964; */
		overflow: hidden;

	}

	.index-list-text text {
		line-height: 66rpx;
		font-size: 26rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		/* color: white; */
	}
</style>
