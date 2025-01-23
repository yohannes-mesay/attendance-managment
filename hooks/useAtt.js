import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  getEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
} from "./employees";
export const useEmployees = () => {
  const {
    isLoading,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
  return { isLoading, employees, error };
};

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(createEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
    },
  });
  return { mutate, isLoading, error };
};

export const useEditEmployee = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(editEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
    },
  });
  return { mutate, isLoading, error };
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
    },
  });
  return { mutate, isLoading, error };
};
