import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { Home as HomeIcon, Plus, FolderOpen, CheckSquare, LayoutDashboard, Menu, X, ArrowRight, ChevronDown, Heart, Settings, LogOut } from 'lucide-react';
import { currentUser } from '../mock-data';
import logoImage from '../../assets/e866dfa28a0dfee6f79bf7633713c72cdb2640df.png';
import footerIllustration from '../../assets/footer-illustration.png';
import footerLogoDark from '../../assets/footer-logo-dark.png';

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (mobileMenuOpen) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 16) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY + 4) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY - 4) {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!profileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!profileMenuRef.current?.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [profileMenuOpen]);

  useEffect(() => {
    const restoreKey = `scroll:${location.pathname}${location.search}`;
    const hasSavedScroll = window.sessionStorage.getItem(restoreKey);

    if (!hasSavedScroll) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    const nextOffset = headerVisible || mobileMenuOpen ? '72px' : '0px';
    const nextOffsetDesktop = headerVisible || mobileMenuOpen ? '100px' : '0px';

    document.documentElement.style.setProperty('--sticky-header-offset', nextOffset);
    document.documentElement.style.setProperty('--sticky-header-offset-desktop', nextOffsetDesktop);

    return () => {
      document.documentElement.style.setProperty('--sticky-header-offset', '72px');
      document.documentElement.style.setProperty('--sticky-header-offset-desktop', '100px');
    };
  }, [headerVisible, mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const getNavLinkClass = (path: string) => {
    const active = path === '/'
      ? location.pathname === '/'
      : isActive(path);
    return `px-5 py-2 rounded-lg text-[14px] font-medium transition-all flex items-center gap-2 ${
      active ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'
    }`;
  };

  const getMobileNavLinkClass = (path: string) => {
    const active = path === '/'
      ? location.pathname === '/'
      : isActive(path);
    return `flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
      active ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-[#F4F4F5]'
    }`;
  };

  const hasFrostedBg = scrolled || mobileMenuOpen;
  const footerPrimaryLinks = [
    { label: 'Catalogue', to: '/' },
    { label: 'Déposer du matériel', to: '/create' },
    { label: 'Mon espace', to: '/my-space' },
    { label: 'Les nouveautés', to: '/browse?section=newest' },
  ];

  const footerCategoryLinks = [
    { label: 'Mobilier de bureau', to: '/browse?category=mobilier_bureau' },
    { label: 'Mobilier médical', to: '/browse?category=mobilier_medical' },
    { label: 'Équipement informatique', to: '/browse?category=equipement_informatique' },
    { label: 'Équipement médical', to: '/browse?category=equipement_medical' },
    { label: 'Matériel de stockage', to: '/browse?category=materiel_stockage' },
    { label: 'Autres matériels', to: '/browse?category=autre' },
  ];

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fef9f4]">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Fermer le menu"
        className={`fixed inset-0 z-[60] bg-[#0F172A]/18 backdrop-blur-[2px] transition-opacity duration-300 min-[840px]:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          headerVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ${
          hasFrostedBg
            ? 'bg-[#fef9f4]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 sm:py-5">

          {/* ── Desktop layout ── */}
          <div className="hidden min-[840px]:flex items-center justify-between">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img src={logoImage} alt="Passerelle GHU" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center gap-3">
              {/* Floating pill nav */}
              <nav className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.6)] rounded-[18px] border border-[#E5E5E4] flex items-center gap-2 p-[9px]">
                <Link to="/" className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${location.pathname === '/' ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'}`}>
                  <HomeIcon className="size-4" />
                  <span>Catalogue</span>
                </Link>
                <Link to="/create" className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${isActive('/create') ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'}`}>
                  <Plus className="size-4" />
                  <span>Déposer</span>
                </Link>
                <Link to="/my-space" className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${isActive('/my-space') ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'}`}>
                  <FolderOpen className="size-4" />
                  <span>Mon espace</span>
                </Link>
                {currentUser.role === 'achat' && (
                  <Link to="/validation" className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${isActive('/validation') ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'}`}>
                    <CheckSquare className="size-4" />
                    <span>Validation</span>
                  </Link>
                )}
                {currentUser.role === 'admin' && (
                  <Link to="/admin" className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${isActive('/admin') ? 'bg-[#0F172A] text-white' : 'text-[#0F172A] hover:bg-black/5'}`}>
                    <LayoutDashboard className="size-4" />
                    <span>Admin</span>
                  </Link>
                )}
              </nav>

              <div ref={profileMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setProfileMenuOpen((value) => !value)}
                  className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.6)] rounded-[18px] border border-[#E5E5E4] flex items-center gap-3 py-[9px] pl-[9px] pr-4 transition-all hover:bg-white/80"
                  aria-expanded={profileMenuOpen}
                  aria-haspopup="menu"
                  aria-label="Ouvrir le menu du profil"
                >
                  <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                    <span className="text-white text-[15px] font-semibold">{currentUser.name.charAt(0)}</span>
                  </div>
                  <ChevronDown className={`size-4 text-[#0F172A] transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute right-0 top-[calc(100%+12px)] w-[220px] overflow-hidden rounded-2xl border border-[#E5E5E4] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                    profileMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
                  }`}
                  role="menu"
                >
                  <div className="border-b border-[#E5E5E4] px-4 py-3">
                    <div className="text-sm font-semibold text-[#0F172A]">Mon profil</div>
                  </div>
                  <div className="p-2">
                    <Link
                      to="/my-space?tab=favorites"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#F4F4F5]"
                      role="menuitem"
                    >
                      <Heart className="size-4 text-[#71717A]" />
                      Mes favoris
                    </Link>
                    <Link
                      to="/my-space"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#F4F4F5]"
                      role="menuitem"
                    >
                      <Settings className="size-4 text-[#71717A]" />
                      Préférences
                    </Link>
                    <button
                      type="button"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-[#DC2626] transition-colors hover:bg-[#FEF2F2]"
                      role="menuitem"
                    >
                      <LogOut className="size-4" />
                      Se déconnecter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile / Tablet layout ── */}
          <div className="flex min-[840px]:hidden items-center justify-between">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img src={logoImage} alt="Passerelle GHU" className="h-9 w-auto" />
            </Link>

            <div className="flex items-center gap-2">
              {/* "+" always visible */}
              <Link
                to="/create"
                className={`size-10 flex items-center justify-center rounded-xl transition-all ${
                  isActive('/create')
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-[#0F172A]/8 text-[#0F172A] hover:bg-[#0F172A]/15'
                }`}
                aria-label="Déposer un objet"
              >
                <Plus className="size-5" />
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="size-10 flex items-center justify-center rounded-xl text-[#0F172A] hover:bg-black/5 transition-all"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {/* ── Mobile dropdown menu ── */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[840px]:hidden ${
              mobileMenuOpen ? 'mt-3 max-h-[420px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'
            }`}
          >
            <div className="border-t border-[#E5E5E4] pt-3">
              <nav className="flex flex-col gap-1 pb-2">
                <Link to="/" className={getMobileNavLinkClass('/')}>
                  <HomeIcon className="size-4 shrink-0" />
                  <span>Catalogue</span>
                </Link>
                <Link to="/create" className={getMobileNavLinkClass('/create')}>
                  <Plus className="size-4 shrink-0" />
                  <span>Déposer un objet</span>
                </Link>
                <Link to="/my-space" className={getMobileNavLinkClass('/my-space')}>
                  <FolderOpen className="size-4 shrink-0" />
                  <span>Mon espace</span>
                </Link>
                {currentUser.role === 'achat' && (
                  <Link to="/validation" className={getMobileNavLinkClass('/validation')}>
                    <CheckSquare className="size-4 shrink-0" />
                    <span>Validation</span>
                  </Link>
                )}
                {currentUser.role === 'admin' && (
                  <Link to="/admin" className={getMobileNavLinkClass('/admin')}>
                    <LayoutDashboard className="size-4 shrink-0" />
                    <span>Admin</span>
                  </Link>
                )}

                {/* User info at bottom of menu */}
                <div className="mt-2 pt-3 border-t border-[#E5E5E4] flex items-center gap-3 px-4 py-2">
                  <div className="size-9 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-[14px] font-semibold">{currentUser.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">{currentUser.name}</div>
                    <div className="text-xs text-[#71717A]">{currentUser.uf}</div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

        </div>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      <footer className="mt-36 bg-[#0F172A] text-white sm:mt-44">
        <div className="grid min-h-[300px] overflow-visible lg:grid-cols-3">
          <div className="relative overflow-visible border-b border-white/10 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)]" />
            <img
              src={footerIllustration}
              alt=""
              className="absolute bottom-0 left-1/2 w-[28%] max-w-[120px] max-h-[180px] -translate-x-1/2 object-contain select-none pointer-events-none sm:w-[32%] sm:max-w-[145px] sm:max-h-[210px] md:w-[36%] md:max-w-[180px] md:max-h-[260px] lg:left-[48%] lg:w-[80%] lg:max-w-[520px] lg:max-h-none"
            />
          </div>

          <div className="lg:col-span-2">
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
              <div className="mb-8 max-w-[560px]">
                <img src={footerLogoDark} alt="Passerelle GHU" className="h-11 w-auto" />
                <p className="mt-5 text-sm leading-6 text-white/72 sm:text-[15px]">
                  Plateforme de mise en relation entre établissements pour redistribuer le matériel disponible, suivre les demandes et structurer les dépôts.
                </p>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    Navigation
                  </h2>
                  <nav className="space-y-3">
                    {footerPrimaryLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="block text-sm text-white/88 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    Catégories
                  </h2>
                  <nav className="space-y-3">
                    {footerCategoryLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="block text-sm text-white/88 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    Accès direct
                  </h2>
                  <div className="space-y-3">
                    <Link to="/my-space" className="block text-sm text-white/88 transition-colors hover:text-white">
                      Gérer mes favoris, demandes et dépôts
                    </Link>
                    <Link to="/create" className="block text-sm text-white/88 transition-colors hover:text-white">
                      Déposer du matériel
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
