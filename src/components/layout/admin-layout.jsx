// src/components/admin/layout/admin-layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./admin-header";
import LeftMenu from "./left-menu";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">

      <div>
        {/* <!-- #wrapper --> */}
        <div id="wrapper">
          {/* <!-- #page --> */}
          <div id="page" className="">
            {/* <!-- layout-wrap --> */}
            <div className="layout-wrap">
              {/* <!-- preload --> */}
              <div id="preload" className="preload-container">
                <div className="preloading">
                  <span></span>
                </div>
              </div>
              {/* <!-- /preload --> */}
              {/* <!-- section-menu-left --> */}
              <LeftMenu />
              {/* <!-- /section-menu-left --> */}
              {/* <!-- section-content-right --> */}
              <div className="section-content-right">
                {/* <!-- header-dashboard --> */}
                <AdminHeader />
                {/* <!-- /header-dashboard --> */}
                {/* <!-- main-content --> */}
                <Outlet />
                {/* <!-- /main-content --> */}
              </div>
              {/* <!-- /section-content-right --> */}
            </div>
            {/* <!-- /layout-wrap --> */}
          </div>
          {/* <!-- /#page --> */}
        </div>
        {/* <!-- /#wrapper --> */}
      </div>
    </div>
  );
};

export default AdminLayout;
