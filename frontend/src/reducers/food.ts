import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ilocation } from "@typing/location";
import { IFoodState, IFoodResponse } from "@typing/food";

const initialState: IFoodState = {
  isLoading: false,
  totalCount: null,
  address: "",
  foodsInfo: [],
  keyword: "",
  error: false,
};

const food = createSlice({
  name: "food",
  initialState,
  reducers: {
    LoadFoodsInfoRequest(state: IFoodState, action: PayloadAction<Ilocation>) {
      state.isLoading = true;
    },
    LoadFoodsInfoSuccess(
      state: IFoodState,
      action: PayloadAction<IFoodResponse>
    ) {
      state.totalCount = action.payload.totalCount;
      state.address = action.payload.address;
      state.foodsInfo = action.payload.foodsInfo;
      state.isLoading = false;
    },
    LoadFoodsInfoFail(state: IFoodState) {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export default food;
