<template>
    <div>  
         <!-- 子向父传值 -->    
        <top @title="getdata($event)" aa="aa"></top>
         <!-- 父向子传值 -->
        <!-- <top :datalist="peoplelist"></top> -->
        <div class="content">
         <h3>
            <font color="red">{{info}}</font>
            <font color="red">{{aa}}</font>

        </h3>

        </div>
       
    </div>
</template>
<script>
import top from "./htop"
export default {
    data(){
        return{
           aa:"",
           bb:"",
           info:"我是page页面",
           //父向子传值      
            peoplelist:[
            {
                name:"导航一",
                age:18,
            },
            {
                name:"导航二",
                age:25,
            },
             {
                name:"导航三",
                age:18,
            },
            {
                name:"导航四",
                age:25,
            },
             {
                name:"导航五",
                age:25,
            },
            ]
        }
    },
    components:{
        top,
    },
    creatad(){ 
             //path传值获取路径参数的值
            /* this.bb=this.$route.query.info;
            console.log(this.bb) */
            
            //name传值比较安全，传值获取路径参数的值
            console.log(this.$route);
            this.aa=this.$route.params.info;
            console.log(this.aa)
           
          
    },
    methods:{
        getdata(el){//el事件传过来的内容
            console.log(el)
            this.aa=el;
             
        }
    }
}
</script>
<style>
 .content{
     width: 90%;
     height: 500px;
     background-color: yellowgreen;
     margin: 50px auto;
 }
</style>