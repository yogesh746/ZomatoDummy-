import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const addFood = async (addNewFood: { title: string }) => {
  const response = await axios.post(
    "https://69fc1d0cfce564e259174e0d.mockapi.io/foodData",
    addNewFood,
  );
  return response.data;
};
const useAddFood = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFood,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food"],
      });
    },
  });
};

export default useAddFood;
