import { restMenuItemImage } from "../../utility/constants";
import Swal from "sweetalert2";
import Button from "../button/button";
import { useState } from "react";
export const cart = [];
const RestItemConainer = ({ item }) => {
  return (
    <div className="rescard-item-detail" key={item?.card?.info?.id}>
      <div className="rest-menu-item-detail">
        <h2 className="rest-menu-item-name text-base md:text-base sm:text-sm lg:text-lg xl:text">
          {item?.card?.info?.name}
        </h2>
        <p className="rest-menu-item-price">
          ₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </p>
        <p className="rest-menu-item-description  w-4 sm:text-xs md:text-sm lg:text-lg">
          {item?.card?.info?.description}
        </p>
      </div>
      <div className="rest-menu-item-image">
        <img
          src={restMenuItemImage + item?.card?.info?.imageId}
          className=" w-full sm:w-32  md:w-96 "
          alt=""
        />
        <div className="add-to-cart">
          <Button
            className="sm:text-xs  md:text-xs lg:text-lg w-max"
            id="add-to-cart-btn"
            ButtonText="Add To Cart"
            onClick={() => {
              const isLogin = JSON.parse(localStorage.getItem("isLogin"));
              isLogin
                ? (cart[cart.length] = item)
                : Swal.fire({
                    title: "Login",
                    text: "Please Login first",
                    icon: "warning",
                    confirmButtonText: "Ok",
                  });
              if (isLogin)
                Swal.fire({
                  title: "Added to Cart",
                  text: "Your item has been added to cart",
                  icon: "success",
                  position: "center",
                });
              console.log(cart);
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
        <div className="font-bold text-lg sm:text-sm">
          {title} ({itemCards?.length})
        </div>
        <div className="flex justify-center items-center w-14 h-14 mr-7">
          <i class="fa-solid fa-angle-down text-2xl"></i>
        </div>
      </div>
      {itemCards?.map((item) => {
        return (
          showItems && (
            <RestItemConainer item={item} key={item?.card?.info?.id} />
          )
        );
      })}
    </div>
  );
};

export default RestItemConainer;
