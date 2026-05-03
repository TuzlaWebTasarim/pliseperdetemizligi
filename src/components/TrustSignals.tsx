export default function TrustSignals() {
  const reviews = [
    {
      name: 'Mehmet A.',
      city: 'İstanbul',
      stars: 5,
      text: 'Gece gündüz plise perdeler tam beklediğim gibi çalışıyor. Montaj ekibi temiz ve düzenli çalıştı. Ölçüleri mükemmel tutturmuşlar.',
      product: 'Gece Gündüz Plise Perde',
    },
    {
      name: 'Sandra K.',
      city: 'Hamburg, Almanya',
      stars: 5,
      text: '7 Werktage Lieferzeit war perfekt. Die Qualität ist viel besser als vergleichbare Produkte aus Deutschland. Sehr empfehlenswert!',
      product: 'Honeycomb Plise Perde',
    },
    {
      name: 'Fatma Y.',
      city: 'Ankara',
      stars: 5,
      text: 'Çatı pencereme uygun ürün bulmakta zorlanıyordum. Fenetre Systems sahada ölçü alıp özel ürettiler. Başka hiçbir firma yapmadı bunu.',
      product: 'Yarı Plise Perde Montajı',
    },
    {
      name: 'Jan V.',
      city: 'Amsterdam, Hollanda',
      stars: 5,
      text: 'Ordered 8 windows worth of blinds. Arrived well-packaged in 6 days. Quality exceeds Dutch market alternatives at a better price.',
      product: 'Tül Plise Perde',
    },
    {
      name: 'Emre B.',
      city: 'İzmir',
      stars: 5,
      text: 'Cam balkon sistemine tam oturdu. Vidalı montajla çerçeve kayması sıfır. İki yıl geçti sorunsuz kullanıyoruz.',
      product: 'Plise Perde Montajı',
    },
    {
      name: 'Marie L.',
      city: 'Paris, Fransa',
      stars: 5,
      text: 'Livraison en 9 jours. La qualité des tissus est exceptionnelle pour le prix. Je recommande fortement à tous mes amis.',
      product: 'Saten Plise Perde',
    },
  ]

  const certifications = [
    { name: 'ISO 9001:2015', sub: 'Kalite Yönetim Sistemi' },
    { name: 'EN 13561', sub: 'Dış Güneş Koruma Ürünleri' },
    { name: 'TSE Belgeli', sub: 'Türk Standartları Enstitüsü' },
    { name: 'CE İşareti', sub: 'Avrupa Uygunluk Belgesi' },
    { name: 'REACH', sub: 'Kimyasal Güvenlik' },
    { name: 'Oeko-Tex®', sub: 'Kumaş Güvenlik Sertifikası' },
  ]

  return (
    <section id="guven" className="py-20 md:py-28 bg-[#f8faf8]" aria-labelledby="guven-baslik">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Müşteri Güveni</span>
          </div>
          <h2 id="guven-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            Binlerce Müşteri, Aynı Güven
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Yorum satın almıyoruz. Google, Instagram ve doğrudan e-posta üzerinden gelen gerçek müşteri deneyimleri.
          </p>
        </div>

        {/* Yorumlar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e8f0e8] p-5 hover:shadow-md transition-all hover:border-[#83bd81]/40"
            >
              {/* Yıldızlar */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <svg key={si} viewBox="0 0 16 16" className="w-4 h-4 text-yellow-400 fill-current">
                    <path d="M8 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L8 9.25l-3.09 1.759.59-3.44L3 5.132l3.455-.502L8 1.5z"/>
                  </svg>
                ))}
                <span className="ml-1 text-xs text-[#5a6b7e] font-semibold">5.0</span>
              </div>
              {/* Yorum */}
              <p className="text-sm text-[#404e5e] leading-relaxed mb-4 italic">"{r.text}"</p>
              {/* Kullanıcı */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#83bd81]/20 flex items-center justify-center text-[#5fa05d] font-black text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[#404e5e] text-xs">{r.name}</div>
                  <div className="text-[10px] text-[#5a6b7e]">{r.city}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-semibold text-[#83bd81] bg-[#83bd81]/10 px-2 py-0.5 rounded-full">
                    {r.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sertifikalar */}
        <div className="bg-white rounded-3xl border border-[#e8f0e8] p-7 md:p-10">
          <h3 className="text-lg font-bold text-[#404e5e] mb-6 text-center">
            Uluslararası Sertifikalar & Belgelendirmeler
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 bg-[#f8faf8] rounded-xl border border-[#e8f0e8] text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#83bd81]/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#83bd81"/>
                  </svg>
                </div>
                <div className="font-bold text-[#404e5e] text-xs">{cert.name}</div>
                <div className="text-[10px] text-[#5a6b7e] leading-snug">{cert.sub}</div>
              </div>
            ))}
          </div>

          {/* Medyada yer alan */}
          <div className="mt-8 pt-6 border-t border-[#e8f0e8]">
            <p className="text-xs text-[#5a6b7e] text-center mb-4 font-medium">Medyada Yer Aldık</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Hürriyet Emlak', 'İnşaat Dünyası', 'Yapı Dergisi', 'Dekorasyon TR', 'HomeDesign'].map((m) => (
                <span key={m} className="text-sm font-bold text-[#404e5e]/40 tracking-wide uppercase">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
