import RestItemConainer, {
  Categorieswise,
} from "../restItemContainer/RestItemContainer";
import useRestMenu from "../../utility/useRestMenu";

import { useParams } from "react-router-dom";
import useOnlineStatus from "../../utility/useOnlineStatus";
import Loader from "../loader/Loader";
import "./restmenu.css";
import { useState } from "react";
const RestMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const { restid } = useParams();
  const restMenu = useRestMenu(restid);
  const isOnline = useOnlineStatus();
  const handleClick = () => {
    setShowItems(!showItems ? true : false);
  };

  const restDetails = restMenu
    ? restMenu?.data?.cards?.filter((item) =>
        item?.card?.card?.["@type"]?.includes(
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
      )
    : [];
  const { name, cuisines, avgRating, areaName } =
    restDetails?.length > 0 ? restDetails[0]?.card?.card?.info || "" : {};

  const category = restMenu?.data?.cards
    ?.filter((card) => card?.groupedCard)?.[0]
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) =>
      card?.card?.card?.["@type"]?.includes("ItemCategory")
    );

  if (isOnline === false)
    return (
      <div>
        <h3>Looks like you're offline!!</h3>
        <h3>Please Check Your Connection</h3>
      </div>
    );

  if (restMenu != null) {
    return (
      <div className="rest-menu-container">
        <div className="rest-menu">
          <div className="rest-detail">
            <div className="rest-name-address-detail">
              <h2 className="rest-name md:text-base sm:text-sm lg:text-lg xl:text ">
                {name}
              </h2>
              <p className="rest-cuisines">{cuisines.join(", ")}</p>
              <p className="rest-address">{areaName}</p>
            </div>
            <div
              className={`${
                avgRating > 4 ? "bg-green-600" : "bg-red-600"
              } " rest-rating-detail " `}
            >
              <h3 className="rest-rating text-white font-bold text-2xl">
                {avgRating}⭐
              </h3>
            </div>
          </div>

          <div className="recommended-menu-items my-14">
            {category?.map((item) => {
              return (
                <div key={item?.card?.card?.title} className="rest-menu-items">
                  <div
                    className="title flex justify-between  items-center scroll-smooth"
                    onClick={handleClick}
                  >
                    <div className="font-bold text-lg sm:text-sm lg:text-lg md:text-base">
                      <h2>
                        {item?.card?.card?.title} (
                        {item?.card?.card?.itemCards?.length ||
                          item?.card?.card?.categories?.length}
                        )
                      </h2>
                    </div>
                    <div className="flex justify-center items-center w-14 h-14 mr-7">
                      <i class="fa-solid fa-angle-down text-2xl"></i>
                    </div>
                  </div>
                  <div>
                    {item?.card?.card?.itemCards
                      ? item?.card?.card?.itemCards?.map((item) => {
                          return (
                            showItems && (
                              <RestItemConainer
                                item={item}
                                key={item?.card?.info?.id}
                              />
                            )
                          );
                        })
                      : item?.card?.card?.categories?.map((item) => {
                          return (
                            showItems && (
                              <Categorieswise key={item?.title} item={item} />
                            )
                          );
                        })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
};

export default RestMenu;
