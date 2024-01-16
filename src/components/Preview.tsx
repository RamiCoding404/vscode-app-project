import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilBar from "./OpenedFilBar";
import { RootState } from "../app/store";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);
  return (
    <div>
      <>
        <OpenedFilBar />
        <FileSyntaxHighlighter content={fileContent} />
      </>
    </div>
  );
};

export default Preview;
