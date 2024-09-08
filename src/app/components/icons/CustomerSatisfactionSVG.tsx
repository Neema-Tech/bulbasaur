import { SVGProps } from '@/types';
import React from 'react';

const CustomerSatisfactionSVG: React.FC<SVGProps> = (props) => {
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
      <path d="M1475.02,1888.56c263.52-1.27,456.33,172.34,518.64,368.97,16.63,52.47,24.4,108.89,28.17,164.05,4.74,69.23,1.8,139.04,1.06,208.59-1.24,116.08-88.47,203.73-204.58,204.01-267.12.65-534.24.61-801.36.03-117.76-.26-205.41-88.14-205.43-206.17-.01-88.43-4.79-177.79,5.75-265.13,32.63-270.52,251.48-465.14,522.73-472.24,6.3-.16,12.6-.02,19.88-1.85-102.98-23.26-189.09-72.89-248.49-161.5-59.78-89.17-78.76-187.18-54.47-292.45,39.92-173.02,201.76-297.08,373.98-287.24,184.21,10.53,329.97,146.81,353.54,323.55,22.04,165.27-79.19,370.4-309.42,417.37Z" />
      <path d="M2157.2,2631.42c0-61.26-.75-119.04.13-176.8,3.39-220.2-77.73-402-245.03-545.04-3.02-2.58-5.47-5.83-9.99-10.71,82.27-54.98,172.26-76.93,273.45-77.08-183.82-63.45-275.74-191.5-250.72-343.83,25.4-154.62,149.11-262.85,300.32-262.72,150.28.12,273.17,107.06,299.04,260.21,26.07,154.32-65.11,282.66-248.95,346.34,116.64-.51,219.68,30.59,308.25,101.92,111.85,90.08,172.76,207.41,178.53,351.64,2.19,54.72,1.92,109.67,0,164.41-3.56,101.45-83.07,187.66-183.8,190.64-138.68,4.09-277.56,1.03-421.25,1.03Z" />
      <path d="M930.23,1897.32c-32.8,33.95-66,64.55-94.84,98.83-100.27,119.19-154.08,257.05-157.47,413.38-1.58,72.51-.27,145.08-.27,220.56-12.64.74-22.67,1.82-32.69,1.83-120.9.12-241.8.34-362.7,0-125.09-.35-211.09-84.51-210.51-209.67.35-76.65-3.33-155.26,11.74-229.54,43.83-216.1,230.83-365.43,451-370.24,6.26-.14,12.53-.02,19.81-2.13-84.05-21.07-152.75-64.24-199.48-137.73-47.57-74.82-60.75-155.89-37.76-242.04,37.68-141.16,168.72-234.59,314.64-224.7,144.37,9.78,261.63,123.98,279.13,271.84,17.96,151.7-75.3,277.08-252.8,334.14,101.55.01,191.43,22.17,272.19,75.47Z" />
      <path d="M1114.39,660.91c23.75-72.86-6.05-134.91-59.3-190.76-20.94-21.97-38.08-47.7-56.12-72.32-40.33-55.04-19.64-116.78,45.94-136.64,52.25-15.82,105.34-29.06,156.9-46.83,18.18-6.27,36.9-19.54,48.48-34.85,33.62-44.44,63.28-91.86,95.35-137.5,39.39-56.07,103.77-55.86,143.44.52,33.31,47.34,64.74,96.04,98.81,142.81,8.43,11.57,22.65,21.7,36.27,26.17,53.84,17.68,108.65,32.35,162.81,49.07,69.9,21.58,89.81,82.15,46.16,140.41-34.09,45.49-70.06,89.61-103.17,135.79-8.91,12.43-14.59,30.16-14.62,45.47-.09,56.88,3.63,113.76,4.36,170.65.92,70.86-51.02,107.6-118.58,84.38-52.63-18.09-104.5-38.53-157.6-55.02-16.36-5.08-36.99-4.8-53.4.31-53.1,16.54-104.99,36.95-157.65,54.95-67.42,23.05-118.28-14.05-118.1-85.34.07-28.45.01-56.89.01-91.27Z" />
      <path d="M186.05,825.52c22.21-61.19-10.62-112.91-54.77-161.6-16.9-18.64-31.77-39.31-46.1-60.07-29.18-42.28-12.19-93.43,36.82-109.08,45.98-14.68,93.03-26.04,138.73-41.49,14.57-4.92,29.5-15.83,38.75-28.16,28.39-37.83,53.58-78.05,80.99-116.65,33.47-47.13,86.69-47.8,120.28-1.16,27.66,38.4,52.62,78.79,80.93,116.68,9.19,12.3,23.89,23.31,38.34,28.3,44.6,15.4,90.55,26.82,135.51,41.25,56.66,18.19,72.19,68.61,36.6,116.84-19.37,26.24-37.48,53.88-59.92,77.27-33.85,35.27-46.17,74.77-39.8,122.91,4.13,31.19,3.68,63.08,4.02,94.67.66,61.04-43.15,93.5-100.32,74.07-44.71-15.19-88.63-32.77-133.57-47.21-12.75-4.1-28.94-4.42-41.66-.42-44.02,13.86-87.1,30.67-130.72,45.83-62.27,21.65-104.44-8.43-104.11-73.78.12-23.17.02-46.35.02-78.21Z" />
      <path d="M2137.72,832.44c19.14-62.41-3.11-114.42-47.76-160.66-18.88-19.55-34.34-42.58-50.28-64.8-32.45-45.22-15.9-96.1,37.02-112.76,46.04-14.49,92.93-26.35,138.64-41.76,13.61-4.59,27.5-14.99,36.13-26.57,27.63-37.1,52.52-76.22,79.07-114.14,36.39-51.97,89.18-51.89,125.86-.03,31.55,44.61,54.74,100.46,96.45,131.06,40.68,29.85,100.28,33.57,151.32,49.55,60.53,18.94,76.58,69.15,38.81,120.06-32.55,43.89-78.25,83.35-94.38,132.58-15.76,48.13-1.06,106.15-.48,159.83.69,63.55-41.94,94.1-102.15,73.58-51.57-17.58-102.97-49.3-154.51-49.42-50.41-.11-100.76,32.2-151.38,49.59-59.38,20.39-102.73-11.42-102.39-74.39.13-23.16.02-46.32.02-71.73Z" />
    </svg>
  );
};

export default CustomerSatisfactionSVG;