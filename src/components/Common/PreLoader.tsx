
import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-999999 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;
