import axiosInstance from "@/lib/axiosInstance";

export const getNews = async () => {
  const response = await axiosInstance.get();

  console.log(response.data);
  return response.data;
};
