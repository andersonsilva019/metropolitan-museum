type IconProps = {
  size?: number;
  color?: string;
}

export function SearchIcon({ size = 24, color = '#000000' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.38036 18.1429C14.0087 18.1429 17.7607 14.3053 17.7607 9.57143C17.7607 4.83756 14.0087 1 9.38036 1C4.75201 1 1 4.83756 1 9.57143C1 14.3053 4.75201 18.1429 9.38036 18.1429Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.6656 16L20.5542 21" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function CloseIcon({ size = 24, color = '#000000' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.146894 0.146894C0.193339 0.10033 0.248515 0.0633873 0.30926 0.0381808C0.370005 0.0129744 0.435126 0 0.500894 0C0.566661 0 0.631782 0.0129744 0.692527 0.0381808C0.753272 0.0633873 0.808448 0.10033 0.854894 0.146894L3.50089 2.79389L6.14689 0.146894C6.19338 0.100406 6.24857 0.0635292 6.30931 0.0383701C6.37005 0.013211 6.43515 0.000261784 6.50089 0.000261784C6.56664 0.000261784 6.63174 0.013211 6.69248 0.0383701C6.75322 0.0635292 6.80841 0.100406 6.85489 0.146894C6.90138 0.193381 6.93826 0.248571 6.96342 0.30931C6.98858 0.370049 7.00152 0.43515 7.00152 0.500894C7.00152 0.566637 6.98858 0.631738 6.96342 0.692477C6.93826 0.753217 6.90138 0.808406 6.85489 0.854894L4.20789 3.50089L6.85489 6.14689C6.90138 6.19338 6.93826 6.24857 6.96342 6.30931C6.98858 6.37005 7.00152 6.43515 7.00152 6.50089C7.00152 6.56664 6.98858 6.63174 6.96342 6.69248C6.93826 6.75322 6.90138 6.80841 6.85489 6.85489C6.80841 6.90138 6.75322 6.93826 6.69248 6.96342C6.63174 6.98858 6.56664 7.00152 6.50089 7.00152C6.43515 7.00152 6.37005 6.98858 6.30931 6.96342C6.24857 6.93826 6.19338 6.90138 6.14689 6.85489L3.50089 4.20789L0.854894 6.85489C0.808406 6.90138 0.753217 6.93826 0.692477 6.96342C0.631738 6.98858 0.566637 7.00152 0.500894 7.00152C0.43515 7.00152 0.370049 6.98858 0.30931 6.96342C0.248571 6.93826 0.193381 6.90138 0.146894 6.85489C0.100406 6.80841 0.0635292 6.75322 0.0383701 6.69248C0.013211 6.63174 0.000261784 6.56664 0.000261784 6.50089C0.000261784 6.43515 0.013211 6.37005 0.0383701 6.30931C0.0635292 6.24857 0.100406 6.19338 0.146894 6.14689L2.79389 3.50089L0.146894 0.854894C0.10033 0.808448 0.0633873 0.753272 0.0381808 0.692527C0.0129744 0.631782 0 0.566661 0 0.500894C0 0.435126 0.0129744 0.370005 0.0381808 0.30926C0.0633873 0.248515 0.10033 0.193339 0.146894 0.146894Z" fill={color} />
    </svg>

  )
}

export function FavoriteIcon({ size = 24, color = '#000000' }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 256 256">
      <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path>
    </svg>
  )
}

export function UnFavoriteIcon({ size = 24, color = '#000000' }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 256 256">
      <path d="M178,36c-21.44,0-39.92,10.19-50,27.07C117.92,46.19,99.44,36,78,36A58.07,58.07,0,0,0,20,94c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,152.47,236,122.59,236,94A58.07,58.07,0,0,0,178,36ZM128,211.42C114,203.46,28,152.07,28,94A50.06,50.06,0,0,1,78,44c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,55.31,156.89,44,178,44a50.06,50.06,0,0,1,50,50C228,152,142,203.46,128,211.42Z"></path>
    </svg>
  )
}