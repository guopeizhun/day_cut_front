import axios from 'axios'

export const baseURL = "http://localhost:9200";
// create an axios instance
const service = axios.create({
	// withCredentials:true,  //跨域请求携带cookie
	baseURL, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		// console.log(window.sessionStorage.getItem("token"))
		// if (null != window.sessionStorage.getItem("token"))
		// 	config.headers['token'] = window.sessionStorage.getItem("token")
		// 	// console.log(config.headers['token'])
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {
		const res = response.data
		// console.log("res111 = ", res)
		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 20000) {
			Message({
				message: res.message || 'Error',
				type: 'error',
				duration: 5 * 1000
			})
			return Promise.reject(new Error(res.msg || 'Error'))
		} else {
			return res
		}
	},
	error => {
		console.log('err = ', error) // for debug
		return Promise.reject(error)
	}
)

export default service
