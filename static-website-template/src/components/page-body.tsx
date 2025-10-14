import type { PropsWithChildren } from "react";
import "../styles/global.css";

export const PageBody = ({ children }: PropsWithChildren) => {
  return <body>{children}</body>;
};
