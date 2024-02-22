import { restMenuItemImage } from "../../utility/constants";
import Button from "../button/button";
import { useState } from "react";
const RestItemConainer = ({ item }) => {
  return (
    <div className="rescard-item-detail" key={item?.card?.info?.id}>
      <div className="rest-menu-item-detail">
        <h2 className="rest-menu-item-name">{item?.card?.info?.name}</h2>
        <p className="rest-menu-item-price">
          ₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </p>
        <p className="rest-menu-item-description">
          {item?.card?.info?.description}
        </p>
      </div>
      <div className="rest-menu-item-image">
        <img src={restMenuItemImage + item?.card?.info?.imageId} alt="" />
        <div className="add-to-cart">
          <Button
            id="add-to-cart-btn"
            ButtonText="Add To Cart"
            onClick={() => {
              const isLogin = JSON.parse(localStorage.getItem("isLogin"));
              isLogin
                ? console.log(item?.card?.info?.name)
                : alert("Please Login first");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Categorieswise = ({ item }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const { title, itemCards } = item;
  // console.log(item);
  // console.log(itemCards);
  return (
    <div className="rest-menu-items">
      <div
        className="title flex justify-between scroll-smooth"
        onClick={handleClick}
      >
        <div className="font-bold text-lg">
          {title} ({itemCards?.length})
        </div>
        <div className="flex justify-center items-center w-14 h-14 mr-7">
          <i class="fa-solid fa-angle-down text-2xl"></i>
        </div>
      </div>
      {itemCards?.map((item) => {
        return showItems && <RestItemConainer item={item} />;
      })}
    </div>
  );
};

export default RestItemConainer;
