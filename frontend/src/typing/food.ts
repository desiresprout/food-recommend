export interface IFoodResponse {
  totalCount: number;
  address: string;
  foodsInfo: IFoodInfo[];
}

export interface IFoodInfo {
  name: string;
  url?: string;
}

export interface IFoodState {
  isLoading: boolean;
  totalCount: number | null;
  address: string;
  foodsInfo: IFoodInfo[];
  keyword: string;
  error: boolean;
}
