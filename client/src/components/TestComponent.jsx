import React,{useState} from 'react'
import axios from 'axios';
const TestComponent = () => {
        const preset_key="";
        const cloud_name="";
        const [image,setImage]=useState();
        function  handleFile(event){
            const file=event.target.files[0];
            const formData=new FormData();
            formData.append('file',file);
            formData.append("upload_preset",preset_key);
            axios.post('',formData).then(res=>console.log(res)).catch(err=>console.log(err));
        }
  return (
    <div>TestComponent</div>
  )
}

export default TestComponent