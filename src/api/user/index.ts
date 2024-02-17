// //统一管理咱们项目用户相关的接口
// import request from '@/utils/request'
// import type {
//   loginFormData,
//   loginResponseData,
//   userInfoReponseData,
// } from './type'
// //项目用户相关的请求地址
// enum API {
//   LOGIN_URL = '/admin/acl/index/login',
//   USERINFO_URL = '/admin/acl/index/info',
//   LOGOUT_URL = '/admin/acl/index/logout',
// }

// //登录接口
// export const reqLogin = (data: loginFormData) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
// //获取用户信息
// export const reqUserInfo = () =>
//   request.get<any, userInfoReponseData>(API.USERINFO_URL)
// //退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  // //获取全部已有用户账号信息
  // ALLUSER_URL = '/admin/acl/user/',
  // //添加一个新的用户账号
  // ADDUSER_URL = '/admin/acl/user/save',
  // //更新已有的用户账号
  // UPDATEUSER_URL = '/admin/acl/user/update',
  // //获取全部职位,当前账号拥有的职位接口
  // ALLROLEURL = '/admin/acl/user/toAssign/',
  // //给已有的用户分配角色接口
  // SETROLE_URL = '/admin/acl/user/doAssignRole',
  // //删除某一个账号
  // DELETEUSER_URL = '/admin/acl/user/remove/',
  // //批量删除的接口
  // DELETEALLUSER_URL = '/admin/acl/user/batchRemove',
}
import request from '@/utils/request'
import type {loginForm,loginResponsData,UserResponseData} from "./type" 
export const reqLogin = (data:loginForm)=>request.post<any,loginResponsData>(API.LOGIN_URL,data)
export const reqUserInfo =() => request.get<any,UserResponseData>(API.USERINFO_URL)