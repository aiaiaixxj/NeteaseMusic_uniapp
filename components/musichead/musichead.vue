<template>
	<view class="music-head" :style="{color:color}">
		<view class="music-head-icon" v-if="icons">
			<text class="iconfont icon-fanhui" @click="handleToBack"></text>|<text class="iconfont icon-shouye" @click="handleToHome"></text>
		</view>
		{{title}} 
	</view>
</template>

<script>
	export default {
		name:"musichead",
		data() {
			return {
				
			};
		},
		props:['title','icons','color'],
		methods:{
			handleToBack(){
				// uni.navigateBack({
				// 	delta:1
				// })
				uni.navigateTo({
					url:'../../pages/index/index',
									complete() {
										// console.log("backtohome")
									}
				})
			},
			handleToHome(){
				 uni.navigateTo({
				 	url:'../../pages/index/index',
					complete() {
						console.log("backtohome")
					}
				 })
			}
		}
		
	}
</script>

<style scoped>
 .music-head{
	  position: relative;text-align: center;font-size: 16px;top: 30px;width: 100%;height: 75px;      
 }
 .music-head-icon{
	 position: absolute;width: 70px;height: 33px;line-height: 33px;left:10px; display: flex;justify-content: space-evenly;background-color: rgba(0,0,0,0.4);border-radius: 15px;
 }
</style>
