import Search from "../search/search";
import RestrCard, { RestOpen } from "../restrocard/restrocard";
import fetchApi from "../../utility/fetchapi.js";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utility/useOnlineStatus.js";

const reponse = await fetchApi();
const Body = () => {
  const isOnline = useOnlineStatus();
  const [restList, setRestList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setRestList(reponse);
    setFilterList(reponse);
  }, []);
  // const Restopend = RestOpen(RestrCard);
  // console.log(restOpend);
  if (isOnline === false) {
    return <h1>You are Offline</h1>;
  }
  console.log(filterList);
  return (
    <div>
      <Search rest={[restList]} filterrest={[setFilterList]} />
      <Button
        ButtonText="Filter"
        onClick={() => {
          const filteredList = restList?.filter((res) => {
            return res?.info?.avgRating >= 4;
          });
          setRestList(filteredList);
        }}
      />
      <div id="rescard">
        {filterList?.map((item) => {
          return (
            <Link to={"/restaurant/" + item?.info?.id} key={item?.info?.id}>
              <RestrCard resData={item} />
              {/* {item?.info?.isOpen ? (
                <Restopend restData={item} />
              ) : (
                <RestrCard resData={item} />
              )} */}
            </Link>
          );
        })}
        {/* {restList.forEach((restaurant) => {
          return <RestrCard resData={restaurant} />;
        })} */}
      </div>
    </div>
  );
};

export default Body;
