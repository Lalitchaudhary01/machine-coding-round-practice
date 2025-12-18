"use client";
import React from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("Tab1");
  const tabs = ["Tab1", "Tab2", "Tab3"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <div>Content for Tab 1</div>;
      case "Tab2":
        return <div>Content for Tab 2</div>;
      case "Tab3":
        return <div>Content for Tab 3</div>;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Tabs Component
        </h1>
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 -mb-px border-b-2 ${
                activeTab === tab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
