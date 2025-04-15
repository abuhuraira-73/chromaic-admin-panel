import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            console.log("Fetching orders...");
            // Direct API call like in product-list.jsx and catagort-list.jsx
            const token = localStorage.getItem('token');
            const response = await axios.get("http://localhost:5000/api/orders", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Orders fetched:", response.data);
            setOrders(response.data || []);
            setError(null);
        } catch (err) {
            console.error("Error details:", err);
            setError("Failed to fetch orders. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (orderId) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`http://localhost:5000/api/orders/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchOrders(); // Refresh the list after deletion
            } catch (err) {
                console.error("Error deleting order:", err);
                alert("Failed to delete order. Please try again.");
            }
        }
    };

    // Filter orders based on search term
    const filteredOrders = orders.filter(order => 
        (order.orderNumber?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (order.orderItems?.some(item => 
            (item.name?.toLowerCase() || "").includes(searchTerm.toLowerCase())
        ) || false)
    );

    // Pagination
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Render loading state
    if (loading) {
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="main-content-wrap">
                        <div className="text-center p-4">Loading orders...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Render error state
    if (error) {
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="main-content-wrap">
                        <div className="text-center text-red-500 p-4">{error}</div>
                        <div className="text-center p-4">
                            <button 
                                className="tf-button style-1" 
                                onClick={fetchOrders}
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-30">
                        <h3>Order List</h3>
                        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                            <li>
                                <Link to="/dashboard"><div className="text-tiny">Dashboard</div></Link>
                            </li>
                            <li>
                                <i className="icon-chevron-right"></i>
                            </li>
                            <li>
                                <Link to="/orders"><div className="text-tiny">Order</div></Link>
                            </li>
                            <li>
                                <i className="icon-chevron-right"></i>
                            </li>
                            <li>
                                <div className="text-tiny">Order List</div>
                            </li>
                        </ul>
                    </div>
                    <div className="wg-box">
                        <div className="flex items-center justify-between gap10 flex-wrap">
                            <div className="wg-filter flex-grow">
                                <form className="form-search" onSubmit={(e) => e.preventDefault()}>
                                    <fieldset className="name">
                                        <input 
                                            type="text" 
                                            placeholder="Search here..." 
                                            className="" 
                                            name="name" 
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className="" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <Link to="/export-orders" className="tf-button style-1 w208">
                                <i className="icon-file-text"></i>Export all order
                            </Link>
                        </div>
                        <div className="wg-table table-all-category">
                            <ul className="table-title flex gap20 mb-14">
                                <li>
                                    <div className="body-title">Product</div>
                                </li>    
                                <li>
                                    <div className="body-title">Order ID</div>
                                </li>
                                <li>
                                    <div className="body-title">Price</div>
                                </li>
                                <li>
                                    <div className="body-title">Quantity</div>
                                </li>
                                <li>
                                    <div className="body-title">Payment</div>
                                </li>
                                <li>
                                    <div className="body-title">Status</div>
                                </li>
                                <li>
                                    <div className="body-title">Tracking</div>
                                </li>
                                <li>
                                    <div className="body-title">Action</div>
                                </li>
                            </ul>
                            <ul className="flex flex-column">
                                {currentOrders.length > 0 ? (
                                    currentOrders.map((order) => (
                                        <li key={order._id} className="wg-product item-row gap20">
                                            <div className="name">
                                                <div className="image">
                                                    <img 
                                                        src={order.orderItems?.[0]?.images?.[0] || "/assets/images/products/product-1.jpg"} 
                                                        alt={order.orderItems?.[0]?.name || "Product"}
                                                    />
                                                </div>
                                                <div className="title line-clamp-2 mb-0">
                                                    <Link to={`/products/${order.orderItems?.[0]?.id}`} className="body-text fw-6">
                                                        {order.orderItems?.[0]?.name || "Product"}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="body-text text-main-dark mt-4">
                                                #{order.orderNumber || order._id}
                                            </div>
                                            <div className="body-text text-main-dark mt-4">
                                                ${order.totalPrice?.toFixed(2) || "0.00"}
                                            </div>
                                            <div className="body-text text-main-dark mt-4">
                                                {order.orderItems?.reduce((total, item) => total + (item.quantity || 0), 0) || 0}
                                            </div>
                                            <div className="body-text text-main-dark mt-4">
                                                {order.paymentMethod || "N/A"}
                                            </div>
                                            <div>
                                                <div className={`block-${order.status === "Delivered" ? "available" : "pending"} bg-1 fw-7`}>
                                                    {order.status || "Processing"}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block-tracking bg-1">
                                                    {order.isDelivered ? "Delivered" : "In Transit"}
                                                </div>
                                            </div>
                                            <div className="list-icon-function">
                                                <div className="item eye">
                                                    <Link to={`/order-details/${order._id}`}>
                                                        <i className="icon-eye"></i>
                                                    </Link>
                                                </div>
                                                <div className="item edit">
                                                    <Link to={`/order-edit/${order._id}`}>
                                                        <i className="icon-edit-3"></i>
                                                    </Link>
                                                </div>
                                                <div className="item trash">
                                                    <button onClick={(e) => { 
                                                        e.stopPropagation(); 
                                                        handleDelete(order._id);
                                                    }}>
                                                        <i className="icon-trash-2"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-center p-4">No orders found</li>
                                )}
                            </ul>
                        </div>
                        <div className="divider"></div>
                        <div className="flex items-center justify-between flex-wrap gap10">
                            <div className="text-tiny">
                                Showing {filteredOrders.length > 0 ? indexOfFirstOrder + 1 : 0} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} entries
                            </div>
                            {totalPages > 1 && (
                                <ul className="wg-pagination">
                                    <li>
                                        <button 
                                            onClick={() => paginate(currentPage - 1)} 
                                            disabled={currentPage === 1}
                                        >
                                            <i className="icon-chevron-left"></i>
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                        <li key={number} className={currentPage === number ? "active" : ""}>
                                            <button onClick={() => paginate(number)}>{number}</button>
                                        </li>
                                    ))}
                                    <li>
                                        <button 
                                            onClick={() => paginate(currentPage + 1)} 
                                            disabled={currentPage === totalPages}
                                        >
                                            <i className="icon-chevron-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
