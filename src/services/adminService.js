import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function to get auth config
const authConfig = () => {
  const token = localStorage.getItem('userToken');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get all orders
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`, authConfig());
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Get order details by ID
export const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`, authConfig());
    return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await axios.put(
      `${API_URL}/orders/${orderId}/status`,
      { status },
      authConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

// Delete order
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/orders/${orderId}`, authConfig());
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};

const adminService = {
  getAllOrders,
  getOrderDetails,
  updateOrderStatus,
  deleteOrder,
};

export default adminService; 