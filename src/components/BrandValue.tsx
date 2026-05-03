export default function BrandValue() {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#83bd81" opacity="0.15"/>
          <path d="M20 8l3.09 6.26L30 15.27l-5 4.87 1.18 6.86L20 23.77l-6.18 3.23L15 20.14l-5-4.87 6.91-1.01L20 8z" fill="#83bd81" stroke="#5fa05d" strokeWidth="1.2"/>
        </svg>
      ),
      title: 'Avrupa Standartlarında Üretim',
      text: 'Her profil ve kumaş, EN 13561 ile ISO 9001 gerekliliklerine göre test edilir. Yurt içi denetimlerin ötesinde; Almanya, Hollanda ve Belçika pazarlarının talep ettiği kriterleri karşılıyoruz.',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#404e5e" opacity="0.1"/>
          <rect x="10" y="12" width="20" height="16" rx="3" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M10 18h20" stroke="#404e5e" strokeWidth="1.4"/>
          <circle cx="15" cy="23" r="2" fill="#83bd81"/>
          <circle cx="20" cy="23" r="2" fill="#83bd81"/>
          <circle cx="25" cy="23" r="2" fill="#83bd81"/>
        </svg>
      ),
      title: 'Ölçüye Özel CNC Üretim',
      text: 'Standart ürün satmıyoruz. Her sipariş, milimetrik hassasiyetle alınan ölçüler doğrultusunda CNC işleme hatlarında ayrı ayrı üretilir. Hatalı ölçü sıfır, müşteri şikayeti minimum.',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#83bd81" opacity="0.12"/>
          <path d="M12 28s0-8 8-8 8 8 8 8" stroke="#5fa05d" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="20" cy="16" r="4" fill="none" stroke="#5fa05d" strokeWidth="1.8"/>
          <path d="M26 14l3-3M28 20h3" stroke="#83bd81" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Uzman Montaj Ekibi',
      text: 'Ürün tesliminde iş bitmez. Gebze merkezli sertifikalı montaj ekibimiz, demonte gelen ürünleri yerinde monte eder. Müşteri, montaj tamamlanana kadar herhangi bir teknik işlem yapmak zorunda kalmaz.',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#404e5e" opacity="0.08"/>
          <path d="M20 10c5.52 0 10 4.48 10 10s-4.48 10-10 10S10 25.52 10 20s4.48-10 10-10z" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M20 14v6l4 2" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '4–10 Günde Avrupa Teslimatı',
      text: 'Almanya\'ya ortalama 5, Hollanda\'ya 6, Belçika\'ya 7 iş günü. DHL, UPS ve TNT anlaşmalı taşıma hatlarımız; hasarsız, takip edilebilir ve sigortalı teslimat garantisi sunar.',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#83bd81" opacity="0.12"/>
          <path d="M14 20l4 4 8-8" stroke="#83bd81" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 10a10 10 0 110 20 10 10 0 010-20z" fill="none" stroke="#5fa05d" strokeWidth="1.6"/>
        </svg>
      ),
      title: '2 Yıl Yapısal Garanti',
      text: 'Profil, ray, mekanizma ve kumaş dahil tüm bileşenler için 2 yıl garanti sunuyoruz. Garanti süresi içinde oluşan mekanik arızalar ücretsiz onarılır ya da parça değişimi yapılır.',
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <circle cx="20" cy="20" r="18" fill="#404e5e" opacity="0.08"/>
          <path d="M12 20c0-4.42 3.58-8 8-8s8 3.58 8 8" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M12 20c0 3.86 2.73 7.08 6.4 7.8" stroke="#83bd81" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M20 12v-3M27.2 14.8l2.1-2.1M30 20h3" stroke="#5fa05d" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Sürdürülebilir Malzeme Seçimi',
      text: 'Üretimde kullandığımız polyester kumaşların %40\'ı geri dönüştürülmüş iplikten elde edilir. Karbon izini azaltma hedefimiz doğrultusunda ambalaj materyalleri de %100 geri dönüştürülebilir.',
    },
  ]

  return (
    <section id="marka-degeri" className="py-20 md:py-28 bg-[#f8faf8]" aria-labelledby="marka-baslik">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Sol: Başlık ve ana metin */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#404e5e]/8 border border-[#404e5e]/15 mb-4">
              <span className="text-[#404e5e] text-xs font-bold tracking-widest uppercase">Marka Değeri</span>
            </div>
            <h2
              id="marka-baslik"
              className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4 leading-tight"
            >
              Neden{' '}
              <span className="text-[#83bd81]">Fenetre Systems</span>?
            </h2>
            <div className="section-line mb-5" />
            <p className="text-[#5a6b7e] text-base leading-relaxed mb-6">
              Piyasada yüzlerce perde satıcısı var. <strong>Fenetre Systems</strong> onlardan ayrışır çünkü üretimden montaja,
              teslimatdan satış sonrası desteğe her aşama kendi kontrolümüzde yürür. Aracı yok, belirsizlik yok.
            </p>
            <p className="text-[#5a6b7e] text-base leading-relaxed mb-8">
              <em>15 yılı aşkın üretim deneyimi</em> ve Kocaeli/Gebze'deki 4.200 m² üretim tesisiyle,{' '}
              <strong>yılda 120.000 adedi aşan üretim kapasitesine</strong> sahibiz. Bu ölçek, fiyat avantajını
              kalite tavizine gitmeden müşteriye yansıtmamızı mümkün kılıyor.
            </p>

            {/* Sertifikalar */}
            <div className="flex flex-wrap gap-3">
              {['ISO 9001:2015', 'EN 13561', 'TSE Belgeli', 'CE Markası'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-white border border-[#83bd81]/40 rounded-lg text-xs font-bold text-[#404e5e] shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Sağ: Değer kartları */}
          <div className="grid gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl border border-[#e8f0e8] p-5 hover:shadow-md hover:border-[#83bd81]/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f3f9f3] flex items-center justify-center">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#404e5e] text-sm mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#5a6b7e] leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rakamsal vurgu */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '4.200 m²', label: 'Üretim Tesisi' },
            { val: '120K+', label: 'Yıllık Üretim' },
            { val: '6', label: 'Hedef Avrupa Ülkesi' },
            { val: '81 İl', label: 'Türkiye Geneli Teslimat' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#404e5e] rounded-2xl px-5 py-5 text-center text-white"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-[#83bd81] mb-1">{s.val}</div>
              <div className="text-xs text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
