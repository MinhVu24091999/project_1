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

export interface InformationInterface {
  time: string;
  title: string;
  description: string;
  content: string[];
}
