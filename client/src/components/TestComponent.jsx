import React,{useState} from 'react'
import axios from 'axios';
// const cloudinary = require('cloudinary-core');
// const cloudinaryConfig = new cloudinary.Cloudinary({
//   cloud_name: 'deviabumbd',
//   api_key: '627851217275291',
//   api_secret: 'Wl6l49BGF9RXyMwUh6DYKGTMwpc'
// });
const TestComponent = () => {

function handleFormSubmit(event) {
  event.preventDefault();
  const fileInput = document.querySelector('#file');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  axios.post('/upload-by-link', formData).then(result => {
    console.log('Image uploaded successfully:', result);
  })
  .catch(error => {
    console.error('Error uploading image:', error);
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

  return (
    <>
<form>
        <input type="file" name="file" id="file"></input>
        <button type="submit">Upload</button>
</form>
    </>
  )
}

export default TestComponent