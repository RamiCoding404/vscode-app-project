import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFile,
  setTavIdToRemove,
  setopenedFile,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface Iprobs {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: Iprobs) => {
  const dispatch = useDispatch();

  const {
    openedFile,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ filename: name, fileContent: content, activeTabId: id })
    );
  };
  const onRemove = (selectedid: string) => {
    const filter = openedFile.filter((file) => file.id !== selectedid);
    const lastTap = filter[filter.length - 1];
    if (!lastTap) {
      dispatch(setopenedFile([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileContent: "",
          filename: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTap;
    dispatch(setopenedFile(filter));
    dispatch(
      setClickedFile({
        activeTabId: id,
        fileContent: content,
        filename: name,
      })
    );
  };
  return (
    <div
      className="max-w-screen-md flex items-center p-2 border-t-2"
      onClick={onClick}
      style={{
        borderTop:
          file.id === activeTabId
            ? "2px solid #cf6ccf"
            : "2px solid transparent",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTavIdToRemove(file.id));
      }}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
