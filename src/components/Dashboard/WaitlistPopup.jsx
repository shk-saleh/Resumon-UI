import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WaitlistPopup = ({ isOpen, onClose, type = 'success' }) => {

  const isSuccess = type === 'success';
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-0"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  {isSuccess ? (
                    <CheckCircle className="w-12 h-12 text-[#2DC08D]" />
                  ) : (
                    <AlertCircle className="w-16 h-16 text-[#EB904A]" />
                  )}
                </motion.div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {isSuccess ? 'Congrats! ' : 'Oops'}
                </h2>

                {/* Message */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {isSuccess 
                    ? 'Your email has been added to our waitlist and you will be notified soon!'
                    : 'This email is already added to our waitlist. You will be notified soon!'}
                </p>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-full bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#26A97C] transition-colors cursor-pointer"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistPopup;