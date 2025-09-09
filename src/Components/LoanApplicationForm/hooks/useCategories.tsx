import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiClient } from "./shared";
import type { MessageInstance } from "antd/es/message/interface";
import type { DefaultOptionType } from "antd/es/select";

interface HHCompaniesI {
  id: string;
  name: string;
  url: string;
  alternate_url: string;
  logo_urls?: any;
  vacancies_url: string;
  open_vacancies: number;
}

export const useCategories = (message: MessageInstance) => {
  // * Переиспользовать можно сам хук, либо в коде брать кэш уже загруженных данных
  // * const queryClient = useQueryClient();
  // * const categories = queryClient.getQueryData(['categories']);

  const {
    data: categories = [],
    isLoading: loading,
    error,
    isError,
  } = useQuery<DefaultOptionType[], Error>({
    queryKey: ["categories"],
    queryFn: async (): Promise<DefaultOptionType[]> => {
      try {
        const response = await apiClient.get<HHCompaniesI[]>("/products/categories");

        return response.data.map((item) => ({
          value: item.name,
          label: item.name,
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data?.message || error.message;
          message.error(`Не удалось загрузить категории: ${errorMessage}`);
        }
        message.error("Не удалось загрузить категории: неизвестная ошибка");
        // * Из РФ запросы не всегда проходят сделал fallback, с VPN проблем нет
        return ["SberTech", "Yandex", "Google", "Amazon"].map((el) => ({ label: el, value: el }));
      }
    },
    retry: (failureCount, error) => {
      // Не повторяем запрос для 404 ошибок
      if (error.message.includes("404") || error.message.includes("Not Found")) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return {
    categories,
    loading,
    error,
    isError,
  };
};
