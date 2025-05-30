// // import React from 'react'

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
//       <h1 className="text-2xl font-semibold mb-4">Support</h1>
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <p className="mb-2">
//           <strong>Address:</strong> <br />
//           123 Studio DZNS Street, <br />
//           Design City, CA 90210, <br />
//           United States
//         </p>
//         <p>
//           <strong>Email:</strong>{" "}
//           <a
//             href="mailto:contact@studiodzns.com"
//             className="text-blue-600 hover:underline"
//           >
//             contact@studiodzns.com
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Index;

import React from "react";

const Index = () => {
  return (
    <div className="wrapper1 h-screen overflow-y-hidden">
      <div className="hero-section flex flex-col justify-center items-center relative h-screen overflow-y-hidden">
        {/* Logo positioned at the top center */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 p-4 z-50">
          <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
        </div>

        {/* Support Content Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/90 px-4">
          <div className="bg-transparent rounded-lg shadow-md p-6 text-center max-w-md w-full text-gray-800 space-y-4">
            <h1 className="text-2xl font-semibold">Support</h1>
            <div>
              <p>
                <strong>Address:</strong>
                <br />
                18/9,Chitrakoot building,
                <br />
                Rafi Ahmed Kidwai road, Wadala west, Mumbai
                <br />
                Maharashtra - 400031
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@studiodzns.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@studiodzns.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="absolute bottom-10 flex justify-center w-full z-[20]">
          <ul className="flex space-x-6 text-white">
            <a
              href="https://www.instagram.com/studiodzns?igsh=MXY1NTR0eW92NXdrZA=="
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Instagram</li>
            </a>
            <a
              href="https://www.linkedin.com/company/dzns/"
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>LinkedIn</li>
            </a>
          </ul>
        </div>
      </div>

      {/* Optional gif overlay */}
      <div className="gif-overlay"></div>
    </div>
  );
};

export default Index;
