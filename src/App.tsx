import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponents from "./components/RecursiveComponents";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFile } = useSelector(({ tree }: RootState) => tree);
  return (
    <div>
      <div className="flex h-screen ">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2 ">
              <RecursiveComponents fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFile.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
