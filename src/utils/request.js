import axios from 'axios'

const request=axios.create({
    //基准地址
    baseURL:'http://119.45.133.128:8089',
    //超时时间
    timeout:5000
})

export default request//导出axios对象