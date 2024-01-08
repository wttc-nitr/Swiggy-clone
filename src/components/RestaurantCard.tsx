import { CDN_URL } from "../utils/constants";
import type { RestaurantType as ResType } from "../types/allRestaurants";

const RestaurantCard = ({ resData }: { resData: ResType }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, locality, areaName } =
    resData.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="m-4 p-4 w-[250px] h-[26rem] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-lg mt-2 mb-1">{name}</h3>
      <h4 className="font-light">{cuisines.join(", ").slice(0, 90)}...</h4>
      <h4>{deliveryTime} min</h4>
      <h4 className="">{avgRating} Ratings</h4>
      <h4 className="font-extralight">Address: {locality + ", " + areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
