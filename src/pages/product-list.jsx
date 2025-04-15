import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  // State to store products
  const [products, setProducts] = useState([]);
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to "hide" the product (instead of deleting)
  const hideProduct = (productId, e) => {
    // Prevent the row's onClick from firing
    e.stopPropagation();
    setProducts(
      products.map((product) =>
        product._id === productId ? { ...product, visible: false } : product
      )
    );
  };

  // Function to open the modal with the selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
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
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
                <li>
                  <a href="#">
                    <div className="text-tiny">Product</div>
                  </a>
                </li>
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
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
                      <input
                        type="text"
                        placeholder="Search here..."
                        name="name"
                        required
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <a className="tf-button style-1 w208" href="add-product.html">
                  <i className="icon-plus"></i>Add new
                </a>
              </div>

              <div className="wg-table table-product-list">
                <ul className="table-title flex gap20 mb-14">
                  <li>
                    <div className="body-title">Product</div>
                  </li>
                  <li>
                    <div className="body-title">Product ID</div>
                  </li>
                  <li>
                    <div className="body-title">Price</div>
                  </li>
                  <li>
                    <div className="body-title">Sale Price</div>
                  </li>
                  <li>
                    <div className="body-title">Stock</div>
                  </li>
                  <li>
                    <div className="body-title">Color</div>
                  </li>
                  <li>
                    <div className="body-title">Size</div>
                  </li>
                  <li>
                    <div className="body-title">Category</div>
                  </li>
                  <li>
                    <div className="body-title">Action</div>
                  </li>
                </ul>

                <ul className="flex flex-column">
                  {products.length > 0 ? (
                    products.map(
                      (product) =>
                        product.visible !== false && (
                          <li
                            className="wg-product item-row gap20"
                            key={product._id}
                            onClick={() => openModal(product)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="name">
                              <div className="image">
                                <img
                                  src={
                                    product.images && product.images.length > 0
                                      ? product.images[0]
                                      : "http://placehold.it/100x100"
                                  }
                                  alt={product.title}
                                />
                              </div>
                              <div className="title line-clamp-2 mb-0">
                                <a href="#" className="body-text">
                                  {product.title}
                                </a>
                              </div>
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {product.productId}
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {product.price}
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {product.salePrice}
                            </div>
                            <div>
                              <div
                                className={`fw-7 ${
                                  product.stock > 0
                                    ? "block-available bg-1"
                                    : "block-stock bg-1"
                                }`}
                              >
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                              </div>
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {Array.isArray(product.colors) && product.colors.length > 0
                                ? product.colors.map((c) => c.name).join(", ")
                                : "N/A"}
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {Array.isArray(product.sizes) && product.sizes.length > 0
                                ? product.sizes.join(", ")
                                : "N/A"}
                            </div>
                            <div className="body-text text-main-dark mt-4">
                              {product.category}
                            </div>
                            <div className="list-icon-function">
                              <div
                                className="item trash"
                                onClick={(e) => hideProduct(product._id, e)}
                              >
                                <i className="icon-trash-2"></i>
                              </div>
                            </div>
                          </li>
                        )
                    )
                  ) : (
                    <li className="body-text text-main-dark mt-4">
                      No products available.
                    </li>
                  )}
                </ul>
              </div>

              <div className="divider"></div>
              <div className="flex items-center justify-between flex-wrap gap10">
                <div className="text-tiny">
                  Showing{" "}
                  {products.filter((p) => p.visible !== false).length} entries
                </div>
                <ul className="wg-pagination">
                  <li>
                    <a href="#">
                      <i className="icon-chevron-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-page">
          <div className="body-text">
            Copyright © 2024{" "}
            <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>.
            Design by Themesflat. All rights reserved.
          </div>
        </div>
      </div>

      {/* Modal for Product Details */}
      {showModal && selectedProduct && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <h3>{selectedProduct.title}</h3>
            <br />
            <p>
              <strong>Product ID:</strong> {selectedProduct.productId}
            </p>
            <br />
            <p>
              <strong>Price:</strong> {selectedProduct.price}
            </p>
            <br />
            <p>
              <strong>Sale Price:</strong> {selectedProduct.salePrice}
            </p>
            <br />
            <p>
              <strong>Stock:</strong>{" "}
              {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <br />
            <p>
              <strong>Colors:</strong>{" "}
              {Array.isArray(selectedProduct.colors) &&
              selectedProduct.colors.length > 0
                ? selectedProduct.colors.map((c) => c.name).join(", ")
                : "N/A"}
            </p>
            <br />
            <p>
              <strong>Sizes:</strong>{" "}
              {Array.isArray(selectedProduct.sizes) &&
              selectedProduct.sizes.length > 0
                ? selectedProduct.sizes.join(", ")
                : "N/A"}
            </p>
            <br />
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <br />
            <p>
              <strong>Created At:</strong>{" "}
              {selectedProduct.createdAt
                ? new Date(selectedProduct.createdAt).toLocaleString()
                : "N/A"}
            </p>
            <br />
            <div
              className="modal-images-grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {selectedProduct.images &&
                selectedProduct.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Product Image ${idx}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                ))}
            </div>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <br />
            <p>
              <strong>SKU:</strong> {selectedProduct.sku}
            </p>
            <br />
            <p>
              <strong>Tags:</strong>{" "}
              {Array.isArray(selectedProduct.tags) &&
              selectedProduct.tags.length > 0
                ? selectedProduct.tags.join(", ")
                : "N/A"}
            </p>
            <br />
            <p>
              <strong>Attributes:</strong>{" "}
              {Array.isArray(selectedProduct.attributes) &&
              selectedProduct.attributes.length > 0
                ? selectedProduct.attributes
                    .map((attr) => `${attr.name}: ${attr.value}`)
                    .join(", ")
                : "N/A"}
            </p>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
