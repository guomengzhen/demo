<template>
    <div class="app-container">
      <!-- 头部 -->
      <mt-header fixed title="Vue项目">
		  <span slot="left" @click='goBack' v-show="$route.path !='/home'">
			  <mt-button icon="back">返回</mt-button>
		  </span>
	  </mt-header>
      <!-- 主体部分 -->
			<transition>
				<router-view></router-view>
			</transition>
      <!-- 底部 -->
      <nav class="mui-bar mui-bar-tab">
				<!-- 我们这块就不是mui组件 -->
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id='badge'>{{$store.getters.total}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
// import { Toast } from 'mint-ui';
// Toast('提示信息')
export default {
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	},

}
</script>


<style lang="scss" scoped>
.app-container{
	padding-top:40px;
	padding-bottom:50px;
	overflow-x: hidden;
}
.v-enter{
	transform: translateX(100%);
	opacity: 0;
}
.v-leave-to{
	transform: translateX(-100%);
	opacity: 0;
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition:all ease .5s;
}
.mui-bar-tab .mui-tab-item1
{
    display: table-cell;
    overflow: hidden;


    width: 1%;
    height: 50px;


    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;


    color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active
{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon
{
    top: 3px;


    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label
{
    font-size: 11px;


    display: block;
    overflow: hidden;


    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item1 .mui-icon:active
{
    background: none;
}
</style>
