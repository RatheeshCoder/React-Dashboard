import React from 'react'
import { ProductsData } from '../../Data/Data'
import { useState } from 'react';
import './NewProducts.css'

const NewProducts = () => {
    const [products, setProducts] = useState(ProductsData);
    const [newProduct, setNewProduct] = useState({
      productName: '',
      productPrice: '',
      productSellingPrice: '',
      productQuantity: '',
      stock: true,
    });
   
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewProduct({ ...newProduct, [name]: value });
    };
  
    const handleAddProduct = () => {
      const newProductData = {
        ...newProduct,
        id: Date.now(),
      };
      setProducts([...products, newProductData]);
      setNewProduct({
        productName: '',
        productPrice: '',
        productSellingPrice: '',
        productQuantity: '',
        stock: true,
      });
    };
  

  
    return (
      <div>
        <h1>Products Dashboard</h1>
        <div className='MainInput'>
          <h2>Add New Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            name="productName"
            value={newProduct.productName}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Product Price"
            name="productPrice"
            value={newProduct.productPrice}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Product Selling Price"
            name="productSellingPrice"
            value={newProduct.productSellingPrice}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Product Quantity"
            name="productQuantity"
            value={newProduct.productQuantity}
            onChange={handleInputChange}
          />
          <label>
            In Stock:
            <input
              type="checkbox"
              name="stock"
              checked={newProduct.stock}
              onChange={() => setNewProduct({ ...newProduct, stock: !newProduct.stock })}
            />
          </label>
          <button className='submit' onClick={handleAddProduct}>Add Product</button>
        </div>
  

      </div>
    );
};

export default NewProducts;
