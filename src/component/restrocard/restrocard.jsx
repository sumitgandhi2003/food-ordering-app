import "./restrocard.css";
import { CDN_URL } from "../../utility/constants";

const Restrocard = (prop) => {
    const { resData } = prop;
    const { name, cuisines, avgRating, cloudinaryImageId, areaName } =
        resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className="rescard-item hover:scale-105 hover:bg-gray-200 transition-transform">
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="font-bold text-2xl my-2">{name}</h3>
            <p>{areaName}</p>
            <div id="rescard-item-detail">
                <h5>{cuisines.join(", ")}</h5>
                <p
                    // className="p-1 my-1 w-fit rounded-md flex items-center justify-center"
                    className={`${
                        avgRating > 4 ? "bg-green-600" : "bg-red-600"
                    } " p-1 my-1 w-fit rounded-md flex items-center justify-center text-white "`}
                >
                    {avgRating.toString().includes(".")
                        ? avgRating
                        : avgRating + ".0"}{" "}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        role="img"
                        aria-hidden="true"
                        strokeColor="rgba(2, 6, 12, 0.92)"
                        fillColor="rgba(2, 6, 12, 0.92)"
                    >
                        <path
                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                            fill="white"
                        ></path>
                    </svg>
                </p>
                <p>
                    {deliveryTime + " "}
                    Minutes
                </p>
            </div>
        </div>
    );
};

export const RestOpen = (Restrocard) => {
    return (prop) => {
        return (
            <div>
                <label htmlFor="">Open</label>
                <Restrocard {...prop} />
            </div>
        );
    };
};

export default Restrocard;
