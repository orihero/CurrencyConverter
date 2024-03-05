import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIconProps} from '../types/Icon';

export const ArrowDownIcon: React.FC<IIconProps> = ({size, color}) => {
  return (
    <Svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.293 8.293a1 1 0 011.414 0L12 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
        fill={color ?? '#000'}
      />
    </Svg>
  );
};
