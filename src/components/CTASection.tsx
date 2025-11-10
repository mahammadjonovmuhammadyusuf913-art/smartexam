'use client';

export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
            IMTIHONGA <br />
            <span className="text-green-500">TAYYORMISIZ?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            SmartExam-ga ishonadigan minglab muvaffaqiyatli nomzodlarga qo'shiling
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-green-500 text-black font-bold text-xl hover:bg-green-400 transition-all transform hover:scale-105">
              HOZIR BOSHLASH
            </button>
            <button className="px-12 py-5 border-2 border-white text-white font-bold text-xl hover:bg-white hover:text-black transition-all transform hover:scale-105">
              DEMOGA QO'SHILISH
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black mb-4">SMARTEXAM</h3>
              <p className="text-gray-400">
                Baholash usullarini ilg'or texnologiyalar yordamida o'zgartiramiz.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">ILOVALAR</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Biz haqimizda</li>
                <li className="hover:text-white cursor-pointer transition-colors">Xususiyatlar</li>
                <li className="hover:text-white cursor-pointer transition-colors">Narxlar</li>
                <li className="hover:text-white cursor-pointer transition-colors">Kontakt ma'lumotlar</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-4">KONTAKT MA'LUMOTLARIMIZ</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">seitalimuratov@gmail.com</li>
                <li className="hover:text-white cursor-pointer transition-colors">+998 (94) 676 76 47</li>
                <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm border-t border-zinc-800 pt-8">
            <p>© 2025 SmartExam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
