import { MessageCircle } from "lucide-react";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/919XXXXXXXXX?text=Hi%20I%20want%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
         fixed bottom-6 right-6 z-50
         flex items-center justify-center
         w-14 h-14 rounded-full
         bg-gradient-to-br from-[#25D366] to-[#128C7E]
         text-white text-2xl
         shadow-lg shadow-black/50
         transition-all duration-300
         hover:scale-110
         group
"
    >
      <MessageCircle size={26} strokeWidth={2} />
      <span
        className="
         absolute right-16 top-1/2 -translate-y-1/2
         whitespace-nowrap
         bg-black text-white text-sm px-3 py-1 rounded-md
         opacity-0 scale-95
         group-hover:opacity-100 group-hover:scale-100
         transition
    "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
