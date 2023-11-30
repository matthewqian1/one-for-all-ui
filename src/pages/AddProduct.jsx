import ImageUpload from "../ImageUpload";

export default function AddProduct() {
    return <div>
      <h1>Add Product</h1>
      <form>
      <label>Name:</label><br/>
      <input type="text"/><br/>
      <label>Category:</label><br/>
      <input type="text"/><br/><br/>
      <label>Description:</label><br/>
      <input type="text"/><br/><br/>
      <ImageUpload/>
      <input type="submit" value="Submit"/>
</form> 


    </div>
  }