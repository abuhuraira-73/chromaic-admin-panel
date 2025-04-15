import React from "react";

const AdminHome = () => {
  return (
    <div>
      {/* main-content */}
      <div className="main-content">
        {/* main-content-inner */}
        <div className="main-content-inner">
          {/* main-content-wrap */}
          <div className="main-content-wrap">
            <div className="tf-section-4 mb-30">
              {/* chart-default */}
              <div className="wg-chart-default">
                <div className="top">
                  <div className="flex items-center gap14">
                    <div className="image type-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 48 52"
                        fill="none"
                      >
                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#22C55E" />
                      </svg>
                      <span className="icon">
                        <svg
                          width="19.5"
                          height="19.5"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 2.25C5.44365 2.25 1.75 5.94365 1.75 10.5C1.75 15.0563 5.44365 18.75 10 18.75C14.5563 18.75 18.25 15.0563 18.25 10.5C18.25 5.94365 14.5563 2.25 10 2.25ZM0.25 10.5C0.25 5.11522 4.61522 0.75 10 0.75C15.3848 0.75 19.75 5.11522 19.75 10.5C19.75 15.8848 15.3848 20.25 10 20.25C4.61522 20.25 0.25 15.8848 0.25 10.5ZM10 3.75C10.4142 3.75 10.75 4.08579 10.75 4.5V5.3157C11.3768 5.42679 11.9745 5.67882 12.4691 6.07178L12.884 6.40137C13.2084 6.65902 13.2624 7.13081 13.0048 7.45514C12.7471 7.77947 12.2753 7.83353 11.951 7.57588L11.5361 7.24629C11.309 7.06586 11.0392 6.93462 10.75 6.85259V9.80961C11.4021 9.91435 12.0381 10.1591 12.5714 10.559C13.3164 11.1178 13.75 11.9035 13.75 12.75C13.75 13.5965 13.3164 14.3822 12.5714 14.941C12.0381 15.3409 11.4021 15.5856 10.75 15.6904V16.5C10.75 16.9142 10.4142 17.25 10 17.25C9.58579 17.25 9.25 16.9142 9.25 16.5V15.6904C8.59794 15.5856 7.96206 15.3409 7.42886 14.941L6.54999 14.2818C6.21862 14.0333 6.15147 13.5632 6.40001 13.2318C6.64854 12.9004 7.11865 12.8333 7.45001 13.0818L8.32888 13.741C8.5864 13.9341 8.90284 14.0771 9.25 14.1616V11.1844C8.63267 11.075 8.03304 10.8274 7.53058 10.4283C6.81822 9.86237 6.41752 9.07872 6.41752 8.25003C6.41752 7.42133 6.81822 6.63768 7.53058 6.07178C8.02533 5.67876 8.6231 5.42672 9.25 5.31565V4.5C9.25 4.08579 9.58579 3.75 10 3.75ZM9.25 6.85252C8.96071 6.93454 8.69081 7.0658 8.46361 7.24629C8.06987 7.55907 7.91752 7.92707 7.91752 8.25003C7.91752 8.57298 8.06987 8.94098 8.46361 9.25376C8.68603 9.43046 8.95518 9.56376 9.25 9.64747V6.85252ZM10.75 11.3384V14.1616C11.0972 14.0772 11.4138 13.9342 11.6713 13.741C12.0978 13.4211 12.25 13.0551 12.25 12.75C12.25 12.4449 12.0978 12.0789 11.6713 11.759C11.4138 11.5658 11.0972 11.4228 10.75 11.3384Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="flex gap10 items-center">
                        <div className="body-text mt-2 mb-4">Total Earnings</div>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number">1.56%</div>
                        </div>
                      </div>
                      <h4>$334,945</h4>
                    </div>
                  </div>
                  <div className="dropdown default">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="view-all">
                        Weekly<i className="icon-chevron-down"></i>
                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);">Monthly</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Yearly</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div className="wrap-line-chart" id="line-chart-1"></div>
                </div>
              </div>
              {/* /chart-default */}
              {/* chart-default */}
              <div className="wg-chart-default">
                <div className="top">
                  <div className="flex items-center gap14">
                    <div className="image type-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 48 52"
                        fill="none"
                      >
                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#FF5200" />
                      </svg>
                      <span className="icon">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99959 1.5C8.34273 1.5 6.99959 2.84315 6.99959 4.5V5.25H12.9996V4.5C12.9996 2.84315 11.6564 1.5 9.99959 1.5ZM14.4996 5.25V4.5C14.4996 2.01472 12.4849 0 9.99959 0C7.51431 0 5.49959 2.01472 5.49959 4.5V5.25H3.51238C2.55283 5.25 1.74813 5.97444 1.64768 6.92872L0.384527 18.9287C0.267993 20.0358 1.13603 21 2.24922 21H17.75C18.8631 21 19.7312 20.0358 19.6147 18.9287L18.3515 6.92872C18.251 5.97444 17.4463 5.25 16.4868 5.25H14.4996ZM12.9996 6.75H6.99959V8.16146C7.22974 8.36745 7.37459 8.66681 7.37459 9C7.37459 9.62132 6.87091 10.125 6.24959 10.125C5.62827 10.125 5.12459 9.62132 5.12459 9C5.12459 8.66681 5.26943 8.36745 5.49959 8.16146V6.75H3.51238C3.32047 6.75 3.15953 6.89489 3.13944 7.08574L1.87628 19.0857C1.85298 19.3072 2.02659 19.5 2.24922 19.5H17.75C17.9726 19.5 18.1462 19.3072 18.1229 19.0857L16.8597 7.08574C16.8396 6.89489 16.6787 6.75 16.4868 6.75H14.4996V8.16146C14.7297 8.36746 14.8746 8.66681 14.8746 9C14.8746 9.62132 14.3709 10.125 13.7496 10.125C13.1283 10.125 12.6246 9.62132 12.6246 9C12.6246 8.66681 12.7694 8.36745 12.9996 8.16146V6.75Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="flex gap15 items-center">
                        <div className="body-text mt-2 mb-4">Total Orders</div>
                        <div className="box-icon-trending down">
                          <i className="icon-trending-down"></i>
                          <div className="body-title number">1.56%</div>
                        </div>
                      </div>
                      <h4>2,802</h4>
                    </div>
                  </div>
                  <div className="dropdown default">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="view-all">
                        Monthly<i className="icon-chevron-down"></i>
                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);">Weekly</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Yearly</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div className="wrap-line-chart" id="line-chart-2"></div>
                </div>
              </div>
              {/* /chart-default */}
              {/* chart-default */}
              <div className="wg-chart-default">
                <div className="top">
                  <div className="flex items-center gap14">
                    <div className="image type-white">
                      <svg
                        width="52"
                        height="52"
                        viewBox="0 0 48 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.1084 2.12894C22.2024 0.34261 26.0144 0.342611 29.1084 2.12894L42.4911 9.85544C45.5851 11.6418 47.4911 14.943 47.4911 18.5157V33.9687C47.4911 37.5413 45.5851 40.8426 42.4911 42.6289L29.1084 50.3554C26.0144 52.1418 22.2024 52.1418 19.1084 50.3554L5.72571 42.6289C2.6317 40.8426 0.725712 37.5413 0.725712 33.9687V18.5157C0.725712 14.943 2.6317 11.6418 5.72571 9.85544L19.1084 2.12894Z" fill="#8F77F3" />
                      </svg>
                      <span className="icon">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.61976 16.1198C5.51618 15.2233 6.73199 14.7197 7.99973 14.7197H15.9997C17.2675 14.7197 18.4833 15.2233 19.3797 16.1198C20.2761 17.0162 20.7797 18.232 20.7797 19.4997V21.4997C20.7797 21.9305 20.4305 22.2797 19.9997 22.2797C19.5689 22.2797 19.2197 21.9305 19.2197 21.4997V19.4997C19.2197 18.6457 18.8805 17.8267 18.2766 17.2228C17.6727 16.619 16.8537 16.2797 15.9997 16.2797H7.99973C7.14573 16.2797 6.32671 16.619 5.72284 17.2228C5.11898 17.8267 4.77973 18.6457 4.77973 19.4997V21.4997C4.77973 21.9305 4.43051 22.2797 3.99973 22.2797C3.56894 22.2797 3.21973 21.9305 3.21973 21.4997V19.4997C3.21973 18.232 3.72333 17.0162 4.61976 16.1198Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9997 4.27973C10.2214 4.27973 8.77973 5.72137 8.77973 7.49973C8.77973 9.27808 10.2214 10.7197 11.9997 10.7197C13.7781 10.7197 15.2197 9.27808 15.2197 7.49973C15.2197 5.72137 13.7781 4.27973 11.9997 4.27973ZM7.21973 7.49973C7.21973 4.85981 9.35981 2.71973 11.9997 2.71973C14.6396 2.71973 16.7797 4.85981 16.7797 7.49973C16.7797 10.1396 14.6396 12.2797 11.9997 12.2797C9.35981 12.2797 7.21973 10.1396 7.21973 7.49973Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="flex gap9 items-center">
                        <div className="body-text mt-2 mb-4">Customers</div>
                        <div className="box-icon-trending up color-violet">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number">1.56%</div>
                        </div>
                      </div>
                      <h4>4,945</h4>
                    </div>
                  </div>
                  <div className="dropdown default">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="view-all">
                        Yearly<i className="icon-chevron-down"></i>
                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);">Monthly</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Weekly</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div className="wrap-line-chart" id="line-chart-3"></div>
                </div>
              </div>
              {/* /chart-default */}
              {/* chart-default */}
              <div className="wg-chart-default">
                <div className="top">
                  <div className="flex items-center gap14">
                    <div className="image type-white">
                      <svg
                        width="52"
                        height="52"
                        viewBox="0 0 48 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.1084 2.12894C22.2024 0.34261 26.0144 0.342611 29.1084 2.12894L42.4911 9.85544C45.5851 11.6418 47.4911 14.943 47.4911 18.5157V33.9687C47.4911 37.5413 45.5851 40.8426 42.4911 42.6289L29.1084 50.3554C26.0144 52.1418 22.2024 52.1418 19.1084 50.3554L5.72571 42.6289C2.6317 40.8426 0.725712 37.5413 0.725712 33.9687V18.5157C0.725712 14.943 2.6317 11.6418 5.72571 9.85544L19.1084 2.12894Z" fill="#2377FC" />
                      </svg>
                      <span className="icon">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5 1.5C9.82674 1.5 9.25525 1.94413 9.06623 2.55717C9.02336 2.69622 9 2.84469 9 3H13.5C13.5 2.84469 13.4766 2.69622 13.4338 2.55717C13.2448 1.94413 12.6733 1.5 12 1.5H10.5ZM7.83701 1.61765C8.33669 0.656928 9.3409 0 10.5 0H12C13.1591 0 14.1633 0.656928 14.663 1.61765C14.8877 1.63319 15.1121 1.65026 15.3359 1.66884C16.8752 1.7966 18 3.10282 18 4.60822V15C18 16.6569 16.6569 18 15 18H13.5V19.125C13.5 20.1605 12.6605 21 11.625 21H1.875C0.839466 21 0 20.1605 0 19.125V7.875C0 6.83947 0.839466 6 1.875 6H4.5V4.60822C4.5 3.10283 5.62475 1.7966 7.16405 1.66884C7.38795 1.65026 7.61227 1.63319 7.83701 1.61765ZM7.50702 3.14604C7.43401 3.15177 7.36104 3.15765 7.28812 3.1637C6.56523 3.2237 6 3.84365 6 4.60822V6H11.625C12.6605 6 13.5 6.83947 13.5 7.875V16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V4.60822C16.5 3.84365 15.9348 3.2237 15.2119 3.1637C15.139 3.15765 15.066 3.15177 14.993 3.14604C14.9196 3.90594 14.2792 4.5 13.5 4.5H9C8.22085 4.5 7.58044 3.90594 7.50702 3.14604ZM12 7.875C12 7.66789 11.8321 7.5 11.625 7.5H1.875C1.66789 7.5 1.5 7.66789 1.5 7.875V19.125C1.5 19.3321 1.66789 19.5 1.875 19.5H11.625C11.8321 19.5 12 19.3321 12 19.125V7.875ZM3 10.5C3 10.0858 3.33579 9.75 3.75 9.75H3.7575C4.17171 9.75 4.5075 10.0858 4.5075 10.5V10.5075C4.5075 10.9217 4.17171 11.2575 3.7575 11.2575H3.75C3.33579 11.2575 3 10.9217 3 10.5075V10.5ZM5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H9.75C10.1642 9.75 10.5 10.0858 10.5 10.5C10.5 10.9142 10.1642 11.25 9.75 11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5ZM3 13.5C3 13.0858 3.33579 12.75 3.75 12.75H3.7575C4.17171 12.75 4.5075 13.0858 4.5075 13.5V13.5075C4.5075 13.9217 4.17171 14.2575 3.7575 14.2575H3.75C3.33579 14.2575 3 13.9217 3 13.5075V13.5ZM5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H9.75C10.1642 12.75 10.5 13.0858 10.5 13.5C10.5 13.9142 10.1642 14.25 9.75 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5ZM3 16.5C3 16.0858 3.33579 15.75 3.75 15.75H3.7575C4.17171 15.75 4.5075 16.0858 4.5075 16.5V16.5075C4.5075 16.9217 4.17171 17.2575 3.7575 17.2575H3.75C3.33579 17.2575 3 16.9217 3 16.5075V16.5ZM5.25 16.5C5.25 16.0858 5.58579 15.75 6 15.75H9.75C10.1642 15.75 10.5 16.0858 10.5 16.5C10.5 16.9142 10.1642 17.25 9.75 17.25H6C5.58579 17.25 5.25 16.9142 5.25 16.5Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <div className="flex gap10 items-center">
                        <div className="body-text mt-2 mb-4">My Balance</div>
                        <div className="box-icon-trending up color-blue">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number">1.56%</div>
                        </div>
                      </div>
                      <h4>4,945</h4>
                    </div>
                  </div>
                  <div className="dropdown default">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="view-all">
                        Yearly<i className="icon-chevron-down"></i>
                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);">Monthly</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Weekly</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div className="wrap-line-chart" id="line-chart-4"></div>
                </div>
              </div>
              {/* /chart-default */}
            </div>
            <div className="tf-section-2 mb-30">
              {/* Revenue */}
              <div className="wg-box">
                <div className="flex items-center justify-between">
                  <h5>Revenue</h5>
                  <div className="dropdown default style-box">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <a href="product-list.html" className="view-all">
                        Yearly<i className="icon-chevron-down"></i>
                      </a>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="javascript:void(0);">Weekly</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Monthly</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap40">
                  <div>
                    <div className="mb-1">
                      <div className="block-legend">
                        <div className="dot t3"></div>
                        <div className="text-tiny">Revenue</div>
                      </div>
                    </div>
                    <div className="flex items-center gap12">
                      <h4>$37,802</h4>
                      <div className="box-icon-trending up">
                        <i className="icon-trending-up"></i>
                        <div className="body-title number text-grey">0.56%</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      <div className="block-legend">
                        <div className="dot t5"></div>
                        <div className="text-tiny">Order</div>
                      </div>
                    </div>
                    <div className="flex items-center gap12">
                      <h4>$28,305</h4>
                      <div className="box-icon-trending up">
                        <i className="icon-trending-up"></i>
                        <div className="body-title number text-grey">0.56%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="line-chart-7"></div>
              </div>
              {/* /Revenue */}
              <div className="flex gap20 flex-wrap-mobile">
                {/* top-product */}
                <div className="wg-box w-half">
                  <div className="flex items-center justify-between">
                    <h5>Promotional Sales</h5>
                    <div className="dropdown default style-box">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <a href="product-list.html" className="view-all">
                          Weekly<i className="icon-chevron-down"></i>
                        </a>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="javascript:void(0);">Yearly</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Monthly</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap40">
                    <div>
                      <div className="mb-1">
                        <div className="block-legend">
                          <div className="text-tiny">Visitors</div>
                        </div>
                      </div>
                      <div className="flex items-center gap10">
                        <h4>7,802</h4>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number text-grey">0.56%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="morris-donut-1" className="text-center"></div>
                  <div className="flex gap20">
                    <div className="block-legend style-1 w-full">
                      <div className="dot t4"></div>
                      <div className="text-tiny">Social Media</div>
                    </div>
                    <div className="block-legend style-1 w-full">
                      <div className="dot t2"></div>
                      <div className="text-tiny">Website</div>
                    </div>
                    <div className="block-legend style-1 w-full">
                      <div className="dot t3"></div>
                      <div className="text-tiny">Store</div>
                    </div>
                  </div>
                </div>
                {/* /top-product */}
                {/* top-countries */}
                <div className="wg-box w-half">
                  <div className="flex items-center justify-between">
                    <h5>Top sale</h5>
                    <div className="dropdown default style-box">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <a href="product-list.html" className="view-all">
                          Weekly<i className="icon-chevron-down"></i>
                        </a>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="javascript:void(0);">Yearly</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Monthly</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="flex flex-column h-full has-divider-line">
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-1.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Neptune Longsleeve
                            </a>
                          </div>
                          <div className="price text-tiny">$138</div>
                        </div>
                      </div>
                      <div className="sale body-text">952 Sales</div>
                    </li>
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-2.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Oversized Motif T-shirt
                            </a>
                          </div>
                          <div className="price text-tiny">$108</div>
                        </div>
                      </div>
                      <div className="sale body-text">952 Sales</div>
                    </li>
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-3.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Oversized Motif T-shirt
                            </a>
                          </div>
                          <div className="price text-tiny">$125</div>
                        </div>
                      </div>
                      <div className="sale body-text">902 Sales</div>
                    </li>
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-4.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Oversized Motif T-shirt
                            </a>
                          </div>
                          <div className="price text-tiny">$98</div>
                        </div>
                      </div>
                      <div className="sale body-text">882 Sales</div>
                    </li>
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-5.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Oversized Motif T-shirt
                            </a>
                          </div>
                          <div className="price text-tiny">$158</div>
                        </div>
                      </div>
                      <div className="sale body-text">869 Sales</div>
                    </li>
                    <li className="wg-product">
                      <div className="name flex-grow">
                        <div className="image">
                          <img src="assets/images/products/product-6.jpg" alt="" />
                        </div>
                        <div>
                          <div className="title">
                            <a href="#" className="body-text">
                              Oversized Motif T-shirt
                            </a>
                          </div>
                          <div className="price text-tiny">$78</div>
                        </div>
                      </div>
                      <div className="sale body-text">833 Sales</div>
                    </li>
                  </ul>
                </div>
                {/* /top-countries */}
              </div>
            </div>
            {/* /main-content-wrap */}
          </div>
          {/* /main-content-wrap */}
          {/* bottom-page */}
          <div className="bottom-page">
            <div className="body-text">
              Copyright © 2024{" "}
              <a href="https://themesflat.co/html/ecomus/index.html">
                Ecomus
              </a>
              . Design by Themesflat All rights reserved
            </div>
          </div>
          {/* /bottom-page */}
        </div>
        {/* /main-content */}
      </div>
    </div>
  );
};

export default AdminHome;
