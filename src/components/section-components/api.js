import axios from 'axios';



export const getalldata=async ()=>{
    try{
       return await axios.get(`http://localhost:1337/api/Sliders/1`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}