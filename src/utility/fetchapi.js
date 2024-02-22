import { restDataUrl } from "./constants";
const fetchApi = async () => {
  const fetchData = await fetch(restDataUrl);
  const fetchJson = await fetchData.json();
  const data = fetchJson
    ? fetchJson?.data?.cards.filter((item) => {
        return (
          item?.card?.card?.gridElements?.infoWithStyle?.collectionId
            ?.toString()
            .includes("84124") || ""
        );
      })
    : "";
  return data[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  // return fetchJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //   ?.restaurants;
  // await fetchJson?.data?.cards.filter((item) => {
  //   if (item.card.card.gridElements?.infoWithStyle) {
  //     console.log(item.card.card.gridElements.infoWithStyle.restaurants);
  //     return item.card.card.gridElements.infoWithStyle.restaurants;
  //   }
  // });
  // const fetchJson = await fetchData.json();
  // return fetchJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //   ?.restaurants;
};

export default fetchApi;
