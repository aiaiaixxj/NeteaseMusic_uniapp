import {baseUrl} from './config.js'

 export function gettoplist() {
	 let listIds =[3,0,2,1]
	 return new Promise(function(resolve,reject){
		 uni.request({
		 	url:  baseUrl + '/toplist/detail ',
		 	method: 'GET',
		 	data: {},
		 	success: (res) => {
				let result =[]
			     result =res.data.list
				 result.length =4
				 for(let i=0;i<listIds.length;i++){
					 result[i].listId=listIds[i]
				 }
				 	console.log("res=>", res.data)
		 		console.log("res=>", res.data.list)
				resolve(result)
		 	},
		 	fail: () => {},
		 	complete: () => {}
		 })
	 }) 
 }
 
 export function getlist(listId){
	 return uni.request({
	 	url:baseUrl+'/top/list?idx='+listId,
		method:'GET'
	 })
 }
