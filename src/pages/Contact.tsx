// import { ChangeEvent, FormEvent, useState } from "react";
// import { InputSpotlightBorder } from "../components/InputSpotLightBorder";
// import { FormState } from "../types";
// import { Loading } from "../icons/Loading";

// const INITIAL_STATE: FormState = {
//   email: "",
//   name: "",
//   message: "",
// };
// // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export const Contact = () => {
//   const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
//   const [isLoading, setLoading] = useState<boolean>(false);
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       console.log("Sending message");
//       setFormData(INITIAL_STATE);
//       setLoading(false);
//     }, 1000);
//     // sendForm("service_auegjl2", "template_360353a", JSON.stringify(formData), {
//     //   publicKey: "FjakvpcWCC_VxyhNF",
//     // }).then(
//     //   () => {
//     //     console.log("SUCCESS");
//     //   },
//     //   (error) => {
//     //     console.log("FAILED", error.text);
//     //   }
//     // );

//     // const errors: { [key: string]: string } = {}; template_360353a
//   };
//   return (
//     <div className="bg-gray-800 p-8 rounded-lg max-w-xl mx-auto mt-4 shadow-md">
//       <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-4">
//         <div className="mb-5">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Email*
//           </label>
//           <InputSpotlightBorder
//             value={formData.email}
//             handleChange={handleChange}
//             type="text"
//             name="email"
//             placeholder="email@example.com"
//           />
//         </div>
//         <div className="mb-5">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Full Name*
//           </label>
//           <InputSpotlightBorder
//             value={formData.name}
//             handleChange={handleChange}
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="mb-5">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Message*
//           </label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Leave a comment..."
//           ></textarea>
//         </div>
//         <button
//           disabled={isLoading}
//           className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none 
//               focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50
//               ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//         >
//           <span
//             className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
//                bg-[conic-gradient(from_90deg_at_50%_50%,#A0E4FF_0%,#38BDF8_30%,#1D4ED8_60%,#A0E4FF_100%)]"
//           />
//           <span
//             className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full 
//                bg-gray-800 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl"
//           >
//             {isLoading ? (
//               <>
//                 Sending... <Loading className="ml-2 size-10" />
//               </>
//             ) : (
//               "Send"
//             )}
//           </span>
//         </button>
//       </form>
//       <pre>{JSON.stringify(formData)}</pre>
//     </div>
//   );
// };
