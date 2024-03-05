import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIconProps} from '../types/Icon';

export const ArrowLeftRightIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
}) => {
  return (
    <Svg
      width={width ?? 15}
      height={height ?? 14}
      viewBox="0 0 15 14"
      fill="none">
      <Path
        d="M14.25 10.75H.75m13.5 0L12 13m2.25-2.25L12 8.5m-9-3L.75 3.25m0 0L3 1M.75 3.25h13.5"
        stroke={color ?? '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
