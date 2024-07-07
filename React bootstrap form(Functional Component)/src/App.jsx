import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    productCost: '',
    productOnline: '',
    productCategory: '',
    availableInStore: {
      bigBazaar: false,
      dMart: false,
      reliance: false,
      megaStore: false,
    },
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        availableInStore: {
          ...prevFormData.availableInStore,
          [name]: checked,
        },
      }));
    } 
    else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
 
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
 
return (
<div>
<form>
<table>
<tbody>
<tr>
<td>
<label htmlFor="productId" className="form-label">Product ID</label>
</td>
<td>
<input type="text" className="form-control" id="productId" name="productId" value={formData.productId} onChange={handleChange} required/>
</td>
</tr>
<tr>
<td>
<label htmlFor="productName" className="form-label">Product Name</label>
</td>
<td>
<input type="text" className="form-control" id="productName" name="productName" value={formData.productName} onChange={handleChange} required/>
</td>
</tr>
<tr>
<td>
<label htmlFor="productCost" className="form-label">Product Cost</label>
</td>
<td>
<input type="text" className="form-control" id="productCost" name="productCost" value={formData.productCost} onChange={handleChange} required/>
</td>
</tr>
<tr>
<td>
<label className="form-label">Product Online</label>
</td>
<td>
<input className="form-check-input" type="radio" name="productOnline" value="Yes" id="onlineYes" checked={formData.productOnline === 'Yes'} onChange={handleRadioChange} required/>
<label className="form-check-label" htmlFor="onlineYes"> Yes</label>
<input className="form-check-input" type="radio" name="productOnline" value="No" id="onlineNo" checked={formData.productOnline === 'No'} onChange={handleRadioChange} required/>
<label className="form-check-label" htmlFor="onlineNo"> No</label>
</td>
</tr>
<tr>
<td>
<label htmlFor="productCategory" className="form-label">Product Category</label>
</td>
<td>
<select className="btn dropdown-toggle btn-outline-dark" id="productCategory" name="productCategory" value={formData.productCategory} onChange={handleChange} required>
<option value="">Select Category</option>
<option value="Grocery">Grocery</option>
<option value="Mobile">Mobile</option>
<option value="Electronics">Electronics</option>
<option value="Cloths">Cloths</option>
</select>
</td>
</tr>
<tr>
<td>
<label className="form-label">Available in Store</label>
</td>
<td>
<input className="form-check-input" type="checkbox" name="bigBazaar" id="bigBazaar" checked={formData.availableInStore.bigBazaar} onChange={handleChange}/>
<label className="form-check-label" htmlFor="bigBazaar">Big Bazaar</label>
<input className="form-check-input" type="checkbox" name="dMart" id="dMart" checked={formData.availableInStore.dMart} onChange={handleChange}/>
<label className="form-check-label" htmlFor="dMart">DMart</label>
<input className="form-check-input" type="checkbox" name="reliance" id="reliance" checked={formData.availableInStore.reliance} onChange={handleChange}/>
<label className="form-check-label" htmlFor="reliance">Reliance</label>
<input className="form-check-input" type="checkbox" name="megaStore" id="megaStore" checked={formData.availableInStore.megaStore} onChange={handleChange}/>
<label className="form-check-label" htmlFor="megaStore">Mega Store</label>
</td>
</tr>
<tr>
<td>
<button type="submit" className="btn btn-outline-dark" onClick={handleSubmit}>Add Product</button>
</td>
</tr>
</tbody>
</table>
</form>
</div>
  );
}
 
export default App;