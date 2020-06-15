import axios from 'axios'

export function request(config) {

  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 4000
  })


  // 请求
  instance1.interceptors.request.use(config => {
    console.log("=====以下是请求内容")
    return config
  }, err => {

  })

  // 响应
  instance1.interceptors.response.use(res => {
    console.log("=====以下是响应内容")
    return res.data
  }, err => {
    console.log(err);
  })

  return instance1(config)
}
