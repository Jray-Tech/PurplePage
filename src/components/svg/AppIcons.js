import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function HomeScreenIcon({active = false}) {
  if (active) {
    return (
      <Svg
        width={22}
        height={20}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M18 20H4a1 1 0 01-1-1v-9H0L10.327.612a1 1 0 011.346 0L22 10h-3v9a1 1 0 01-1 1zM5 18h12V8.157l-6-5.454-6 5.454V18z"
          fill="#650585"
        />
      </Svg>
    );
  }
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18 20H4a1 1 0 01-1-1v-9H0L10.327.612a1 1 0 011.346 0L22 10h-3v9a1 1 0 01-1 1zM5 18h12V8.157l-6-5.454-6 5.454V18z"
        fill="#828282"
      />
    </Svg>
  );
}

export function BlogScreenIcon({active = false}) {
  if (active) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M19 5v14H5V5h14zm2-2H3v18h18V3zm-4 14H7v-1h10v1zm0-2H7v-1h10v1zm0-3H7V7h10v5z"
          fill="#650585"
        />
      </Svg>
    );
  }
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 5v14H5V5h14zm2-2H3v18h18V3zm-4 14H7v-1h10v1zm0-2H7v-1h10v1zm0-3H7V7h10v5z"
        fill="#828282"
      />
    </Svg>
  );
}

export function SortIcon(props) {
  return (
    <Svg
      width={14}
      height={12}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.666 3.333H7L10.333 0l3.333 3.333H11v8H9.666v-8zM.333 8.667h2.666v-8h1.334v8H7L3.666 12 .333 8.667z"
        fill="#831CA5"
      />
    </Svg>
  );
}

export function LeftIcon(props) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.828 7l4.95 4.95-1.414 1.414L0 7 6.364.636 7.778 2.05 2.828 7z"
        fill="#14011B"
      />
    </Svg>
  );
}
