// const BASE_URL = 'https://limitless-falls-29339.herokuapp.com'
// const BASE_URL = process.env.BASE_URL


//export const API_URL = 'http://172.16.16.241:5000/api/v1';
export const API_URL = process.env.REACT_APP_BASE_URL+'/api';
// export const API_URL = 'http://172.16.14.129:8000/api/v1'
//export const API_URL = "http://127.0.0.1:8000/api/v1"

//export const ACCOUNT_API_URL = "http://172.16.16.241:5000/accounts";
export const ACCOUNT_API_URL = process.env.REACT_APP_BASE_URL+"/accounts";
// export const ACCOUNT_API_URL = "http://172.16.14.129:8000/accounts"
//export const ACCOUNT_API_URL = "http://127.0.0.1:8000/accounts"