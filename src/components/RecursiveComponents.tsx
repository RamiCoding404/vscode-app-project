import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setopenedFile } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileOpjectExist } from "../utils/functions";

interface Iprobs {
  fileTree: IFile;
}
// Recursive components
const RecursiveComponents = ({ fileTree }: Iprobs) => {
  const { id, name, isFolder, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFile } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  //Handler

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const onFileClicked = () => {
    const exists = doesFileOpjectExist(openedFile, id);
    dispatch(
      setClickedFile({ filename: name, fileContent: content, activeTabId: id })
    );
    if (exists) return;
    dispatch(setopenedFile([...openedFile, fileTree]));
  };

  return (
    <div className=" w-full mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-2">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center ">
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>

            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className=" flex items-center ml-2" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponents fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponents;
