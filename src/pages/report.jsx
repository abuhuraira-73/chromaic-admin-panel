import React from "react";

function Report() {
    return (
        <>
            {/* <!-- main-content --> */}
            <div class="main-content">
                {/* <!-- main-content-wrap --> */}
                <div class="main-content-inner">
                    {/* <!-- main-content-wrap --> */}
                    <div class="main-content-wrap">
                        <div class="flex items-center flex-wrap justify-between gap20 mb-30">
                            <h3>Report</h3>
                            <ul class="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                <li>
                                    <a href="index-2.html"><div class="text-tiny">Dashboard</div></a>
                                </li>
                                <li>
                                    <i class="icon-chevron-right"></i>
                                </li>
                                <li>
                                    <div class="text-tiny">Report</div>
                                </li>
                            </ul>
                        </div>
                        <div class="tf-section-3 mb-30">
                            {/* <!-- chart-default --> */}
                            <div class="wg-chart-default">
                                <div class="top">
                                    <div class="flex items-center gap14">
                                        <div class="image type-white">
                                            <svg width="52" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.1084 2.12894C22.2024 0.34261 26.0144 0.342611 29.1084 2.12894L42.4911 9.85544C45.5851 11.6418 47.4911 14.943 47.4911 18.5157V33.9687C47.4911 37.5413 45.5851 40.8426 42.4911 42.6289L29.1084 50.3554C26.0144 52.1418 22.2024 52.1418 19.1084 50.3554L5.72571 42.6289C2.6317 40.8426 0.725712 37.5413 0.725712 33.9687V18.5157C0.725712 14.943 2.6317 11.6418 5.72571 9.85544L19.1084 2.12894Z" fill="#2377FC" />
                                            </svg>
                                            <span class="icon">
                                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.5C9.82674 1.5 9.25525 1.94413 9.06623 2.55717C9.02336 2.69622 9 2.84469 9 3H13.5C13.5 2.84469 13.4766 2.69622 13.4338 2.55717C13.2448 1.94413 12.6733 1.5 12 1.5H10.5ZM7.83701 1.61765C8.33669 0.656928 9.3409 0 10.5 0H12C13.1591 0 14.1633 0.656928 14.663 1.61765C14.8877 1.63319 15.1121 1.65026 15.3359 1.66884C16.8752 1.7966 18 3.10282 18 4.60822V15C18 16.6569 16.6569 18 15 18H13.5V19.125C13.5 20.1605 12.6605 21 11.625 21H1.875C0.839466 21 0 20.1605 0 19.125V7.875C0 6.83947 0.839466 6 1.875 6H4.5V4.60822C4.5 3.10283 5.62475 1.7966 7.16405 1.66884C7.38795 1.65026 7.61227 1.63319 7.83701 1.61765ZM7.50702 3.14604C7.43401 3.15177 7.36104 3.15765 7.28812 3.1637C6.56523 3.2237 6 3.84365 6 4.60822V6H11.625C12.6605 6 13.5 6.83947 13.5 7.875V16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V4.60822C16.5 3.84365 15.9348 3.2237 15.2119 3.1637C15.139 3.15765 15.066 3.15177 14.993 3.14604C14.9196 3.90594 14.2792 4.5 13.5 4.5H9C8.22085 4.5 7.58044 3.90594 7.50702 3.14604ZM12 7.875C12 7.66789 11.8321 7.5 11.625 7.5H1.875C1.66789 7.5 1.5 7.66789 1.5 7.875V19.125C1.5 19.3321 1.66789 19.5 1.875 19.5H11.625C11.8321 19.5 12 19.3321 12 19.125V7.875ZM3 10.5C3 10.0858 3.33579 9.75 3.75 9.75H3.7575C4.17171 9.75 4.5075 10.0858 4.5075 10.5V10.5075C4.5075 10.9217 4.17171 11.2575 3.7575 11.2575H3.75C3.33579 11.2575 3 10.9217 3 10.5075V10.5ZM5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H9.75C10.1642 9.75 10.5 10.0858 10.5 10.5C10.5 10.9142 10.1642 11.25 9.75 11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5ZM3 13.5C3 13.0858 3.33579 12.75 3.75 12.75H3.7575C4.17171 12.75 4.5075 13.0858 4.5075 13.5V13.5075C4.5075 13.9217 4.17171 14.2575 3.7575 14.2575H3.75C3.33579 14.2575 3 13.9217 3 13.5075V13.5ZM5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H9.75C10.1642 12.75 10.5 13.0858 10.5 13.5C10.5 13.9142 10.1642 14.25 9.75 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5ZM3 16.5C3 16.0858 3.33579 15.75 3.75 15.75H3.7575C4.17171 15.75 4.5075 16.0858 4.5075 16.5V16.5075C4.5075 16.9217 4.17171 17.2575 3.7575 17.2575H3.75C3.33579 17.2575 3 16.9217 3 16.5075V16.5ZM5.25 16.5C5.25 16.0858 5.58579 15.75 6 15.75H9.75C10.1642 15.75 10.5 16.0858 10.5 16.5C10.5 16.9142 10.1642 17.25 9.75 17.25H6C5.58579 17.25 5.25 16.9142 5.25 16.5Z" fill="white" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="flex gap10 items-center">
                                                <div class="body-text mt-2 mb-4">Total Orders</div>
                                                <div class="box-icon-trending up color-blue">
                                                    <i class="icon-trending-up"></i>
                                                    <div class="body-title number">1.56%</div>
                                                </div>
                                            </div>
                                            <h4>4,945</h4>
                                        </div>
                                    </div>
                                    <div class="dropdown default">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="view-all">Weekly<i class="icon-chevron-down"></i></span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="javascript:void(0);">Monthly</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Yearly</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="wrap-chart">
                                    <div id="line-chart-11"></div>
                                </div>
                            </div>
                            {/* <!-- /chart-default --> */}
                            {/* <!-- chart-default --> */}
                            <div class="wg-chart-default">
                                <div class="top">
                                    <div class="flex items-center gap14">
                                        <div class="image type-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 48 52" fill="none">
                                                <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#FF5200" />
                                            </svg>
                                            <span class="icon">
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99959 1.5C8.34273 1.5 6.99959 2.84315 6.99959 4.5V5.25H12.9996V4.5C12.9996 2.84315 11.6564 1.5 9.99959 1.5ZM14.4996 5.25V4.5C14.4996 2.01472 12.4849 0 9.99959 0C7.51431 0 5.49959 2.01472 5.49959 4.5V5.25H3.51238C2.55283 5.25 1.74813 5.97444 1.64768 6.92872L0.384527 18.9287C0.267993 20.0358 1.13603 21 2.24922 21H17.75C18.8631 21 19.7312 20.0358 19.6147 18.9287L18.3515 6.92872C18.251 5.97444 17.4463 5.25 16.4868 5.25H14.4996ZM12.9996 6.75H6.99959V8.16146C7.22974 8.36745 7.37459 8.66681 7.37459 9C7.37459 9.62132 6.87091 10.125 6.24959 10.125C5.62827 10.125 5.12459 9.62132 5.12459 9C5.12459 8.66681 5.26943 8.36745 5.49959 8.16146V6.75H3.51238C3.32047 6.75 3.15953 6.89489 3.13944 7.08574L1.87628 19.0857C1.85298 19.3072 2.02659 19.5 2.24922 19.5H17.75C17.9726 19.5 18.1462 19.3072 18.1229 19.0857L16.8597 7.08574C16.8396 6.89489 16.6787 6.75 16.4868 6.75H14.4996V8.16146C14.7297 8.36746 14.8746 8.66681 14.8746 9C14.8746 9.62132 14.3709 10.125 13.7496 10.125C13.1283 10.125 12.6246 9.62132 12.6246 9C12.6246 8.66681 12.7694 8.36745 12.9996 8.16146V6.75Z" fill="white" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="flex gap10 items-center">
                                                <div class="body-text mt-2 mb-4">Total Earnings</div>
                                                <div class="box-icon-trending down">
                                                    <i class="icon-trending-down"></i>
                                                    <div class="body-title number">1.56%</div>
                                                </div>
                                            </div>
                                            <h4>$337,802</h4>
                                        </div>
                                    </div>
                                    <div class="dropdown default">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="view-all">Monthly<i class="icon-chevron-down"></i></span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="javascript:void(0);">Weekly</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Yearly</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="wrap-chart">
                                    <div id="line-chart-12"></div>
                                </div>
                            </div>
                            {/* <!-- /chart-default --> */}
                            {/* <!-- chart-default --> */}
                            <div class="wg-chart-default">
                                <div class="top">
                                    <div class="flex items-center gap14">
                                        <div class="image type-white">
                                            <svg width="52" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.1084 2.12894C22.2024 0.34261 26.0144 0.342611 29.1084 2.12894L42.4911 9.85544C45.5851 11.6418 47.4911 14.943 47.4911 18.5157V33.9687C47.4911 37.5413 45.5851 40.8426 42.4911 42.6289L29.1084 50.3554C26.0144 52.1418 22.2024 52.1418 19.1084 50.3554L5.72571 42.6289C2.6317 40.8426 0.725712 37.5413 0.725712 33.9687V18.5157C0.725712 14.943 2.6317 11.6418 5.72571 9.85544L19.1084 2.12894Z" fill="#8F77F3" />
                                            </svg>
                                            <span class="icon">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.61976 16.1198C5.51618 15.2233 6.73199 14.7197 7.99973 14.7197H15.9997C17.2675 14.7197 18.4833 15.2233 19.3797 16.1198C20.2761 17.0162 20.7797 18.232 20.7797 19.4997V21.4997C20.7797 21.9305 20.4305 22.2797 19.9997 22.2797C19.5689 22.2797 19.2197 21.9305 19.2197 21.4997V19.4997C19.2197 18.6457 18.8805 17.8267 18.2766 17.2228C17.6727 16.619 16.8537 16.2797 15.9997 16.2797H7.99973C7.14573 16.2797 6.32671 16.619 5.72284 17.2228C5.11898 17.8267 4.77973 18.6457 4.77973 19.4997V21.4997C4.77973 21.9305 4.43051 22.2797 3.99973 22.2797C3.56894 22.2797 3.21973 21.9305 3.21973 21.4997V19.4997C3.21973 18.232 3.72333 17.0162 4.61976 16.1198Z" fill="white" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 4.27973C10.2214 4.27973 8.77973 5.72137 8.77973 7.49973C8.77973 9.27808 10.2214 10.7197 11.9997 10.7197C13.7781 10.7197 15.2197 9.27808 15.2197 7.49973C15.2197 5.72137 13.7781 4.27973 11.9997 4.27973ZM7.21973 7.49973C7.21973 4.85981 9.35981 2.71973 11.9997 2.71973C14.6396 2.71973 16.7797 4.85981 16.7797 7.49973C16.7797 10.1396 14.6396 12.2797 11.9997 12.2797C9.35981 12.2797 7.21973 10.1396 7.21973 7.49973Z" fill="white" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="flex gap10 items-center">
                                                <div class="body-text mt-2 mb-4">Total Customer</div>
                                                <div class="box-icon-trending gap10 up color-violet">
                                                    <i class="icon-trending-up"></i>
                                                    <div class="body-title number">3.59%</div>
                                                </div>
                                            </div>
                                            <h4>34,945</h4>
                                        </div>
                                    </div>
                                    <div class="dropdown default">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="view-all">Yearly<i class="icon-chevron-down"></i></span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="javascript:void(0);">Monthly</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Weekly</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="wrap-chart">
                                    <div id="line-chart-13"></div>
                                </div>
                            </div>
                            {/* <!-- /chart-default --> */}
                        </div>
                        <div class="tf-section-2 mb-30">
                            {/* <!-- seller-statistic --> */}
                            <div class="wg-box">
                                <div class="flex items-center justify-between">
                                    <h5>Revenue</h5>
                                    <div class="dropdown default style-box">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <a href="product-list.html" class="view-all">Yearly<i class="icon-chevron-down"></i></a>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="javascript:void(0);">Weekly</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Monthly</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-wrap gap40">
                                    <div>
                                        <div class="mb-1">
                                            <div class="block-legend">
                                                <div class="dot t7"></div>
                                                <div class="text-tiny">Revenue</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap12">
                                            <h4>$2337,802</h4>
                                            <div class="box-icon-trending up">
                                                <i class="icon-trending-up"></i>
                                                <div class="body-title number text-grey">0.56%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mb-1">
                                            <div class="block-legend">
                                                <div class="dot t5"></div>
                                                <div class="text-tiny">Store</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap12">
                                            <h4>$28,305</h4>
                                            <div class="box-icon-trending up">
                                                <i class="icon-trending-up"></i>
                                                <div class="body-title number text-grey">0.56%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="line-chart-22"></div>
                            </div>
                            {/* <!-- /seller-statistic --> */}
                            <div class="flex gap20 flex-wrap-mobile">
                                {/* <!-- Top Page/Post --> */}
                                <div class="wg-box w-half">
                                    <div class="flex items-center justify-between">
                                        <h5>Top Page/Post</h5>
                                        <a href="#" class="tf-button-arrow flex items-center gap5">
                                            <div class="text-tiny text">View all</div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83401 4.23423C9.98403 4.08425 10.1875 4 10.3996 4C10.6117 4 10.8152 4.08425 10.9652 4.23423L14.1652 7.43423C14.3152 7.58425 14.3994 7.7877 14.3994 7.99983C14.3994 8.21196 14.3152 8.41541 14.1652 8.56543L10.9652 11.7654C10.8143 11.9112 10.6122 11.9918 10.4025 11.99C10.1927 11.9881 9.99208 11.904 9.84375 11.7557C9.69543 11.6074 9.61129 11.4067 9.60947 11.1969C9.60765 10.9872 9.68828 10.7851 9.83401 10.6342L11.6684 8.79983H2.39961C2.18744 8.79983 1.98395 8.71554 1.83392 8.56551C1.68389 8.41549 1.59961 8.212 1.59961 7.99983C1.59961 7.78766 1.68389 7.58417 1.83392 7.43414C1.98395 7.28411 2.18744 7.19983 2.39961 7.19983H11.6684L9.83401 5.36543C9.68403 5.21541 9.59978 5.01196 9.59978 4.79983C9.59978 4.5877 9.68403 4.38425 9.83401 4.23423Z" fill="#FF7433" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="wg-table table-page-post">
                                        <ul class="table-title flex justify-between gap20">
                                            <li>
                                                <div class="body-title text-main-dark">Page/Path</div>
                                            </li>
                                            <li>
                                                <div class="body-title text-main-dark text-center">Page View</div>
                                            </li>
                                            <li>
                                                <div class="body-title text-main-dark text-end">Exit Rate</div>
                                            </li>
                                        </ul>
                                        <ul class="flex flex-column has-divider-line">
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/index.html" class="body-text">/fashion-01</a>
                                                <div class="body-text text-center">9.5k</div>
                                                <div class="body-text text-end">2.4%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-05.html" class="body-text">/fashion-05</a>
                                                <div class="body-text text-center">8.3k</div>
                                                <div class="body-text text-end">3.3%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-06.html" class="body-text">/fashion-06</a>
                                                <div class="body-text text-center">6k</div>
                                                <div class="body-text text-end">20%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-multi-brand.html" class="body-text">/multi-brand</a>
                                                <div class="body-text text-center">4.5k</div>
                                                <div class="body-text text-end">26%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-headphone.html" class="body-text">/headphone</a>
                                                <div class="body-text text-center">4.1k</div>
                                                <div class="body-text text-end">1.5%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-skateboard.html" class="body-text">/skateboard</a>
                                                <div class="body-text text-center">3.9k</div>
                                                <div class="body-text text-end">9.6%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-furniture.html" class="body-text">/furniture</a>
                                                <div class="body-text text-center">3.2k</div>
                                                <div class="body-text text-end">5.1%</div>
                                            </li>
                                            <li class="wg-product">
                                                <a href="https://themesflat.co/html/ecomus/home-03.html" class="body-text">/fashion-03</a>
                                                <div class="body-text text-center">1.5k</div>
                                                <div class="body-text text-end">1.5%</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- /Top Page/Post --> */}
                                {/* <!-- Top Customers --> */}
                                <div class="wg-box w-half">
                                    <div class="flex items-center justify-between">
                                        <h5>Top Customers</h5>
                                        <a href="#" class="tf-button-arrow flex items-center gap5">
                                            <div class="text-tiny text">View all</div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83401 4.23423C9.98403 4.08425 10.1875 4 10.3996 4C10.6117 4 10.8152 4.08425 10.9652 4.23423L14.1652 7.43423C14.3152 7.58425 14.3994 7.7877 14.3994 7.99983C14.3994 8.21196 14.3152 8.41541 14.1652 8.56543L10.9652 11.7654C10.8143 11.9112 10.6122 11.9918 10.4025 11.99C10.1927 11.9881 9.99208 11.904 9.84375 11.7557C9.69543 11.6074 9.61129 11.4067 9.60947 11.1969C9.60765 10.9872 9.68828 10.7851 9.83401 10.6342L11.6684 8.79983H2.39961C2.18744 8.79983 1.98395 8.71554 1.83392 8.56551C1.68389 8.41549 1.59961 8.212 1.59961 7.99983C1.59961 7.78766 1.68389 7.58417 1.83392 7.43414C1.98395 7.28411 2.18744 7.19983 2.39961 7.19983H11.6684L9.83401 5.36543C9.68403 5.21541 9.59978 5.01196 9.59978 4.79983C9.59978 4.5877 9.68403 4.38425 9.83401 4.23423Z" fill="#FF7433" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <ul class="table-title flex justify-between gap20 mb-14">
                                            <li>
                                                <div class="body-title text-main-dark">Name</div>
                                            </li>
                                            <li>
                                                <div class="body-title text-main-dark">Total money</div>
                                            </li>
                                        </ul>
                                        <div class="divider mb-10"></div>
                                        <ul class="flex flex-column h-full has-divider-line">
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-11.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Devon Lane</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$988.99</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-12.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Jenny Wilson</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$856.48</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-12.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Eleanor Pena</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$754.81</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-13.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Albert Flores</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$665.22</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-14.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Ronald Richards</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$617.84</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-14.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Ronald Richards</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$502.25</div>
                                            </li>
                                            <li class="wg-product">
                                                <div class="name flex-grow">
                                                    <div class="image w36 rounded-circle">
                                                        <img src="/assets/images/products/product-14.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <div class="title">
                                                            <a href="#" class="body-text">Ronald Richards</a>
                                                        </div>
                                                        <div class="text-tiny">73 Purchases</div>
                                                    </div>
                                                </div>
                                                <div class="body-text">$437.84</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- /Top Customers --> */}
                            </div>
                        </div>
                        {/* <!-- history --> */}
                        <div class="wg-box">
                            <h5>Transfer History</h5>
                            <div class="wg-table table-all-attribute lg">
                                <ul class="table-title flex gap20 mb-14">
                                    <li>
                                        <div class="body-title">Transfer Id</div>
                                    </li>
                                    <li>
                                        <div class="body-title">Name</div>
                                    </li>
                                    <li>
                                        <div class="body-title">Date</div>
                                    </li>
                                    <li>
                                        <div class="body-title">Total</div>
                                    </li>
                                    <li>
                                        <div class="body-title">Action</div>
                                    </li>
                                </ul>
                                <ul class="flex flex-column">
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">11081197</div>
                                        <div class="body-text">Kathryn Murphy</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">38766940</div>
                                        <div class="body-text">Floyd Miles</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">43397744</div>
                                        <div class="body-text">Brooklyn Simmons</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">66277431</div>
                                        <div class="body-text">Wade Warren</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">58276066</div>
                                        <div class="body-text">Devon Lane</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="attribute-item item-row flex items-center justify-between gap20">
                                        <div class="body-text">93242854</div>
                                        <div class="body-text">Jenny Wilson</div>
                                        <div class="body-text">Mar 20, 2023</div>
                                        <div class="body-text">$2,700</div>
                                        <div class="list-icon-function">
                                            <div class="item eye">
                                                <i class="icon-eye"></i>
                                            </div>
                                            <div class="item edit">
                                                <i class="icon-edit-3"></i>
                                            </div>
                                            <div class="item trash">
                                                <i class="icon-trash-2"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="divider"></div>
                            <div class="text-tiny">Showing 10 to 16 in 30 records</div>
                        </div>
                        {/* <!-- /history --> */}
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

export default Report;
