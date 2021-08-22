import React from "react";

const ShopingBusketChevron = ({ classN, width, height }) => {
  return (
    <div
      style={{
        width: "63px",
        height: "40px",
        backgroundColor: "#E4E8EC",
        borderRadius: "4px",
        textAlign: "center",
        lineHeight: "54px",
        cursor: "pointer",
      }}
    >
      <svg
        className={classN}
        width={width}
        height={height}
        viewBox="0 0 24 22"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.800006 0C0.358163 0 0 0.360357 0 0.804877C0 1.2494 0.358163 1.60975 0.800006 1.60975H3.45837C4.78244 4.90908 6.08663 8.21445 7.40006 11.5198L6.19173 14.4459C6.0905 14.6898 6.11898 14.984 6.26509 15.2037C6.41122 15.4234 6.67064 15.5621 6.93339 15.561H20.2668C20.6895 15.5669 21.0782 15.1814 21.0782 14.7561C21.0782 14.3308 20.6895 13.9452 20.2668 13.9512H8.1334L8.82508 12.2911L21.6668 11.2599C22.003 11.2333 22.3072 10.9699 22.3835 10.6395L23.9835 3.66387C24.0882 3.19403 23.6787 2.68136 23.2002 2.68292H5.60836L4.74169 0.503048C4.62302 0.207975 4.31641 8.04877e-06 4.00003 0H0.800006ZM6.25005 4.29268H22.1919L20.9502 9.70883L8.79175 10.6814L6.25005 4.29268ZM9.60007 16.6342C8.13678 16.6342 6.93339 17.8448 6.93339 19.3171C6.93339 20.7893 8.13678 22 9.60007 22C11.0634 22 12.2668 20.7893 12.2668 19.3171C12.2668 17.8449 11.0634 16.6342 9.60007 16.6342ZM17.6001 16.6342C16.1368 16.6342 14.9334 17.8449 14.9334 19.3171C14.9334 20.7893 16.1368 22 17.6001 22C19.0634 22 20.2668 20.7893 20.2668 19.3171C20.2668 17.8448 19.0634 16.6342 17.6001 16.6342ZM9.60007 18.2439C10.1987 18.2439 10.6667 18.7148 10.6667 19.3171C10.6667 19.9193 10.1987 20.3902 9.60007 20.3902C9.00154 20.3902 8.5334 19.9193 8.5334 19.3171C8.5334 18.7149 9.00154 18.2439 9.60007 18.2439ZM17.6001 18.2439C18.1987 18.2439 18.6668 18.7149 18.6668 19.3171C18.6668 19.9193 18.1987 20.3902 17.6001 20.3902C17.0015 20.3902 16.5335 19.9193 16.5335 19.3171C16.5335 18.7148 17.0015 18.2439 17.6001 18.2439Z"
          fill=" #676F77"
        />
      </svg>
    </div>
  );
};

export default ShopingBusketChevron;
