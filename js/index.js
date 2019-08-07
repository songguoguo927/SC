// 主js
// 点击左侧导航，右侧出现对应内容
$(function(){
	$('.info-content').load('./pages/category.html');
	$('.info-left li').click(function(){
		// this-->li DOM
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.info-content').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.info-content').load('./pages/category.html');
				break;
			case '资讯管理':
				$('.info-content').load('./pages/info.html');
				break;
			case '用户管理':
				$('.info-content').load('./pages/user.html');
				break;
			default:
				break;
		}
	});
});