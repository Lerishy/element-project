import request from "../utils/request";

//登录
export const login = (data={})=>{
    return request({
        url:'http://119.45.133.128:8089/api/user/login',
        method:"POST",
        
    })
}