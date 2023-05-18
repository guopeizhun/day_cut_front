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
	.verticalCenter{
		margin: auto 0;
	}
	.right{
		// position:absolute;
		// right: 0;
		// margin: auto 50upx;
	}
	button{
		font-size: $style-defalut-font-size-max;
		display: inline-block;
		margin: 0;
	}
	
	.primary_btn{
		background-color: $uni-color-primary;
	}

	/*每个页面公共css */
</style>