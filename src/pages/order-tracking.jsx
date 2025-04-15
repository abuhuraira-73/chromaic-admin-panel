import React from "react";

function OrderTracking() {
    return (
        <>
                            {/* <!-- main-content --> */}
                    <div class="main-content">
                        {/* <!-- main-content-wrap --> */}
                        <div class="main-content-inner">
                            {/* <!-- main-content-wrap --> */}
                            <div class="main-content-wrap">
                                <div class="flex items-center flex-wrap justify-between gap20 mb-30">
                                    <h3>Track Order</h3>
                                    <ul class="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                        <li>
                                            <a href="index-2.html"><div class="text-tiny">Dashboard</div></a>
                                        </li>
                                        <li>
                                            <i class="icon-chevron-right"></i>
                                        </li>
                                        <li>
                                            <a href="#"><div class="text-tiny">Order</div></a>
                                        </li>
                                        <li>
                                            <i class="icon-chevron-right"></i>
                                        </li>
                                        <li>
                                            <div class="text-tiny">Track Order</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- order-track --> */}
                                <div class="wg-box mb-20">
                                    <div class="order-track">
                                        <div class="image">
                                            <img src="/assets/images/images-section/track-oder-1.jpg" alt=""/>
                                        </div>
                                        <div class="content">
                                            <h5 class="mb-20">Ribbed modal T-shirt</h5>
                                            <div class="infor mb-10">
                                                <div class="body-text">Order ID</div>
                                                <div class="body-title-2">#192847</div>
                                            </div>
                                            <div class="infor mb-10">
                                                <div class="body-text">Brand:</div>
                                                <div class="body-title-2">20 Nov 2023</div>
                                            </div>
                                            <div class="infor mb-10">
                                                <div class="body-text">Order Placed:</div>
                                                <div class="body-title-2">20 Nov 2023</div>
                                            </div>
                                            <div class="infor mb-20">
                                                <div class="body-text">Quantity:</div>
                                                <div class="body-title-2">1</div>
                                            </div>
                                            <div class="flex gap10 flex-wrap">
                                                <a class="tf-button style-1 w230" href="product-list.html">View shop</a>
                                                <a class="tf-button w230" href="product-list.html">View product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /order-track --> */}
                                {/* <!-- detail --> */}
                                <div class="wg-box mb-20">
                                    <div>
                                        <h6 class="mb-10">Detail</h6>
                                        <div class="body-text">Your items is on the way. Tracking information will be available within 24 hours.</div>
                                    </div>
                                    <div class="road-map">
                                        <div class="road-map-item active">
                                            <div class="icon"><i class="icon-check"></i></div>
                                            <h6>Receiving orders</h6>
                                            <div class="body-text">05:43 AM</div>
                                        </div>
                                        <div class="road-map-item active">
                                            <div class="icon"><i class="icon-check"></i></div>
                                            <h6>Order processing</h6>
                                            <div class="body-text">01:21 PM</div>
                                        </div>
                                        <div class="road-map-item active">
                                            <div class="icon"><i class="icon-check"></i></div>
                                            <h6>Being delivered</h6>
                                            <div class="body-text">Processing</div>
                                        </div>
                                        <div class="road-map-item">
                                            <div class="icon"><i class="icon-check"></i></div>
                                            <h6>Delivered</h6>
                                            <div class="body-text">Pending</div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- /detail --> */}
                                {/* <!-- table --> */}
                                <div class="wg-box">
                                    <div class="wg-table table-order-track">
                                        <ul class="table-title flex mb-24 gap20">
                                            <li>
                                                <div class="body-title">Date</div>
                                            </li>    
                                            <li>
                                                <div class="body-title">Time</div>
                                            </li>    
                                            <li>
                                                <div class="body-title">Description</div>
                                            </li>   
                                            <li>
                                                <div class="body-title">Location</div>
                                            </li>   
                                        </ul>
                                        <ul class="flex flex-column gap14">
                                            <li class="cart-totals-item">
                                                <div class="body-text">20 Nov 2023</div>
                                                <div class="body-text">2:30 PM</div>
                                                <div class="body-text">The sender is preparing the goods</div>
                                                <div class="body-text">2715 Ash Dr. San Jose, South Dakota 83475</div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="cart-totals-item">
                                                <div class="body-text">20 Nov 2023</div>
                                                <div class="body-text">01:00 PM</div>
                                                <div class="body-text">The order has arrived at the post office</div>
                                                <div class="body-text">3517 W. Gray St. Utica, Pennsylvania 57867</div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="cart-totals-item">
                                                <div class="body-text">21 Nov 2023</div>
                                                <div class="body-text">03:58 AM</div>
                                                <div class="body-text">The carrier is picking up the goods</div>
                                                <div class="body-text">1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="cart-totals-item">
                                                <div class="body-text">22 Nov 2023</div>
                                                <div class="body-text">06:26 PM</div>
                                                <div class="body-text">The order has been shipped</div>
                                                <div class="body-text">4140 Parker Rd. Allentown, New Mexico 31134</div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="cart-totals-item">
                                                <div class="body-text">22 Nov 2023</div>
                                                <div class="body-text">03:45 PM</div>
                                                <div class="body-text">Your order will be delivered to you in 30 minutes</div>
                                                <div class="body-text">8502 Preston Rd. Inglewood, Maine 98380</div>
                                            </li>
                                            <li class="divider"></li>
                                            <li class="cart-totals-item">
                                                <div class="body-text">23 Nov 2023</div>
                                                <div class="body-text">12:21 AM</div>
                                                <div class="body-text">The order has been delivered successfully</div>
                                                <div class="body-text">3891 Ranchview Dr. Richardson, California 62639</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- /table --> */}
                            </div>
                            {/* <!-- /main-content-wrap --> */}
                        </div>
                        {/* <!-- /main-content-wrap --> */}
                        {/* <!-- bottom-page --> */}
                        <div class="bottom-page">
                            <div class="body-text">Copyright © 2024 <a href="https://themesflat.co/html/ecomus/index.html">Ecomus</a>. Design by Themesflat All rights reserved</div>
                        </div>
                        {/* <!-- /bottom-page --> */}
                    </div>
                    {/* <!-- /main-content --> */}

        </>
    );
}

export default OrderTracking;
