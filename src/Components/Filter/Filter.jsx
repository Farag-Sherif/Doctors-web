import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import '../Buttons/Swiper-Button-Style/Swiper-Buttons-Style.css'


const Filter = () => {
    // const filtersOptions = {
    //     specialty: [
    //         "Cardiology",
    //         "Dermatology",
    //         "Emergency Care",
    //         "General Consultation",
    //         "Gynecology",
    //         "Laboratory",
    //         "Neurology",
    //         "Ophthalmology",
    //         "Orthopedics",
    //         "Pediatrics",
    //         "Pharmacy",
    //         "Psychiatry",
    //         "Radiology",
    //         "Surgery",
    //         "Urology"
    //     ],
    //     location: [
    //         "Alexandria",
    //         "Asyut",
    //         "Aswan",
    //         "Cairo",
    //         "Fayoum",
    //         "Giza",
    //         "Ismailia",
    //         "Luxor",
    //         "Qalyubia",
    //         "Sohag",
    //         "Suez"
    //     ],
    //     area: {
    //         "Alexandria": [
    //             "Abu Qir",
    //             "Agami",
    //             "Al Agamy",
    //             "Al Amreya",
    //             "Al Anfoushi",
    //             "Al Atareen",
    //             "Al Gomrok",
    //             "Al Hadrah",
    //             "Al Ibrahimiyya",
    //             "Al Labban",
    //             "Al Maamora",
    //             "Al Mandara",
    //             "Al Manshiyya",
    //             "Al Max",
    //             "Al Montazah Awal",
    //             "Al Montazah Tany",
    //             "Al Shatebi",
    //             "Borg Al Arab",
    //             "Central",
    //             "Eastern",
    //             "Western"
    //         ],
    //         "Asyut": [
    //             "Abnub",
    //             "Abu Tig",
    //             "Asyut 1",
    //             "Asyut 2",
    //             "Dairut",
    //             "Dayrūt",
    //             "El Badari",
    //             "El Ghanayem",
    //             "Madīnat Asyūṭ al-Jadīdah",
    //             "New Asyut"
    //         ],
    //         "Aswan": [
    //             "Abu Simbel",
    //             "Aswan City Center",
    //             "Corniche",
    //             "Daraw",
    //             "Edfu",
    //             "Elephantine Island",
    //             "Kom Ombo",
    //             "Nasr",
    //             "Nubian Village",
    //             "Philae"
    //         ],
    //         "Cairo": [
    //             "Abbassia",
    //             "Ain Shams",
    //             "Al Rehab",
    //             "Al Waily",
    //             "Al-Daher",
    //             "Azbakeya",
    //             "Bab al-Louq",
    //             "Boulaq",
    //             "City of the Dead",
    //             "Coptic Cairo",
    //             "Dar Al Salam",
    //             "Downtown Cairo",
    //             "El Basatin",
    //             "El Gamaliya",
    //             "El Marg",
    //             "El Matareya",
    //             "El Mohandey",
    //             "El Muski",
    //             "El Nozha",
    //             "El Sahel",
    //             "El Salam City",
    //             "El Sayeda Zeinab",
    //             "El Sharabiya",
    //             "El Zawya El Hamra",
    //             "Future City",
    //             "Garden City",
    //             "Hadayek El Qobbah",
    //             "Haram",
    //             "Heliopolis",
    //             "Helwan",
    //             "Helwan Gardens",
    //             "Maadi",
    //             "Maadi Gardens",
    //             "Manial",
    //             "Manshiyat Naser",
    //             "Masr El Qedima",
    //             "Matariya",
    //             "Mokattam",
    //             "Mohandiseen",
    //             "Nasr City",
    //             "New Cairo",
    //             "Obour City",
    //             "Qatameya",
    //             "Qasr Al Nil",
    //             "Rehab",
    //             "Rod El Farag",
    //             "Sayyida Zeinab",
    //             "Shorouk",
    //             "Shubra",
    //             "Shubra El Kheima",
    //             "10th of Ramadan",
    //             "Zamalek",
    //             "Zeitoun"
    //         ],
    //         "Fayoum": [
    //             "Atsa",
    //             "Faiyum 1",
    //             "Faiyum 2",
    //             "Ibshawai",
    //             "Itsa",
    //             "Madinat al-Fayyum",
    //             "Sinnuris",
    //             "Tamiya",
    //             "Yusuf al Siddiq"
    //         ],
    //         "Giza": [
    //             "6th of October City",
    //             "Agouza",
    //             "Bulaq ad Dakrur",
    //             "Dokki",
    //             "Faisal",
    //             "Giza City Center",
    //             "Haram",
    //             "Imbabah",
    //             "Kafr Tuhurmus",
    //             "Mohandessin",
    //             "Monib",
    //             "New Giza",
    //             "Omraniya",
    //             "Pyramids Area",
    //             "Sheikh Zayed City"
    //         ],
    //         "Ismailia": [
    //             "Abu Suweir",
    //             "Abou Sultan",
    //             "Al Abbasy",
    //             "Al Dabaaih",
    //             "Al Hekr",
    //             "Al Sheikh Zaid",
    //             "Al Tamsah",
    //             "Fayid",
    //             "Ismailia 1",
    //             "Ismailia 2",
    //             "Ismailia 3",
    //             "Qantara East",
    //             "Qantara West",
    //             "Qassassin",
    //             "Tel El Kebir"
    //         ],
    //         "Luxor": [
    //             "Al Uqsur",
    //             "Awlad Abd al-Hadi",
    //             "Deir el-Bahri",
    //             "East Bank",
    //             "El Bayadiya",
    //             "Karnak",
    //             "Luxor City Center",
    //             "Luxor Temple Area",
    //             "Medinet Habu",
    //             "West Bank"
    //         ],
    //         "Qalyubia": [
    //             "Abu Zaabal",
    //             "Aghour Al-Sughra",
    //             "Al Akhmiyin",
    //             "Al Attara",
    //             "Al Khusus",
    //             "Banha",
    //             "El Khankah",
    //             "El Qanater El Khayreya",
    //             "Qaha",
    //             "Qalyub",
    //             "Shibin El Qanater",
    //             "Shubra El Kheima",
    //             "Tukh"
    //         ],
    //         "Sohag": [
    //             "Akhmim",
    //             "Al Shahid",
    //             "Dar El Salam",
    //             "El Balyana",
    //             "El Mansha",
    //             "El Maragha",
    //             "El Usayrat",
    //             "Gharb Al-Koubry",
    //             "Girga",
    //             "Juhayna",
    //             "Sidi Aref",
    //             "Sohag City Center"
    //         ],
    //         "Suez": [
    //             "Ataqah",
    //             "El Arbaeen",
    //             "El Ganayen",
    //             "Faisal",
    //             "Suez City Center"
    //         ]
    //     }
    // };
    // function HandleToOpenFilter(e="specialty") {

    //     return (
    //         <div className="menu bg-white shadow-2xl p-3 rounded-2xl overflow-hidden w-[550px] h-[480px] absolute top-full right-auto">
    //             <p className="text-gray-400 text-sm mb-5 text-center">Select Speciality</p>
    //             <Swiper
    //                 slidesPerView={1}
    //                 spaceBetween={55}
    //                 initialSlide={0}
    //                 modules={[Navigation]}
    //                 navigation={true}
    //                 breakpoints={{
    //                     0: {
    //                         slidesPerView: 1,
    //                         spaceBetween: 30,
    //                     },
    //                     640: {
    //                         slidesPerView: 1,
    //                     },
    //                     1024: {
    //                         slidesPerView: 1,
    //                     },
    //                 }}
    //                 className="mySwiper flex gap-5 h-[400px] w-full" style={{ padding: "0px 50px 10px" }}>

    //                 <SwiperSlide
    //                     className="slideContent">
    //                     <ul className="list text-gray-500 flex  justify-between flex-wrap h-full w-full">
    //                         {filtersOptions[e].map((option, index) => (
    //                             <li key={index} className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">{option}</li>

    //                         ))}
    //                     </ul>
    //                 </SwiperSlide>

    //             </Swiper>
    //             <p className="text-gray-400 text-sm text-right ">1 page </p>
    //         </div>
    //     )
    // }
    return (
        <div className="filters h-screen flex justify-center items-center">
            <div className="selection flex gap-2 relative rounded-3xl border border-gray-300">
                <div className="filter-title flex items-center gap-5 border-r-2 border-gray-300 p-3 w-fit cursor-pointer">
                    <div className="title">
                        <p className="text-gray-400 text-sm mb-2">Search by speciality</p>
                        <h3 className=" text-xl text-blue-600 "><i className="fa-solid fa-stethoscope mr-2"></i>Specialties</h3>
                    </div>
                    <i className="fa-solid fa-angle-down text-xl text-gray-500"></i>
                </div>
                <div className="filter-title flex items-center gap-5 border-r-2 border-gray-300 p-3 w-fit cursor-pointer">
                    <div className="title">
                        <p className="text-gray-400 text-sm mb-2">Search by speciality</p>
                        <h3 className=" text-xl text-blue-600 "><i className="fa-solid fa-stethoscope mr-2"></i>Specialties</h3>
                    </div>
                    <i className="fa-solid fa-angle-down text-xl text-gray-500"></i>
                </div>
                <div className="filter-title flex items-center gap-5 border-r-2 border-gray-300 p-3 w-fit cursor-pointer">
                    <div className="title">
                        <p className="text-gray-400 text-sm mb-2">Search by speciality</p>
                        <h3 className=" text-xl text-blue-600 "><i className="fa-solid fa-stethoscope mr-2"></i>Specialties</h3>
                    </div>
                    <i className="fa-solid fa-angle-down text-xl text-gray-500"></i>
                </div>
                <div className="filter-title flex items-center gap-5 border-gray-300 p-3 w-fit cursor-pointer">
                    <div className="title">
                        <p className="text-gray-400 text-sm mb-2">Search by speciality</p>
                        <h3 className=" text-xl text-blue-600 "><i className="fa-solid fa-stethoscope mr-2"></i>Specialties</h3>
                    </div>
                    <i className="fa-solid fa-angle-down text-xl text-gray-500"></i>
                </div>
                <button className="bg-red-600 text-white p-3 rounded-r-3xl  text-xl pr-5  cursor-pointer"><i className="fa-solid fa-magnifying-glass "></i> Search</button>
                <div className="menu bg-white shadow-2xl p-3 rounded-2xl overflow-hidden w-[550px] h-[480px] absolute top-full right-auto">
                    <p className="text-gray-400 text-sm mb-5 text-center">Select Speciality</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={55}
                        initialSlide={0}
                        modules={[Navigation]}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 1,
                            },
                        }}
                        className="mySwiper flex gap-5 h-[400px] w-full" style={{ padding: "0px 50px 10px" }}>
                        {/* <SwiperSlide
                            className="slideContent">
                            <ul className="list text-gray-500 flex  justify-between flex-wrap h-full w-full">
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">General Consultation</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Emergency Care</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Surgery</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Radiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Laboratory</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Pharmacy</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Cardiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Neurology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Orthopedics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Dermatology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Gynecology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Psychiatry</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Ophthalmology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2 w-1/2">Urology</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide
                            className="slideContent">
                            <ul className="list text-gray-500 flex flex-col justify-between flex-wrap h-full w-full">
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">General Consultation</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Emergency Care</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Surgery</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Radiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Laboratory</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pharmacy</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Cardiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Neurology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Orthopedics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Dermatology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Gynecology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Psychiatry</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Ophthalmology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Urology</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide
                            className="slideContent">
                            <ul className="list text-gray-500 flex flex-col justify-between flex-wrap h-full w-full">
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">General Consultation</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Emergency Care</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Surgery</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Radiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Laboratory</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pharmacy</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Cardiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Neurology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Orthopedics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Dermatology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Gynecology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Psychiatry</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Ophthalmology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Urology</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide
                            className="slideContent">
                            <ul className="list text-gray-500 flex flex-col justify-between flex-wrap h-full w-full">
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">General Consultation</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Emergency Care</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Surgery</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Radiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Laboratory</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pharmacy</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Cardiology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Neurology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Orthopedics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Pediatrics</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Dermatology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Gynecology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Psychiatry</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Ophthalmology</li>
                                <li className="text-blue-600 text-lg cursor-pointer hover:bg-gray-100 duration-300 p-2">Urology</li>
                            </ul>
                        </SwiperSlide> */}
                    </Swiper>
                    <p className="text-gray-400 text-sm text-right ">1 page </p>
                </div>
            </div>
        </div>
    )
}
export default Filter;




