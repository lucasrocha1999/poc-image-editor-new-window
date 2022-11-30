import React from "react";
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import { whiteTheme } from "../utils/white-theme";

// import { Container } from './styles';

const ImgEditor: React.FC = () => {

  const props = {
    includeUI: {
      loadImage: {
        path:
          "https://i1.wp.com/www.tor.com/wp-content/uploads/2018/10/Malazan-Kotaki.jpg?fit=740%2C386&type=vertical&quality=100&ssl=1",
        name: "SampleImage",
      },
      uiSize: {
        width: "100%",
        height: "700px",
      },
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "filter",
      ],
      menuBarPosition: "bottom",
      theme: whiteTheme,
    },
    cssMaxWidth: 1200,
    cssMaxHeight: 800,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };

  return (
    <ImageEditor {...props} />
  );
};

export default ImgEditor;
