import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simple bot responses
      setTimeout(() => {
        let response =
          "Thank you for your message. We'll get back to you soon!";
        if (input.toLowerCase().includes("software")) {
          response =
            "We offer comprehensive software solutions for various industries. Check out our Software Applications page!";
        } else if (input.toLowerCase().includes("marketing")) {
          response =
            "Our digital marketing services include SEO and social media management. Visit our Digital Marketing page!";
        } else if (input.toLowerCase().includes("plant")) {
          response =
            "Our Plant Marketplace allows you to buy and sell plants legally. Explore it now!";
        } else if (input.toLowerCase().includes("safety")) {
          response =
            "Our Safety App uses image recognition to identify hazards. Learn more on our Safety App page!";
        } else if (input.toLowerCase().includes("green")) {
          response =
            "Join our Green Initiative for sustainable practices. Check out our Green Initiative page!";
        }
        setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-10 top-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-40"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-16 left-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="font-semibold">Chat with us</h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
