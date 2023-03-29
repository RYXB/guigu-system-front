import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {
    /*
    获取角色分页列表(带搜索)
    */
    getPageList(page, limit, searchObj) {
      return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: searchObj
      })
    },
    /*
    删除角色 
    */
    removeId(id){
      return request({
        url: `${api_name}/remove/${id}`,
        method: 'delete'
      })
    },
    /*
    添加角色 
    */  
    saveRole(role) {
      return request({
        url: `${api_name}/save`,
        method: 'post',
        data: role
      })
    },
    /*
    根据id查询 
    */ 
   getRoleId(id){
      return request({
        url: `${api_name}/findRoleById/${id}`,
        method: 'post'
      }) 
   },
   /*
    修改 
    */ 
   update(role){
       return request({
         url: `${api_name}/update`,
         method: 'post',
         data : role
       }) 
    },
    /*
    删除角色 
    */
    batchRemoveId(idList){
        return request({
          url: `${api_name}/batchRemove`,
          method: 'delete',
          data: idList
        })
    }
}