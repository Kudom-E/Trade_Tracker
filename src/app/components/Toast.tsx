import React from "react";

type Props = {
  message: string;
};

const Toast = ({ message }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full pt-8 pb-10 z-50">
      <div className="flex px-6 justify-center">
        <div className="inline-flex py-4 pl-5 pr-6 items-center bg-green-100 border border-green-500 rounded-3xl">
          <span className="mr-4">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="21"
                height="21"
                rx="10.5"
                fill="#219653"
              ></rect>
              <path
                d="M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z"
                fill="white"
              ></path>
            </svg>
          </span>
          <p className="text-green-800">
            Your settings have been saved {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
