"use client";
import React from 'react'

const Accordian = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleAccordian = () => {
        setIsOpen(!isOpen);
    }
    const items = [
        {
            title: "Section 1",
            content: "Content for Section 1",
        },
        {
            title: "Section 2",
            content: "Content for Section 2",
        },
        {
            title: "Section 3",
            content: "Content for Section 3",
        },
    ]
        }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
            Accordian Component
        </h1>
        <div className="border rounded-lg">
            {items.map((item, index) => (
                <div key={index} className="border-b p-4 cursor-pointer" onClick={toggleAccordian}>
                    <h2 className="font-semibold">{item.title}</h2>
                    {isOpen && <p className="mt-2">{item.content}</p>}
                </div>
            ))}
        </div>
      </div>
    </div>
    
  )
}

export default Accordian