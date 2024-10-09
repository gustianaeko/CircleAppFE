import { useState } from "react";
import { ForgotPasswordForm } from "../types";

export function useForgotForm() {
  const [form, setForm] = useState<ForgotPasswordForm>({
    email: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return { form, handleChange, handleSubmit };
}
