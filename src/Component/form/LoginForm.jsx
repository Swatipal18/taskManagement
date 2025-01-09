import React from "react";
import logo from "../../assets/Images/logo.png";
import userLogo from "../../assets/Images/userLogo.png";
import key from "../../assets/Images/key.png";

const LoginForm = () => {
    return (
        <>
            <div className="container-fluid banner  ">
                <div className="row  bg-logoImg   ">
                    <div className="col-lg-6   ">
                        <div className="container py-5 mt-5 ">
                            <div className="row py-5    ">
                                <div className="col-lg-12    ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 ms-0 ms-lg-5">
                                                <img
                                                    src={logo}
                                                    width={180}
                                                    alt="Logo"
                                                    className="img-fluid mx-auto d-block"
                                                />
                                                <div>
                                                    <div className="border border-2 login-round p-4 mt-3  login-Main-Div">
                                                        <p className="text-center loginToAccount text-uppercase text-white">
                                                            Login to your account
                                                        </p>
                                                        <form>
                                                            <div className="form-group py-2 userName d-flex">
                                                                <img
                                                                    src={userLogo}
                                                                    alt=""
                                                                    width={20}
                                                                    height={20}
                                                                />
                                                                <input
                                                                    type="text"
                                                                    className="form-control bg-transparent rounded rounded-pill"
                                                                    placeholder="Enter Username"
                                                                />
                                                            </div>
                                                            <div className="form-group userName py-2">
                                                                <img
                                                                    src={key}
                                                                    alt="keyLogo"
                                                                    width={20}
                                                                    className="mt-1 "
                                                                />
                                                                <input
                                                                    type="password"
                                                                    className="form-control bg-transparent rounded rounded-pill"
                                                                    placeholder="Enter Password"
                                                                />
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary  rounded rounded-pill bg-light text-transparent w-100 loginButton"
                                                            >
                                                                LOGIN
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;