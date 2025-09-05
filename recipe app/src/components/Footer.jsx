import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-12">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} My Recipe App. All rights reserved.
        </p>
        <div className="space-x-3 mt-2">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
