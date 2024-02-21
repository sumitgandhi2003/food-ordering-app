// import { restMenuItemImage } from "../../utility/constants";
import RestItemConainer from "../restItemContainer/RestItemContainer";
import useRestMenu from "../../utility/useRestMenu";
// import Button from "../button/button";
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
  let count = 1;
  const handleClick = () => {
    setShowItems(showItems ? false : true);
  };
  const restDetails = restMenu
    ? restMenu?.data.cards.filter((item) =>
        item?.card?.card?.["@type"].includes(
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
      )
    : [];
  const { name, cuisines, id, avgRating, areaName } =
    restDetails.length > 0 ? restDetails[0]?.card?.card?.info || "" : {};

  const category =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cate) => cate?.card?.card?.["@type"].includes("ItemCategory")
    );
  // const category = restMenu?.data?.cards.filter((item) => {
  //   return item?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((cate) =>
  //     cate?.card?.card?.["@type"].includes("ItemCategory")
  //   );
  // });
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
              <h2 className="rest-name">{name}</h2>
              <p className="rest-cuisines">{cuisines.join(", ")}</p>
              <p className="rest-address">{areaName}</p>
              <p>id:{id}</p>
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
            {category.map((item) => {
              return (
                <div key={count++} className="rest-menu-items">
                  <div
                    className="title flex justify-between scroll-smooth"
                    onClick={handleClick}
                  >
                    <div className="font-bold text-lg">
                      {item?.card?.card?.title} (
                      {item?.card?.card?.itemCards.length})
                    </div>
                    <div className="flex justify-center items-center w-14 h-14 mr-7">
                      <i class="fa-solid fa-angle-down text-2xl"></i>
                    </div>
                  </div>

                  {item?.card?.card?.itemCards.map((item) => {
                    return (
                      showItems && <RestItemConainer item={item} />
                      // <div
                      //   className="rescard-item-detail"
                      //   key={item?.card?.info?.id}
                      // >
                      //   <div className="rest-menu-item-detail">
                      //     <h2 className="rest-menu-item-name">
                      //       {item?.card?.info?.name}
                      //     </h2>
                      //     <p className="rest-menu-item-price">
                      //       ₹
                      //       {(item?.card?.info?.price ||
                      //         item?.card?.info?.defaultPrice) / 100}
                      //     </p>
                      //     <p className="rest-menu-item-description">
                      //       {item?.card?.info?.description}
                      //     </p>
                      //   </div>
                      //   <div className="rest-menu-item-image">
                      //     <img
                      //       src={
                      //         restMenuItemImage + item?.card?.info?.imageId
                      //       }
                      //       alt=""
                      //     />
                      //     <div className="add-to-cart">
                      //       <Button
                      //         id="add-to-cart-btn"
                      //         ButtonText="Add To Cart"
                      //         onClick={() => {
                      //           const isLogin = JSON.parse(
                      //             localStorage.getItem("isLogin")
                      //           );
                      //           isLogin
                      //             ? console.log(item?.card?.info?.name)
                      //             : alert("Please Login first");
                      //         }}
                      //       />
                      //     </div>
                      //   </div>
                      // </div>
                    );
                  })}
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
