import { extensionIconPathes } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface Iprobs {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: Iprobs) => {
  const extension = filename.split(".").pop();
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPathes, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPathes[extension]}-open.svg`
        : `${extensionIconPathes[extension]}.svg`
      : `${extensionIconPathes[extension]}.svg`;

    return <IconImg className="w-5" src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconImg className="w-5" src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg className="w-5" src="/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
