<script>
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	import {
		getRoute
	} from './util/api/routeList.js'
	export default {
		onLaunch: async function() {
			// getRoute().then(res=>{
			// 	console.log(res.data)
			// })
			await uniIdPageInit()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	.iconImage {
		width: 50upx;
		height: 50upx;
	}

	.verticalCenter {
		margin: auto 0;
	}

	.freshFont {

		background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
		-webkit-text-fill-color: transparent;
		/* 将字体设置成透明色 */
		-webkit-background-clip: text;
		/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
		-webkit-background-size: 200% 100%;
		-webkit-animation: masked-animation 4s linear infinite;
		font-size: $style-defalut-font-size-max;
		line-height: $style-defalut-font-size-max*2;
	}



	@keyframes masked-animation {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: -100% 0;
		}
	}

	.right {
		// position:absolute;
		// right: 0;
		// margin: auto 50upx;
	}

	button {
		font-size: $style-defalut-font-size-max;
		display: inline-block;
		margin: 0;
	}

	.primary_btn {
		background-color: $uni-color-primary;
	}

	/*每个页面公共css */
</style>