import { Link } from "react-router-dom";
import location from "../../assets/Filter/icons8-location-64.png";
const ElementBox = (props) => {
    return (
        <Link to={`/doctor/${props.id}`} className="doctor-item shadow-lg bg-blue-50 rounded-xl flex flex-col items-center gap-5 overflow-hidden">
            <img src={props.img} alt="Doctor 1" className="w-full object-cover" />
            <div className="info flex gap-3 bg-white p-3 shadow-lg -mt-10 w-full">
                <div className="text min-w-0">
                    <h3 className="text-md font-semibold  overflow-hidden whitespace-nowrap text-ellipsis capitalize">Dr. {props.name}</h3>
                    <p className="text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis capitalize text-sm my-2">{props.specialty}</p>
                    <p className="text-gray-400 text-sm flex items-center overflow-hidden whitespace-nowrap text-ellipsis capitalize"><img src={location} className="w-5" alt="" />  {props.location}</p>
                </div>
            </div>
        </Link>
    )
}

export default ElementBox;