import ImageUpload from "../ImageUpload";
import { useState } from "react";
import { properties } from "../properties";

export default function AddProduct() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage]  = useState('');
  const [description, setDescription] = useState('');

  const saveImage = (e) =>  {
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      
    }
  }

  const _handleReaderLoaded = e => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setImage(btoa(binaryString))
    console.log(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, image, category, description };
    console.log(body);
    fetch(`${properties.BASE_URL}/product/add` , {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body)

    }).then((result) => {
      if (result.status === 200) {
      } else {
      }
    })
  }
    return <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
      <label>Name:</label><br/>
      <input 
        type="text" 
        required 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      /><br/>
      <label>Category:</label><br/>
      <select 
      onChange={(e) => setCategory(e.target.value)}
      required
      >
        <option value="CLOTHING">Clothing</option>
        <option value="SHOES">Shoes</option>
        <option value="ELECTRONICS">Electonics</option>
      </select><br/><br/>
      <label>Description:</label><br/>
      <input
        type="text" 
        required 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      /><br/><br/>
      <label>Image:</label><br/>
      <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => saveImage(e)}
        /><br/><br/>
      <input type="submit" value="Submit"/>
</form> 
    </div>
  }