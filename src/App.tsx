import { useState } from "react";
import NewWindow from "react-new-window";
import ImageEditor from '@toast-ui/react-image-editor';

import 'tui-image-editor/dist/tui-image-editor.css';

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
            <ImageEditor
              includeUI={{
                loadImage: {
                  path: './assets/profile.jpeg',
                  name: 'Profile',
                },
              }}           
            />
            {/* <ImageEditor
              includeUI={{
                loadImage: {
                  path: './assets/profile.jpeg',
                  name: 'Profile',
                },
                theme: {},
                menu: ['shape', 'filter'],
                initMenu: 'filter',
                // uiSize: {
                //   width: '1000px',
                //   height: '700px',
                // },
                menuBarPosition: 'bottom',
              }}
              // cssMaxHeight={500}
              // cssMaxWidth={700}
              selectionStyle={{

                cornerSize: 20,
                rotatingPointOffset: 70,
              }}
              usageStatistics={true}
            /> */}
          </NewWindow>
        )}
    </>
  );
}

export default App;
