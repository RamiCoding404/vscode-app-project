import { useEffect, useRef } from "react";
import { setopenedFile } from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface Iprobs {
  positions: {
    x: number;
    y: number;
  };
  setShowMenu: (val: boolean) => void;
}

const DropMenu = ({ positions: { x, y }, setShowMenu }: Iprobs) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { openedFile, tabIdRemove } = useSelector(
    (state: RootState) => state.tree
  );

  //handler to remove all tabs

  const closeAll = () => {
    dispatch(setopenedFile([]));
    setShowMenu(false);
  };
  const onClose = () => {
    const filter = openedFile.filter((file) => file.id !== tabIdRemove);
    dispatch(setopenedFile(filter));
    setShowMenu(false);
  };
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutSide);

    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef} className="">
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{ position: "absolute", left: x, top: y }}
      >
        <li
          role="menuitem"
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={closeAll}
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
