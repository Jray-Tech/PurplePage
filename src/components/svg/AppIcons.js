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

export function MoreScreenIcon({active = false}) {
  if (active) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"
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
        d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"
        fill="#828282"
      />
    </Svg>
  );
}

export function WishlistIcon({active = false}) {
  if (active) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M4 2h16a1 1 0 011 1v19.276a.5.5 0 01-.704.457L12 19.03l-8.296 3.702A.5.5 0 013 22.276V3a1 1 0 011-1zm15 17.965V4H5v15.965l7-3.124 7 3.124zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z"
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
        d="M4 2h16a1 1 0 011 1v19.276a.5.5 0 01-.704.457L12 19.03l-8.296 3.702A.5.5 0 013 22.276V3a1 1 0 011-1zm15 17.965V4H5v15.965l7-3.124 7 3.124zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z"
        fill="#828282"
      />
    </Svg>
  );
}

export function AdsScreenIcon({active = false}) {
  if (active) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8h2zM19 8v8h-3a3 3 0 010-6h.999L17 8h2zm-2 4h-1a1 1 0 00-.117 1.993L16 14h1v-2zm-8.601-1.115L7.552 13h1.692l-.845-2.115z"
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
        d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8h2zM19 8v8h-3a3 3 0 010-6h.999L17 8h2zm-2 4h-1a1 1 0 00-.117 1.993L16 14h1v-2zm-8.601-1.115L7.552 13h1.692l-.845-2.115z"
        fill="#828282"
      />
    </Svg>
  );
}

export function LoveIcon(props) {
  return (
    <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 0c2.025 0 3.666 1.667 3.666 4 0 4.667-5 7.333-6.666 8.333C5.333 11.333.333 8.667.333 4 .333 1.667 2 0 4 0c1.24 0 2.333.667 3 1.333C7.666.667 8.76 0 10 0zM7.622 10.403c.588-.371 1.118-.74 1.614-1.134 1.987-1.58 3.097-3.307 3.097-5.269 0-1.573-1.025-2.667-2.333-2.667-.718 0-1.494.38-2.058.943L7 3.219l-.943-.943c-.564-.563-1.34-.943-2.057-.943-1.294 0-2.334 1.104-2.334 2.667 0 1.963 1.111 3.689 3.097 5.269a17.94 17.94 0 001.614 1.133c.2.126.397.247.623.381.226-.134.423-.255.622-.38z"
        fill="#7F2F99"
      />
    </Svg>
  );
}

export function ShareIcon(props) {
  return (
    <Svg
      width={13}
      height={14}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.746 10.349L4.947 8.822a2.667 2.667 0 110-3.643l2.8-1.527a2.667 2.667 0 11.64 1.17l-2.8 1.527c.107.427.107.875 0 1.302l2.799 1.527a2.667 2.667 0 11-.64 1.17zM3 8.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zm7.333-4a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm0 8a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z"
        fill="#7F2F99"
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

export function LikeIcon(props) {
  return (
    <Svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.734 5.333H14a1.333 1.333 0 011.334 1.334v1.402c0 .175-.034.347-.1.508l-2.064 5.01a.667.667 0 01-.616.413H1.334a.667.667 0 01-.667-.667V6.667A.667.667 0 011.334 6h2.321a.667.667 0 00.545-.282L7.835.567A.333.333 0 018.256.46l1.21.604a1.666 1.666 0 01.87 1.902l-.602 2.366zM4.667 7.06v5.608h7.44L14 8.069V6.667H9.734a1.333 1.333 0 01-1.292-1.662l.602-2.366a.333.333 0 00-.174-.38l-.441-.22-3.14 4.448a2.01 2.01 0 01-.622.572zm-1.333.274H2v5.334h1.334V7.333z"
        fill="#7F2F99"
      />
    </Svg>
  );
}

export function BookMarkIcon(props) {
  return (
    <Svg
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.336.333h9.333a.666.666 0 01.667.667v12.762a.332.332 0 01-.511.283L6.002 11.02 1.18 14.044a.333.333 0 01-.511-.282V1a.667.667 0 01.667-.667zm8.666 1.334h-8v10.288l4-2.508 4 2.508V1.667z"
        fill="#7F2F99"
      />
    </Svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.173 7L.223 2.05 1.637.636 8 7l-6.364 6.364L.223 11.95 5.173 7z"
        fill="#14011B"
      />
    </Svg>
  );
}

export function NotificationBell(props) {
  if (props.active) {
    return (
      <Svg
        width={18}
        height={22}
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M2 16h14V9.031C16 5.148 12.866 2 9 2S2 5.148 2 9.031V16zM9 0c4.97 0 9 4.043 9 9.031V18H0V9.031C0 4.043 4.03 0 9 0zM6.5 19h5a2.5 2.5 0 01-5 0z"
          fill="#C42AF7"
        />
      </Svg>
    );
  }
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.586 19H3a.5.5 0 01-.4-.8l.4-.533V9c0-1.33.324-2.584.899-3.687L.393 1.808 1.808.393l19.799 19.8-1.415 1.414L17.586 19zM5.408 6.822A5.985 5.985 0 005 9v8h10.586L5.408 6.822zM19 14.786l-2-2V9a6 6 0 00-8.99-5.203L6.56 2.345A8 8 0 0119 9v5.786zM8.5 20h5a2.5 2.5 0 01-5 0z"
        fill="#828282"
      />
    </Svg>
  );
}
