
import request from '../request.js'
export function getRoute(){
	return request({
		url: '/menu/tree',
		method: 'get',
		// params
	})
}