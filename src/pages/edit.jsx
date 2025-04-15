import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to "hide" the product (instead of deleting)
  const hideProduct = (productId) => {
    setProducts(products.map(product =>
      product._id === productId ? { ...product, visible: false } : product
    ));
  };

  return (
    <>
      <div className="main-content">
        <div className="main-content-inner">
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>All Products</h3>
              <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                <li>
                  <a href="index-2.html">
                    <div className="text-tiny">Dashboard</div>
                  </a>
                </li>
                <li><i className="icon-chevron-right"></i></li>
                <li>
                  <a href="#">
                    <div className="text-tiny">Product</div>
                  </a>
                </li>
                <li><i className="icon-chevron-right"></i></li>
                <li>
                  <div className="text-tiny">All Products</div>
                </li>
              </ul>
            </div>

            <div className="wg-box">
              <div className="title-box">
                <i className="icon-coffee"></i>
                <div className="body-text">
                  Tip: Search by Product ID. Each product has a unique ID.
                </div>
              </div>

              <div className="flex items-center justify-between gap10 flex-wrap">
                <div className="wg-filter flex-grow">
                  <div className="show">
                    <div className="text-tiny">Showing</div>
                    <div className="select">
                      <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                      </select>
                    </div>
                    <div className="text-tiny">entries</div>
                  </div>
                  <form className="form-search">
                    <fieldset className="name">
                      <input type="text" placeholder="Search here..." name="name" required />
                    </fieldset>
                    <div className="button-submit">
                      <button type="submit"><i className="icon-search"></i></button>
                    </div>
                  </form>
                </div>
                <a className="tf-button style-1 w208" href="add-product.html">
                  <i className="icon-plus"></i>Add new
                </a>
              </div>

              <div className="wg-table table-product-list">
                <ul className="table-title flex gap20 mb-14">
                  <li><div className="body-title">Product</div></li>
                  <li><div className="body-title">Product ID</div></li>
                  <li><div className="body-title">Price</div></li>
                  <li><div className="body-title">Sale Price</div></li>
                  <li><div className="body-title">Stock</div></li>
                  <li><div className="body-title">Color</div></li>
                  <li><div className="body-title">Size</div></li>
                  <li><div className="body-title">Category</div></li>
                  <li><div className="body-title">Action</div></li>
                </ul>

                <ul className="flex flex-column">
                  {products.length > 0 ? (
                    products.map(product => product.visible !== false && (
                      <li className="wg-product item-row gap20" key={product._id}>
                        <div className="name">
                          <div className="image">
                            <img
                              src={product.images && product.images.length > 0 ? product.images[0] : "http://placehold.it/100x100"}
                              alt={product.title}
                            />
                          </div>
                          <div className="title line-clamp-2 mb-0">
                            <a href="#" className="body-text">{product.title}</a>
                          </div>
                        </div>
                        <div className="body-text text-main-dark mt-4">{product.productId}</div>
                        <div className="body-text text-main-dark mt-4">{product.price}</div>
                        <div className="body-text text-main-dark mt-4">{product.salePrice}</div>
                        <div>
                          <div className={`fw-7 ${product.stock > 0 ? "block-available bg-1" : "block-stock bg-1"}`}>
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                          </div>
                        </div>
                        <div className="body-text text-main-dark mt-4">
                          {Array.isArray(product.colors) && product.colors.length > 0 
                            ? product.colors.map(c => c.name).join(", ") 
                            : "N/A"}
                        </div>
                        <div className="body-text text-main-dark mt-4">
                          {Array.isArray(product.sizes) && product.sizes.length > 0 
                            ? product.sizes.join(", ") 
                            : "N/A"}
                        </div>
                        <div className="body-text text-main-dark mt-4">{product.category}</div>
                        <div className="list-icon-function">
                          <div className="item trash" onClick={() => hideProduct(product._id)}>
                            <i className="icon-trash-2"></i>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="body-text text-main-dark mt-4">No products available.</li>
                  )}
                </ul>
              </div>

              <div className="divider"></div>
              <div className="flex items-center justify-between flex-wrap gap10">
                <div className="text-tiny">
                  Showing {products.filter(p => p.visible !== false).length} entries
                </div>
                <ul className="wg-pagination">
                  <li><a href="#"><i className="icon-chevron-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="icon-chevron-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-page">
          <div className="body-text">
            Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>.
            Design by Themesflat. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
