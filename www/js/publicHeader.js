$(function(){
 
	Vue.component("cl-head",{
 	template:`
	<div  class="cl_public_top">
		<div class="cl_header">
			<div class="cl_head">
				<div class="logo">
					<img src="imgs/cl_logo.png" alt="">
				</div>
				<div class="cl_wrapper">
					<!-- 登录 -->
					<div class="login">
						<a href="login.html">登录</a>
						<span></span>
						<a href="signup.html">注册</a>

					</div>
					<!-- 搜索 -->
					<div class="search">
						<input type="text">
						<button>搜&nbsp索</button>
					</div>
				</div>

			</div>	
		</div>
		

		<!-- 导航 -->
		<nav class="cl_nav">
			<ul class="cl_navul">
				<li class="i_active"><a href="index.html">网站首页</a></li>
				<li><a href="aboutUs.html">协会介绍</a></li>
				<li><a href="forum.html">国际论坛</a></li>
				<li><a href="construct.html">基础建设</a></li>
				<li><a href="http://www.fashioncolour.net/">色彩培训</a></li>
				<li><a href="intlExchange.html">国际交流</a></li>
				<li><a href="member.html">会员空间</a></li>
				<li><a href="search_zs.html">证书查询</a></li>
			</ul>
		</nav>
			
	</div>
 	`  

 })

 
 
 // //创建一个头部组件
 // let clHead=new Vue({
 // 	el:".cl_index_head",


 // })


  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: '网站首页', icon: 'nested', noCache: true }
  //     }
  //   ]
  // },














})
