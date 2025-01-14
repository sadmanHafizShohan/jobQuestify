import React, { useState } from "react";
import applicationForm from '../assets/images/applicationForm.png'
const UserDetailsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Here you can handle form submission, like sending the data to a server
    };

    return (
        <div className="min-h-screen justify-center align-middle content-center bg-colorOrange"

            style={{
                backgroundImage: `url(${applicationForm})`,
                // backgroundSize:'cover',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backgroundBlendMode: 'overlay',
                // backgroundRepeat:'no-repeat',
                // backgroundPosition: 'center'
            }}
            >
            <div className="w-full max-w-md mx-auto p-4 text-color3">
                <h2 className="text-2xl text-center font-semibold mb-4">Submit Your Application</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Gender Radio buttons */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <div className="flex gap-4">
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                    className="radio"
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                    className="radio"
                                />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>

                    {/* Country Dropdown */}
                    <div className="form-control">
                        <label htmlFor="country" className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select your country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-warning w-full">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetailsForm;
