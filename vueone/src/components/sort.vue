 <template>
     <div class="tablebox">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="头像" width="180"> 
           <template slot-scope="scope">
              <div>
                  <img :src="scope.row.avatarUrl" width="50" height="50">
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="realName" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="city" label="所在城市"> </el-table-column>
    </el-table>
     <div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage1" :page-size="sizenum" layout="total, prev, pager, next" :total="totlenum">
    </el-pagination>
  </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          tableData: [],
          currentPage1:1,
          sizenum:20,
          totlenum:1,
        }
      },
      created(){
         this.getAll();
      },
      methods:{
        //   "http://route.showapi.com/126-2?
        //   showapi_appid=替换自己的值&type=&order=&page=&showapi_sign=替换自己的值"
          getAll(){
              let self=this;
              this.$axios.get("http://route.showapi.com/126-2",{
                  params:{
                     showapi_appid:"170059",
                     showapi_sign:"61c4d86a489949b0af1a3cee8f03398a",
                     page:this.currentPage1,
                     type:"性感",
                     order:1,                     
                  }
              }).then(res=>{
                  console.log(res);
                 self.tableData=res.data.showapi_res_body.pagebean.contentlist;
                 this.totlenum=res.data.showapi_res_body.pagebean.allNum;
                 console.log(self.tableData);
              })
          },
          handleSizeChange(val) {
           console.log(`每页 ${val} 条`);
      },
          handleCurrentChange(val) {
           console.log(`当前页: ${val}`);
           this.currentPage1=val;
          this.getAll();
      },
      }
    }
  </script>
  <style>
  .tablebox{
    width: 90%;
    margin: 20px auto;
  }
  </style>