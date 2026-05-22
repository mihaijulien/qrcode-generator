import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { BsQrCode } from 'react-icons/bs';

function SimpleQRCodeGenerator() {

  const [ inputText, setInputText ] = useState("");

  return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-400 to-indigo-400">
        <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lx shadow-black/40
        hover:shadow-2xl flex flex-col items-center hover:scale-105 transition-all ease-in-out
        duration-400">
          <div className="flex flex-col items-center mb-6">
            <div className="w-18 h-18 flex items-center justify-center rounded-full
            bg-gradient-to-r from-rose-400 to-indigo-400 mb-2">

              <BsQrCode className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 mb-1">QA Code Generator</h1>

              <p className="text-gray-500 text-sm">Enter text or URL to create a QR Code</p>

              <textarea value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type text or URL..."
              className="w-full mb-5 px-4 py-3 bg-gray-50
              border border-gray-200 rounded-lg focus:ring-2
              focus:ring-blue-400 outline-none resize-none
              text-gray-700 placeholder-gray-400 shadow-sm
              transition duration-400"/>

              <div className="mb-5 flex items-center justify-center w-full">
                <div className="bg-white border border-gray-200 rounded-xl
                shadow-sm flex items-center justify-center p-4 min-h-[200px] w-full">
                  {
                    inputText.trim() ? (
                      <QRCodeCanvas value={inputText} size={200} className="rounded" />
                    ) : (
                      <BsQrCode className="w-16 h-16 mb-2 text-gray-300" />
                    )
                  }
                </div>
              </div>
        </div>
      </div>
      </div>
  );
}

export default SimpleQRCodeGenerator;