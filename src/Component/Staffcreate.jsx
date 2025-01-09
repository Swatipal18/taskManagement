import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import arrow from '../../public/images/arrow-down.png'

function Staffcreate() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10 main-content">
                        <div className="form-container">
                            <h1 className="form-title">Add New Staff</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-8">
                                        {/* Name Field */}
                                        <div className="mb-4">
                                            <label className="form-label">Name :</label>
                                            <input type='text'
                                                {...register("name")}
                                                className="form-control shadow"
                                                placeholder="e.g. Masala Tea"

                                            />
                                        </div>
                                        {/*  moblie number */}
                                        <div className="mb-4">
                                            <label className="form-label">Mobile Number :</label>
                                            <input type='number'
                                                {...register("ingredients")}
                                                className="form-control shadow"
                                                placeholder="e.g. +91 123456789"
                                            />
                                        </div>
                                        {/*  E-Mail Address */}
                                        <div className="mb-4">
                                            <label className="form-label">E-Mail Address :</label>
                                            <input type='email'
                                                {...register("ingredients")}
                                                className="form-control shadow"
                                                placeholder="e.g. email@example.com"
                                            />
                                        </div>
                                        {/* Full Address */}

                                        <div className="mb-4">
                                            <label className="form-label">Full Address :</label>
                                            <input type='text'
                                                {...register("ingredients")}
                                                className="form-control shadow"
                                                placeholder="e.g. email@example.com"
                                            />
                                        </div>
                                        {/* Role */}
                                        <div className="mb-4">
                                            <label className="form-label">Role :</label>
                                            <select class="form-select form-control shadow w-25" >
                                                <option selected>Select Any One</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Image Upload Section */}
                                    <div className="col-md-4">
                                        <label className="rating-label form-label mb-3 ms-4">Image :</label>

                                        <div className="image-upload shadow ms-4">
                                            <div className="upload-icon ">
                                                <img src={arrow} alt="" />
                                            </div>
                                            <div className="upload-text fs-5">Upload Image Here</div>
                                            <div className="upload-subtext fs-6">
                                                (Jpg, png files supported only)<br />
                                                (Max File Size 2 MB)
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="mt-4">
                                    <button type="submit" className="submit-btn">ADD ITEM</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Staffcreate