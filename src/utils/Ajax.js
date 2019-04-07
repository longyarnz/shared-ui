export default function Ajax(url, method, data, progress = ()=>{}){
	return new Promise((resolve, reject) => {
		const ajax = new XMLHttpRequest();
		ajax.open(method, url, true);
		method === 'POST' && ajax.setRequestHeader('Content-type', 'application/json');
		ajax.send(data);
		ajax.onprogress = progress;
		ajax.onreadystatechange = () => {
			if(ajax.readyState === 4 && ajax.status === 200) {
				resolve(ajax);
			}
		}
	})
}