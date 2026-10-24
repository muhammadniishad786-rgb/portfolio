
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "91XXXXXXXXXX"; // Replace with your number
  const message = "Hi Nishad! I visited your portfolio and would like to connect with you.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
