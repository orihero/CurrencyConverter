import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIconProps} from '../types/Icon';

export const BackIcon: React.FC<IIconProps> = ({height, width, color}) => {
  return (
    <Svg
      width={width ?? 16}
      height={height ?? 14}
      viewBox="0 0 16 14"
      fill="none">
      <Path
        d="M1.583 7h12.834M1.583 7l5.5 5.5M1.583 7l5.5-5.5"
        stroke={color ?? '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
