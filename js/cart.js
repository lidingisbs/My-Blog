var vm = new Vue({
	el: "#cart",
	data: {
		delFlag:false,
		"totalMoney":0,
		"list":[
			{
				"productId":"01",
				"productName":"黄鹤楼香烟",
				"productPrice":15,
				"productQuentity":1,
				"productImage":"images/1.1.jpg",
				"parts" : [
					{
						"partsId":"101",
						"partsName":"打火机"
					},{
						"partsId":"102",
						"partsName":"口香糖",
					}

				]

			},
			{

				"productId":"02",
				"productName":"加多宝",
				"productPrice":4,
				"productQuentity":5,
				"productImage":"images/2.2.jpg",
				"parts" : [
					{
						"partsId":"201",
						"partsName":"吸管"
					},{
						"partsId":"202",
						"partsName":"水",
					}

				]
			}
		]
	},
	filters: {
		// 加上货币符号及2位小数 过滤器局部
         formatMoney:function(value){
         	return "￥"+value.toFixed(2);
         }
	},
	mounted: function() {
		// this.cartView();
	},
	methods: {
		// cartView: function() {
		// 	// var _this = this;
		// 	// this.$http.get("data/data.json", {
		// 	// 	"id": 123
		// 	// }).then(function(res) {
		// 	// 	// _this.productList = res.body.result.list;
		// 	// 	// _this.totalMoney = res.body.result.totalMoney;
		// 	// });
		// }
		changeMoney:function(product,way){
			if(way>0){
				product.productQuentity++;
			}else{

                product.productQuentity--;
                if(product.productQuentity<1){
                	product.productQuentity=1;
                }
			}
		},
		// selectProduct:function(item){
		// 	if(typeof item.checked=='undefined'){
		// 		vue.set(item,"checked",true);
		// 		//this.$set(item,"checked",true);
		// 	}else{
		// 		item.checked=!item.checked;
		// 	}
		// 	this.calcTotaPrice();
		// },
		// calcTotaPrice:function(){
		// 	var _this=this;
		// 	this.totalMoney=0;
		// 	this.list.forEach(function(item,index){
  //                if(item.checked){
  //                	_this.totalMoney+=item.productPrice*item.productQuentity;
  //                }
		// 	}
		// }
		// checkAll:function(flag){
		// 	this.checkAllFlag=flag;
		// 	var _this=this
		// 	this.list.forEach(function(value,index){
		// 		if(typeof item.checked=='undefined'){
		// 		        // vue.set(item,"checked",true);
		// 		       _this.$set(item,"checked",_this.checkAllFlag);
		// 	        }else{
		// 		      item.checked=_this.checkAllFlag;
		// 	        }
		// 		})
		// 	}
		// }
	},

});
// 全局过滤器
// vue.filter("money",function(value,type){
// 	return "￥"+value.toFixed(2)+type;
// })