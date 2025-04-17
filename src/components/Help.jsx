import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("Partner Onboarding");
  const [openIndex, setOpenIndex] = useState(null);

  const data = {
    "Partner Onboarding": [
      {
        question: "I want to partner my restaurant with FoodZone",
        answer:
          "You can register your restaurant on FoodZone by visiting our partner page and filling out the necessary details.",
      },
      {
        question:
          "What are the mandatory documents needed to list my restaurant on FoodZone?",
        answer:
          "You will need your FSSAI license, GST certificate, PAN card, and a bank account proof.",
      },
      {
        question: "I want to opt-out from Google reserve",
        answer:
          "Please reach out to our support team and request opt-out. It typically takes 24-48 hours.",
      },
    ],
    Legal: [
      {
        question: "What are the terms and conditions?",
        answer:
          "You can view our updated terms and conditions on our legal page. It covers operations, data policies, and liabilities.",
      },
      {
        question: "Is my data secure with FoodZone?",
        answer:
          "Absolutely. We comply with industry standards and protect all your information using end-to-end encryption.",
      },
      {
        question: "Can I use FoodZone internationally?",
        answer:
          "Currently, FoodZone operates only within India. International expansion is in our roadmap.",
      },
    ],
    FAQs: [
      {
        question: "How can I track my orders?",
        answer:
          "You can track your orders in real-time using the FoodZone app under the 'My Orders' section.",
      },
      {
        question: "How do I cancel an order?",
        answer:
          "Go to your order history, select the order, and click on 'Cancel'. Note: Cancellation is only allowed before the food is prepared.",
      },
      {
        question: "What are the refund policies?",
        answer:
          "Refunds are processed within 5-7 business days depending on your bank. Please refer to our refund policy page for more info.",
      },
    ],
    "Instamart Onboarding": [
      {
        question: "How do I list my products on Instamart?",
        answer:
          "Register on our vendor portal and follow the steps to list your grocery items with proper inventory and pricing.",
      },
      {
        question: "What kind of packaging is required?",
        answer:
          "All items must be sealed properly and labeled clearly to meet our quality and safety standards.",
      },
      {
        question: "How does delivery work for Instamart?",
        answer:
          "Our logistics team will handle delivery from your store to the customer. Just pack the order and mark it ready.",
      },
    ],
  };

  const categories = Object.keys(data);

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-50 p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
      <p className="text-gray-500 mb-6">
        Let's take a step ahead and help you better.
      </p>

      <div className="flex w-full max-w-6xl h-full bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-green-50 p-4">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2 mb-2 rounded-lg font-medium ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-white text-black hover:bg-green-100"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // close answers on tab switch
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="w-3/4 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">{activeTab}</h2>
          {data[activeTab].map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left bg-gray-100 px-4 py-3 rounded-md hover:bg-green-100 transition-all"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 px-4 text-gray-700 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
