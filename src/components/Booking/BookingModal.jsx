import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "../forms/BookingForm";

const BookingModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-6xl"
        >
          <BookingForm onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
