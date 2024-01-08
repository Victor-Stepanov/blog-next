"use client";
import React from "react";

import { useForm } from "react-hook-form";

import styles from "./form.module.css";

import { Input, Textarea, Button } from "@/ui";

interface IForm {
  name: string;
  description: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.container}>
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        <Textarea
          {...register("description", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Комментарий"
          error={errors.description}
        />
      </div>
      <Button>Отправить</Button>
    </form>
  );
};
