import { ActivityIndicator } from "react-native";
import { restaurentItems } from "@/types/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const restaurantApi = async () => {
  const api = await axios.get<restaurentItems[]>(
    "https://69fc1d0cfce564e259174e0d.mockapi.io/foodData",
  );
  return api?.data;
};

const useFoodData = () => {
  return useQuery({
    queryKey: ["food"],
    queryFn: restaurantApi,
  });
};

export default useFoodData;
