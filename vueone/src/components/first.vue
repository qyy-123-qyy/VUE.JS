<template>
    <div>
        <h2>name={{canshu}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{
            canshu:""
        }
    },
    created(){
        console.log(this.$route);
        console.log(this.$route.params.id);
        this.canshu=this.$route.params.id
    }
}
</script>
<style>

</style>