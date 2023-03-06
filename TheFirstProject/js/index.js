const App = {
				data() {
					return {
						title:"HelloWorld",
						paragraph:"这是一个段落",
						order:{
							type:"I",
							start:"1",
							list:{
								text:["百度","搜狐","csdn","github"],
								hyperlink:["www.baidu.com","www.sohu.com","www.csdn.net","www.github.com"],
								url:["https://www.baidu.com","https://www.sohu.com","https://www.csdn.net","https://www.github.com"]
							}
						},
						form:{
							text:"",
							password:"",
							select_list:["苹果","香蕉","桃子","西瓜"],
							single_list:["男","女"],
							reelect_list:["篮球","足球","乒乓球"]
						},
						disorder:{
							list:{
								text:["轮播2","轮播5","轮播3","轮播1","轮播4"],
								img:["img/guide2.jpg","img/guide5.jpg","img/guide3.jpg","img/guide1.jpg","img/guide4.jpg"]
							}
						}
					}
				}
			};
			Vue.createApp(App).mount('#app');