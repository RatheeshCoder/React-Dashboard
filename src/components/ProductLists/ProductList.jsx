import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { ProductsData } from '../../Data/Data';
import { useState } from 'react';

const ProductList = () => {


        const [products, setProducts] = useState(ProductsData);
        const [newProduct, setNewProduct] = useState({
          productName: '',
          productPrice: '',
          productSellingPrice: '',
          productQuantity: '',
          stock: true,
        });
     const [editProduct, setEditProduct] = useState(null);
     const handleEditProduct = (productId) => {
        const productToEdit = products.find((product) => product.id === productId);
        setEditProduct(productToEdit);
      };
    
      const handleUpdateProduct = () => {
        setProducts(products.map((product) => (product.id === editProduct.id ? editProduct : product)));
        setEditProduct(null);
      };
    
      const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
      };

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
    <div className="container">

    <div className="product-list">
      <h2>Product List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Selling Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {editProduct?.id === product.id ? (
                    <TextField
                      value={editProduct.productName}
                      onChange={(e) => setEditProduct({ ...editProduct, productName: e.target.value })}
                    />
                  ) : (
                    product.productName
                  )}
                </TableCell>
                <TableCell>
                  {editProduct?.id === product.id ? (
                    <TextField
                      type="number"
                      value={editProduct.productPrice}
                      onChange={(e) => setEditProduct({ ...editProduct, productPrice: e.target.value })}
                    />
                  ) : (
                    product.productPrice
                  )}
                </TableCell>
                <TableCell>
                  {editProduct?.id === product.id ? (
                    <TextField
                      type="number"
                      value={editProduct.productSellingPrice}
                      onChange={(e) => setEditProduct({ ...editProduct, productSellingPrice: e.target.value })}
                    />
                  ) : (
                    product.productSellingPrice
                  )}
                </TableCell>
                <TableCell>
                  {editProduct?.id === product.id ? (
                    <TextField
                      type="number"
                      value={editProduct.productQuantity}
                      onChange={(e) => setEditProduct({ ...editProduct, productQuantity: e.target.value })}
                    />
                  ) : (
                    product.productQuantity
                  )}
                </TableCell>
                <TableCell>{product.stock ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  {editProduct?.id === product.id ? (
                    <>
                      <Button variant="contained" onClick={handleUpdateProduct}>Save</Button>
                      <Button variant="contained" onClick={() => setEditProduct(null)}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="contained" onClick={() => handleEditProduct(product.id)}>Edit</Button>
                      <Button variant="contained" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
  );
};

export default ProductList
