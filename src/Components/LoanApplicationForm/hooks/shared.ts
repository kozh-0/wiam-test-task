import axios from "axios";

// Создаем экземпляр axios с базовой конфигурацией
export const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
