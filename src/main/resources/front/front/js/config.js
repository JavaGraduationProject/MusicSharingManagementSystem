
var projectName = '音乐翻唱与分享平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '音乐资讯',
	url: './pages/yinlezixun/list.html'
}, 
{
	name: '音乐翻唱',
	url: './pages/yinlefanchang/list.html'
}, 
{
	name: '在线听歌',
	url: './pages/zaixiantingge/list.html'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbootc8hzm/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"音乐资讯","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"音乐翻唱","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"在线听歌","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客服管理","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"音乐资讯列表","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯模块"},{"child":[{"buttons":["查看"],"menu":"音乐翻唱列表","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱模块"},{"child":[{"buttons":["查看"],"menu":"在线听歌列表","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"音乐翻唱","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"音乐资讯列表","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯模块"},{"child":[{"buttons":["查看"],"menu":"音乐翻唱列表","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱模块"},{"child":[{"buttons":["查看"],"menu":"在线听歌列表","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌模块"}],"roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
