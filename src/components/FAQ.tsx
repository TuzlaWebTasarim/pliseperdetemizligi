'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Plise perde montajı ne kadar sürer?',
    a: 'Tek pencere için montaj süresi ortalama 15–25 dakikadır. Standart bir daire (5–8 pencere) için toplam süre 2–3 saattir. Ekibimiz tüm araç gerecini yanında getirir; müşterinin herhangi bir hazırlık yapmasına gerek yoktur.',
    cat: 'Montaj',
  },
  {
    q: 'Vida kullanmak istemiyorum, yapıştırmalı sistem mümkün mü?',
    a: 'Evet. Kiracı iseniz veya çerçeveye zarar vermek istemiyorsanız çift taraflı güçlü montaj bantı sistemi uygulanabilir. Bu yöntem pimapen (PVC) ve alüminyum çerçevelerde güvenle kullanılır. Yük kapasitesi 12 kg/m\'ye kadar test edilmiştir. Ahşap veya boyalı çerçevelerde ise vidalı sistem önerilir.',
    cat: 'Montaj',
  },
  {
    q: 'Ölçü nasıl alınıyor, hangi boyutu sipariş etmeliyim?',
    a: 'Çerçeve içi montaj için pencere boşluğunun iç ölçüsünden 5 mm çıkararak sipariş vermeniz gerekir. Çerçeve dışı montajda ise boşluk ölçüsüne her iki yandan 2–3 cm eklemenizi öneriyoruz. Ücretsiz keşif hizmetimizden yararlanırsanız, ekibimiz tüm ölçümleri hassas şekilde yapar ve sizi bu hesaplamalardan muaf tutar.',
    cat: 'Ölçü',
  },
  {
    q: 'Avrupa\'ya nasıl sipariş verebilirim?',
    a: 'WhatsApp (+90 540 336 3873) veya e-posta (info@fenetresystems.com) üzerinden iletişime geçin. Pencerelerinizin fotoğraflarını ve ölçülerini paylaşın. Size özel fiyat ve teknik bilgi sunulur. Ödeme sonrası üretim başlar; 4–10 iş günü içinde kapınıza DHL veya UPS ile teslim edilir. Her kargo sigortalıdır.',
    cat: 'Teslimat',
  },
  {
    q: 'Gece gündüz plise perde ile tek kumaşlı arasındaki fark nedir?',
    a: 'Tek kumaşlı sistem sabit bir filtreleme değerine sahiptir; ışık geçirgenliği değiştirilemez. Gece gündüz sisteminde ise tek kasada iki ayrı kumaş bulunur: ön panel tül gibi çalışır, arka panel karartma sağlar. İkisini ayrı ayrı ya da birlikte kaydırarak mekandaki ışık ve mahremiyet kontrolünü tam istediğiniz gibi ayarlarsınız.',
    cat: 'Ürün',
  },
  {
    q: 'Honeycomb plise perde gerçekten enerji tasarrufu sağlar mı?',
    a: 'Bağımsız testlere göre honeycomb (petek) sistem, tek cam pencerelerde ısı kaybını %30–40 oranında azaltır. Çift cam kombinasyonunda bu oran %15–20\'ye iner. Özellikle kuzey cepheli odalarda kış faturalarına doğrudan etkisi gözlemlenmiştir. Avusturya ve Almanya\'da enerji verimliliği sertifikalı binalarda honeycomb perdeye enerji teşvik destekleri verilebilmektedir.',
    cat: 'Ürün',
  },
  {
    q: 'Plise perdeler ne sıklıkla temizlenmeli?',
    a: 'Yılda 1–2 kez hafif nemli bezle silinmesi yeterlidir. Daha derin temizlik için perdeyi raydan çıkarmadan yukarı toplayın; kumaşı ılık sabunlu suyla nemli süngerle nazikçe silin. Çamaşır makinesine girdirilmez. Islak ortam uygulamalarında (mutfak, banyo) aylık kontrol önerilir. Düzenli temizlik kumaş ömrünü 2 katına çıkarabilir.',
    cat: 'Kullanım',
  },
  {
    q: 'Garanti kapsamı nedir, hasar durumunda ne yapılır?',
    a: '2 yıllık garanti; profil, ray sistemi, mekanizma ve ana yapısal bileşenleri kapsar. Kumaş üretim hatalarını da içerir. Normal aşınma, yanlış kullanım veya kasıtlı hasar garanti dışındadır. Arıza bildirimlerinde 48 saat içinde dönüş garantisi verilir. Garanti kapsamında parça değişimi veya onarım ücretsiz yapılır. Güney avrupa teslimatlarında da aynı koşullar geçerlidir.',
    cat: 'Garanti',
  },
  {
    q: 'Çatı penceresi veya eğimli cam sistemi için uygun ürünleriniz var mı?',
    a: 'Evet. Velux, Fakro ve benzeri çatı penceresi sistemlerine özel eğimli ray profili üretiyoruz. Bu uygulama için standart yatay ray yerine eğim kompansatörlü özel aparat kullanılır. Türkiye\'de bu uygulamayı yapabilen çok az firma vardır. Ücretsiz keşif ile uygunluk değerlendirmesi yapılır.',
    cat: 'Montaj',
  },
  {
    q: 'Pimapen (PVC) çerçevede vida delme olmadan montaj yapılabiliyor mu?',
    a: 'Kesinlikle. PVC çerçevelerin delinmesini önlemek için iki yöntem uyguluyoruz: (1) Çerçeve profil kanalına geçme bağlantı aparatı, (2) yüksek mukavemetli çift taraflı montaj bandı. Her iki yöntemde de 5–10 yıllık kullanımda çerçeveye herhangi bir iz ya da hasar bırakmadan sökülebilir sistem kurulur.',
    cat: 'Montaj',
  },
  {
    q: 'Sipariş iptal veya değişikliği ne zamana kadar yapılabilir?',
    a: 'Teknik çizim onayı vermeden önce sipariş ücretsiz iptal veya değiştirilebilir. Onay sonrası üretim başladığında iptaller %30 kesinti ile gerçekleşir; ölçü değişikliği ise yeniden üretim anlamına geldiğinden ek ücrete tabidir. Bu nedenle ölçü keşif aşamasını atlamadan sipariş vermenizi şiddetle öneririz.',
    cat: 'Sipariş',
  },
  {
    q: 'Toplu (çok birim) proje siparişlerinde özel fiyatlandırma yapılıyor mu?',
    a: '10 pencere ve üzeri siparişlerde kurumsal fiyatlandırma devreye girer. 25+ pencere için ayrıca proje yöneticisi ataması yapılır. Otel, ofis veya rezidans projeleri için proje bütçesi ve zaman çizelgesi baz alınarak özel teklif hazırlanır. Teklif için WhatsApp veya e-posta ile proje briefinizi iletmeniz yeterlidir.',
    cat: 'Sipariş',
  },
]

const categories = ['Tümü', 'Montaj', 'Ürün', 'Teslimat', 'Kalite', 'Sipariş', 'Garanti', 'Kullanım', 'Ölçü']

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [activeCat, setActiveCat] = useState('Tümü')

  const filtered = activeCat === 'Tümü' ? faqs : faqs.filter((f) => f.cat === activeCat)

  return (
    <section id="sss" className="py-20 md:py-28 bg-white" aria-labelledby="sss-baslik">
      <div className="container-main">
        {/* Schema FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        {/* Başlık */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Sıkça Sorulan Sorular</span>
          </div>
          <h2 id="sss-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            <a href="/" className="hover:text-[#5fa05d] transition-colors">Plise Perde Montajı</a> Hakkında Merak Edilenler
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Montajdan teslikata, malzemeden garantiye — tüm sorularınız için tek kaynak.
          </p>
        </div>

        {/* Kategori filtreleri */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                activeCat === cat
                  ? 'bg-[#83bd81] text-white border-[#83bd81] shadow-md'
                  : 'bg-white text-[#5a6b7e] border-[#e8f0e8] hover:border-[#83bd81] hover:text-[#5fa05d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ listesi */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#83bd81]/50 shadow-md' : 'border-[#e8f0e8] hover:border-[#83bd81]/30'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#f8faf8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-[#83bd81] bg-[#83bd81]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                      {faq.cat}
                    </span>
                    <span className="font-semibold text-[#404e5e] text-sm leading-snug">{faq.q}</span>
                  </div>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#e8f0e8] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'border-[#83bd81] rotate-45 bg-[#83bd81]' : ''
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-[#83bd81]'}`}>
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                  <div className="px-6 pb-5 bg-white">
                    <div className="w-full h-px bg-[#e8f0e8] mb-4" />
                    <p className="text-sm text-[#5a6b7e] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Alt not */}
        <div className="mt-10 text-center">
          <p className="text-[#5a6b7e] text-sm mb-4">
            Sorunuzu burada bulamadınız mı?
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20sormak%20istedi%C4%9Fim%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] text-white font-semibold text-sm hover:bg-[#1eb857] transition-colors shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
