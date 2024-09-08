import { SVGProps } from '@/types';
import React from 'react';

const SparkleSVG: React.FC<SVGProps> = (props) => {
  const { color = 'currentColor', size = '100px', } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2834.65 2834.65"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <rect x="2042.74" y="363.04" width="1083.53" height="360.17" rx="157.82" ry="157.82" transform="translate(3127.62 -2041.38) rotate(90)" />
      <rect x="-208.9" y="809.86" width="2453.33" height="360.17" rx="157.82" ry="157.82" transform="translate(998.09 -429.72) rotate(45)" />
      <rect x="404.82" y="2398.27" width="1083.53" height="360.17" rx="157.82" ry="157.82" transform="translate(382.23 -109.66) rotate(8.3)" />
    </svg>
  );
};

export default SparkleSVG;