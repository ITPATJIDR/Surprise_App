import React, { useState } from 'react';

// CSS for font-face declaration
const fontStyles = `
  @font-face {
    font-family: 'LoveFont';
    src: url('assets/fonts/iannnnn-DOG/iannnnn-DOG-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const ValentineLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowLetter(true);
    }, 1000);
  };

  return (
        <>
      {/* Inject font-face CSS */}
      <style>{fontStyles}</style>
      
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="relative">
          {/* Envelope */}
          <div 
            className={`cursor-pointer transition-all duration-1000 transform 
              ${isOpen ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}
            onClick={handleEnvelopeClick}
          >
            {/* Envelope Body */}
            <div className="w-80 h-48 bg-red-500 relative">
              {/* Front Flap */}
              <div className={`absolute top-0 left-0 w-full h-0 border-l-[160px] border-r-[160px] 
                border-t-[100px] border-l-transparent border-r-transparent border-red-600
                transform origin-top transition-all duration-1000
                ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              </div>
              
              {/* Back Flaps */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] border-b-[100px] 
                border-l-transparent border-b-red-400">
              </div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] border-b-[100px] 
                border-r-transparent border-b-red-400">
              </div>
            </div>
          </div>

          {/* Letter */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-white p-8 rounded-lg shadow-xl w-72 transition-all duration-1000
            ${showLetter ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-dog">ตูดดหมึกกของงงพรี่</h2>
            <p className="text-gray-700 leading-relaxed font-dog text-[20px]">
              วาเลนไทน์นี้ ไม่ได้อยุ่ด้วยกานอีกเเล้วนะค้าบบ พี่เลยทำเว็บนี้ขึ้นมาเเทน 555555 ดีมะๆๆๆ 
              อยาก อยุ่ด้วยกานเเล้วอยากกอด หอมๆๆงับ
            </p>
            <p className="mt-4 text-gray-700 font-dog">
              ทำมะวานเลยนะเนียย พรี่เก่งงมะละจ๊ะ อิอิ
            </p>
            <p className="mt-6 text-red-500 font-bold text-right font-dog">
              รักหนูนะค้าบบ,<br />
              ไอตูดหมึกกก
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValentineLetter;