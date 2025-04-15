import React, { useState } from "react";

function AddNewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.split(" ")[0] || name,
          lastName: name.split(" ")[1] || "",
          email,
          password,
          isAdmin,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("User added successfully");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsAdmin(false);
      } else {
        setMessage(data.message || "Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Error adding user");
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="main-content-inner">
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>Add New User</h3>
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
                  <div className="text-tiny">Add New User</div>
                </li>
              </ul>
            </div>
            <form className="form-add-new-user form-style-2" onSubmit={handleSubmit}>
              <div className="wg-box">
                <div className="left">
                  <h5 className="mb-4">Account</h5>
                  <div className="body-text">
                    Fill in the information below to add a new account
                  </div>
                </div>
                <div className="right flex-grow">
                  <fieldset className="name mb-24">
                    <div className="body-title mb-10">Name</div>
                    <input
                      className="flex-grow"
                      type="text"
                      placeholder="Username"
                      name="name"
                      tabIndex="0"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="email mb-24">
                    <div className="body-title mb-10">Email</div>
                    <input
                      className="flex-grow"
                      type="email"
                      placeholder="Email"
                      name="email"
                      tabIndex="0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="password mb-24">
                    <div className="body-title mb-10">Password</div>
                    <input
                      className="password-input"
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      tabIndex="0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="password mb-24">
                    <div className="body-title mb-10">Confirm Password</div>
                    <input
                      className="password-input"
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      tabIndex="0"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="mb-24">
                    <div className="body-title mb-10">Set as Admin</div>
                    <input
                      type="checkbox"
                      name="isAdmin"
                      checked={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.checked)}
                    />{" "}
                    <label>Yes</label>
                  </fieldset>
                </div>
              </div>
              <div className="bot">
                <button className="tf-button w180" type="submit">
                  Save
                </button>
              </div>
              {message && <div className="body-text mt-10">{message}</div>}
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

export default AddNewUser;
