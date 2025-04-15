import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin-home";
import AdminLayout from "./components/layout/admin-layout";
import ProductList from "./pages/product-list";
import AddProduct from "./pages/add-product";
import CatagoryList from "./pages/catagort-list";
import NewCatagory from "./pages/new-catagory";
import Attribute from "./pages/attributes";
import AddAttribute from "./pages/add-attribute";
import OrderList from "./pages/order-list";
import OrderDetails from "./pages/order-details";
import OrderTracking from "./pages/order-tracking";
import AllUser from "./pages/all-user";
import AddNewUser from "./pages/add-new-user";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import StoreSettings from "./pages/store-settings";
import Report from "./pages/report";
import Settings from "./pages/settings";
import Faq from "./pages/faq";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login as Landing Page */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes with Layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/catagorylist" element={<CatagoryList />} />
          <Route path="/newcatagory" element={<NewCatagory />} />
          <Route path="/attribute" element={<Attribute />} />
          <Route path="/addattribute" element={<AddAttribute />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/addnewuser" element={<AddNewUser />} />
          <Route path="/storesettings" element={<StoreSettings />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
