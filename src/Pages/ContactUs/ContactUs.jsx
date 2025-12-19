import { useState } from "react";
import contactLanding from "../../assets/Doctors/landing-img-2.jpg";

const ContactUs = () => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const newErrors = {};
        if (info.firstName.length < 3) newErrors.firstName = "First name must be at least 3 characters.";
        if (info.lastName.length < 3) newErrors.lastName = "Last name must be at least 3 characters.";
        if (!emailRegex.test(info.email)) newErrors.email = "Please enter a valid email address.";
        if (info.message.length < 10) newErrors.message = "Message must be at least 10 characters.";

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", info);
            alert("Message sent successfully!");
            setInfo({ firstName: "", lastName: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-page">
            <div className="landing">
                <img src={contactLanding} alt="Patient 1" className="h-[400px] w-full object-cover" />
                <h1 className="text-4xl font-bold md:text-5xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Contact Us</h1>
            </div>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 uppercase">Send us a message</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Having small touches of colour makes it more colourful than having the whole thing in colour.</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Information Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                                Contact Information
                            </h2>

                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="First Name"
                                        value={info.firstName}
                                        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                                    />
                                    {error.firstName && <p className="text-red-500 text-sm mt-1">{error.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Last Name"
                                        value={info.lastName}
                                        onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                                    />
                                    {error.lastName && <p className="text-red-500 text-sm mt-1">{error.lastName}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="Email"
                                    value={info.email}
                                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                />
                                {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                    placeholder="Message"
                                    value={info.message}
                                    onChange={(e) => setInfo({ ...info, message: e.target.value })}
                                />
                                {error.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;