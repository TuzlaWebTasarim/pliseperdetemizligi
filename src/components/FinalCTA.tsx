export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="py-20 md:py-28 bg-[#404e5e] relative overflow-hidden"
      aria-labelledby="cta-baslik"
    >
      {/* Dekoratif plise desen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px opacity-[0.06]"
            style={{
              left: `${5 + i * 5}%`,
              background: i % 2 === 0
                ? 'linear-gradient(180deg, transparent, #83bd81, transparent)'
                : 'linear-gradient(180deg, transparent, #fff, transparent)',
            }}
          />
        ))}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#83bd81] opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#83bd81] opacity-8 blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/20 border border-[#83bd81]/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#83bd81] animate-pulse" />
            <span className="text-[#83bd81] text-xs font-bold tracking-widest uppercase">Şimdi Başlayın</span>
          </div>

          {/* Başlık */}
          <h2 id="cta-baslik" className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight text-balance">
            <a href="/" className="hover:text-[#83bd81] transition-colors">Plise Perde Montajı</a> İçin
            <br />
            <span className="text-[#83bd81]">Bugün Adım Atın</span>
          </h2>
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif randevusu alın. Ölçüler yerinde belirlenir, kumaş numuneleri gösterilir.
            Sipariş vermeden önce tam teknik teklif sunulur. <strong className="text-white">Hiçbir ön ödeme yoktur.</strong>
          </p>

          {/* CTA butonlar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20%C3%BCcretsiz%20ke%C5%9Fif%20randevusu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#25d366] text-white font-bold text-base shadow-xl hover:bg-[#1eb857] transition-all hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ücretsiz Keşif — WhatsApp
            </a>
            <a
              href="tel:+905403363873"
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Hemen Ara
            </a>
          </div>

          {/* İletişim bilgileri grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8"/>
                  </svg>
                ),
                label: 'Telefon',
                val: '+90 540 336 3873',
                href: 'tel:+905403363873',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                ),
                label: 'E-Posta',
                val: 'info@fenetresystems.com',
                href: 'mailto:info@fenetresystems.com',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Adres',
                val: 'Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli',
                href: 'https://maps.google.com/?q=Gebze+Kocaeli',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                label: 'WhatsApp',
                val: '+90 540 336 3873',
                href: 'https://wa.me/905403363873',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-2 p-4 bg-white/08 border border-white/15 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all text-center"
              >
                <span className="text-[#83bd81]">{item.icon}</span>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">{item.label}</span>
                <span className="text-xs text-white font-semibold leading-snug">{item.val}</span>
              </a>
            ))}
          </div>

          {/* Bayilik */}
          <div className="inline-flex items-center gap-3 bg-[#83bd81]/20 border border-[#83bd81]/40 rounded-2xl px-6 py-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2" className="w-5 h-5 flex-shrink-0">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <p className="text-sm text-white/85">
              <strong className="text-white">Bayilik almak ister misiniz?</strong>{' '}
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#83bd81] font-semibold hover:underline"
              >
                WhatsApp ile yazın →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
