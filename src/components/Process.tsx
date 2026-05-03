export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Ücretsiz Ölçü & Keşif',
      desc: 'Uzman ekibimiz belirlenen randevu saatinde adresinize gelir. Tüm pencere ve kapı boşlukları milimetrik hassasiyetle ölçülür. Hangi ürünün hangi alana uygun olduğu konusunda tarafsız öneri sunulur.',
      detail: 'Ölçü almanın doğru yapılması, montaj sonrası memnuniyetin yüzde doksanını belirler.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.12"/>
          <rect x="14" y="28" width="28" height="4" rx="2" fill="#83bd81" opacity="0.4"/>
          <rect x="16" y="20" width="4" height="16" rx="2" fill="#404e5e"/>
          <rect x="22" y="22" width="2" height="12" rx="1" fill="#83bd81"/>
          <rect x="26" y="18" width="2" height="16" rx="1" fill="#5fa05d"/>
          <rect x="30" y="24" width="2" height="10" rx="1" fill="#83bd81"/>
          <rect x="34" y="20" width="4" height="14" rx="2" fill="#404e5e"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Teknik Çizim & Onay',
      desc: 'Ölçüler alındıktan sonra teknik çizim dosyası hazırlanır ve müşteriye sunulur. Modeli, rengi ve kumaş türünü bu aşamada nihaileştirirsiniz. Onay vermeden üretim başlamaz.',
      detail: '3D görselleştirme ile ürünün mekânınızdaki görünümünü sipariş öncesinde görebilirsiniz.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#404e5e" opacity="0.08"/>
          <rect x="14" y="14" width="28" height="28" rx="4" fill="none" stroke="#404e5e" strokeWidth="2"/>
          <path d="M20 22h16M20 28h10M20 34h12" stroke="#83bd81" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="36" cy="34" r="5" fill="#f8faf8" stroke="#5fa05d" strokeWidth="1.5"/>
          <path d="M34 34l1.5 1.5 3-3" stroke="#5fa05d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'CNC Üretim Hattı',
      desc: 'Onaylanan teknik dosya doğrudan CNC işleme merkezine aktarılır. Profil kesimi, kumaş pilileme ve mekanizma montajı sıralı kontrol noktalarıyla üretilir. Her ürüne seri numarası atanır.',
      detail: 'Ortalama üretim süresi 3–5 iş günüdür. Sezon yoğunluğuna göre değişebilir.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.1"/>
          <rect x="16" y="22" width="24" height="16" rx="3" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M22 22v-4a6 6 0 0112 0v4" stroke="#5fa05d" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="28" cy="30" r="3" fill="#83bd81"/>
          <path d="M28 30v4" stroke="#404e5e" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Kalite Kontrol & Paketleme',
      desc: 'Üretimden çıkan her ürün; boyut doğruluğu, mekanizma testi ve kumaş gerginliği kontrolünden geçer. Avrupa sevkiyatı için özel koruyucu köpük ve çift katmanlı karton ambalaj kullanılır.',
      detail: 'Son 12 ayda kalite kontrol kaynaklı iade oranımız %0.3\'ün altında kalmaktadır.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#404e5e" opacity="0.07"/>
          <path d="M20 28l6 6 12-12" stroke="#83bd81" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="12" fill="none" stroke="#5fa05d" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Teslimat & Kurulum',
      desc: 'Türkiye genelinde kargo ile ya da kurye ile demonte teslimat yapılır. Montaj randevusu ayrıca alınır; sertifikalı ekip belirlenen günde gelir ve kurulumu tamamlar. Müşteri teslim tutanağı imzalanır.',
      detail: 'Avrupa\'da ürün kapıya ulaştıktan sonra video destekli montaj rehberi sağlanır.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.12"/>
          <rect x="12" y="24" width="22" height="16" rx="3" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M34 28l8-6v16l-8-6" stroke="#5fa05d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="42" r="3" fill="#404e5e"/>
          <circle cx="28" cy="42" r="3" fill="#404e5e"/>
          <path d="M12 38h22" stroke="#83bd81" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Satış Sonrası Destek',
      desc: '2 yıllık garanti kapsamında teknik arıza bildirimi WhatsApp, e-posta veya telefon ile yapılabilir. 48 saat içinde geri dönüş garantisi verilir. Yedek parça stoku yıl boyu tutulur.',
      detail: '"%100 memnuniyet" politikamız, ürünlerin kullanım ömrü boyunca geçerlidir.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#404e5e" opacity="0.07"/>
          <path d="M22 36.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 28.8 19.79 19.79 0 01.22 22.18 2 2 0 012.18 20h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 27.91" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(10,8)"/>
          <circle cx="36" cy="22" r="6" fill="#f3f9f3" stroke="#5fa05d" strokeWidth="1.5"/>
          <path d="M34 22l1.5 1.5 3-3" stroke="#5fa05d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="surec" className="py-20 md:py-28 bg-white" aria-labelledby="surec-baslik">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Nasıl Çalışıyoruz</span>
          </div>
          <h2 id="surec-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            <a href="/" className="hover:text-[#5fa05d] transition-colors">Plise Perde Montajı</a> Süreci
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Sipariş verdiğiniz andan montaj tamamlanana kadar her adım belgelidir, takip edilebilirdir.
            Sizi süreç dışında bırakmıyoruz.
          </p>
        </div>

        {/* Adımlar grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] p-6 hover:border-[#83bd81]/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Numara */}
              <span className="absolute top-4 right-4 text-5xl font-black text-[#83bd81]/15 leading-none select-none">
                {step.num}
              </span>
              {/* İkon */}
              <div className="mb-4">{step.icon}</div>
              {/* Başlık */}
              <h3 className="font-bold text-[#404e5e] text-base mb-2">{step.title}</h3>
              {/* Açıklama */}
              <p className="text-sm text-[#5a6b7e] leading-relaxed mb-3">{step.desc}</p>
              {/* Detail */}
              <div className="flex items-start gap-2 bg-[#83bd81]/08 border-l-2 border-[#83bd81] pl-3 py-1.5">
                <p className="text-xs text-[#5fa05d] font-medium italic leading-snug">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablo: teslimat süreleri */}
        <div className="bg-[#f3f9f3] rounded-3xl border border-[#83bd81]/20 p-6 md:p-8">
          <h3 className="text-lg font-bold text-[#404e5e] mb-5 flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-[#83bd81] inline-block" />
            Tahmini Üretim ve Teslimat Süreleri
          </h3>
          <div className="overflow-x-auto">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Bölge</th>
                  <th>Üretim Süresi</th>
                  <th>Kargo Süresi</th>
                  <th>Toplam Süre</th>
                  <th>Teslimat Tipi</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Türkiye (İstanbul, İzmir, Ankara)</strong></td><td>3–5 iş günü</td><td>1–2 gün</td><td>4–7 gün</td><td>Demonte + Montaj</td></tr>
                <tr><td>Türkiye (Diğer İller)</td><td>3–5 iş günü</td><td>2–3 gün</td><td>5–8 gün</td><td>Demonte teslimat</td></tr>
                <tr><td><strong>Almanya</strong></td><td>3–5 iş günü</td><td>2–3 gün</td><td>5–8 gün</td><td>Kapıya teslim</td></tr>
                <tr><td>Hollanda</td><td>3–5 iş günü</td><td>2–4 gün</td><td>5–9 gün</td><td>Kapıya teslim</td></tr>
                <tr><td>Belçika</td><td>3–5 iş günü</td><td>3–4 gün</td><td>6–9 gün</td><td>Kapıya teslim</td></tr>
                <tr><td>Fransa</td><td>3–5 iş günü</td><td>3–5 gün</td><td>6–10 gün</td><td>Kapıya teslim</td></tr>
                <tr><td>Avusturya</td><td>3–5 iş günü</td><td>2–3 gün</td><td>5–8 gün</td><td>Kapıya teslim</td></tr>
                <tr><td>İsviçre</td><td>3–5 iş günü</td><td>3–5 gün</td><td>6–10 gün</td><td>Kapıya teslim</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5a6b7e] mt-3 italic">* Gösteri amaçlı ortalama değerlerdir. Sezon yoğunluğu ve sipariş kapasitesine göre değişebilir.</p>
        </div>
      </div>
    </section>
  )
}
