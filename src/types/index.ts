import { ReactNode } from "react";

export interface IServiceOverviewDetail {
  urlImage: string;
  title: string;
  description: ReactNode;
  content?: {
    label: string;
    contentDetail: ReactNode;
  };
}
