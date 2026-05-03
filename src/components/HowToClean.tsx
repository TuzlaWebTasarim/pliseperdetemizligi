'use client'

import { useState } from 'react'

export default function HowToClean() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 'adim-1',
      num: '01',
      title: 'Perdelerin Sökülmesi',
      desc: 'Plise perdeleri güvenli bir şekilde sökün. Mekanizmayı zarar vermeden çıkarın.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.12"/>
          <rect x="14" y="20" width="28" height="16" rx="3" fill="none" stroke="#83bd81" strokeWidth="2"/>
          <path d="M20 14h16v6H20z" fill="#5fa05d" opacity="0.3"/>
          <rect x="24" y="26" width="8" height="2" rx="1" fill="#404e5e"/>
          <rect x="24" y="30" width="8" height="2" rx="1" fill="#404e5e"/>
        </svg>
      ),
      details: [
        'Önce mekanizmanın kilidini açın',
        'Üst profilden yavaşça çıkarın',
        'Kumaşı buruşturmadan katlayın',
        'Temiz bir alana yerleştirin'
      ]
    },
    {
      id: 'adim-2',
      num: '02',
      title: 'Toz Alma İşlemi',
      desc: 'Yumuşak bir fırça veya elektrikli süpürge ile yüzeydeki tozları nazikçe alın.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#404e5e" opacity="0.08"/>
          <path d="M20 32l4-8 6 6 8-10" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="12" fill="none" stroke="#5fa05d" strokeWidth="1.8"/>
          <path d="M16 40h24" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="20" cy="44" r="2" fill="#404e5e"/>
          <circle cx="28" cy="44" r="2" fill="#404e5e"/>
          <circle cx="36" cy="44" r="2" fill="#404e5e"/>
        </svg>
      ),
      details: [
        'Yumuşak fırça kullanın',
        'Elektrikli süpürge fırça ucu',
        'Tüm yüzeyleri temizleyin',
        'Kumaş yapısını koruyun'
      ]
    },
    {
      id: 'adim-3',
      num: '03',
      title: 'Yerinde Temizlik',
      desc: 'Hafif kirler için nemli bir bezle silme işlemi uygulayın. Suya batırmayın.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.1"/>
          <path d="M20 20l12 12M32 20l-12 12" stroke="#5fa05d" strokeWidth="2" strokeLinecap="round"/>
          <rect x="18" y="30" width="20" height="14" rx="2" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M22 34h12M22 38h8" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="28" cy="24" r="6" fill="#f3f9f3" stroke="#5fa05d" strokeWidth="1.5"/>
        </svg>
      ),
      details: [
        'Nemli bez kullanın',
        'Suya batırmayın',
        'Dairesel hareketlerle silin',
        'Hemen kurutun'
      ]
    },
    {
      id: 'adim-4',
      num: '04',
      title: 'Derinlemesine Temizlik',
      desc: 'Profesyonel temizlik için özel solüsyonlar kullanın veya uzman desteği alın.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#404e5e" opacity="0.07"/>
          <path d="M28 16v12l8 4" stroke="#83bd81" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="28" cy="28" r="10" fill="none" stroke="#5fa05d" strokeWidth="1.8"/>
          <circle cx="28" cy="28" r="2" fill="#83bd81"/>
          <path d="M22 42h12" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="24" y="38" width="8" height="4" rx="1" fill="#5fa05d" opacity="0.3"/>
        </svg>
      ),
      details: [
        'Özel temizlik solüsyonu',
        'Profesyonel ekip desteği',
        'Laboratuvar testli ürünler',
        'Garantili sonuç'
      ]
    },
    {
      id: 'adim-5',
      num: '05',
      title: 'Kurutma Montaj',
      desc: 'Tamamen kuruduktan sonra perdeleri orijinal konumuna monte edin.',
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="26" fill="#83bd81" opacity="0.12"/>
          <rect x="14" y="22" width="28" height="16" rx="3" fill="none" stroke="#404e5e" strokeWidth="1.8"/>
          <path d="M22 22v-4a6 6 0 0112 0v4" stroke="#5fa05d" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="28" cy="30" r="3" fill="#83bd81"/>
          <path d="M18 38h20" stroke="#83bd81" strokeWidth="1.5"/>
          <circle cx="28" cy="42" r="2" fill="#5fa05d"/>
        </svg>
      ),
      details: [
        'Tamamen kurumasını bekleyin',
        'Mekanizmayı kontrol edin',
        'Orijinal konuma monte',
        'Test edin'
      ]
    }
  ]

  const cleaningMethods = [
    { type: 'Kuru Temizlik', duration: '15-30 dk', frequency: 'Haftalık', difficulty: 'Kolay', icon: '🧹' },
    { type: 'Nemli Silme', duration: '20-40 dk', frequency: 'Aylık', difficulty: 'Orta', icon: '💧' },
    { type: 'Profesyonel', duration: '1-2 saat', frequency: 'Yıllık', difficulty: 'Uzman', icon: '⭐' },
  ]

  const materials = [
    { name: 'Yumuşak Fırça', essential: true, desc: 'Toz alma için ideal' },
    { name: 'Mikrofiber Bez', essential: true, desc: 'Lekeler için' },
    { name: 'Elektrikli Süpürge', essential: false, desc: 'Hızlı temizlik' },
    { name: 'Özel Solüsyon', essential: false, desc: 'Derin temizlik' },
    { name: 'Kuru Havlu', essential: true, desc: 'Kurutma için' },
  ]

  const warnings = [
    'Suya batırmayın - Kumaş zarar görür',
    'Ağır kimyasal kullanmayın',
    'Güneşte kurutmayın - Solma riski',
    'Mekanizmayı zorlamayın'
  ]

  return (
    <section id="nasil-yapilir" className="py-20 md:py-28 bg-white" aria-labelledby="nasil-baslik">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Rehber</span>
          </div>
          <h2 id="nasil-baslik" className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4">
            Plise Perde Temizliği Nasıl Yapılır?
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-xl mx-auto text-base leading-relaxed">
            Plise perdelerinizin ömrünü uzatmak için doğru temizlik yöntemlerini öğrenin.
            Adım adım rehberimizle perdeleriniz ilk günkü gibi kalsın.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Sol Panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Temizlik Yöntemleri Tablosu */}
            <div className="bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] p-6">
              <h3 className="font-bold text-[#404e5e] text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-[#83bd81] inline-block" />
                Temizlik Yöntemleri
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8f0e8]">
                      <th className="text-left py-2 text-[#404e5e] font-semibold">Yöntem</th>
                      <th className="text-center py-2 text-[#404e5e] font-semibold">Süre</th>
                      <th className="text-center py-2 text-[#404e5e] font-semibold">Zorluk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cleaningMethods.map((method, i) => (
                      <tr key={i} className="border-b border-[#e8f0e8]/50 last:border-0">
                        <td className="py-3">
                          <span className="flex items-center gap-2">
                            <span className="text-lg">{method.icon}</span>
                            <span className="text-[#404e5e] font-medium">{method.type}</span>
                          </span>
                        </td>
                        <td className="text-center py-3 text-[#5a6b7e]">{method.duration}</td>
                        <td className="text-center py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            method.difficulty === 'Kolay' ? 'bg-[#83bd81]/20 text-[#5fa05d]' :
                            method.difficulty === 'Orta' ? 'bg-[#fbbf24]/20 text-[#f59e0b]' :
                            'bg-[#404e5e]/20 text-[#404e5e]'
                          }`}>
                            {method.difficulty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gerekli Malzemeler */}
            <div className="bg-white rounded-2xl border border-[#e8f0e8] p-6">
              <h3 className="font-bold text-[#404e5e] text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-[#83bd81] inline-block" />
                Gerekli Malzemeler
              </h3>
              <ul className="space-y-3">
                {materials.map((mat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      mat.essential ? 'bg-[#83bd81] text-white' : 'bg-[#e8f0e8] text-[#5a6b7e]'
                    }`}>
                      {mat.essential ? '✓' : '○'}
                    </span>
                    <div>
                      <span className={`font-medium ${mat.essential ? 'text-[#404e5e]' : 'text-[#5a6b7e]'}`}>
                        {mat.name}
                      </span>
                      {mat.essential && <span className="ml-2 text-[10px] bg-[#83bd81]/20 text-[#5fa05d] px-2 py-0.5 rounded-full">Zorunlu</span>}
                      <p className="text-xs text-[#5a6b7e] mt-1">{mat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uyarılar */}
            <div className="bg-[#fef2f2] rounded-2xl border border-[#fecaca] p-6">
              <h3 className="font-bold text-[#dc2626] text-base mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Dikkat Edilmesi Gerekenler
              </h3>
              <ul className="space-y-2">
                {warnings.map((warning, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#7f1d1d]">
                    <span className="text-[#dc2626] font-bold">!</span>
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ana İçerik - Sağ Panel */}
          <div className="lg:col-span-8">
            {/* Adım Adım Rehber */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-[#f3f9f3] border-[#83bd81] shadow-lg'
                      : 'bg-white border-[#e8f0e8] hover:border-[#83bd81]/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* İkon ve Numara */}
                    <div className="relative">
                      <div className={`${activeStep === index ? 'bg-[#83bd81]' : 'bg-[#e8f0e8]'} rounded-xl p-3`}>
                        {step.icon}
                      </div>
                      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        activeStep === index ? 'bg-[#5fa05d] text-white' : 'bg-[#83bd81]/20 text-[#5fa05d]'
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* İçerik */}
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${activeStep === index ? 'text-[#404e5e]' : 'text-[#404e5e]'}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5a6b7e] leading-relaxed mb-3">
                        {step.desc}
                      </p>

                      {/* Detaylar - Aktif olduğunda göster */}
                      {activeStep === index && (
                        <div className="mt-4 pt-4 border-t border-[#83bd81]/20">
                          <h4 className="font-semibold text-[#404e5e] text-sm mb-3">Detaylı Adımlar:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm text-[#5a6b7e]">
                                <span className="w-6 h-6 rounded-full bg-[#83bd81]/20 flex items-center justify-center text-[#5fa05d] text-xs font-bold">
                                  {i + 1}
                                </span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Ok İkonu */}
                    <div className={`${activeStep === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#5fa05d]">
                        <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sıkça Sorulan Sorular Tablosu */}
            <div className="mt-8 bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] p-6">
              <h3 className="font-bold text-[#404e5e] text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-[#83bd81] inline-block" />
                Sıkça Sorulan Sorular
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8f0e8]">
                      <th className="text-left py-3 text-[#404e5e] font-semibold">Soru</th>
                      <th className="text-left py-3 text-[#404e5e] font-semibold">Cevap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8f0e8]/50">
                      <td className="py-3 text-[#404e5e] font-medium">Plise perdeler yıkanabilir mi?</td>
                      <td className="py-3 text-[#5a6b7e]">Hayır, suyla yıkanmaz. Kuru temizlik önerilir.</td>
                    </tr>
                    <tr className="border-b border-[#e8f0e8]/50">
                      <td className="py-3 text-[#404e5e] font-medium">Ne sıklıkla temizlenmeli?</td>
                      <td className="py-3 text-[#5a6b7e]">Haftalık toz alma, yıllık profesyonel temizlik.</td>
                    </tr>
                    <tr className="border-b border-[#e8f0e8]/50">
                      <td className="py-3 text-[#404e5e] font-medium">Lekeler nasıl çıkar?</td>
                      <td className="py-3 text-[#5a6b7e]">Nemli bezle silin, profesyonel destek alın.</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[#404e5e] font-medium">Profesyonel temizlik gerekli mi?</td>
                      <td className="py-3 text-[#5a6b7e]">Yılda bir kez önerilir, ömrü uzatır.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
