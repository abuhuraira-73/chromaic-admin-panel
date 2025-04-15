import React, { useState } from "react";

function AddAttribute() {
  const [attributeName, setAttributeName] = useState("");
  const [attributeType, setAttributeType] = useState("Text");
  const [defaultValue, setDefaultValue] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct payload for submission
    const newAttribute = {
      name: attributeName,
      type: attributeType,
      defaultValue:
        attributeType === "Text" || attributeType === "Number" ? defaultValue : "",
      options: attributeType === "Select" ? options : [],
    };
    console.log("Submitting new attribute:", newAttribute);

    try {
      const response = await fetch("http://localhost:5000/api/attributes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAttribute),
      });

      if (!response.ok) {
        // Optionally, you can extract error info here if your backend sends one
        throw new Error("Failed to add attribute");
      }
      const data = await response.json();
      console.log("Attribute added:", data);
      setMessage("Attribute added successfully!");
      // Reset the form
      setAttributeName("");
      setAttributeType("Text");
      setDefaultValue("");
      setOptions([]);
      setOptionInput("");
    } catch (error) {
      console.error("Error adding attribute:", error);
      setMessage("Error adding attribute");
    }
  };

  const handleAddOption = () => {
    if (optionInput.trim() !== "") {
      setOptions([...options, optionInput.trim()]);
      setOptionInput("");
    }
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* <!-- main-content --> */}
      <div className="main-content">
        {/* <!-- main-content-inner --> */}
        <div className="main-content-inner">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-30">
              <h3>Add Attribute</h3>
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
                    <div className="text-tiny">Attributes</div>
                  </a>
                </li>
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
                <li>
                  <div className="text-tiny">Add Attribute</div>
                </li>
              </ul>
            </div>
            {/* <!-- new-attribute --> */}
            <div className="wg-box">
              <form className="form-new-product form-style-1" onSubmit={handleSubmit}>
                <fieldset className="name">
                  <div className="body-title">Attribute Name</div>
                  <input
                    className="flex-grow"
                    type="text"
                    placeholder="Attribute name"
                    name="attributeName"
                    value={attributeName}
                    onChange={(e) => setAttributeName(e.target.value)}
                    required
                  />
                </fieldset>

                <fieldset className="name">
                  <div className="body-title">Attribute Type</div>
                  <div className="flex items-center gap10">
                    <button
                      type="button"
                      className="tf-button w-auto"
                      style={{ opacity: attributeType === "Text" ? 1 : 0.5 }}
                      onClick={() => setAttributeType("Text")}
                    >
                      Text
                    </button>
                    <button
                      type="button"
                      className="tf-button w-auto"
                      style={{ opacity: attributeType === "Number" ? 1 : 0.5 }}
                      onClick={() => setAttributeType("Number")}
                    >
                      Number
                    </button>
                    <button
                      type="button"
                      className="tf-button w-auto"
                      style={{ opacity: attributeType === "Select" ? 1 : 0.5 }}
                      onClick={() => setAttributeType("Select")}
                    >
                      Select/Dropdown
                    </button>
                  </div>
                </fieldset>

                {attributeType === "Text" && (
                  <fieldset className="name">
                    <div className="body-title">Default Value</div>
                    <input
                      className="flex-grow"
                      type="text"
                      placeholder="Enter default text"
                      value={defaultValue}
                      onChange={(e) => setDefaultValue(e.target.value)}
                    />
                  </fieldset>
                )}

                {attributeType === "Number" && (
                  <fieldset className="name">
                    <div className="body-title">Default Value</div>
                    <input
                      className="flex-grow"
                      type="number"
                      placeholder="Enter default number"
                      value={defaultValue}
                      onChange={(e) => setDefaultValue(e.target.value)}
                    />
                  </fieldset>
                )}

                {attributeType === "Select" && (
                  <fieldset className="name">
                    <div className="body-title">Options</div>
                    <div className="flex items-center gap10">
                      <input
                        className="flex-grow"
                        type="text"
                        placeholder="Enter option"
                        value={optionInput}
                        onChange={(e) => setOptionInput(e.target.value)}
                      />
                      <button
                        type="button"
                        className="tf-button w-auto"
                        onClick={handleAddOption}
                      >
                        Add Option
                      </button>
                    </div>
                    <br />
                    {options.length > 0 && (
                      <ul>
                        {options.map((option, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between"
                            style={{ marginBottom: "10px" }}
                          >
                            <span>{option}</span>
                            <button
                              type="button"
                              className="tf-button w-auto"
                              onClick={() => handleRemoveOption(index)}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </fieldset>
                )}

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
        {/* <!-- /main-content-inner --> */}
        {/* <!-- bottom-page --> */}
        <div className="bottom-page">
          <div className="body-text">
            Copyright © 2024{" "}
            <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by
            Themesflat All rights reserved
          </div>
        </div>
        {/* <!-- /bottom-page --> */}
      </div>
      {/* <!-- /main-content --> */}
    </>
  );
}

export default AddAttribute;
