import React, { useContext } from "react"

// import AuthContext from "../context/AuthContext";



const LoginPage = () => {
    // const { loginUser } = useContext(AuthContext);
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const username = e.target.username.value;
    //     const password = e.target.password.value;
        // username.length > 0 && loginUser(username, password);
    // };

    return (
        <section>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper-login d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div className="brand-logo">
                                        <img src="../../images/TRIPPENS_LOGO.svg" alt="logo" />
                                    </div>
                                    <h6 className="font-weight-light">Sign in to continue.</h6>
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <br />

                                        <div className="mt-3">
                                            <a className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">SIGN IN</a>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section >

    );
};

export default LoginPage;