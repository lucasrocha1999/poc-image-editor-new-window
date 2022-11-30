import { useState } from "react";
import NewWindow from "react-new-window";
import ImgEditor from "./components/ImgEditor";


function App() {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(prevState => !prevState)
  }

  const newWindowUnloaded = () => {
    setOpened(false)
  }

  return (
    <>
      <button onClick={toggleOpened}>New Window</button>
      {opened && (
          <NewWindow
            title={'Window'}
            name={"closeOnUnmount-window"}
            onUnload={() => newWindowUnloaded()}
            features={{ left: 200, top: 200, width: 800, height: 800 }}
          >
            <ImgEditor />
          </NewWindow>
        )}
    </>
  );
}

export default App;
