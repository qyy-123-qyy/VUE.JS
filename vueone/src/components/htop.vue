<template>
    <div>
        <ul class="headul">         
            <!-- 子向父传值 -->            
            <li @click="change()">{{aa}}</li>
           
            <!-- 父向子传值 -->
            <!-- <li v-for="(k,x) in datalist" :key="x">{{k.name}}</li> -->
            <!-- 
            <li>导航一</li>
            <li>导航一</li>
            <li>导航一</li> -->
        </ul>
    </div>
</template>
<script>
export default {
 //子向父传值
 data(){
      return{
            aa:"哈哈",
      }
  },
  methods:{
      change(){
          this.$emit("title","子向父传值");
      }
  }
 
 //父向子传值
  /* props:{
        datalist:{
            type:Array,
            required:true,
        }
    }  */
}
</script>
<style>
.headul{
    width: 90%;
    overflow: hidden;
    border: 2px red solid;
    box-shadow: 0 0 5px pink;
    border-radius:5px;
    margin: auto;
}
.headul li{
    width: 120px;
    height: 60px;
    line-height: 60px;
    float:left;
    text-align: center;
    margin: 15px;
    border-radius: 5px;
    background-color: plum;
    color: #666;
    list-style-type: none;
}
</style>