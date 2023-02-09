import {createGlobalStyle} from "styled-components";
import SpaceWoff from "../fonts/SpaceGrotesk-Medium.woff";
import SpaceWoff2 from "../fonts/SpaceGrotesk-Medium.woff2";
import SpaceTtf from "../fonts/SpaceGrotesk-Medium.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Space Grotesk";
    src: url(${SpaceWoff}) format('woff'),
    url(${SpaceWoff2}) format('woff2'),
    url(${SpaceTtf}) format('truetype')
  }
`

export default FontStyles