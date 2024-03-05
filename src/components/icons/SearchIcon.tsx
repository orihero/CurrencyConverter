import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIconProps} from '../types/Icon';

export const SearchIcon: React.FC<IIconProps> = ({height, width, color}) => {
  return (
    <Svg
      width={width ?? 16}
      height={height ?? 15}
      viewBox="0 0 16 15"
      fill="none">
      <Path
        d="M14.75 14.25l-4.5-4.5M1.25 6a5.25 5.25 0 1010.5 0 5.25 5.25 0 00-10.5 0z"
        stroke={color ?? '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
