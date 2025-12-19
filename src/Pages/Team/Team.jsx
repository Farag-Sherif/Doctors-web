import React from "react";
import farag from "../../assets/Team/farag-1.png"
import ommar from "../../assets/Team/ommer.png"
import amira from "../../assets/Team/amira.png"
import mohammed from "../../assets/Team/mohammed.png"
import moatasem from "../../assets/Team/moatasem.png"
import medx from "../../assets/Team/MedX.png"
import { Contact } from "lucide-react";

const Team = () => {
    const teamMembers = [
        {
            name: "ommar Tammam",
            designation: "Designation",
            Contact: {
                facebook: "https://www.facebook.com/",
                whatsapp: "https://wa.me/",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com/"
            },
            image: ommar
        },
        {
            name: "Amira Ragab",
            designation: "UI/UX Designer",
            Contact: {
                facebook: "https://www.facebook.com/",
                whatsapp: "https://wa.me/",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com/"
            },
            image:amira
        },
        {
            name: "Farag Sherif",
            designation: "Frontend Developer",
            Contact: {
                facebook: "https://www.facebook.com/",
                whatsapp: "https://wa.me/",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com/"
            },
            image: farag
        },
        {
            name: "Mohammed Atta",
            designation: "Designation",
            Contact: {
                facebook: "https://www.facebook.com/",
                whatsapp: "https://wa.me/",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com/"
            },
            image: mohammed
        },
        {
            name: "Moatasem",
            designation: "Designation",
            Contact: {
                facebook: "https://www.facebook.com/",
                whatsapp: "https://wa.me/",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com/"
            },
            image: moatasem
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 pt-40">
            <div className=" mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Our leadership team brings diverse expertise and vision to guide the company forward.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative group rounded-t-4xl overflow-hidden">
                          <img src={medx} className="absolute h-full object-contain object-left" alt="" />
                            {/* Image */}
                            <div className="relative z-10 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-90 object-contain object-bottom"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4  bg-gradient-to-b from-transparen to-indigo-400">
                                    <h1 className="text-2xl font-bold text-white">{member.name}</h1>
                                    <p className="text-white mb-2">{member.designation}</p>
                                <div className="contact  p-4 hidden group-hover:flex duration-300">
                                    <a href={member.Contact.facebook} target="_blank" rel="noopener noreferrer" className="text-white w-1/4 block text-2xl hover:text-indigo-400 duration-300">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                        <a href={member.Contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white w-1/4 block text-2xl hover:text-indigo-400 duration-300">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                        <a href={member.Contact.github} target="_blank" rel="noopener noreferrer" className="text-white w-1/4 block text-2xl hover:text-indigo-400 duration-300">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                        <a href={member.Contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white w-1/4 block text-2xl hover:text-indigo-400 duration-300">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>

                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;