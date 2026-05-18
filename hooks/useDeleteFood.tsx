import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteFood = async (id: string) => {
  const deleteApi = await axios.delete(
    `https://69fc1d0cfce564e259174e0d.mockapi.io/foodData/${id}`,
  );
  return deleteApi?.data;
};

const useDeleteFood = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food"],
      });
    },
  });
};

export default useDeleteFood;
