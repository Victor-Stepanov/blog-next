"use client";
import React from "react";

import styles from "./form.module.css";

import { Input, Textarea, Button } from "@/ui";

export const Form = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.container}>
        <Input placeholder="Имя" />
        <Textarea placeholder="Комментарий" />
      </div>
      <Button>Отправить</Button>
    </form>
  );
};
