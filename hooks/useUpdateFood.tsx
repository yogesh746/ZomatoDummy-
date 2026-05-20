import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type UpdateFoodType = {
  id: string;

  updatedFood: {
    title: string;
  };
};

const updateFood = async ({ id, updatedFood }: UpdateFoodType) => {
  const updateApi = await axios.put(
    `https://69fc1d0cfce564e259174e0d.mockapi.io/foodData/${id}`,
    updatedFood,
  );

  return updateApi.data;
};
const useUpdateFood = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateFood,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food"],
      });
    },
  });
};

export default useUpdateFood;
