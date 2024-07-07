import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      this.setState((prevState) => ({
        availableInStore: {
          ...prevState.availableInStore,
          [name]: checked,
        },
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleRadioChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { productId, productName, productCost, productOnline, productCategory, availableInStore } = this.state;
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
                  <input
                    type="text"
                    className="form-control"
                    id="productId"
                    name="productId"
                    value={productId}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="productName" className="form-label">Product Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    value={productName}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="productCost" className="form-label">Product Cost</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="productCost"
                    name="productCost"
                    value={productCost}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form-label">Product Online</label>
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="productOnline"
                    value="Yes"
                    id="onlineYes"
                    checked={productOnline === 'Yes'}
                    onChange={this.handleRadioChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="onlineYes"> Yes</label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="productOnline"
                    value="No"
                    id="onlineNo"
                    checked={productOnline === 'No'}
                    onChange={this.handleRadioChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="onlineNo"> No</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="productCategory" className="form-label">Product Category</label>
                </td>
                <td>
                  <select
                    className="btn dropdown-toggle btn-outline-dark"
                    id="productCategory"
                    name="productCategory"
                    value={productCategory}
                    onChange={this.handleChange}
                    required
                  >
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
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="bigBazaar"
                    id="bigBazaar"
                    checked={availableInStore.bigBazaar}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="bigBazaar">Big Bazaar</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="dMart"
                    id="dMart"
                    checked={availableInStore.dMart}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="dMart">DMart</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="reliance"
                    id="reliance"
                    checked={availableInStore.reliance}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="reliance">Reliance</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="megaStore"
                    id="megaStore"
                    checked={availableInStore.megaStore}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="megaStore">Mega Store</label>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    onClick={this.handleSubmit}
                  >
                    Add Product
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
