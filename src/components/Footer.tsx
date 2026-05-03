export default function Footer() {
  const mainLinks = [
    { label: 'Plise Perde Montajı', href: '/' },
    { label: 'Plise Perde', href: '/' },
    { label: 'Pliseli Perde', href: '/' },
    { label: 'Gece Gündüz Plise Perde', href: '/' },
    { label: 'Honeycomb Perde', href: '/' },
    { label: 'Yarı Plise Perde', href: '/' },
    { label: 'Saten Plise Perde', href: '/' },
    { label: 'Plise Sineklik', href: '/' },
    { label: 'Plise Perde Fiyatları', href: '/' },
    { label: 'Tam Plise Perde Montajı', href: '/' },
  ]

  const social = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/FenetreSystems/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/fenetresystems/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      href: 'https://x.com/FenetreSystems',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/fenetresystems/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://tr.pinterest.com/fenetresystems/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@FenetreSystems',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-[#2d3844] text-white" aria-label="Site altbilgisi">
      <div className="container-main py-14 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Marka */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#83bd81]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="3" width="9" height="18" rx="2" fill="white" opacity="0.9"/>
                  <rect x="13" y="3" width="9" height="8" rx="2" fill="white" opacity="0.7"/>
                  <rect x="13" y="13" width="9" height="8" rx="2" fill="white" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base">Fenetre Systems</div>
                <div className="text-[#83bd81] text-xs font-medium">Plise Perde Montajı</div>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-4">
              Gebze / Kocaeli'de üretim, Türkiye ve Avrupa geneline teslimat. 15+ yıl deneyim, Avrupa standartları.
            </p>
            <address className="not-italic text-xs text-white/55 leading-relaxed">
              Cumhuriyet Mah. 2233 Sok. No:4/A<br />
              Gebze / Kocaeli
            </address>
          </div>

          {/* İç Linkler */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#83bd81] inline-block" />
              Ürünlerimiz
            </h3>
            <ul className="space-y-2">
              {mainLinks.slice(0, 5).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 hover:text-[#83bd81] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#83bd81] text-xs">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#83bd81] inline-block" />
              Bağlantılar
            </h3>
            <ul className="space-y-2">
              {mainLinks.slice(5).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 hover:text-[#83bd81] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#83bd81] text-xs">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#83bd81] inline-block" />
              İletişim
            </h3>
            <div className="space-y-3 mb-5">
              <a href="tel:+905403363873" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#83bd81]">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                +90 540 336 3873
              </a>
              <a href="mailto:info@fenetresystems.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#83bd81]">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
                info@fenetresystems.com
              </a>
            </div>

            {/* Sosyal medya */}
            <div className="flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#83bd81] text-white/70 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/45 text-center sm:text-left">
            © {new Date().getFullYear()} Plise Perde Montajı — Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/45">
            Üretici:{' '}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="text-[#83bd81] hover:text-white transition-colors font-semibold"
            >
              Fenetre Systems
            </a>
            {' '}— Gebze, Kocaeli, Türkiye
          </p>
        </div>
      </div>
    </footer>
  )
}
