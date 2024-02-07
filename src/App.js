import Heading from "./component/heading/heading.jsx";
import Search from "./component/search/search.jsx";
import RestrCard from "./component/restrocard/restrocard.jsx";
import logo from "./logo.svg";
import "./App.css";
import fetchApi from "./utility/fetchapi.js";

const reponse = await fetchApi();

const Applayout = () => {
  return (
    <div id="app">
      <Heading />
      <Search />
      <div id="rescard">
        {reponse.map((item) => {
          return <RestrCard key={item.info.id} resData={item} />;
        })}
        {/* {restList.forEach((restaurant) => {
          return <RestrCard resData={restaurant} />;
        })} */}
      </div>
    </div>
  );
};

export default Applayout;
