<template>
	<div class="pos">
		<div>
			<el-row>
				<el-col :span="7">
					<el-tabs>
						<el-tab-pane label="点菜">
							<el-table :data="tableData">
								<el-table-column prop="foodsName" label="商品"></el-table-column>
								<el-table-column prop="count" label="数量"></el-table-column>
								<el-table-column prop="price" label="金额"></el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button type="text" size="small">删除</el-button>
										<el-button type="text" size="small">增加</el-button>
									</template>
								</el-table-column>
							</el-table>
						</el-tab-pane>
						<el-tab-pane label="外卖">外卖</el-tab-pane>
						<el-tab-pane label="自取">自取</el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :span="17">
					<div class="daily-goods">
						<div class="title">日常商品</div>
						<div class="daily-goods-list">
							<ul>
								<li v-for="(goods,index) in oftenGoods" :key="index" @click="addOrderList(goods)">
									<span> {{ goods.foodsName }} </span>
									<span> ￥{{ goods.price }} 元</span>
								</li>
							</ul>
						</div>

						<div class="goods-type">
							<el-tabs>
								<el-tab-pane label="套餐一">
									<ul class="cookList">
										<li v-for="(goods,index) in foods_type" :key="index">
											<span class="foodImg">
												<img :src="goods.goodsImg" width='100%'/>
											</span>
											<span> {{ goods.foodsName }} </span>
											<span>￥ {{ goods.price }} </span>
										</li>
									</ul>
								</el-tab-pane>
								<el-tab-pane label="套餐2">
									<ul class="cookList">
										<li v-for="(goods,index) in foods_type1" :key="index">
											<span class="foodImg">
												<img :src="goods.goodsImg" width='100%'/>
											</span>
											<span> {{ goods.foodsName }} </span>
											<span>￥ {{ goods.price }} </span>
										</li>
									</ul>
								</el-tab-pane>
								<el-tab-pane label="套餐3">
									<ul class="cookList">
										<li v-for="(goods,index) in foods_type2" :key="index">
											<span class="foodImg">
												<img :src="goods.goodsImg" width='100%'/>
											</span>
											<span> {{ goods.foodsName }} </span>
											<span>￥ {{ goods.price }} </span>
										</li>
									</ul>
								</el-tab-pane>
								<el-tab-pane label="套餐4">
									<ul class="cookList">
										<li v-for="(goods,index) in foods_type3" :key="index">
											<span class="foodImg">
												<img :src="goods.goodsImg" width='100%'/>
											</span>
											<span> {{ goods.foodsName }} </span>
											<span>￥ {{ goods.price }} </span>
										</li>
									</ul>
								</el-tab-pane>
							</el-tabs>
						</div>


					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default{
	name:'Pos',
	data(){
		return {
			tableData:[],
			oftenGoods : [
				{
					goodsId:1,
					foodsName:'日常商品-1',
					price:11,
					count:1
				},{
					goodsId:2,
					foodsName:'日常商品-222',
					price:22,
					count:2
				},{
					goodsId:3,
					foodsName:'日常商品-333',
					price:33,
					count:3
				}
			],
			foods_type:[
				{
					goodsId:4,
					goodsImg:"http://pic2.16pic.com/00/05/57/16pic_557962_b.jpg",
					foodsName:'汉堡xxx11',
					price:18
				}, {
					goodsId:5,
					goodsImg:"https://gd3.alicdn.com/imgextra/i3/2485892750/TB2x9RFbNXlpuFjSsphXXbJOXXa_!!2485892750.jpg",
					foodsName:'汉堡xxx22',
					price:15
				}, {
					goodsId:6,
					goodsImg:"http://file06.16sucai.com/2016/0301/3e5a68f7afd2f172577dba8e847b41d0.jpg",
					foodsName:'汉堡xxx33',
					price:15
				}
			],
			foods_type1:[
				{
					goodsId:7,
					goodsImg:"http://file06.16sucai.com/2016/0301/59cf0b8f830895bdb2b1cde6d2bbd78e.jpg",
					foodsName:'汉堡xxx44',
					price:80
				}, {
					goodsId:8,
					goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
					foodsName:'汉堡xxx11',
					price:10
				}
	        ],
			foods_type2:[
				{
					goodsId:9,
					goodsImg:"http://file06.16sucai.com/2016/0301/59cf0b8f830895bdb2b1cde6d2bbd78e.jpg",
					foodsName:'汉堡xxx22',
					price:20
				}
			],
			foods_type3:[
				{
					goodsId:10,
					goodsImg:"https://gd3.alicdn.com/imgextra/i3/2485892750/TB2x9RFbNXlpuFjSsphXXbJOXXa_!!2485892750.jpg",
					foodsName:'汉堡xxx433',
					price:10
				}, {
					goodsId:11,
					goodsImg:"http://file06.16sucai.com/2016/0301/3e5a68f7afd2f172577dba8e847b41d0.jpg",
					foodsName:'汉堡xxx55',
					price:18
				}, {
					goodsId:12,
					goodsImg:"http://pic2.16pic.com/00/05/57/16pic_557962_b.jpg",
					foodsName:'汉堡xxx66',
					price:15
				}
			]
		}
	},
	methods:{
		// 增加商品到订单列表
		addOrderList(goods){
			// 开关，某商品是否已经存在
			let _is = false;

			// 判断整个当前订单之中，是否有相同的商品id
			for(let i=0;i<this.tableData.length; i++){
				if( this.tableData[i].goodsId == goods.goodsId ){
					_is = true;
					break;
				}
			}

			// 如果存在相同商品
			if( _is ){
				let _temp = this.tableData.filter( _g => _g.goodsId == goods.goodsId )

				_temp[0].count++;

			} else {
				// 如果不存在相同商品
				let newGoods = {
						goodsId: goods.goodsId,
						foodsName: goods.foodsName,
						price: goods.price,
						count: 1
					};
				this.tableData.push( newGoods );
			}


		}
	}
}
</script>


<style scoped>
.title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;text-alien:left;
       padding:10px;
   }
.daily-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
}
.o-price{
  color:#58B7FF; 
}
.goods-type{clear: both;}
.cookList li{
   list-style: none;
   width:23%;
   border:1px solid #E5E9F2;
   height: auot;
   overflow: hidden;
   background-color:#fff;
   padding: 2px;
   float:left;
   margin: 2px;

}
.cookList li span{
    display: block;
    float:left;
}

.cookList li span.foodImg{
	width:100px;height:100px;overflow:hidden;
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
   }
</style>