import React from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

export const ChartIcon = ({ fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width="18px" height="18px">
            <Path d="M0 0h24v24H0V0z" fill="none"/>
            <Path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
        </Svg>
    )
}

export const PhotoIcon = ({ fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill={fill} width="18px" height="18px">
            <Path fill="none" height="24" width="24"/>
            <Path d="M3,4V1h2v3h3v2H5v3H3V6H0V4H3z M6,10V7h3V4h7l1.83,2H21c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V10H6z M13,19c2.76,0,5-2.24,5-5s-2.24-5-5-5s-5,2.24-5,5S10.24,19,13,19z M9.8,14c0,1.77,1.43,3.2,3.2,3.2s3.2-1.43,3.2-3.2 s-1.43-3.2-3.2-3.2S9.8,12.23,9.8,14z"/>
        </Svg>
    )
}

export const TableIcon = ({ fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill={fill} width="18px" height="18px">
            <G>
                <Rect fill="none" height="24" width="24"/>
                <Path d="M19,7H9C7.9,7,7,7.9,7,9v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,9v2H9V9H19z M13,15v-2h2v2H13z M15,17v2h-2v-2H15z M11,15H9v-2h2V15z M17,13h2v2h-2V13z M9,17h2v2H9V17z M17,19v-2h2v2H17z M6,17H5c-1.1,0-2-0.9-2-2V5 c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v1h-2V5H5v10h1V17z"/>
            </G>
        </Svg>
    )
}
