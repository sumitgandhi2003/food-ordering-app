import Search from "../search/search";
import RestrCard from "../restrocard/restrocard";
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
    if (isOnline === false) {
        return <h1>You are Offline</h1>;
    }
    return (
        <div>
            <Search rest={[restList]} filterrest={[setFilterList]} />
            <Button
                ButtonText="Filter"
                onClick={() => {
                    const filteredList = restList?.filter((res) => {
                        return res?.info?.avgRating >= 4;
                    });
                    setFilterList(filteredList);
                    if
                }}
            />
            <div id="rescard">
                {filterList?.map((item) => {
                    return (
                        <Link
                            to={"/restaurant/" + item?.info?.id}
                            key={item?.info?.id}
                        >
                            <RestrCard resData={item} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
