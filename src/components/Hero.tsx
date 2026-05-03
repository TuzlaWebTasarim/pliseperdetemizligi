'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = heroRef.current?.querySelectorAll('.fade-up')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f8faf8]"
      aria-label="Ana başlık bölümü"
    >
      {/* Decorative pleated pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Plise desen SVG - sağ taraf dekoratif */}
        <svg
          className="absolute right-0 top-0 h-full opacity-[0.07]"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={i}
              x1={i % 2 === 0 ? 10 + i * 12 : 16 + i * 12}
              y1="0"
              x2={i % 2 === 0 ? 16 + i * 12 : 10 + i * 12}
              y2="800"
              stroke="#404e5e"
              strokeWidth="1.5"
            />
          ))}
        </svg>
        {/* Sol üst ışık bloğu */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#83bd81] opacity-[0.08] blur-3xl" />
        {/* Sağ alt ışık bloğu */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#404e5e] opacity-[0.05] blur-3xl" />
      </div>

      <div className="container-main w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Sol: İçerik */}
          <div className="order-2 md:order-1">
            {/* Üst badge */}
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/15 border border-[#83bd81]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#83bd81] animate-pulse" />
              <span className="text-[#404e5e] text-xs font-semibold tracking-wider uppercase">
                Fenetre Systems — Türkiye & Avrupa
              </span>
            </div>

            {/* H1 */}
            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#404e5e] leading-tight mb-5 text-balance">
              <a href="/" className="hover:text-[#5fa05d] transition-colors">
                Plise Perde Montajı
              </a>
              <br />
              <span className="text-[#83bd81]">Profesyonel</span> Kurulum,
              <br />
              Kapıya Teslim
            </h1>

            {/* Alt başlık */}
            <p className="fade-up text-lg text-[#5a6b7e] mb-8 leading-relaxed max-w-lg">
              <strong>Ölçüye özel üretilen</strong>{' '}
              <a href="/" className="text-[#5fa05d] font-semibold hover:underline">
                plise perdeler
              </a>
              , demonte şekilde adresinize gelir. Montaj hizmetimiz dahildir.{' '}
              <em>Türkiye'nin her iline</em> ve 6 Avrupa ülkesine 4–10 iş günü içinde teslimat yapıyoruz.
            </p>

            {/* Özellik listesi */}
            <ul className="fade-up space-y-3 mb-8">
              {[
                { icon: '✓', text: 'Ücretsiz ölçü alma ve yerinde danışmanlık' },
                { icon: '✓', text: 'Avrupa standartlarında EN 13561 sertifikalı kumaşlar' },
                { icon: '✓', text: 'Demonte teslimat + profesyonel montaj ekibi' },
                { icon: '✓', text: '2 yıl yapısal garanti, kesintisiz teknik destek' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#404e5e]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#83bd81] flex items-center justify-center text-white text-xs font-bold">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Butonlar */}
            <div className="fade-up flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20montaj%C4%B1%20i%C3%A7in%20fiyat%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#83bd81] text-white font-bold text-base shadow-lg shadow-[#83bd81]/30 hover:bg-[#5fa05d] hover:shadow-[#5fa05d]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hızlı Fiyat Al — WhatsApp
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border-2 border-[#404e5e] text-[#404e5e] font-bold text-base hover:bg-[#404e5e] hover:text-white transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                +90 540 336 3873
              </a>
            </div>
          </div>

          {/* Sağ: Görsel / SVG */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Ana plise perde SVG illüstrasyonu */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#404e5e]/10 border border-[#e8f0e8] p-6 overflow-hidden">
                {/* Pencere çerçevesi */}
                <svg
                  viewBox="0 0 320 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-label="Plise perde pencere görseli"
                >
                  {/* Gökyüzü arkaplanı */}
                  <rect x="20" y="20" width="280" height="340" rx="8" fill="#e8f4fd" />
                  {/* Binalar (dış görünüm) */}
                  <rect x="30" y="220" width="50" height="130" fill="#c8dce8" rx="2" />
                  <rect x="90" y="200" width="60" height="150" fill="#b8ccd8" rx="2" />
                  <rect x="170" y="230" width="45" height="120" fill="#c4d8e4" rx="2" />
                  <rect x="225" y="215" width="65" height="135" fill="#bcccd8" rx="2" />
                  {/* Güneş */}
                  <circle cx="260" cy="60" r="22" fill="#fde68a" opacity="0.8" />
                  {/* Pencere çerçevesi */}
                  <rect x="20" y="20" width="280" height="340" rx="8" fill="none" stroke="#404e5e" strokeWidth="6" />
                  {/* Orta ray */}
                  <line x1="160" y1="20" x2="160" y2="360" stroke="#404e5e" strokeWidth="4" />
                  {/* Üst ray */}
                  <rect x="20" y="20" width="280" height="14" rx="2" fill="#404e5e" />
                  {/* Plise perde katları - sol panel */}
                  {Array.from({ length: 18 }).map((_, i) => {
                    const y = 34 + i * 18
                    const isEven = i % 2 === 0
                    return (
                      <g key={`left-${i}`}>
                        <polygon
                          points={`20,${y} 158,${y} 158,${y + 9} 20,${y + 9}`}
                          fill={isEven ? '#83bd81' : '#a8d4a6'}
                          opacity={0.85 - i * 0.01}
                        />
                        <line x1="20" y1={y} x2="158" y2={y} stroke="#5fa05d" strokeWidth="0.8" opacity="0.5" />
                      </g>
                    )
                  })}
                  {/* Plise perde katları - sağ panel */}
                  {Array.from({ length: 18 }).map((_, i) => {
                    const y = 34 + i * 18
                    const isEven = i % 2 === 0
                    return (
                      <g key={`right-${i}`}>
                        <polygon
                          points={`162,${y} 300,${y} 300,${y + 9} 162,${y + 9}`}
                          fill={isEven ? '#83bd81' : '#a8d4a6'}
                          opacity={0.85 - i * 0.01}
                        />
                        <line x1="162" y1={y} x2="300" y2={y} stroke="#5fa05d" strokeWidth="0.8" opacity="0.5" />
                      </g>
                    )
                  })}
                  {/* Tutma kolu - sol */}
                  <rect x="85" y="354" width="20" height="6" rx="3" fill="#404e5e" />
                  {/* Tutma kolu - sağ */}
                  <rect x="215" y="354" width="20" height="6" rx="3" fill="#404e5e" />
                </svg>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-[#404e5e] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  %100 Ölçüye Özel
                </div>
                <div className="absolute bottom-4 left-4 bg-[#83bd81] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Avrupa Standartları
                </div>
              </div>

              {/* Floating stat kartları */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl border border-[#e8f0e8] px-4 py-3 hidden md:block">
                <div className="text-2xl font-extrabold text-[#83bd81]">15+</div>
                <div className="text-xs text-[#5a6b7e] font-medium">Yıl Üretim</div>
              </div>
              <div className="absolute -right-6 bottom-1/3 bg-white rounded-2xl shadow-xl border border-[#e8f0e8] px-4 py-3 hidden md:block">
                <div className="text-2xl font-extrabold text-[#404e5e]">30+</div>
                <div className="text-xs text-[#5a6b7e] font-medium">Ülke Teslimat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt istatistik bar */}
        <div className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '50.000+', label: 'Tamamlanan Montaj' },
            { val: '15+', label: 'Yıllık Deneyim' },
            { val: '30+', label: 'Ülkeye Teslimat' },
            { val: '%99', label: 'Müşteri Memnuniyeti' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e8f0e8] px-5 py-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-[#83bd81]">{stat.val}</div>
              <div className="text-xs md:text-sm text-[#5a6b7e] font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
