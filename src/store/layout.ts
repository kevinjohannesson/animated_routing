import { createSlice } from "@reduxjs/toolkit"

export type LayoutName = 'foo' | 'bar';

export interface LayoutSliceState {
  name?: LayoutName;
}

const initialState: LayoutSliceState = {
  name: undefined
};

interface SetAction {
  type: string;
  payload: LayoutName;
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    set: (state, action: SetAction) => {
      state.name = action.payload; 
    },
    reset: (state) => {
      state.name = undefined;
    }
  }
});

export const { set } = layoutSlice.actions;

