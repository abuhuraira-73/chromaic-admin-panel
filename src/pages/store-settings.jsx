import React from "react";

function StoreSettings() {
    return (
        <>
            {/* <!-- main-content --> */}
            <div class="main-content">
                {/* <!-- main-content-wrap --> */}
                <div class="main-content-inner">
                    {/* <!-- main-content-wrap --> */}
                    <div class="main-content-wrap">
                        <div class="flex items-center flex-wrap justify-between gap20 mb-30">
                            <h3>Store Setting</h3>
                            <ul class="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                <li>
                                    <a href="index-2.html"><div class="text-tiny">Dashboard</div></a>
                                </li>
                                <li>
                                    <i class="icon-chevron-right"></i>
                                </li>
                                <li>
                                    <a href="#"><div class="text-tiny">Online Store</div></a>
                                </li>
                                <li>
                                    <i class="icon-chevron-right"></i>
                                </li>
                                <li>
                                    <div class="text-tiny">Store Setting</div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- setting --> */}
                        <form class="form-setting form-style-2">
                            <div class="wg-box">
                                <div class="left">
                                    <h5 class="mb-4">Store Information</h5>
                                    <div class="body-text">Setting Store & Invoice information</div>
                                </div>
                                <div class="right flex-grow">
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Shop Name</div>
                                            <input class="flex-grow" type="text" placeholder="Shop Name" name="name" tabindex="0" value="Ecomus" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Company Name</div>
                                            <input class="flex-grow" type="text" placeholder="Company Name" name="name" tabindex="0" value="Ecomus" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Tax ID</div>
                                            <input class="flex-grow" type="number" placeholder="Tax ID" name="name" tabindex="0" value="854789542" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Contact</div>
                                            <input class="flex-grow" type="text" placeholder="Contact" name="name" tabindex="0" value="+1 548 562 1023" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Email</div>
                                            <input class="flex-grow" type="email" placeholder="Email" name="name" tabindex="0" value="support@ecomus.com" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Address</div>
                                            <input class="flex-grow" type="text" placeholder="Address" name="name" tabindex="0" value="52 Davis Street, Buffalo, New York" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">City</div>
                                            <input class="flex-grow" type="text" placeholder="City" name="name" tabindex="0" value="New York" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Zipcode</div>
                                            <input class="flex-grow" type="number" placeholder="Zipcode" name="name" tabindex="0" value="52103" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div class="wg-box">
                                <div class="left">
                                    <h5 class="mb-4">Payment</h5>
                                    <div class="body-text">Setting payment information</div>
                                </div>
                                <div class="right flex-grow">
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Enable Cash on Delivery?</div>
                                        <div class="radio-buttons">
                                            <div class="item">
                                                <input class="" type="radio" name="enable-cash" id="enable-cash1" />
                                                <label class="" for="enable-cash1"><span class="body-title-2">Yes</span></label>
                                            </div>
                                            <div class="item">
                                                <input class="" type="radio" name="enable-cash" id="enable-cash2" checked="" />
                                                <label class="" for="enable-cash2"><span class="body-title-2">No</span></label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Enable Stripe Payment?</div>
                                        <div class="radio-buttons">
                                            <div class="item">
                                                <input class="" type="radio" name="enable-stripe" id="enable-stripe1" />
                                                <label class="" for="enable-stripe1"><span class="body-title-2">Yes</span></label>
                                            </div>
                                            <div class="item">
                                                <input class="" type="radio" name="enable-stripe" id="enable-stripe2" checked="" />
                                                <label class="" for="enable-stripe2"><span class="body-title-2">No</span></label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Stripe Key</div>
                                            <input class="flex-grow" type="text" placeholder="Enter Stripe Key" name="name" tabindex="0" value="" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Stripe Secret</div>
                                            <input class="flex-grow" type="text" placeholder="Enter Stripe Secret" name="name" tabindex="0" value="" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Enable Paypal Payment?</div>
                                        <div class="radio-buttons">
                                            <div class="item">
                                                <input class="" type="radio" name="enable-paypal" id="enable-paypal1" />
                                                <label class="" for="enable-paypal1"><span class="body-title-2">Yes</span></label>
                                            </div>
                                            <div class="item">
                                                <input class="" type="radio" name="enable-paypal" id="enable-paypal2" checked="" />
                                                <label class="" for="enable-paypal2"><span class="body-title-2">No</span></label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="cols gap24">
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Paypal ID</div>
                                            <input class="flex-grow" type="text" placeholder="Enter Paypal ID" name="name" tabindex="0" value="" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="mb-24">
                                            <div class="body-title mb-10">Paypal Secret Key</div>
                                            <input class="flex-grow" type="text" placeholder="Enter Paypal Secret Key" name="name" tabindex="0" value="" aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div class="wg-box">
                                <div class="left">
                                    <h5 class="mb-4">Google Analytics</h5>
                                    <div class="body-text">Config Credentials for Google Analytics</div>
                                </div>
                                <div class="right flex-grow">
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Enable Google Analytics?</div>
                                        <div class="radio-buttons">
                                            <div class="item">
                                                <input class="" type="radio" name="enable-google" id="enable-google1" checked="" />
                                                <label class="" for="enable-google1"><span class="body-title-2">Yes</span></label>
                                            </div>
                                            <div class="item">
                                                <input class="" type="radio" name="enable-google" id="enable-google2" />
                                                <label class="" for="enable-google2"><span class="body-title-2">No</span></label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Google API Key</div>
                                        <input class="flex-grow" type="text" placeholder="Enter your Google API Key" name="name" tabindex="0" value="" aria-required="true" required="" />
                                    </fieldset>
                                    <div class="block-warning type-main w-full mb-24">
                                        <i class="icon-alert-octagon"></i>
                                        <a href="https://support.google.com/analytics/answer/9539598#find-G-ID" class="text">https://support.google.com/analytics/answer/9539598#find-G-ID</a>
                                    </div>
                                </div>
                            </div>
                            <div class="wg-box">
                                <div class="left">
                                    <h5 class="mb-4">Newsletter</h5>
                                    <div class="body-text">Settings for newsletter (auto send newsletter email to SendGrid, Mailchimp... when someone register newsletter on website).</div>
                                </div>
                                <div class="right flex-grow">
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Enable newsletter contacts list Popup?</div>
                                        <div class="radio-buttons">
                                            <div class="item">
                                                <input class="" type="radio" name="enable-newsletter" id="enable-newsletter1" checked="" />
                                                <label class="" for="enable-newsletter1"><span class="body-title-2">Yes</span></label>
                                            </div>
                                            <div class="item">
                                                <input class="" type="radio" name="enable-newsletter" id="enable-newsletter2" />
                                                <label class="" for="enable-newsletter2"><span class="body-title-2">No</span></label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Mailchimp API Key</div>
                                        <input class="flex-grow" type="text" placeholder="Enter your Mailchimp API Key" name="name" tabindex="0" value="" aria-required="true" required="" />
                                    </fieldset>
                                    <fieldset class="mb-24">
                                        <div class="body-title mb-10">Email Newsletter Content</div>
                                        <textarea class="flex-grow h100" name="description" placeholder="Short description for newsletter pop-up" tabindex="0" aria-required="true" required=""></textarea>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="cols gap10">
                                <button class="tf-button w380" type="submit">Update</button>
                                <a href="#" class="tf-button style-3 w380" type="submit">Cancel</a>
                            </div>
                        </form>
                        {/* <!-- /setting --> */}
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

export default StoreSettings;
