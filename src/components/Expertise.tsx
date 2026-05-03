export default function Expertise() {
  const expertiseAreas = [
    {
      title: 'Cam Balkon Uygulamaları',
      pct: 94,
      desc: 'Isıcamlı ve lamineli cam balkonlarda çerçeve içi vidalı sistem. Rüzgar geçirgenliği sıfır, hava sızdırmazlık belgeli.',
    },
    {
      title: 'Çatı Penceresi & Velux',
      pct: 88,
      desc: 'Eğimli ve sabit çatı pencerelerine özel açılı ray sistemi. Türkiye\'de az sayıda üretici tarafından yapılabilen uygulama.',
    },
    {
      title: 'Ofis & Ticari Mekan',
      pct: 97,
      desc: 'Enerji verimliliği sertifikalı binalarda; gürültü, ısı ve ışık yönetimi için kurumsal çözümler.',
    },
    {
      title: 'Yatak Odası Karartma',
      pct: 91,
      desc: 'Tam karartma (blackout) kumaşla %100 ışık blokajı. Shift çalışanları ve bebek odaları için ideal yapısal çözüm.',
    },
    {
      title: 'Mutfak & Banyo Nemli Ortamlar',
      pct: 86,
      desc: 'Antibakteriyel kaplama ve yüksek nem direnci olan kumaşlar. Küf ve yoğuşma problemlerine karşı dayanıklı.',
    },
  ]

  const awards = [
    { year: '2023', title: 'İSO 500 Tedarikçi Ödülü', body: 'İstanbul Sanayi Odası' },
    { year: '2022', title: 'En İyi İhracatçı', body: 'Kocaeli Ticaret Borsası' },
    { year: '2021', title: 'Kalite Liderliği', body: 'Türk Standartları Enstitüsü' },
    { year: '2020', title: 'Avrupa\'ya En Fazla İhracat', body: 'GTB Bölge Ödülü' },
  ]

  return (
    <section id="uzmanlik" className="py-20 md:py-28 bg-[#f8faf8]" aria-labelledby="uzmanlik-baslik">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Deneyim & Uzmanlık</span>
          </div>
          <h2 id="uzmanlik-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            <a href="/" className="hover:text-[#5fa05d] transition-colors">Pliseli Perde</a> Uygulama Alanları
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Her mekanın kendine özgü pencere geometrisi ve kullanım koşulları vardır.
            Fenetre Systems, standart dışı uygulamalarda bile çözüm üretme kapasitesine sahiptir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Sol: Uzmanlık bar */}
          <div className="space-y-6">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8f0e8] p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#404e5e] text-sm">{area.title}</h3>
                  <span className="text-sm font-extrabold text-[#83bd81]">%{area.pct}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 bg-[#e8f0e8] rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#83bd81] to-[#5fa05d] rounded-full"
                    style={{ width: `${area.pct}%` }}
                  />
                </div>
                <p className="text-xs text-[#5a6b7e] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* Sağ: Ödüller + açıklama */}
          <div>
            <div className="bg-white rounded-2xl border border-[#e8f0e8] p-6 mb-6">
              <h3 className="font-bold text-[#404e5e] text-base mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#83bd81]">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#83bd81" stroke="#5fa05d" strokeWidth="1.2"/>
                </svg>
                Sektör Ödülleri
              </h3>
              <div className="space-y-3">
                {awards.map((aw, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-[#f0f7f0] last:border-0">
                    <span className="w-10 h-10 rounded-lg bg-[#83bd81]/15 flex items-center justify-center text-xs font-black text-[#5fa05d]">
                      {aw.year}
                    </span>
                    <div>
                      <div className="font-semibold text-[#404e5e] text-xs">{aw.title}</div>
                      <div className="text-[10px] text-[#5a6b7e]">{aw.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ekip açıklaması */}
            <div className="bg-[#404e5e] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-base mb-3">Teknik Ekibimiz</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Sahada görev yapan <strong className="text-white">14 sertifikalı montaj uzmanı</strong>, teorik eğitim yerine yerinde pratik uygulamaya odaklanan bir müfredat ile yetiştirilir. Her yıl Almanya ve Avusturya'daki fuar programlarına katılarak güncel teknik standartları takip ederler.
              </p>
              <ul className="space-y-2">
                {[
                  'Vidalı ve yapıştırmalı sistem uzmanlığı',
                  'Pimapen, alüminyum ve ahşap çerçeve deneyimi',
                  'Yüksek alan (cephe) montaj sertifikası',
                  'Çatı penceresi uygulama ehliyeti',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                    <span className="w-4 h-4 rounded-full bg-[#83bd81]/30 flex items-center justify-center text-[#83bd81] text-[10px] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
