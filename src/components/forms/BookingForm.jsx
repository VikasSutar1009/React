// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { Send, CheckCircle, Shield, Zap } from "lucide-react";
// import { useBooking } from "../../hooks/useBooking";

// const BookingForm = () => {
//   const formRef = useRef();

//   const { sendBooking, loading, status } = useBooking();

//   const services = [
//     "Cleaning Services",
//     "Metal Fabrication",
//     "Interior/Exterior Painting",
//     "Electrical Maintenance",
//     "Custom Wall Paintings",
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendBooking(formRef.current);
//   };

//   return (
//     <section className="py-24 bg-slate-900" id="contact">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-5 text-white">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-black mb-6 leading-tight">
//               Start Your <span className="text-blue-500">Fixify</span> Journey
//             </h2>

//             <p className="text-slate-400 text-lg mb-10">
//               Join 2,500+ homeowners and businesses who trust us for premium services.
//             </p>

//             <div className="space-y-6">
//               <div className="flex gap-4 items-start">
//                 <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
//                   <Shield size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold">Fully Insured Work</h4>
//                   <p className="text-sm text-slate-500">
//                     Your property is protected by our coverage.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <div className="bg-yellow-600/20 p-3 rounded-xl text-yellow-500">
//                   <Zap size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold">Fast Turnaround</h4>
//                   <p className="text-sm text-slate-500">
//                     Most tasks finished the same day.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="lg:col-span-7">
//           <motion.div
//             className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
//             whileHover={{
//               boxShadow: "0 25px 50px -12px rgba(59,130,246,0.25)",
//             }}
//           >
//             {status === "success" ? (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-12"
//               >
//                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle size={40} />
//                 </div>
//                 <h3 className="text-3xl font-black mb-2">Success!</h3>
//                 <p className="text-slate-500">
//                   Our specialist will contact you within 30 minutes.
//                 </p>

//                 <button
//                   onClick={() => window.location.reload()}
//                   className="mt-8 text-blue-600 font-bold hover:underline"
//                 >
//                   Need another service?
//                 </button>
//               </motion.div>
//             ) : (
//               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="text-xs font-black text-slate-400 uppercase tracking-tight">
//                       Your Name
//                     </label>
//                     <input
//                       name="user_name"
//                       required
//                       className="w-full bg-slate-50 p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none"
//                       placeholder="Alex Smith"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-xs font-black text-slate-400 uppercase tracking-tight">
//                       Phone Number
//                     </label>
//                     <input
//                       name="user_phone"
//                       required
//                       type="tel"
//                       className="w-full bg-slate-50 p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none"
//                       placeholder="+91..."
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-xs font-black text-slate-400 uppercase tracking-tight">
//                     Required Service
//                   </label>
//                   <select
//                     name="service_type"
//                     required
//                     className="w-full bg-slate-50 p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none"
//                   >
//                     {services.map((s) => (
//                       <option key={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-xs font-black text-slate-400 uppercase tracking-tight">
//                     Project Description
//                   </label>
//                   <textarea
//                     name="message"
//                     rows="3"
//                     className="w-full bg-slate-50 p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none resize-none"
//                     placeholder="Tell us what needs fixing..."
//                   />
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading}
//                   className={`w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 ${
//                     loading
//                       ? "bg-slate-400"
//                       : "bg-blue-600 hover:bg-slate-900 shadow-xl shadow-blue-500/20"
//                   }`}
//                 >
//                   <Send size={20} />
//                   {loading ? "Sending..." : "BOOK MY FIXER"}
//                 </motion.button>

//                 <p className="text-[10px] text-center text-slate-400">
//                   By clicking, you agree to our 24-hour response guarantee.
//                 </p>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;


import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../hooks/useBooking";

const BookingForm = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const { sendBooking, loading, status } = useBooking();

  const services = [
    "Cleaning Services",
    "Metal Fabrication",
    "Interior/Exterior Painting",
    "Electrical Maintenance",
    "Custom Wall Paintings",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBooking(formRef.current);
  };

  // 👉 Redirect on success
  useEffect(() => {
    if (status === "success") {
      navigate("/success");
    }
  }, [status, navigate]);

  return (
    <section className="py-24 bg-slate-900" id="Book Service">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Start Your <span className="text-blue-500">Fixify</span> Journey
            </h2>

            <p className="text-slate-400 text-lg mb-10">
              Join 2,500+ homeowners and businesses who trust us for premium services.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Fully Insured Work</h4>
                  <p className="text-sm text-slate-500">
                    Your property is protected by our coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-yellow-600/20 p-3 rounded-xl text-yellow-500">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Fast Turnaround</h4>
                  <p className="text-sm text-slate-500">
                    Most tasks finished the same day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-7">
          <motion.div
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(59,130,246,0.25)",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase">
                    Your Name
                  </label>
                  <input
                    name="user_name"
                    required
                    className="w-full bg-slate-50 p-4 text-black rounded-xl focus:ring-2 ring-blue-500 outline-none"
                    placeholder="Alex Smith"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-400 uppercase">
                    Phone Number
                  </label>
                  <input
                    name="user_phone"
                    required
                    type="tel"
                    className="w-full bg-slate-50 text-black p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-slate-400 uppercase">
                  Required Service
                </label>
                <select
                  name="service_type"
                  required
                  className="w-full bg-slate-50 p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-black text-slate-400 uppercase">
                  Project Description
                </label>
                <textarea
                  name="message"
                  rows="3"
                  className="w-full bg-slate-50 text-black p-4 rounded-xl focus:ring-2 ring-blue-500 outline-none resize-none"
                  placeholder="Tell us what needs fixing..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 ${
                  loading
                    ? "bg-slate-400"
                    : "bg-blue-600 hover:bg-slate-900 shadow-xl shadow-blue-500/20"
                }`}
              >
                <Send size={20} />
                {loading ? "Sending..." : "BOOK MY FIXER"}
              </motion.button>

              <p className="text-[10px] text-center text-slate-400">
                By clicking, you agree to our 24-hour response guarantee.
              </p>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

