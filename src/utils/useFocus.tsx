import { useRef, useState } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useState(() => {
    ref.current?.focus()
  })

  return ref
};
