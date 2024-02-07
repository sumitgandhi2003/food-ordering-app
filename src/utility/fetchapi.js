const fetchApi = async () => {
  const fetchData = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.0229348&lng=73.3119159&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const fetchJson = await fetchData.json();
  return fetchJson?.data.cards[4].card.card.gridElements.infoWithStyle
    .restaurants;
};

export default fetchApi;

