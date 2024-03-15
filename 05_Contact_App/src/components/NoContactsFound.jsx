import React from "react";

const NoContactsFound = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] gap-4">
      <div>
        <img src="contact.png" alt="" />
      </div>
      <h1 className="text-white font-medium">No Contact Found</h1>
    </div>
  );
};

export default NoContactsFound;
