import React, { useState, useEffect } from "react";
import axios from "axios";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="main-content-inner">
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>All Users</h3>
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
                    <div className="text-tiny">User</div>
                  </a>
                </li>
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
                <li>
                  <div className="text-tiny">All Users</div>
                </li>
              </ul>
            </div>
            <div className="wg-box">
              <div className="flex items-center justify-between gap10 flex-wrap">
                <div className="wg-filter flex-grow">
                  <form className="form-search">
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Search here..."
                        name="name"
                        tabIndex="2"
                        value=""
                        aria-required="true"
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
                <a className="tf-button style-1 w208" href="add-new-user.html">
                  <i className="icon-plus"></i>Add new
                </a>
              </div>
              <div className="wg-table table-all-user">
                <ul className="table-title flex gap20 mb-14">
                  <li>
                    <div className="body-title">User</div>
                  </li>
                  <li>
                    <div className="body-title">Email</div>
                  </li>
                  <li>
                    <div className="body-title">Admin</div>
                  </li>
                  <li>
                    <div className="body-title">Action</div>
                  </li>
                </ul>
                {loading ? (
                  <div className="body-text">Loading...</div>
                ) : error ? (
                  <div className="body-text text-error">{error}</div>
                ) : users.length === 0 ? (
                  <div className="body-text">No users found.</div>
                ) : (
                  <ul className="flex flex-column">
                    {users.map((user) => (
                      <li key={user._id} className="wg-product item-row">
                        <div className="name flex-grow">
                          <div className="title">
                            <a href="#" className="body-title-2">
                              {user.name}
                            </a>
                          </div>
                        </div>
                        <div className="body-text">{user.email}</div>
                        <div className="body-text">
                          {user.isAdmin ? "Yes" : "No"}
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
                <div className="text-tiny">
                  Showing {users.length} entries
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
            <a href="https://themesflat.co/html/ecomus/index.html">
              Ecomus
            </a>
            . Design by Themesflat. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUser;
