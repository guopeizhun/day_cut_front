<template>
	<view class="main">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			dots-styles="default" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<view class="content">
			<view class="title currentPlan">当前执行计划<span class="point"
					style="margin-left: 35upx;">({{obj.currentPlan}})</span>
			</view>
			<view class="subTitle dayPlan">

				<image @click="showTask" class="iconImage verticalCenter" src="../../../static/img/currentPlan.png">
				</image>

				<span class="verticalCenter" style="margin-left: 30upx;line-height: 100%;">当日计划</span>
				<button id="remove_current_plan" class="verticalCenter right " type="warn">放弃当日计划</button>
			</view>

			<view class="task point">
				<uni-transition ref="ani" :show="show">
					<ul v-for="item in obj.taskList">
						<li class="taskItem">
							<view style="max-width: 450upx;"><span style="margin-right: 40upx;">{{item.name}}</span>
								<span>{{item.from}}-{{item.to}}</span><br>
								<span style="margin-top: 30upx;">{{item.content}}</span>
							</view>
							<view style="margin-left: auto;">
								<button class="verticalCenter" type="default" v-if="item.fiished == 0">完成任务</button>
								<button class="verticalCenter" disabled="true" type="default" v-else>已完成√</button>
							</view>

						</li>
					</ul>
				</uni-transition>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: {
					currentPlan: "备考",
					taskList: [{
							id: 1,
							name: "计划一",
							from: "8:00",
							to: "9:30",
							content: "列表内容一",
							fiished: 1
						},
						{
							id: 1,
							name: "计划一",
							from: "8:00",
							to: "9:30",
							content: "列表内容一列表内容一列表内容一列表内容一列表内容一列表内容一",
							fiished: 0
						},
						{
							id: 1,
							name: "计划一",
							from: "8:00",
							to: "9:30",
							content: "列表内容一",
							fiished: 1
						}
					]
				},
				show: false,
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {},
				swiperDotIndex: 0
			}
		},
		onLoad() {},
		methods: {
			showTask() {
				this.show = !this.show;
			},
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			onBanner(index) {
				console.log(22222, index);
			}
		}
	};
</script>

<style lang="scss">
	@import "@/static/iconfont.css";

	.taskItem {
		display: flex;
		flex-direction: row;
		margin: 30upx 20upx;
		padding-bottom: 30upx;
		border-bottom: #434344 1px solid;
	}

	.task {
		display: flex;
		flex-direction: column;
		font-size: $style-defalut-font-size-max;
	}

	.content {
		color: $style-default-font-color;
		font-size: $style-defalut-font-size-medium;
	}

	@keyframes btn_move {
		0% {
			margin-left: auto;
		}

		25% {
			margin-right: 40%
		}


		60% {
			margin-right: 0
		}

		65% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}

	}

	@-webkit-keyframes btn_move {

		0% {
			margin-left: auto;
		}

		25% {
			margin-right: 40%
		}


		60% {
			margin-right: 0
		}

		65% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}




	}

	#remove_current_plan {
		margin-left: auto;
		animation-name: btn_move;
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-delay: 1s;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-play-state: running;
		/* Safari 与 Chrome: */
		-webkit-animation-name: btn_move;
		-webkit-animation-duration: 2s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-delay: 1s;
		-webkit-animation-iteration-count: 1;
		-webkit-animation-direction: alternate;
		-webkit-animation-play-state: running;
	}

	.currentPlan {
		padding: 40upx 25upx;
	}

	.dayPlan {
		display: flex;
	}

	.title {
		color: $style-default-font-color;
		background-color: $style-default-title-backgroud-color;
		font-size: $style-defalut-font-size-large;
		line-height: $style-defalut-font-size-large;
		//padding: 20upx 15upx;
	}

	.subTitle {
		color: $style-default-font-color;
		margin: auto 0;
		line-height: $style-defalut-font-size-max;
		background-color: $style-default-title-backgroud-color;
		font-size: $style-defalut-font-size-max;
		padding: 20upx 15upx;
	}

	.point {
		color: $style-default-link-point;
	}



	body {
		background-color: $style-default-backgroud-color;
	}

	.swiper-box {
		height: 150px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200px;
		color: #fff;
	}

	.swiper-item0 {
		background-color: #cee1fd;
	}

	.swiper-item1 {
		background-color: #b2cef7;
	}

	.swiper-item2 {
		background-color: #cee1fd;
	}

	.image {
		width: 750rpx;
	}

	/* #ifndef APP-NVUE */
	::v-deep .image img {
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}

	/* #endif */

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			margin: 0 auto;
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}

	.uni-bg-red {
		background-color: #ff5a5f;
	}

	.uni-bg-green {
		background-color: #09bb07;
	}

	.uni-bg-blue {
		background-color: #007aff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	.example-body-item {

		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15rpx;
		padding: 15rpx;
		height: 60rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		padding: 0 15rpx;
		/* #endif */
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28rpx;
		color: #333;
	}

	.example-body-dots {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50px;
		background-color: #333333;
		margin-left: 10rpx;
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}
</style>