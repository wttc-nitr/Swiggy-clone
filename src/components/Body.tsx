import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURANTS_URL as ALL_RESDATA_URL } from "../utils/constants";
import type { RestaurantType as ResType } from "../types/allRestaurants";

const Body = () => {
  const [allRes, setAllRes] = useState<ResType[]>([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState<ResType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?" + encodeURIComponent(ALL_RESDATA_URL)
    );

    const json = await data.json();

    console.log(json);

    // changing cards[5] to cards[2]
    setAllRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [value, setValue] = useState(""); // for accessing the input value for filtering

  return filteredListOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body my-2">
      <div className="flex buttons-container p-4 items-center justify-center h-[70px] mt-6 sticky top-[70px] bg-white">
        <input
          className="border border-solid border-black py-1 px-2 rounded"
          type="text"
          placeholder="search restaurants..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = allRes.filter((res) =>
              res.info.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredListOfRest(filteredList);
          }}
        >
          Search
        </button>

        <button
          className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
          onClick={() => {
            const filteredList = allRes.filter(
              (res) => res.info.avgRating >= 4
            );

            setFilteredListOfRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="px-4 py-2 bg-slate-300 m-4 rounded-lg"
          onClick={() => {
            setFilteredListOfRest(allRes);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredListOfRest?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
