import React from "react";

const HeartChevron = ({ classN, width, height }) => {
  return (
    <svg
      className={classN}
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.41 0.328247C11.2469 0.328041 11.0839 0.337548 10.922 0.356717C9.19715 0.5635 8.38278 1.50451 7.99999 2.31366C7.61568 1.50451 6.80284 0.5635 5.07649 0.358215C4.9388 0.341729 4.80035 0.332227 4.66167 0.329745H4.59C0.336649 0.329745 -3.51714 6.87338 7.96339 13.6568C7.97438 13.6643 7.98685 13.6694 7.99999 13.6718C8.01047 13.6634 8.02318 13.6582 8.0366 13.6568C19.5156 6.87189 15.6649 0.329745 11.41 0.328247ZM7.99999 12.7997C5.23509 11.1214 3.27236 9.37276 2.14383 7.59113C1.2288 6.15414 0.932941 4.7576 1.27303 3.55436C1.47641 2.84317 1.91031 2.21656 2.50891 1.76957C3.10751 1.32257 3.83815 1.07958 4.59 1.07746H4.6449C4.75708 1.07984 4.86906 1.08784 4.98041 1.10144C6.10589 1.23629 6.88671 1.75026 7.30457 2.62983L7.99999 4.0878L8.69084 2.62983C9.10718 1.75026 9.88952 1.23629 11.015 1.10144C11.1466 1.08561 11.279 1.07761 11.4115 1.07746C12.1643 1.08046 12.8955 1.3249 13.4939 1.7736C14.0924 2.22231 14.5253 2.85074 14.727 3.56335C15.067 4.7621 14.7651 6.16163 13.8546 7.60012C12.7276 9.37276 10.7634 11.1214 7.99999 12.7997Z"
        fill="#676F77"
        stroke="#676F77"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default HeartChevron;
