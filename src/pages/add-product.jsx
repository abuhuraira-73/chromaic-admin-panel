import React, { useState, useEffect } from "react";

function AddProduct() {
  // Updated available colors array with more options
  const availableColors = [
    { name: "Brown", className: "bg-color-brown", image: "" },
    { name: "Grey", className: "bg-color-grey", image: "" },
    { name: "Orange", className: "bg-color-orange", image: "" },
    { name: "Red", className: "bg-color-red", image: "" },
    { name: "Blue", className: "bg-color-blue", image: "" },
    { name: "White", className: "bg-color-white", image: "" },
    { name: "Black", className: "bg-color-black", image: "" },
    { name: "Maroon", className: "bg-color-maroon", image: "" },
    { name: "Purple", className: "bg-color-purple", image: "" },
    { name: "Green", className: "bg-color-green", image: "" },
    { name: "Pink", className: "bg-color-pink", image: "" },
  ];

  // State for form fields
  const [images, setImages] = useState([]); // { file, preview }
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [colors, setColors] = useState([]); // will store color objects from availableColors
  const [sizes, setSizes] = useState([]); // array of strings
  const [discount, setDiscount] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  // Update tags state to be an array
  const [tags, setTags] = useState([]);
  // State for new tag input
  const [tagInput, setTagInput] = useState("");
  const [description, setDescription] = useState("");

  // State for custom attributes from backend and their values
  const [customAttributes, setCustomAttributes] = useState([]);
  const [customAttributeValues, setCustomAttributeValues] = useState({});

  // New state for categories list fetched from backend
  const [categoriesList, setCategoriesList] = useState([]);

  // Fetch custom attributes from backend
  useEffect(() => {
    const fetchCustomAttributes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/attributes");
        if (response.ok) {
          const data = await response.json();
          // Filter to only custom attributes (isMandatory false)
          const custom = data.filter((attr) => !attr.isMandatory);
          setCustomAttributes(custom);
        }
      } catch (error) {
        console.error("Error fetching custom attributes:", error);
      }
    };
    fetchCustomAttributes();
  }, []);

  // Fetch categories from backend for dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategoriesList(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCustomAttributeChange = (name, value) => {
    setCustomAttributeValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file uploads and generate preview URLs
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  // Handler to remove an image from the preview list
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Handle color checkbox change: add/remove the full color object
  const handleColorChange = (e) => {
    const colorName = e.target.value;
    const colorObj = availableColors.find((c) => c.name === colorName);
    if (e.target.checked) {
      setColors((prev) => [...prev, colorObj]);
    } else {
      setColors((prev) => prev.filter((c) => c.name !== colorName));
    }
  };

  // Handle size checkbox change
  const handleSizeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSizes((prev) => [...prev, value]);
    } else {
      setSizes((prev) => prev.filter((s) => s !== value));
    }
  };

  // Handle form submission using FormData
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate image count
    if (images.length < 1) {
      alert("Please upload at least 1 image.");
      return;
    }
    if (images.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    // Validate numeric fields
    if (
      isNaN(Number(price)) ||
      isNaN(Number(salePrice)) ||
      isNaN(Number(stock)) ||
      (discount && isNaN(Number(discount)))
    ) {
      alert("Price, Sale Price, Stock, and Discount must be numeric.");
      return;
    }

    const formData = new FormData();

    // Append each image file with field name "images"
    images.forEach((img) => {
      formData.append("images", img.file);
    });

    // Append text fields
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("salePrice", salePrice);
    // Append colors and sizes as JSON strings
    formData.append("colors", JSON.stringify(colors));
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("discount", discount);
    formData.append("sku", sku);
    formData.append("stock", stock);
    // Append tags as a JSON string of an array
    formData.append("tags", JSON.stringify(tags));

    // Convert custom attribute values object to array of { name, value } objects
    const customAttributesArray = Object.keys(customAttributeValues).map((key) => ({
      name: key,
      value: customAttributeValues[key],
    }));
    formData.append("attributes", JSON.stringify(customAttributesArray));

    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Product added:", data);
        // Reset form fields after successful submission
        setImages([]);
        setTitle("");
        setCategory("");
        setPrice("");
        setSalePrice("");
        setColors([]);
        setSizes([]);
        setDiscount("");
        setSku("");
        setStock("");
        setTags([]);
        setTagInput("");
        setDescription("");
        setCustomAttributeValues({});
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="main-content-inner">
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>Add Product</h3>
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
                  <div className="text-tiny">Add Product</div>
                </li>
              </ul>
            </div>
            <form className="form-add-product" onSubmit={handleSubmit}>
              <div className="wg-box mb-30">
                <fieldset>
                  <div className="body-title mb-10">Upload images</div>
                  <div className="upload-image mb-16">
                    <div className="up-load">
                      <label className="uploadfile" htmlFor="myFile">
                        <span className="icon">
                          <i className="icon-upload-cloud"></i>
                        </span>
                        <div className="text-tiny">
                          Drop your images here or select{" "}
                          <span className="text-secondary">click to browse</span>
                        </div>
                        <input
                          type="file"
                          id="myFile"
                          name="images"
                          onChange={handleImageUpload}
                          multiple
                        />
                      </label>
                    </div>
                    <img id="imagePreview" alt="Preview" style={{ display: "none" }} />
                    <div className="flex gap20 flex-wrap">
                      {images.map((img, index) => (
                        <div key={index} className="item" style={{ position: "relative" }}>
                          <img
                            src={img.preview}
                            alt={`Upload Preview ${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                          <button 
                            type="button" 
                            onClick={() => handleRemoveImage(index)}
                            style={{
                              position: "absolute",
                              top: "0",
                              right: "0",
                              background: "rgba(255, 0, 0, 0.7)",
                              border: "none",
                              color: "#fff",
                              cursor: "pointer",
                              padding: "2px 5px",
                              fontSize: "12px"
                            }}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="body-text">
                    You need to add at least 1 image and a maximum of 5 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details.
                  </div>
                </fieldset>
              </div>
              <div className="wg-box mb-30">
                <fieldset className="name">
                  <div className="body-title mb-10">
                    Product title <span className="tf-color-1">*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    tabIndex="0"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-required="true"
                    required
                  />
                  <div className="text-tiny text-surface-2">
                    Do not exceed 20 characters when entering the product name.
                  </div>
                </fieldset>
                <fieldset className="category">
                  <div className="body-title mb-10">
                    Category <span className="tf-color-1">*</span>
                  </div>
                  <select
                    name="category"
                    tabIndex="0"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-required="true"
                    required
                  >
                    <option value="">Select category</option>
                    {categoriesList.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <div className="cols-lg gap22">
                  <fieldset className="price">
                    <div className="body-title mb-10">
                      Price <span className="tf-color-1">*</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Price"
                      name="price"
                      tabIndex="0"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="sale-price">
                    <div className="body-title mb-10">Sale Price</div>
                    <input
                      type="number"
                      placeholder="Sale Price"
                      name="salePrice"
                      tabIndex="0"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="discount">
                    <div className="body-title mb-10">Discount (%)</div>
                    <input
                      type="number"
                      placeholder="Discount"
                      name="discount"
                      tabIndex="0"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className="cols-lg gap22">
                  <fieldset className="variant-picker-item">
                    <div className="variant-picker-label body-title">
                      Colors:{" "}
                      <span className="body-title-2 fw-4 variant-picker-label-value">
                        {colors.map((c) => c.name).join(", ")}
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      {[
                        { label: "Brown", class: "bg-color-brown" },
                        { label: "Grey", class: "bg-color-grey" },
                        { label: "Orange", class: "bg-color-orange" },
                        { label: "Red", class: "bg-color-red" },
                        { label: "Blue", class: "bg-color-blue" },
                        { label: "White", class: "bg-color-white" },
                        { label: "Black", class: "bg-color-black" },
                        { label: "Maroon", class: "bg-color-maroon" },
                        { label: "Purple", class: "bg-color-purple" },
                        { label: "Green", class: "bg-color-green" },
                        { label: "Pink", class: "bg-color-pink" }
                      ].map((col) => (
                        <div key={col.label}>
                          <input
                            id={`values-${col.label}`}
                            type="checkbox"
                            name="colors"
                            value={col.label}
                            checked={colors.some((c) => c.name === col.label)}
                            onChange={handleColorChange}
                          />
                          <label className="radius-60" htmlFor={`values-${col.label}`} data-value={col.label}>
                            <span className={`btn-checkbox ${col.class}`}></span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset className="variant-picker-item">
                    <div className="variant-picker-label body-text">
                      Sizes:{" "}
                      <span className="body-title-2 variant-picker-label-value">
                        {sizes.join(", ")}
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      {["S", "M", "L", "XL"].map((size) => (
                        <div key={size}>
                          <input
                            type="checkbox"
                            name="sizes"
                            id={`values-${size}`}
                            value={size}
                            checked={sizes.includes(size)}
                            onChange={handleSizeChange}
                          />
                          <label className="style-text" htmlFor={`values-${size}`} data-value={size}>
                            <div className="text">{size}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="cols-lg gap22">
                  <fieldset className="sku">
                    <div className="body-title mb-10">SKU</div>
                    <input
                      type="text"
                      placeholder="Enter SKU"
                      name="sku"
                      tabIndex="0"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="category">
                    <div className="body-title mb-10">
                      Stock <span className="tf-color-1">*</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter Stock"
                      name="stock"
                      tabIndex="0"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="sku">
                    <div className="body-title mb-10">Tags</div>
                    <div className="flex items-center gap10">
                      <input
                        type="text"
                        placeholder="Enter a tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                      <button
                        type="button"
                        className="tf-button w-auto"
                        onClick={() => {
                          if (tagInput.trim()) {
                            setTags([...tags, tagInput.trim()]);
                            setTagInput("");
                          }
                        }}
                      >
                        Add Tag
                      </button>
                    </div>
                    {tags.length > 0 && (
                      <ul className="mt-10">
                        <br />
                        {tags.map((tag, index) => (
                          <li key={index} className="flex items-center gap10">
                            <span>{tag}</span>
                            <button
                              type="button"
                              className="tf-button w-auto"
                              onClick={() => setTags(tags.filter((_, i) => i !== index))}
                            >
                              Remove
                            </button>
                            <br />
                          </li>
                        ))}
                        <br />
                      </ul>
                    )}
                  </fieldset>
                </div>
                <div className="wg-box mb-30">
                  <fieldset className="custom-attributes">
                    <div className="body-title mb-10">Custom Attributes</div>
                    {customAttributes.length === 0 ? (
                      <div className="body-text">No custom attributes added.</div>
                    ) : (
                      customAttributes.map((attr) => {
                        const value = customAttributeValues[attr.name] || "";
                        if (attr.type === "Select") {
                          return (
                            <div key={attr._id} className="mb-10">
                              <label className="body-title">{attr.name}</label>
                              <select
                                className="flex-grow"
                                value={value}
                                onChange={(e) =>
                                  handleCustomAttributeChange(attr.name, e.target.value)
                                }
                              >
                                <option value="">Select {attr.name}</option>
                                {attr.options.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          );
                        } else if (attr.type === "Number") {
                          return (
                            <div key={attr._id} className="mb-10">
                              <label className="body-title">{attr.name}</label>
                              <input
                                type="number"
                                className="flex-grow"
                                value={value}
                                placeholder={`Enter ${attr.name}`}
                                onChange={(e) =>
                                  handleCustomAttributeChange(attr.name, e.target.value)
                                }
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div key={attr._id} className="mb-10">
                              <label className="body-title">{attr.name}</label>
                              <input
                                type="text"
                                className="flex-grow"
                                value={value}
                                placeholder={`Enter ${attr.name}`}
                                onChange={(e) =>
                                  handleCustomAttributeChange(attr.name, e.target.value)
                                }
                              />
                            </div>
                          );
                        }
                      })
                    )}
                  </fieldset>
                </div>
                <fieldset className="description">
                  <div className="body-title mb-10">
                    Description <span className="tf-color-1">*</span>
                  </div>
                  <textarea
                    name="description"
                    placeholder="Short description about product"
                    tabIndex="0"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-required="true"
                    required
                    className="mb-10"
                  ></textarea>
                  <div className="text-tiny">
                    Do not exceed 100 characters when entering the product name.
                  </div>
                </fieldset>
              </div>
              <div className="cols gap10">
                <button className="tf-button w380" type="submit">
                  Add product
                </button>
                <button className="tf-button style-3 w380" type="button">
                  Cancel
                </button>
              </div>
            </form>
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
    </>
  );
}

export default AddProduct;
