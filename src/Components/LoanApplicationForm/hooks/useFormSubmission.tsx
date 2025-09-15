import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { MessageInstance } from "antd/es/message/interface";
import type { FormDataI } from "../interfaces";
import { apiClient } from "./shared";

interface RespI {
  id: number;
  title: string;
}

export const useFormSubmission = (message: MessageInstance) => {
  const mutation = useMutation<RespI, Error, Partial<FormDataI>>({
    mutationFn: async (formData: Partial<FormDataI>) => {
      const response = await apiClient.post<RespI>("/products/add", {
        title: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        amount: formData.amount,
        term: formData.term,
      });

      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        message.error(`Application error: ${errorMessage}`);
      } else {
        message.error("Unknown application error");
      }
    },
  });

  const submitForm = async (formData: Partial<FormDataI>): Promise<RespI> => {
    return await mutation.mutateAsync(formData);
  };

  return {
    loading: mutation.isPending,
    submitForm,
  };
};
