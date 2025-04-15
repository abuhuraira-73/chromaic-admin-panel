import React, { useState, useEffect } from "react";

function CatagoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* <!-- main-content --> */}
      <div className="main-content">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-inner">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>All Category</h3>
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
                  <div className="text-tiny">All Category</div>
                </li>
              </ul>
            </div>
            {/* <!-- all-category --> */}
            <div className="wg-box">
              <div className="flex items-center justify-between gap10 flex-wrap">
                <div className="wg-filter flex-grow">
                  <div className="show">
                    <div className="text-tiny">Showing</div>
                    <div className="select">
                      <select className="">
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
                        className=""
                        name="name"
                        tabIndex="2"
                        value=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button className="" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <a className="tf-button style-1 w208" href="new-category.html">
                  <i className="icon-plus"></i>Add new
                </a>
              </div>
              <div className="wg-table table-all-category">
                <ul className="table-title flex gap20 mb-14">
                  <li>
                    <div className="body-title">Category</div>
                  </li>
                  <li>
                    <div className="body-title">Quantity</div>
                  </li>
                  <li>
                    <div className="body-title">Action</div>
                  </li>
                </ul>
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div className="body-text text-error">{error}</div>
                ) : categories.length === 0 ? (
                  <div className="body-text">No categories found.</div>
                ) : (
                  <ul className="flex flex-column">
                    {categories.map((cat) => (
                      <li key={cat._id} className="wg-product item-row gap20">
                        <div className="name">
                          <a href="#" className="body-title-2">
                            {cat.name}
                          </a>
                        </div>
                        <div className="body-text text-main-dark mt-4">
                          {cat.quantity || 0}
                        </div>
                        <div className="list-icon-function">
                          <div className="item eye">
                            <i className="icon-eye"></i>
                          </div>
                          <div className="item edit">
                            <i className="icon-edit-3"></i>
                          </div>
                          <div className="item trash">
                            <i className="icon-trash-2"></i>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="divider"></div>
              <div className="flex items-center justify-between flex-wrap gap10">
                <div className="text-tiny">Showing 10 entries</div>
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
            {/* <!-- /all-category --> */}
          </div>
          {/* <!-- /main-content-wrap --> */}
        </div>
        {/* <!-- /main-content-wrap --> */}
        {/* <!-- bottom-page --> */}
        <div className="bottom-page">
          <div className="body-text">
            Copyright © 2024{" "}
            <a href="https://themesflat.co/html/ecomus/index.html">
              Ecomus
            </a>
            . Design by Themesflat All rights reserved
          </div>
        </div>
        {/* <!-- /bottom-page --> */}
      </div>
      {/* <!-- /main-content --> */}
    </>
  );
}

export default CatagoryList;
