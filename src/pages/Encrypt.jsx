import React, { useState } from "react";
import CryptoJS from "crypto-js";

function EncryptionPage() {
  const [securityKey, setSecurityKey] = useState("");
  const [code, setCode] = useState("");
  const [encryptedData, setEncryptedData] = useState("");

  const handleEncrypt = () => {
    if (securityKey && code) {
      const encrypted = CryptoJS.AES.encrypt(code, securityKey).toString();
      setEncryptedData(encrypted);
    } else {
      setEncryptedData("Please provide both the security key and the code.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Encrypt Data
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Security Key
          </label>
          <input
            type="text"
            value={securityKey}
            onChange={(e) => setSecurityKey(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <button
          onClick={handleEncrypt}
          className="w-full bg-primary-500 text-white py-2 rounded-md shadow hover:bg-primary-600 transition duration-200"
        >
          Encrypt
        </button>
        {encryptedData && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="text-lg font-medium text-gray-900">
              Encrypted Output:
            </h3>
            <p className="mt-2 break-all text-gray-800">{encryptedData}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EncryptionPage;
