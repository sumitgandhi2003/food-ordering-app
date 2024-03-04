import { useState, useEffect } from "react";
import { restMenuUrl } from "./constants";
const useRestMenu = (restid) => {
    const [restMenu, SetRestMenu] = useState(null);
    useEffect(() => {
        fetchData();
    });
    const fetchData = async () => {
        const fetchitem = await fetch(restMenuUrl + restid);
        const data = await fetchitem.json();
        SetRestMenu(data);
    };
    return restMenu;
};

export default useRestMenu;
