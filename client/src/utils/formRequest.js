import customFetch from "./customFetch.js";
import { toast } from "react-toastify";
import { useNavigation, redirect } from "react-router-dom";

export const action = async (
  request,
  methods,
  from,
  successMsg,
  redirectTo
) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch[methods](from, data);
    toast.success(successMsg);
    return redirect(redirectTo);
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const deleteAction = async (from, successMsg, redirectTo) => {
  try {
    await customFetch.delete(from);
    toast.success(successMsg);
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  return redirect(redirectTo);
};

export const imageProcessing = async (
  request,
  methods,
  from,
  successMsg,
  redirectTo
) => {
  const formData = await request.formData();
  const file = formData.get("avatar");

  if (file && file.size > 50000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch[methods](from, formData);
    toast.success(successMsg);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return redirect(redirectTo);
};

export const navigation = () => {
  const navigations = useNavigation();
  const isSubmitting = navigations.state === "submitting";

  return isSubmitting;
};
