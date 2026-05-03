export default function Applications() {
  const projects = [
    {
      label: 'Konut Projesi — İstanbul',
      type: 'Gece Gündüz Plise Perde',
      area: 'Yaşam odası, 3 pencere',
      detail: 'Çift kumaş sistemiyle gündüz mahremiyet, gece tam karartma sağlandı. Ahşap çerçeve yapısına vidalı bağlantı uygulandı.',
      color: '#83bd81',
    },
    {
      label: 'Ofis Binası — Ankara',
      type: 'Honeycomb Plise Perde',
      area: 'Toplantı odaları, 18 pencere',
      detail: 'LEED sertifikalı bina gerekliliklerine uygun enerji tasarruflu honeycomb sistem. Gürültü azaltma katsayısı ölçüldü.',
      color: '#404e5e',
    },
    {
      label: 'Konut — Düsseldorf, Almanya',
      type: 'Tül Plise Perde',
      area: 'Banyo & mutfak, 5 pencere',
      detail: 'Avrupa standartı PVC profil, nem dayanımlı kumaş. 4–10 günlük teslimat süresiyle Almanya\'ya ulaştırıldı.',
      color: '#5fa05d',
    },
    {
      label: 'Villa Projesi — İzmir',
      type: 'Saten Plise Perde',
      area: 'Yatak odaları, 8 pencere',
      detail: 'İpeksi yüzey dokusu, tam karartma özellikli saten kumaş. Yapıştırmalı montaj sistemiyle çerçeveye zarar verilmedi.',
      color: '#83bd81',
    },
    {
      label: 'Apart Otel — Amsterdam',
      type: 'Keten Plise Perde',
      area: 'Tüm odalar, 42 pencere',
      detail: 'Kurumsal toplu sipariş. Her oda ölçüsü farklı; 42 farklı ebat üretimi 5 iş gününde tamamlandı.',
      color: '#404e5e',
    },
    {
      label: 'Okul Binası — Kocaeli',
      type: 'Baskılı Plise Perde',
      area: 'Sınıflar ve koridorlar, 34 pencere',
      detail: 'Çocuk güvenliği standartlarına uygun iple çalışan sistem. Özel baskılı motifler okul kimliğiyle örtüşüyor.',
      color: '#5fa05d',
    },
  ]

  return (
    <section id="uygulamalar" className="py-20 md:py-28 bg-white" aria-labelledby="uygulamalar-baslik">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Uygulama Örnekleri</span>
          </div>
          <h2 id="uygulamalar-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            Gerçek Projeler, Gerçek Sonuçlar
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Konuttan kurumsal binaya, İstanbul'dan Amsterdam'a;{' '}
            <a href="/" className="text-[#5fa05d] font-semibold hover:underline">plise perde montajı</a>{' '}
            hizmetimizin gerçek yansımaları.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="card-hover bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] overflow-hidden hover:border-[#83bd81]/40"
            >
              {/* Placeholder görseli */}
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.color}18 0%, ${p.color}30 100%)` }}
              >
                {/* Plise pattern SVG */}
                <svg viewBox="0 0 200 120" className="w-full h-full absolute inset-0 opacity-30">
                  {Array.from({ length: 14 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1={idx % 2 === 0 ? idx * 15 : idx * 15 + 6}
                      y1="0"
                      x2={idx % 2 === 0 ? idx * 15 + 6 : idx * 15}
                      y2="120"
                      stroke={p.color}
                      strokeWidth="1.5"
                    />
                  ))}
                </svg>
                <div
                  className="relative z-10 px-4 py-2 rounded-xl text-white text-sm font-bold shadow-md"
                  style={{ backgroundColor: p.color }}
                >
                  {p.type}
                </div>
              </div>
              {/* İçerik */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#404e5e] text-sm leading-snug">{p.label}</h3>
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#83bd81] flex-shrink-0">
                    <path d="M8 1.5A5.5 5.5 0 1113.5 7 5.506 5.506 0 018 1.5zM8 0a7 7 0 100 14A7 7 0 008 0z" fill="#83bd81"/>
                    <path d="M8 3.5v4l2.5 1.5" stroke="#83bd81" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs text-[#5a6b7e]">{p.area}</span>
                </div>
                <p className="text-xs text-[#5a6b7e] leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#5a6b7e] text-sm mb-4">
            Projeniz bu örneklerden farklı mı? Endişelenmeyin. Her özel durum için çözüm üretiriz.
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20projem%20i%C3%A7in%20%C3%B6zel%20%C3%A7%C3%B6z%C3%BCm%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#83bd81] text-white font-semibold text-sm hover:bg-[#5fa05d] transition-colors shadow-md"
          >
            Projenizi Anlatın → WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
