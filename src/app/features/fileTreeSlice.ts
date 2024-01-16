import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface iClickedFile {
  filename: string;
  fileContent: string | undefined;
  activeTabId: string | null;
}

interface IInitialState {
  openedFile: IFile[];
  clickedFile: iClickedFile;
  tabIdRemove: string | null;
}

const initialState: IInitialState = {
  openedFile: [], //push file gwa array
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdRemove: null,
};
const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setopenedFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<iClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTavIdToRemove: (state, action: PayloadAction<string | null>) => {
      state.tabIdRemove = action.payload;
    },
  },
});

export const { setopenedFile, setClickedFile, setTavIdToRemove } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
