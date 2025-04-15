import React, { useState, useEffect } from "react";

function Attribute() {
    // Predefined mandatory attributes from your Add Product page
    const mandatoryAttributes = [
        { name: "Color", value: "Orange, Blue, Yellow, Black" },
        { name: "Size", value: "S, M, L, XL" },
    ];

    const [customAttributes, setCustomAttributes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCustomAttributes = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/attributes");
                if (!response.ok) {
                    throw new Error("Failed to fetch attributes");
                }
                const data = await response.json();
                // Filter out mandatory attributes (isMandatory true)
                const custom = data.filter((attr) => !attr.isMandatory);
                setCustomAttributes(custom);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomAttributes();
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
                            <h3>All Attributes</h3>
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
                                    <div className="text-tiny">All Attributes</div>
                                </li>
                            </ul>
                        </div>

                        {/* Mandatory Attributes Section */}
                        <div className="wg-box">
                            <h4>Mandatory Attributes</h4>
                            <div className="wg-table table-all-attribute">
                                <ul className="table-title flex gap20 mb-14">
                                    <li>
                                        <div className="body-title">Category</div>
                                    </li>
                                    <li>
                                        <div className="body-title">Value</div>
                                    </li>
                                    <li>
                                        <div className="body-title">Action</div>
                                    </li>
                                </ul>
                                <ul className="flex flex-column">
                                    {mandatoryAttributes.map((attr, index) => (
                                        <li
                                            key={index}
                                            className="attribute-item item-row flex items-center justify-between gap20"
                                        >
                                            <div className="name">
                                                <a href="add-attributes.html" className="body-title-2">
                                                    {attr.name}
                                                </a>
                                            </div>
                                            <div className="body-text">{attr.value}</div>
                                            <div className="list-icon-function">
                                                {/* No action icons for mandatory attributes */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Custom Attributes Section */}
                        <div className="wg-box">
                            <h4>Custom Attributes</h4>
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div className="body-text text-error">{error}</div>
                            ) : customAttributes.length === 0 ? (
                                <div className="body-text">No custom attributes added yet.</div>
                            ) : (
                                <div className="wg-table table-all-attribute">
                                    <ul className="table-title flex gap20 mb-14">
                                        <li>
                                            <div className="body-title">Category</div>
                                        </li>
                                        <li>
                                            <div className="body-title">Value</div>
                                        </li>
                                        <li>
                                            <div className="body-title">Action</div>
                                        </li>
                                    </ul>
                                    <ul className="flex flex-column">
                                        {customAttributes.map((attr) => (
                                            <li
                                                key={attr._id}
                                                className="attribute-item item-row flex items-center justify-between gap20"
                                            >
                                                <div className="name">
                                                    <a href="add-attributes.html" className="body-title-2">
                                                        {attr.name}
                                                    </a>
                                                </div>
                                                <div className="body-text">
                                                    {attr.type === "Select"
                                                        ? `Options: ${attr.options.join(", ")}`
                                                        : attr.defaultValue
                                                            ? `Default: ${attr.defaultValue}`
                                                            : ""}
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
                                </div>
                            )}
                        </div>

                        {/* <div className="divider"></div>
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
                        </div> */}
                    </div>
                </div>
                {/* <!-- bottom-page --> */}
                <div className="bottom-page">
                    <div className="body-text">
                        Copyright © 2024{" "}
                        <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>.
                        Design by Themesflat All rights reserved
                    </div>
                </div>
            </div>
            {/* <!-- /main-content --> */}
        </>
    );
}

export default Attribute;
