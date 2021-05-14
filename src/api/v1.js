import axios from 'axios'
var header = {'Authorization': localStorage.getItem('token')}
// 登录
const userLogin = (form) => axios.post('/api/user/login', form).then(response => response.data)
// 验证是否登录
const userMe = () => axios.get('/api/user/me', {headers: header}).then(response => response.data)
// 注册用户
const userRegister = (form) => axios.post('/api/user/register', form).then(response => response.data)
// 验证邮箱 或 用户是否注册
const userVreg = (form) => axios.post('/api/user/verify_registered', form).then(response => response.data)
// 注销登录
const userLogout = () => axios.get('/api/user/me', {headers: header}).then(response => response.data)
export {
  userLogin,
  userMe,
  userRegister,
  userVreg,
  userLogout
}
