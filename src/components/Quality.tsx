export default function Quality() {
  const materials = [
    {
      name: 'Polyester Dokuma Kumaş',
      badge: 'Temel',
      specs: [
        { key: 'Gramaj', val: '80–120 g/m²' },
        { key: 'UV Direnci', val: '7–8 / Blue Scale' },
        { key: 'Mahremiyet', val: '%40–60' },
        { key: 'Işık Geçirgenliği', val: '%30–50' },
      ],
      desc: 'Her üretim serimizde kullandığımız temel kumaş. %100 polyester olup kolay temizlenebilir, solmaya ve çekmeye karşı dayanıklıdır.',
      color: '#83bd81',
    },
    {
      name: 'Blackout Kumaş',
      badge: 'Tam Karartma',
      specs: [
        { key: 'Gramaj', val: '150–200 g/m²' },
        { key: 'UV Direnci', val: '8 / Blue Scale' },
        { key: 'Mahremiyet', val: '%100' },
        { key: 'Işık Geçirgenliği', val: '%0' },
      ],
      desc: 'Üç katmanlı laminasyon ile sıfır ışık geçirgenliği. Yatak odası, bebek odası ve ev sinema uygulamaları için üretilmiş özel doku.',
      color: '#404e5e',
    },
    {
      name: 'Honeycomb Petek Kumaş',
      badge: 'Enerji Tasarrufu',
      specs: [
        { key: 'Hücre Boyutu', val: '25mm veya 38mm' },
        { key: 'Isıl Direnç', val: '0.28 m²K/W' },
        { key: 'Ses Azaltma', val: '6–10 dB' },
        { key: 'Mahremiyet', val: '%70–90' },
      ],
      desc: 'Petek hücre yapısı hava cebine dönüşerek ısı geçişini yavaşlatır. Kışın ısı kaybını, yazın soğuk kaybını engeller. Avrupa\'da en çok talep edilen sistem.',
      color: '#5fa05d',
    },
    {
      name: 'Saten Kumaş',
      badge: 'Premium',
      specs: [
        { key: 'Gramaj', val: '100–140 g/m²' },
        { key: 'Yüzey', val: 'Parlak / İpeksi' },
        { key: 'Mahremiyet', val: '%60–75' },
        { key: 'Renk Yelpazesi', val: '48 renk' },
      ],
      desc: 'Saten örme tekniğiyle üretilen kumaş, yüksek parlaklık değeri verir. İnce parlak kıl yoğunluğu sayesinde perde ışığı kırar, mekâna sıcak bir ton katar.',
      color: '#8faa6e',
    },
  ]

  const profileSpecs = [
    { label: 'Profil Malzemesi', val: 'Anodize Alüminyum' },
    { label: 'Profil Kalınlığı', val: '1.2–1.8 mm' },
    { label: 'Ray Sistemi', val: 'Çift Ray (üst + alt)' },
    { label: 'Mekanizma Tipi', val: 'Sürtünme freni / Kilitli' },
    { label: 'Tutma Kolu', val: 'ABS Plastik veya Alüminyum' },
    { label: 'Renk Seçeneği', val: '12 RAL ton (profil için)' },
    { label: 'Maks. Genişlik', val: '2400 mm (tek parça)' },
    { label: 'Maks. Yükseklik', val: '3200 mm' },
    { label: 'Montaj Toleransı', val: '±1.5 mm' },
    { label: 'Garanti', val: '2 yıl mekanik garanti' },
  ]

  return (
    <section id="kalite" className="py-20 md:py-28 bg-[#f8faf8]" aria-labelledby="kalite-baslik">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Ürün Kalitesi</span>
          </div>
          <h2 id="kalite-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            Malzeme & Teknik Özellikler
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-2xl mx-auto text-base leading-relaxed">
            Kalite iddia değil, ölçülebilir veridir.{' '}
            <a href="/" className="text-[#5fa05d] font-semibold hover:underline">Plise perdelerimizin</a>{' '}
            her bileşeni teknik belge ile desteklenir.
          </p>
        </div>

        {/* Kumaş kartları */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {materials.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e8f0e8] overflow-hidden hover:shadow-lg transition-all hover:border-[#83bd81]/40"
            >
              {/* Üst renk bar */}
              <div className="h-2" style={{ backgroundColor: m.color }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#404e5e] text-base">{m.name}</h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.badge}
                  </span>
                </div>
                {/* Spec tablosu */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {m.specs.map((spec, si) => (
                    <div key={si} className="bg-[#f8faf8] rounded-lg p-2.5">
                      <div className="text-[10px] text-[#5a6b7e] mb-0.5">{spec.key}</div>
                      <div className="text-xs font-bold text-[#404e5e]">{spec.val}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5a6b7e] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Profil teknik tablo */}
        <div className="bg-white rounded-3xl border border-[#e8f0e8] p-7 md:p-10">
          <h3 className="text-lg font-bold text-[#404e5e] mb-6 flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-[#404e5e] inline-block" />
            Alüminyum Profil & Mekanizma Teknik Verileri
          </h3>
          <div className="overflow-x-auto">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  <th>Değer</th>
                </tr>
              </thead>
              <tbody>
                {profileSpecs.map((spec, i) => (
                  <tr key={i}>
                    <td><strong>{spec.label}</strong></td>
                    <td>{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Uyarı notu */}
          <div className="mt-6 flex items-start gap-3 bg-[#f3f9f3] rounded-xl border border-[#83bd81]/25 p-4">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#5fa05d] flex-shrink-0 mt-0.5">
              <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" fill="#83bd81" opacity="0.2"/>
              <path d="M12 8v4M12 16h.01" stroke="#5fa05d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="text-xs text-[#5a6b7e] leading-relaxed">
              Teknik veriler standart koşullar için geçerlidir. Özel proje gereksinimleri için{' '}
              <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="text-[#5fa05d] font-semibold underline">
                teknik ekibimizle
              </a>{' '}
              iletişime geçiniz. Numune talep edebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
