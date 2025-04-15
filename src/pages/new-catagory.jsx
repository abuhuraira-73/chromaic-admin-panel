import React, { useState } from "react";

function NewCatagory() {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage("Category added successfully!");
        setCategoryName("");
      } else {
        setMessage("Failed to add category.");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      setMessage("Error adding category.");
    }
  };

  return (
    <>
      {/* <!-- main-content --> */}
      <div className="main-content">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-inner">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>Category Information</h3>
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
                    <div className="text-tiny">Category</div>
                  </a>
                </li>
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
                <li>
                  <div className="text-tiny">Category Information</div>
                </li>
              </ul>
            </div>
            {/* <!-- new-category --> */}
            <div className="wg-box">
              <form className="form-new-product form-style-1" onSubmit={handleSubmit}>
                <fieldset className="name">
                  <div className="body-title">
                    Category Name <span className="tf-color-1">*</span>
                  </div>
                  <input
                    className="flex-grow"
                    type="text"
                    placeholder="Category name"
                    name="categoryName"
                    tabIndex="0"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="bot">
                  <div></div>
                  <button className="tf-button w208" type="submit">
                    Save
                  </button>
                </div>
                {message && <div className="mt-10 body-text">{message}</div>}
              </form>
            </div>
            {/* <!-- /new-category --> */}
          </div>
          {/* <!-- /main-content-wrap --> */}
        </div>
        {/* <!-- /main-content-wrap --> */}
        {/* <!-- bottom-page --> */}
        <div className="bottom-page">
          <div className="body-text">
            Copyright © 2024{" "}
            <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by
            Themesflat. All rights reserved
          </div>
        </div>
        {/* <!-- /bottom-page --> */}
      </div>
      {/* <!-- /main-content --> */}
    </>
  );
}

export default NewCatagory;
