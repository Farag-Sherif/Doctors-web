import { Link, useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import doctor_1 from "../../assets/Home/doctors/doctor-1.webp";
// import PaginatedItems from "../../Components/Pagination/pagination";
// import { useEffect, useState } from "react";
import ElementBox from "../../Components/Element/ElementBox";
import PlaceholderCard from "../../Components/Element/PlaceholderCard";
// import axios from "axios";

const PopulerDoctors = () => {
    let [doctors] = useOutletContext();

    return (
        <>
            <div className="populer-doctors">
                <div className="container mx-auto pt-20 px-5 overflow-hidden">
                    <div className="title bg-white p-5 shadow-lg rounded-3xl flex items-center justify-between">
                        <h2 className="text-3xl font-bold" style={{ textShadow: "0 15px 10px currentColor, 0 0 20px currentColor" }}><i className="fa-solid fa-user-doctor mr-2"></i>Popular Doctors</h2>
                        <Link to="/doctors/popular" className="text-blue-500 underline hover:text-blue-600 text-xl mr-5">
                            More
                        </Link>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        initialSlide={0}
                        modules={[Navigation]}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper flex">
                        {doctors.length === 0 ? (
                            <>
                                <SwiperSlide>
                                    <PlaceholderCard />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PlaceholderCard />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PlaceholderCard />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PlaceholderCard />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PlaceholderCard />
                                </SwiperSlide>
                            </>
                        ) : null}
                        {doctors.slice(0, 10).map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <ElementBox
                                    id={doctor.id}
                                    name={doctor.name.toLowerCase()}
                                    specialty={doctor.specialties.map((specialty) => specialty.toLowerCase()).join(", ")}
                                    location={doctor.address.city.toLowerCase() + ", "  + doctor.address.country.toLowerCase()}
                                    img={doctor_1}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="other-doctors container mx-auto mb-20 p-5">
                    <div className="title bg-white p-5 shadow-lg rounded-3xl mb-10 flex items-center justify-between">
                        <h2 className="text-3xl font-bold" style={{ textShadow: "0 15px 10px currentColor, 0 0 20px currentColor" }}><i className="fa-solid fa-user-doctor mr-2"></i>Other Doctors</h2>
                    </div>
                    <div className="doctors grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
                        {doctors.length === 0 ? (
                            <>
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                                <PlaceholderCard />
                            </>
                        ) : null}
                        {
                            doctors.map((doctor) => (
                                <ElementBox
                                    key={doctor.id}
                                    id={doctor.id}
                                    name={doctor.name.toLowerCase()}
                                    specialty={doctor.specialties.map((specialty) => specialty.toLowerCase()).join(", ")}
                                    location={doctor.address.city.toLowerCase() + ", "  + doctor.address.country.toLowerCase()}
                                    img={doctor_1}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
)
}
export default PopulerDoctors;