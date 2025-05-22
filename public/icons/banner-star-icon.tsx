import React from 'react';

const BannerStarIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none" className={className}>
            <path d="M14.85 14.56C14.04 10.28 13.64 5.9 13.67 1.53C15.87 4.91 18.26 8.15 20.81 11.25C25.1 6.99 29.82 3.21 34.86 0C32.59 4.63 30.64 9.43 29.04 14.36C34.01 15.66 38.85 17.54 43.44 19.93C39.27 22.03 34.51 22.77 29.94 22.04C32.33 26.83 34.3 31.86 35.8 37.05C31.43 34.27 27.42 30.85 23.92 26.92C21.27 31.83 18.61 36.74 15.96 41.66C15.06 36.05 15.24 30.26 16.49 24.73C11.01 25.34 5.47 25.29 0 24.59C4.83 21.14 9.75999 17.85 14.85 14.56Z" fill="#7CC466" />
        </svg>
    );
};

export default BannerStarIcon;