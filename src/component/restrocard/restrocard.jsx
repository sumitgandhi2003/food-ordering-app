import "./restrocard.css";

const Restrocard = (prop) => {
  const { resData } = prop;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData.info.sla;
  // console.log(resData.card.gridElements.infoWithStyle.restaurants[0].info.name);
  // console.log(typeof avgRating);
  const click = () => {
    window.open(resData.cta.link, "_blank");
  };
  return (
    <div className="rescard-item" onClick={click}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <div id="rescard-item-detail">
        <h5>{cuisines.join(", ")}</h5>
        {/* <p>
          {avgRating.toString().includes(".") ? avgRating : avgRating + ".0"}⭐
        </p> */}
        <p>
          {deliveryTime + " "}
          Minutes
        </p>
      </div>
    </div>
  );
};

export default Restrocard;
