<template>
    <div class="app-container">
        角色列表
        <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      stripe
      border
      style="width: 100%;margin-top: 10px;">

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="roleName" label="角色名称" />
      <el-table-column prop="roleCode" label="角色编码" />
      <el-table-column prop="createTime" label="创建时间" width="160"/>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row.id)" title="修改"/>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeDataById(scope.row.id)" title="删除"/>
        </template>
      </el-table-column>
    </el-table>
     <!-- 分页组件 -->
    <el-pagination
      :current-page="page"
      :total="total"
      :page-size="limit"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="fetchData"
    />
    </div>

</template>

<script>
//引入定义接口的文件
import api from '@/api/role/role.js'
export default {
    //定义初始值
    data(){
        return{
            listLoading:false,
            list:[],//角色列表
            total:0,//总记录数
            page:1,//当前页
            limit:3,//每页显示的记录数
            searchObj:{}//条件查询封装对象
        }
    },
    //页面渲染之前执行
    created(){
        //调用列表方法
        this.fetchData()
    },
    methods:{//具体方法
        //条件分页查询列表
        //pageNum 查询页数
        fetchData(pageNum=1){
            //页数赋值
            this.page = pageNum
            //ajax
            api.getPageList(this.page, this.limit, this.searchObj)
            .then(response => {
                this.listLoading=false
                //console.log(response)
                this.list = response.data.records
                this.total = response.data.total
            })
        }
    }
}
</script>