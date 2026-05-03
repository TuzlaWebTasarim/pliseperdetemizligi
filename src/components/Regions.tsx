export default function Regions() {
  const europeCountries = [
    {
      flag: '🇩🇪',
      name: 'Almanya',
      cities: 'Berlin, Hamburg, Münih, Frankfurt, Köln, Stuttgart',
      delivery: '5–7 iş günü',
      market: 'En büyük Avrupa pazarımız. Türk diasporasının yoğun talep ettiği ürün segmenti.',
      demand: 'Gece Gündüz, Honeycomb, Saten',
    },
    {
      flag: '🇳🇱',
      name: 'Hollanda',
      cities: 'Amsterdam, Rotterdam, Lahey, Utrecht, Eindhoven',
      delivery: '6–8 iş günü',
      market: 'Enerji tasarrufu odaklı talep. Honeycomb sisteme yoğun ilgi.',
      demand: 'Honeycomb, Tül, Keten',
    },
    {
      flag: '🇧🇪',
      name: 'Belçika',
      cities: 'Brüksel, Gent, Antwerp, Liège, Brugge',
      delivery: '6–8 iş günü',
      market: 'Fransızca ve Flamanca konuşan çift pazara hizmet veriyoruz.',
      demand: 'Saten, Desenli, Baskılı',
    },
    {
      flag: '🇫🇷',
      name: 'Fransa',
      cities: 'Paris, Lyon, Marsilya, Toulouse, Nice',
      delivery: '7–10 iş günü',
      market: 'Estetik ve tasarım odaklı tüketici kitlesi. Saten koleksiyon öne çıkıyor.',
      demand: 'Saten, Keten, Gece Gündüz',
    },
    {
      flag: '🇦🇹',
      name: 'Avusturya',
      cities: 'Viyana, Graz, Linz, Salzburg, Innsbruck',
      delivery: '5–7 iş günü',
      market: 'Alman pazarına benzer yapı. Yüksek kalite beklentisi. Şikayet oranı en düşük pazarımız.',
      demand: 'Honeycomb, Tam Karartma, Yarı Plise',
    },
    {
      flag: '🇨🇭',
      name: 'İsviçre',
      cities: 'Zürih, Cenevre, Basel, Bern, Lausanne',
      delivery: '7–9 iş günü',
      market: 'Premium segment talep. En yüksek birim sipariş değeri bu pazardan geliyor.',
      demand: 'Saten Premium, Honeycomb Plus',
    },
  ]

  const turkeyRegions = [
    { name: 'Marmara Bölgesi', cities: 'İstanbul, Kocaeli, Bursa, Sakarya', note: 'Aynı gün keşif, 3–4 gün teslimat' },
    { name: 'Ege Bölgesi', cities: 'İzmir, Manisa, Muğla, Aydın', note: '4–5 gün teslimat' },
    { name: 'İç Anadolu', cities: 'Ankara, Konya, Kayseri, Eskişehir', note: '4–5 gün teslimat' },
    { name: 'Akdeniz Bölgesi', cities: 'Antalya, Adana, Mersin, Hatay', note: '4–6 gün teslimat' },
    { name: 'Karadeniz Bölgesi', cities: 'Trabzon, Samsun, Ordu, Rize', note: '5–7 gün teslimat' },
    { name: 'Doğu & G.Doğu Anadolu', cities: 'Gaziantep, Diyarbakır, Erzurum, Van', note: '6–8 gün teslimat' },
  ]

  return (
    <section id="bolgeler" className="py-20 md:py-28 bg-white" aria-labelledby="bolgeler-baslik">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Hizmet Bölgeleri</span>
          </div>
          <h2 id="bolgeler-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            Türkiye'den Avrupa'ya <span className="text-[#83bd81]">Teslimat Ağı</span>
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-2xl mx-auto text-base leading-relaxed">
            Gebze/Kocaeli merkezli üretim tesisimizden{' '}
            <strong>Türkiye'nin 81 iline</strong> demonte teslimat,{' '}
            <em>Avrupa'nın 6 ülkesine</em> ise kapıya teslim hizmet veriyoruz.
          </p>
        </div>

        {/* Avrupa ülkeleri */}
        <h3 className="text-xl font-bold text-[#404e5e] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#404e5e] flex items-center justify-center text-white text-xs font-black">🌍</span>
          Avrupa Hizmet Bölgeleri
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {europeCountries.map((c, i) => (
            <div
              key={i}
              className="card-hover bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] p-5 hover:border-[#83bd81]/50 hover:bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.flag}</span>
                <div>
                  <h4 className="font-bold text-[#404e5e] text-base">{c.name}</h4>
                  <span className="text-xs font-semibold text-[#83bd81] bg-[#83bd81]/12 px-2 py-0.5 rounded-full">
                    {c.delivery}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5a6b7e] mb-2">
                <strong className="text-[#404e5e]">Başlıca şehirler:</strong> {c.cities}
              </p>
              <p className="text-xs text-[#5a6b7e] mb-2 leading-relaxed">{c.market}</p>
              <p className="text-xs text-[#5a6b7e]">
                <strong className="text-[#5fa05d]">Popüler ürünler:</strong> {c.demand}
              </p>
            </div>
          ))}
        </div>

        {/* Türkiye bölgeleri */}
        <h3 className="text-xl font-bold text-[#404e5e] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#83bd81] flex items-center justify-center text-white text-xs font-black">🇹🇷</span>
          Türkiye Hizmet Bölgeleri
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {turkeyRegions.map((r, i) => (
            <div
              key={i}
              className="flex gap-3 bg-[#f3f9f3] rounded-xl border border-[#83bd81]/20 p-4 hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-[#83bd81] mt-1.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-[#404e5e] text-sm mb-0.5">{r.name}</div>
                <div className="text-xs text-[#5a6b7e] mb-1">{r.cities}</div>
                <div className="text-xs font-semibold text-[#5fa05d]">{r.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pazar payı infografik */}
        <div className="bg-[#404e5e] rounded-3xl p-7 md:p-10 text-white">
          <h3 className="text-lg font-bold mb-6 text-center">Satış Dağılımı (2024)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Türkiye', pct: 58, color: '#83bd81' },
              { label: 'Almanya', pct: 19, color: '#a8d4a6' },
              { label: 'Hollanda', pct: 10, color: '#c4e4c2' },
              { label: 'Diğer AB', pct: 13, color: '#6d8fa3' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke={item.color} strokeWidth="3"
                      strokeDasharray={`${item.pct} ${100 - item.pct}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-extrabold" style={{ color: item.color }}>
                    {item.pct}%
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
