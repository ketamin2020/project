function ChevronCompare({ classN, width, height }) {
  return (
    <svg
      className={classN}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13V15"
        stroke="#676F77"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 9V15"
        stroke="#676F77"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 1V15"
        stroke="#676F77"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 5V15"
        stroke="#676F77"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronCompare;
