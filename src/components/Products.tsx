export default function Products() {
  const mainProducts = [
    {
      name: 'Plise Perde',
      slug: 'plise-perde',
      desc: 'Katlanabilir akordeon yapısıyla ışığı hassas biçimde filtreleyen, ölçüye özel üretim perde sistemi. Her pencere boyutuna uyum sağlar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#e8f5e8"/>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={i} x1="6" y1={8+i*5} x2="42" y2={8+i*5} stroke="#83bd81" strokeWidth="1.5" opacity={1-i*0.05}/>
          ))}
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'En Çok Satan',
      color: '#83bd81',
    },
    {
      name: 'Gece Gündüz Plise Perde',
      slug: 'gece-gunduz-plise-perde',
      desc: 'Tek kasada iki farklı kumaş katı barındırır. Gündüz saatlerinde ışık süzer; gece tam karartma sağlar. İki işlev, tek çözüm.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#e8f5e8"/>
          {[0,1,2,3,4].map(i=>(
            <rect key={`d${i}`} x="6" y={9+i*4} width="36" height="2" rx="1" fill="#83bd81" opacity={0.7+i*0.05}/>
          ))}
          {[0,1,2,3,4].map(i=>(
            <rect key={`n${i}`} x="6" y={31+i*2.5} width="36" height="1.5" rx="0.75" fill="#404e5e" opacity={0.6+i*0.05}/>
          ))}
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
          <line x1="6" y1="28" x2="42" y2="28" stroke="#5fa05d" strokeWidth="1.5" strokeDasharray="3,2"/>
        </svg>
      ),
      tag: 'Çift Fonksiyon',
      color: '#404e5e',
    },
    {
      name: 'Honeycomb Plise Perde',
      slug: 'honeycomb-plise-perde',
      desc: 'Petek yapılı hücre sistemiyle ısı yalıtımı ve ses absorbsiyonu bir arada sunar. Enerji tasarrufu sağlayan akıllı perde teknolojisi.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#e8f5e8"/>
          {[0,1,2,3,4,5].map(row=>(
            [0,1,2].map(col=>{
              const cx = 12+col*12+(row%2===0?0:6)
              const cy = 16+row*6
              return <polygon key={`h${row}${col}`} points={`${cx},${cy-4} ${cx+5},${cy-2} ${cx+5},${cy+2} ${cx},${cy+4} ${cx-5},${cy+2} ${cx-5},${cy-2}`} fill="none" stroke="#83bd81" strokeWidth="1.2" opacity="0.8"/>
            })
          ))}
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Isı Yalıtımı',
      color: '#5fa05d',
    },
    {
      name: 'Saten Plise Perde',
      slug: 'saten-plise-perde',
      desc: 'İpeksi yüzeyi ve parlak dokusuyla yaşam alanlarına zarif bir atmosfer katar. Özellikle yatak odası ve oturma odaları için tercih edilir.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#f0f8f0"/>
          <defs>
            <linearGradient id="saten" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a8d4a6"/>
              <stop offset="50%" stopColor="#83bd81"/>
              <stop offset="100%" stopColor="#5fa05d"/>
            </linearGradient>
          </defs>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={i} x1="6" y1={9+i*4.5} x2="42" y2={9+i*4.5} stroke="url(#saten)" strokeWidth="2" opacity={0.9}/>
          ))}
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Premium',
      color: '#83bd81',
    },
    {
      name: 'Tül Plise Perde',
      slug: 'tul-plise-perde',
      desc: 'Yarı saydam yapısıyla doğal ışığı süzerek içeri alır; dışarıdan görünürlüğü azaltır. Hafif ve modern bir görünüm sağlar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#edf8ed"/>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={i} x1="6" y1={9+i*4.5} x2="42" y2={9+i*4.5} stroke="#83bd81" strokeWidth="0.8" strokeDasharray="2,1" opacity={0.6}/>
          ))}
          <circle cx="24" cy="28" r="8" fill="none" stroke="#83bd81" strokeWidth="0.8" opacity="0.4"/>
          <circle cx="24" cy="28" r="4" fill="none" stroke="#83bd81" strokeWidth="0.8" opacity="0.3"/>
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Şeffaf & Modern',
      color: '#5a6b7e',
    },
    {
      name: 'Keten Plise Perde',
      slug: 'keten-plise-perde',
      desc: 'Doğal keten dokusu görünümü veren yüksek kaliteli polyester kumaş yapısı. Organik ve minimalist tasarım anlayışıyla öne çıkar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#f5f8f0"/>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={`h${i}`} x1="6" y1={9+i*4.5} x2="42" y2={9+i*4.5} stroke="#8faa6e" strokeWidth="1" opacity={0.6}/>
          ))}
          {[0,1,2,3,4,5,6].map(i=>(
            <line key={`v${i}`} x1={10+i*5} y1="9" x2={10+i*5} y2="44" stroke="#8faa6e" strokeWidth="0.6" opacity={0.3}/>
          ))}
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Doğal Doku',
      color: '#8faa6e',
    },
    {
      name: 'Baskılı Plise Perde',
      slug: 'baskili-plise-perde',
      desc: 'Kişiselleştirilmiş motif ve desenlerle üretilen özel koleksiyon. Mekânınızın kimliğini perde tasarımına yansıtma imkânı sunar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#e8f5e8"/>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={i} x1="6" y1={9+i*4.5} x2="42" y2={9+i*4.5} stroke="#83bd81" strokeWidth="1.2" opacity={0.5}/>
          ))}
          <circle cx="18" cy="20" r="4" fill="#83bd81" opacity="0.6"/>
          <circle cx="30" cy="30" r="3" fill="#404e5e" opacity="0.4"/>
          <path d="M14 34 Q24 24 34 34" stroke="#5fa05d" strokeWidth="1.5" fill="none" opacity="0.7"/>
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Özel Tasarım',
      color: '#404e5e',
    },
    {
      name: 'Desenli Plise Perde',
      slug: 'desenli-plise-perde',
      desc: 'Geometrik ve organik desen seçenekleriyle üretilen koleksiyon. Hem ışık kontrolü hem dekoratif detay olarak mekânı tamamlar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="4" width="36" height="40" rx="3" fill="#edf8ed"/>
          {[0,1,2,3,4,5,6,7,8].map(i=>(
            <line key={i} x1="6" y1={9+i*4.5} x2="42" y2={9+i*4.5} stroke="#83bd81" strokeWidth="1" opacity={0.5}/>
          ))}
          <path d="M6 20 L16 14 L26 20 L36 14 L42 18" stroke="#5fa05d" strokeWidth="1.5" fill="none" opacity="0.7"/>
          <path d="M6 30 L16 24 L26 30 L36 24 L42 28" stroke="#404e5e" strokeWidth="1" fill="none" opacity="0.5"/>
          <rect x="6" y="4" width="36" height="5" rx="2" fill="#404e5e"/>
        </svg>
      ),
      tag: 'Geometrik',
      color: '#83bd81',
    },
  ]

  const otherProducts = [
    { name: 'Plise Sineklik', desc: 'Katlanabilir sineklik sistemi', icon: '🪟' },
    { name: 'Jaluzi Perde', desc: 'Alüminyum & ahşap jaluzi', icon: '🏠' },
    { name: 'Düet Perde', desc: 'İkili katman perde sistemi', icon: '🌅' },
    { name: 'Zip Perde', desc: 'Rüzgar ve böcek bariyeri', icon: '🛡️' },
    { name: 'Sineklik', desc: 'Sabit ve sürgülü sineklik', icon: '✨' },
  ]

  return (
    <section id="urunler" className="py-20 md:py-28 bg-white" aria-labelledby="urunler-baslik">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#83bd81]/10 border border-[#83bd81]/20 mb-4">
            <span className="text-[#5fa05d] text-xs font-bold tracking-widest uppercase">Ürün Kataloğu</span>
          </div>
          <h2
            id="urunler-baslik"
            className="text-3xl md:text-4xl font-extrabold text-[#404e5e] mb-4"
          >
            <a href="/" className="hover:text-[#5fa05d] transition-colors">Plise Perde</a> Çeşitlerimiz
          </h2>
          <div className="section-line mx-auto mb-5" />
          <p className="text-[#5a6b7e] max-w-2xl mx-auto text-base leading-relaxed">
            Her kumaş türü, her mekan ihtiyacı için ayrı bir çözüm. <strong>Ölçüye özel üretim</strong>,{' '}
            <em>farklı doku ve renk seçenekleri</em> ile istediğiniz atmosferi yaratıyorsunuz.
          </p>
        </div>

        {/* Ürün grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {mainProducts.map((p) => (
            <a
              key={p.slug}
              href="/"
              className="card-hover group relative bg-[#f8faf8] rounded-2xl border border-[#e8f0e8] p-5 flex flex-col gap-3 hover:border-[#83bd81]/50 hover:bg-white"
            >
              {/* Tag */}
              <span
                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.tag}
              </span>
              {/* İkon */}
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[#e8f0e8] flex items-center justify-center group-hover:shadow-md transition-shadow">
                {p.icon}
              </div>
              {/* İsim */}
              <h3 className="font-bold text-[#404e5e] text-sm leading-snug group-hover:text-[#5fa05d] transition-colors">
                {p.name}
              </h3>
              {/* Açıklama */}
              <p className="text-xs text-[#5a6b7e] leading-relaxed flex-1">{p.desc}</p>
              {/* Link */}
              <span className="text-xs font-semibold text-[#83bd81] flex items-center gap-1 group-hover:gap-2 transition-all">
                İncele
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </a>
          ))}
        </div>

        {/* Diğer ürünler */}
        <div className="bg-[#f3f9f3] rounded-3xl border border-[#83bd81]/20 p-7 md:p-10">
          <h3 className="text-lg font-bold text-[#404e5e] mb-6">Diğer Ürün Sistemlerimiz</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {otherProducts.map((op) => (
              <a
                key={op.name}
                href="/"
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#e8f0e8] text-center hover:border-[#83bd81] hover:shadow-md transition-all group"
              >
                <span className="text-2xl">{op.icon}</span>
                <span className="text-xs font-bold text-[#404e5e] group-hover:text-[#5fa05d] transition-colors leading-snug">
                  {op.name}
                </span>
                <span className="text-[10px] text-[#5a6b7e]">{op.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bayilik CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#404e5e] rounded-2xl px-7 py-5 text-white">
          <div>
            <div className="font-bold text-base mb-0.5">Bayilik Fırsatı</div>
            <div className="text-sm text-white/75">Bölgenizde Fenetre Systems bayiliği almak ister misiniz?</div>
          </div>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] text-white font-bold text-sm hover:bg-[#1eb857] transition-colors shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp ile Bilgi Al
          </a>
        </div>
      </div>
    </section>
  )
}
