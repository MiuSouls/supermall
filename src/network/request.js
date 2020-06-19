import axios from 'axios'

export function request(config) {

  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 4000
  })


  // 请求
  instance1.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance1(config)
}
