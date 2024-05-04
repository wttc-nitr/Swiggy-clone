import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { ResMenu } from "../types/resInfo";
import { CORS_API_HOST } from "./constants";

const useResMenu = (resId: string) => {
  const [resInfo, setResInfo] = useState<ResMenu>();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API_HOST+ encodeURIComponent(MENU_URL + resId));
    const json = await data.json();
    // console.log(json);
    setResInfo(JSON.parse(json.contents));
  };

  return resInfo;
};

export default useResMenu;
