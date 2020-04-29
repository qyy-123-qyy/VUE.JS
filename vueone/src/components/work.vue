<template>
    <div>
        <!-- <h3>
            <font color="pink">{{data}}</font>
        </h3> -->
        <input type="button" @click="go()" value="转到page页面"/>
    </div>
</template>
<script>
export default {
    data(){
       /*  return{
            data:"我是work页面"
        } */
        return {
            name:"abc",
        }
    },
    methods:{
        go(){
            //this.$router.push("/page?info="+this.name);//path传值
            
            //name传值
            this.$router.push({
                name:"page",
                params:{
                    info:this.name
                }
            })
        }
    }
}
</script>
<style>

</style>