"use client";

import Image from "next/image";
import Link from "next/link";

const EcomindApp = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 px-4 py-8 md:px-12 lg:px-20">
      {/* Gambar Tablet dengan Masking */}
      <div className="relative w-full max-w-md lg:max-w-lg">
        <div className="relative rounded-xl overflow-hidden border border-gray-200">
          <div className="relative">
            <Image
              src="/images/ecomind.jpeg"
              alt="Try Ecomind"
              width={200}
              height={350}
              className="w-full h-auto object-cover"
            />
            {/* Masking Atas */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-abu"></div>
            {/* Masking Bawah */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-abu"></div>
          </div>
        </div>
      </div>

      {/* Konten Teks & Tombol */}
      <div className="w-full max-w-lg space-y-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          CANARY CARE REPORT 2025
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Smarter care, better outcomes: the role of tech and data in health and
          social care
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">
          Download the new report from Canary Care exploring the barriers
          blocking digital progress in social care.
        </p>
        <div className="mt-6">
          <Link
            href="/downloads/canary-care-report-2025.pdf"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-full transition-colors duration-200 shadow-sm"
          >
            Download →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcomindApp;
