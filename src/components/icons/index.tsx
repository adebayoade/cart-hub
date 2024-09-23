type IconProps = {
  className?: string;
};

function Cart({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      className={className}
    >
      <g fill="#C73B0F" clipPath="url(#a)">
        <path d="M6.583 18.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm8.751 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM3.446 1.752a.625.625 0 00-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 00.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 00.61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248z" />
        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.333 0h20v20h-20z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Decrease({ className }: IconProps) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.55 9.067h3.783v-1H4.666v1H7.55zm.454 6.1c-.92 0-1.783-.175-2.592-.525a6.774 6.774 0 01-2.12-1.433 6.77 6.77 0 01-1.434-2.123 6.465 6.465 0 01-.525-2.594c0-.92.175-1.785.525-2.594a6.67 6.67 0 011.433-2.114 6.843 6.843 0 012.123-1.425 6.465 6.465 0 012.594-.526c.92 0 1.785.176 2.594.525a6.74 6.74 0 012.114 1.425c.6.6 1.075 1.306 1.425 2.117a6.48 6.48 0 01.525 2.596c0 .919-.175 1.783-.525 2.591a6.809 6.809 0 01-1.425 2.118A6.731 6.731 0 0110.6 14.64a6.45 6.45 0 01-2.596.528zm.004-1c1.572 0 2.908-.553 4.008-1.659 1.1-1.105 1.65-2.444 1.65-4.016s-.549-2.909-1.646-4.009c-1.098-1.1-2.438-1.65-4.02-1.65-1.567 0-2.903.55-4.009 1.647C2.886 5.578 2.333 6.918 2.333 8.5c0 1.567.553 2.903 1.658 4.008 1.106 1.106 2.445 1.659 4.017 1.659z"
        fill="currentColor"
      />
    </svg>
  );
}

function CarbonNeutral({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      className={className}
    >
      <path
        fill="#1EA575"
        d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 01.607 1.072V17.5A1.25 1.25 0 018 18.75z"
      />
      <path
        fill="#1EA575"
        d="M14.25 18.75h-1.875a1.25 1.25 0 01-1.25-1.25v-6.875h3.75a2.498 2.498 0 002.488-2.747 2.594 2.594 0 00-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 00-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 005.5 5a2.5 2.5 0 100 5v1.25a3.75 3.75 0 010-7.5h.05a5.019 5.019 0 014.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 013.868 3.384 3.75 3.75 0 01-3.733 4.116h-2.5V17.5h1.875v1.25z"
      />
    </svg>
  );
}

function Increase({ className }: IconProps) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.55 11.834h1V9.067h2.783v-1H8.55v-2.9h-1v2.9H4.666v1H7.55v2.767zm.454 3.333c-.92 0-1.783-.175-2.592-.525a6.774 6.774 0 01-2.12-1.433 6.77 6.77 0 01-1.434-2.123 6.465 6.465 0 01-.525-2.594c0-.92.175-1.785.525-2.594a6.67 6.67 0 011.433-2.114 6.843 6.843 0 012.123-1.425 6.465 6.465 0 012.594-.526c.92 0 1.785.176 2.594.525a6.74 6.74 0 012.114 1.425c.6.6 1.075 1.306 1.425 2.117a6.48 6.48 0 01.525 2.596c0 .919-.175 1.783-.525 2.591a6.809 6.809 0 01-1.425 2.118A6.731 6.731 0 0110.6 14.64a6.45 6.45 0 01-2.596.528zm.004-1c1.572 0 2.908-.553 4.008-1.659 1.1-1.105 1.65-2.444 1.65-4.016s-.549-2.909-1.646-4.009c-1.098-1.1-2.438-1.65-4.02-1.65-1.567 0-2.903.55-4.009 1.647C2.886 5.578 2.333 6.918 2.333 8.5c0 1.567.553 2.903 1.658 4.008 1.106 1.106 2.445 1.659 4.017 1.659z"
        fill="currentColor"
      />
    </svg>
  );
}

export const Icon = {
  Cart,
  Decrease,
  Increase,
  CarbonNeutral,
};
