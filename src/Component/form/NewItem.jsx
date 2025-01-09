import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../index.css';
import Sidebar from '../Sidebar';
import arrow from '../../../public/images/arrow-down.png'
function NewItem() {
    const { register, handleSubmit } = useForm();
    const [rating] = useState(3);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                {/* Main Content */}
                <div className="col-md-10 main-content">
                    <div className="form-container">
                        <h1 className="form-title">Item Name Here</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-8">
                                    {/* Name Field */}
                                    <div className="mb-4">
                                        <label className="form-label">Name :</label>
                                        <input
                                            {...register("name")}
                                            className="form-control shadow"
                                            placeholder="e.g. Masala Tea"

                                        />
                                    </div>

                                    {/* Description Field */}
                                    <div className="mb-4">
                                        <label className="form-label">Description :</label>
                                        <textarea
                                            {...register("description")}
                                            className="form-control shadow"
                                            rows="4" style={{ resize: 'none' }}
                                            placeholder="Write a short description about this item..."
                                        />
                                    </div>

                                    {/* Ingredients Field */}
                                    <div className="mb-4">
                                        <label className="form-label">Ingredients :</label>
                                        <input
                                            {...register("ingredients")}
                                            className="form-control shadow"
                                            placeholder="e.g. Masala Tea"
                                        />
                                    </div>

                                    {/* Rating */}
                                    <div className="mb-4 rating d-flex align-items-center">
                                        <label className="rating-label form-label">Ratings :</label>
                                        <div className="rating-stars">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index}>
                                                    {index < rating ? '★' : '☆'}
                                                </span>
                                            ))}
                                        </div>
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

                            {/* Variants Section */}
                            <div className="variants-section">
                                <span> <h3 className="variants-title ">ITEM VARIANTS</h3></span>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Category :</label>
                                        <select {...register("category")} className="form-control shadow">
                                            <option value="">Select Any One</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Size :</label>
                                        <select {...register("size")} className="form-control shadow">
                                            <option value="">Select Any One</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Volume :</label>
                                        <input
                                            {...register("volume")}
                                            className="form-control shadow"
                                            placeholder="e.g. 60ml"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label className="form-label">Price :</label>
                                        <input
                                            {...register("price")}
                                            className="form-control shadow"
                                            placeholder="₹ e.g. 100"
                                        />
                                    </div>
                                </div>
                                <button type="button" className="add-variant-btn">+ ADD VARIANT</button>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="submit-btn">ADD ITEM</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItem