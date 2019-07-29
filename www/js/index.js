$(function(){

 
$("body").on("click",".cl_navul li",function(){
	$(this).css("background","red")
	$(this).addClass("i_active").siblings().removeClass("i_active")
})


//
Vue.component("card",{
	template:`
		<div class="card">
			<img src="" alt="" />
			<span></span>
		</div>
	`,
	props:[""]
})
 



// 
Vue.component("list",{
	template:`
		<div class="cl_list">
			<div class="list_top">
				<p>{{list_title}}</p>
				<span>更多>></span>
			</div>
			
			<ul>
				<li>asd
					<span>2019-1-20</span>
				</li>
				<li>asd
					<span>2019-1-20</span>
				</li>
				<li>asd
					<span>2019-1-20</span>
				</li>
				<li>asd</li>
				<li>asd</li>
				 
			</ul>
		</div>
	`,
	props:["list_title"]
})

// 图文模块
Vue.component("piclist",{
	template:`
		<div class="pic_list">
			<div class="list_top">
				<p>asd</p>
				<span><a href="article_more.html">更多>>	</a></span>
			</div>
			<ul>
				<li><a href="article.html">文章测试</a></li>
			</ul>
			
		</div>
	`
})

 
//文章详情 侧栏

 

Vue.component("side",{
	template:`
		<div class="side_list">
			<div class="side_title">
				<span>最新资讯</span>
				<span>更多>></span>
			</div>
			<div class="side_content">
				<ol class="list">

					 
				</ol>
			</div>


		</div>
	`
})
 
 















})



