import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is BigBattles?",
    answer:
      "BigBattles is a competitive platform where users can participate in skill-based tournaments across various games and challenges. Win coins, unlock rewards, and climb the leaderboard!",
  },
  {
    question: "How do I join a tournament?",
    answer:
      "Simply sign up, select a tournament from the homepage or tournaments section, and follow the instructions to join. Some tournaments may be free, while others may require entry coins.",
  },
  {
    question: "Is BigBattles free to use?",
    answer:
      "Yes! You can start playing for free. You earn coins through referrals, bonuses, or by winning games. Some premium tournaments may require an entry fee using in-app coins.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "Invite your friends using your unique referral link. When they sign up: You get 150 coins, They get 100 coins. Win-win!",
  },
  {
    question: "How do I download the BigBattles app?",
    answer:
      "You can download our Android app directly from the website. iOS version is coming soon. Make sure to enable installation from unknown sources if downloading directly.",
  },
  {
    question: "Are the games fair and skill-based?",
    answer:
      "Yes, all our games and tournaments are skill-based. Our platform ensures fair play and uses anti-cheat measures to maintain competitiveness and integrity.",
  },
  {
    question: "What are BigBattles Coins?",
    answer:
      "Coins are our in-app currency. You can earn them through gameplay, referrals, or bonus events. Coins can be used to enter paid tournaments or redeem exciting rewards.",
  },
  {
    question: "Can I withdraw my winnings?",
    answer:
      "Yes! If you participate in cash-based events, your winnings can be withdrawn through supported payment methods like UPI, Paytm, or bank transfer (as per your region).",
  },
  {
    question: "I didn't receive my referral bonus. What should I do?",
    answer:
      "Make sure your friend used your referral link or code, completed the sign-up process, and didn’t already have an account. If everything checks out, contact our support team.",
  },
  {
    question: "Where can I contact support?",
    answer:
      "You can reach us via email at support@bigbattles.com or through the Support section in the app or website.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full bg-fixed bg-cover bg-center flex flex-col items-center justify-start pb-8 pt-20 px-4 sm:px-10"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/ai/illus_our/20230428/e4144c271b3c2da21f5409da25f448f8.jpg!w700wp')",
      }}
    >
      <h2 className="text-white text-4xl sm:text-5xl font-bold mb-10 font-sans uppercase tracking-wide">
        FAQ
      </h2>

      <div className="w-full max-w-5xl space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.id}
            className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === idx ? "bg-white" : "bg-transparent"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className={`w-full flex items-center hover:cursor-pointer justify-between px-6 py-5 text-left font-semibold sm:text-xl transition-colors duration-300 ${
                openIndex === idx ? "text-black" : "text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">{faq.id}</span>
                <span>{faq.question}</span>
              </div>
              {openIndex === idx ? (
                <Minus className="text-black" />
              ) : (
                <Plus className="text-white" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && faq.answer && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-700 text-base sm:text-lg bg-white">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
