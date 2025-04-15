import React from "react";

function SignUp() {
  return (
    <>
            {/* <!-- #page --> */}
        <div id="page" class="">
            <div class="login-page">
                <div class="left">
                    <div class="login-box type-signup">
                        <div>
                            <h3>Create your account</h3>
                            <div class="body-text text-white">Or enter your personal details to create account</div>
                        </div>
                        <div class="flex flex-column gap16 w-full">
                            <a href="index-2.html" class="tf-button style-4 w-full">
                                <span class="">Ecomus Admin Dashboard</span>
                            </a>
                            <a href="https://themesflat.co/html/ecomus/index.html" class="tf-button style-2 w-full">
                                <span class="">Sign in to continue to Ecomus.</span>
                            </a>
                        </div>
                        <form class="form-login flex flex-column gap22 w-full" action="https://themesflat.co/html/ecomus/admin-ecomus/index.html">
                            <div>
                                <div class="body-title mb-10 text-white">Your name <span class="tf-color-1">*</span></div>
                                <div class="cols gap10">
                                    <fieldset class="name">
                                        <input class="flex-grow" type="text" placeholder="First name" name="name" tabindex="0" value="" aria-required="true" required=""/>
                                    </fieldset>
                                    <fieldset class="name">
                                        <input class="flex-grow" type="text" placeholder="Last name" name="name" tabindex="0" value="" aria-required="true" required=""/>
                                    </fieldset>
                                </div>
                            </div>
                            <fieldset class="email">
                                <div class="body-title mb-10 text-white">Email address <span class="tf-color-1">*</span></div>
                                <input class="flex-grow" type="email" placeholder="Enter your email address" name="email" tabindex="0" value="" aria-required="true" required=""/>
                            </fieldset>
                            <fieldset class="password">
                                <div class="body-title mb-10 text-white">Password <span class="tf-color-1">*</span></div>
                                <input class="password-input" type="password" placeholder="Enter your password" name="password" tabindex="0" value="" aria-required="true" required=""/>
                                <span class="show-pass">
                                    <i class="icon-eye view"></i>
                                    <i class="icon-eye-off hide"></i>
                                </span>
                            </fieldset>
                            <fieldset class="password">
                                <div class="body-title mb-10 text-white">Confirm password <span class="tf-color-1">*</span></div>
                                <input class="password-input" type="password" placeholder="Enter your password" name="password" tabindex="0" value="" aria-required="true" required=""/>
                                <span class="show-pass">
                                    <i class="icon-eye view"></i>
                                    <i class="icon-eye-off hide"></i>
                                </span>
                            </fieldset>
                            <div class="flex justify-between items-center">
                                <div class="flex gap10">
                                    <input class="tf-check" type="checkbox" id="signed"/>
                                    <label class="body-text text-white" for="signed">Agree with Privacy Policy</label>
                                </div>
                            </div>
                            <button type="submit" class="tf-button w-full">Login</button>
                        </form>
                        <div class="bottom body-text text-center text-center text-white w-full">
                            Already have account?
                            <a href="login.html" class="body-text tf-color">Sign in here</a>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="/assets/images/images-section/Sign%20up.jpg" alt=""/>
                </div>
            </div>
        </div>
        {/* <!-- /#page --> */}

    </>
  );
}

export default SignUp;
