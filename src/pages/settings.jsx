import React from "react";

function Settings() {
    return (
        <>
                            {/* <!-- main-content --> */}
                    <div class="main-content">
                        {/* <!-- main-content-wrap --> */}
                        <div class="main-content-inner">
                            {/* <!-- main-content-wrap --> */}
                            <div class="main-content-wrap">
                                <div class="flex items-center flex-wrap justify-between gap20 mb-30">
                                    <h3>Setting</h3>
                                    <ul class="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                        <li>
                                            <a href="index-2.html"><div class="text-tiny">Dashboard</div></a>
                                        </li>
                                        <li>
                                            <i class="icon-chevron-right"></i>
                                        </li>
                                        <li>
                                            <div class="text-tiny">Setting</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- setting --> */}
                                <form class="form-setting form-style-2">
                                    <div class="wg-box">
                                        <div class="left">
                                            <h5 class="mb-4">General Information</h5>
                                            <div class="body-text">Setting general information</div>
                                        </div>
                                        <div class="right flex-grow">
                                            <div class="cols gap24">
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">First Name</div>
                                                    <input class="flex-grow" type="text" placeholder="First Name" name="name" tabindex="0" value="Kristin" aria-required="true" required=""/>
                                                </fieldset>
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Last Name</div>
                                                    <input class="flex-grow" type="text" placeholder="Last Name" name="name" tabindex="0" value="Watson" aria-required="true" required=""/>
                                                </fieldset>
                                            </div>
                                            <div class="cols gap24">
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Address</div>
                                                    <input class="flex-grow" type="text" placeholder="Address" name="name" tabindex="0" value="52 Davis Street, Buffalo, New York" aria-required="true" required=""/>
                                                </fieldset>
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Contact</div>
                                                    <input class="flex-grow" type="text" placeholder="Contact" name="name" tabindex="0" value="+1 548 562 1023" aria-required="true" required=""/>
                                                </fieldset>
                                            </div>
                                            <div class="cols gap24">
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Email</div>
                                                    <input class="flex-grow" type="email" placeholder="Email" name="name" tabindex="0" value="kristin@ecomus.com" aria-required="true" required=""/>
                                                </fieldset>
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Role</div>
                                                    <input class="flex-grow" type="text" placeholder="Address" name="name" tabindex="0" value="Sale Administrator" aria-required="true" required=""/>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wg-box">
                                        <div class="left">
                                            <h5 class="mb-4">Login</h5>
                                            <div class="body-text">Setting Login information</div>
                                        </div>
                                        <div class="right flex-grow">
                                            <fieldset class="mb-24">
                                                <div class="body-title mb-10">Enable Google Login?</div>
                                                <div class="radio-buttons">
                                                    <div class="item">
                                                        <input class="" type="radio" name="enable-google" id="enable-google1"/>
                                                        <label class="" for="enable-google1"><span class="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div class="item">
                                                        <input class="" type="radio" name="enable-google" id="enable-google2" checked=""/>
                                                        <label class="" for="enable-google2"><span class="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div class="cols gap24">
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Google Login ID</div>
                                                    <input class="flex-grow" type="text" placeholder="Enter Google Login ID" name="name" tabindex="0" value="" aria-required="true" required=""/>
                                                </fieldset>
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Google Secret Key</div>
                                                    <input class="flex-grow" type="text" placeholder="Enter Google Secret Key" name="name" tabindex="0" value="" aria-required="true" required=""/>
                                                </fieldset>
                                            </div>
                                            <fieldset class="mb-24">
                                                <div class="body-title mb-10">Enable Facebook Login?</div>
                                                <div class="radio-buttons">
                                                    <div class="item">
                                                        <input class="" type="radio" name="enable-facebook" id="enable-facebook1"/>
                                                        <label class="" for="enable-facebook1"><span class="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div class="item">
                                                        <input class="" type="radio" name="enable-facebook" id="enable-facebook2" checked=""/>
                                                        <label class="" for="enable-facebook2"><span class="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div class="cols gap24">
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Facebook ID </div>
                                                    <input class="flex-grow" type="text" placeholder="Enter Facebook ID " name="name" tabindex="0" value="" aria-required="true" required=""/>
                                                </fieldset>
                                                <fieldset class="mb-24">
                                                    <div class="body-title mb-10">Facebook Secret Key</div>
                                                    <input class="flex-grow" type="text" placeholder="Enter Facebook Secret Key" name="name" tabindex="0" value="" aria-required="true" required=""/>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cols gap10">
                                        <button class="tf-button w380" type="submit">Update</button>
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

export default Settings;
