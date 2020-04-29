<template>
    <div>
     <ul class=navul>
         <li v-for="(item,index) in datas" :key="index" @click="getName(item.name)">{{item.name}}</li>
    </ul>
    <hr/>
    <div class="sortbox">
        <div class="sortitem" v-for="(item,index) in sortDatas" :key="index">
            <img :src="item.pict_url"/>
            <h3>{{item.category_name}}</h3>
            <!-- <h4>{{item.url}}</h4> -->
            <a :href="item.url" target="_blank">详情页</a> 
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:"abc",
            datas:[],
            sortDatas:[],
        }
    },
    created(){
        //let self=this;
       this.dataAll();
          
    },
    methods:{
         dataAll(){
        let self=this;          
          this.$axios.get("/api/w/website/findGoodsTypeList").then(function(res){
              console.log(res);
              self.datas=res.data.data;
              console.log(self.datas)
          })
         },
         getName(aa){
        let selfs=this;          
             console.log(aa);
             if(aa!=""||aa!=null||aa!=undefined){           
             this.$axios.get("/api/w/website/findGoodsList",{
                 params:{
                     platId:"d0a500ecf8ab41aa9ffe8e18ac6419e1",
                     info:aa,
                     pageNo : 1,
                 }
             }).then(function(res){
                 console.log(res);
                //  self.sortDatas=res.data.data.
                selfs.sortDatas=res.data.data.tbk_dg_material_optional_response.result_list.map_data;
                  console.log(selfs.sortDatas);

             }) }
         }
    }
}
</script>
<style>
.navul,
.sortbox{
    width: 90%;
    overflow: hidden;
    margin:auto;
}
.navul li{
    width: 60px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    list-style-type: none;
    cursor: pointer;
    background-color:red;
    color: white;
    border-radius: 5px;
    float: left;
    margin: 0 10px;
}
.sortitem{
    width: 150px;
    height:200px;
    box-shadow: 0 0 5px #333;
    float: left;
    margin: 20px;
}
.sortitem img{
    width: 100%;
    height: 150px;
}
.sortitem h3{
    text-align: center;
    line-height: 22px;
    color: plum;
}
</style>