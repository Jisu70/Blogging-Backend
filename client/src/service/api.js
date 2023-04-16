import axios from 'axios' ;


const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({
  baseURL : API_URL,
  timeout:10000,
  headers: {
    "Content-Type" : "application/json"
  }
})

 

axiosInstance.interceptors.request.use(
  function(config) { 
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)




axiosInstance.interceptors.response.use(
  function (response){
    //stop global loader here
    return processResponse(response);
  },
  function (error) {
    //stop global loader here
    return Promise.reject(processError(respose))
  }
)

////////////////////////////
//if sucess ->reurn {isSuccess :true ,data:object }
//if fail ->return {isfailure :true,status:string,msg:string,code:int}
//////////////////////////////////
const processResponse = (response) => {
  if(response ?.status === 200){
    return {isSucess :true,data:response.data}
  }else{
    return {
      isFailure :true,
      status :response?.status,
      msg:response?.msg,
      code:response?.code
    }
  }
}



const processError = (error) =>{
  ///request made  and server respond with a status other
  //that fails out of the range 2.x.x
  if(error.response) {
    //
  }else{

  }
}