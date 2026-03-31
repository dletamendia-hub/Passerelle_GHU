import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, MapPin, Package, TrendingUp, Building2, BarChart3, Heart, ArrowRight, BriefcaseBusiness, BedSingle, Monitor, Stethoscope, Archive, Shapes } from 'lucide-react';
import { mockListings } from '../mock-data';
import { categoryBadgeLabels, categoryLabels, type ItemCategory, type Listing } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import heroBackgroundImage from '../../assets/hero-background.png';
import heroLeftImage from '../../assets/hero-perso-left.png';
import heroRightImage from '../../assets/hero-perso-right.png';

const categoryIcons: Record<ItemCategory, ComponentType<{ className?: string }>> = {
  mobilier_bureau: BriefcaseBusiness,
  mobilier_medical: BedSingle,
  equipement_informatique: Monitor,
  equipement_medical: Stethoscope,
  materiel_stockage: Archive,
  autre: Shapes,
};

const categoryIconStyles: Record<ItemCategory, { wrapper: string; icon: string }> = {
  mobilier_bureau: { wrapper: 'bg-[#EFF6FF]', icon: 'text-[#2563EB]' },
  mobilier_medical: { wrapper: 'bg-[#F0FDF4]', icon: 'text-[#16A34A]' },
  equipement_informatique: { wrapper: 'bg-[#EEF2FF]', icon: 'text-[#4F46E5]' },
  equipement_medical: { wrapper: 'bg-[#FDF2F8]', icon: 'text-[#DB2777]' },
  materiel_stockage: { wrapper: 'bg-[#FFF7ED]', icon: 'text-[#EA580C]' },
  autre: { wrapper: 'bg-[#F4F4F5]', icon: 'text-[#52525B]' },
};

export default function Home() {
  const location = useLocation();
  const searchPanelRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const [displayStats, setDisplayStats] = useState({
    available: 0,
    recent: 0,
    establishments: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const restoreKey = `scroll:${location.pathname}${location.search}`;
    const savedScroll = window.sessionStorage.getItem(restoreKey);

    if (savedScroll) {
      window.scrollTo({ top: Number(savedScroll), behavior: 'auto' });
      window.sessionStorage.removeItem(restoreKey);
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHeroReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const availableListings = mockListings.filter((listing) => listing.status === 'published');
  const establishmentOptions = [...new Set(
    availableListings
      .map((listing) => listing.site || listing.author?.site)
      .filter((site): site is string => Boolean(site))
  )].sort((a, b) => a.localeCompare(b));

  const heroParallaxDistance = Math.min(scrollY, 520);
  const backgroundParallax = heroParallaxDistance * 0.08;
  const leftParallax = heroParallaxDistance * 0.18;
  const rightParallax = heroParallaxDistance * 0.22;
  const searchBarDocked = scrollY > 180;
  const backgroundScale = heroReady ? 1 : 1.02;
  const leftScale = heroReady ? 1 : 1.045;
  const rightScale = heroReady ? 1 : 1.055;

  const filteredListings = availableListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const searchResults = searchQuery.trim().length > 0
    ? [...availableListings]
        .map((listing) => {
          const query = searchQuery.trim().toLowerCase();
          const title = listing.title.toLowerCase();
          const description = listing.description.toLowerCase();
          const site = (listing.site || listing.author?.site || '').toLowerCase();
          const locationLabel = listing.location.toLowerCase();

          let score = 0;
          if (title.startsWith(query)) score += 7;
          else if (title.includes(query)) score += 5;
          if (description.includes(query)) score += 2;
          if (site.includes(query)) score += 1;
          if (locationLabel.includes(query)) score += 1;

          return { listing, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return b.listing.createdAt.getTime() - a.listing.createdAt.getTime();
        })
        .slice(0, 5)
    : [];

  const recentListings = [...filteredListings]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 4);

  const categorySections = Object.entries(categoryLabels)
    .map(([key, label]) => ({
      key,
      label,
      listings: filteredListings.filter((listing) => listing.category === key),
    }))
    .filter((section) => section.listings.length > 0);

  useEffect(() => {
    const targets = {
      available: availableListings.length,
      recent: recentListings.length,
      establishments: establishmentOptions.length,
    };
    const start = performance.now();
    const duration = 950;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayStats({
        available: Math.round(targets.available * eased),
        recent: Math.round(targets.recent * eased),
        establishments: Math.round(targets.establishments * eased),
      });

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [availableListings.length, recentListings.length, establishmentOptions.length]);

  useEffect(() => {
    if (!searchResultsOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (searchPanelRef.current && !searchPanelRef.current.contains(event.target as Node)) {
        setSearchResultsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [searchResultsOpen]);

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>, listingId: string) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(listingId);
  };

  const getNavigationState = () => ({
    backTo: `${location.pathname}${location.search}`,
    scrollY: window.scrollY,
  });

  const getBrowseLink = (params: Record<string, string>) => {
    const nextParams = new URLSearchParams(params);
    return `/browse?${nextParams.toString()}`;
  };

  const renderSearchSuggestions = () => {
    if (!searchResultsOpen || searchQuery.trim().length === 0) {
      return null;
    }

    return (
      <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-[90] overflow-hidden rounded-2xl border border-[#E5E5E4] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        {searchResults.length > 0 ? (
          <div className="divide-y divide-[#E5E5E4]">
            {searchResults.map(({ listing }) => (
              <Link
                key={listing.id}
                to={`/listing/${listing.id}`}
                state={getNavigationState()}
                onClick={() => setSearchResultsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 transition-colors hover:bg-[#F8F8F7]"
              >
                <div className="h-14 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#F4F4F5]">
                  <img src={listing.photos[0]} alt={listing.title} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#F4F4F5] px-2 py-0.5 text-[10px] font-semibold text-[#0F172A]">
                      {categoryBadgeLabels[listing.category]}
                    </span>
                    <span className="truncate text-[11px] text-[#71717A]">{listing.site || listing.author?.site}</span>
                  </div>
                  <div className="truncate text-sm font-semibold text-[#0F172A]">{listing.title}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs text-[#71717A]">
                    <MapPin className="size-3.5" />
                    <span className="truncate">{listing.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="px-4 py-4 text-sm text-[#71717A]">
            Aucun article pertinent trouvé.
          </div>
        )}
      </div>
    );
  };

  const renderListingCard = (listing: Listing) => (
    <Link
      key={listing.id}
      to={`/listing/${listing.id}`}
      state={getNavigationState()}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-[#E5E5E4] hover:border-[#3B82F6]">
        <div className="relative h-28 sm:h-40 overflow-hidden bg-[#F4F4F5]">
          <img
            src={listing.photos[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            type="button"
            onClick={(event) => handleFavoriteClick(event, listing.id)}
            className={`absolute right-2 top-2 inline-flex size-8 sm:right-3 sm:top-3 sm:size-10 items-center justify-center rounded-full border transition-all ${
              isFavorite(listing.id)
                ? 'border-[#FBCFE8] bg-[#FFF1F5] text-[#E11D48]'
                : 'border-white/80 bg-white/90 text-[#71717A] hover:text-[#E11D48]'
            }`}
            aria-label={isFavorite(listing.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart className={`size-3.5 sm:size-4 ${isFavorite(listing.id) ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="p-3 sm:p-5">
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="inline-flex items-center rounded-full bg-[#F4F4F5] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-[#0F172A] whitespace-nowrap">
              {categoryBadgeLabels[listing.category]}
            </span>
            <span className="text-[10px] sm:text-xs text-[#71717A]">
              {new Date(listing.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
            </span>
          </div>
          <h3 className="font-bold text-[#0F172A] mb-1.5 sm:mb-2 line-clamp-2 text-[14px] sm:text-[17px] leading-tight">
            {listing.title}
          </h3>
          <div className="space-y-1.5 sm:space-y-2 text-sm">
            <div className="flex items-center gap-1.5 text-[#52525B]">
              <Building2 className="size-3.5 sm:size-4 text-[#71717A]" />
              <span className="truncate text-[11px] sm:text-xs">{listing.site || listing.author?.site}</span>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 text-[#71717A] min-w-0">
                <MapPin className="size-3.5 sm:size-4" />
                <span className="truncate text-[11px] sm:text-xs">{listing.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0F172A] font-semibold flex-shrink-0">
                <Package className="size-3.5 sm:size-4" />
                <span className="text-[11px] sm:text-xs">{listing.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-[#fef9f4]">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[600px] mb-[-80px] lg:mb-[-120px]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBackgroundImage}
            alt="GHU"
            className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-[1450ms] ease-[cubic-bezier(0.25,0.95,0.35,1)]"
            style={{ transform: `translateY(${backgroundParallax}px) scale(${backgroundScale})` }}
          />
          <img
            src={heroLeftImage}
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 h-[58%] w-auto object-contain transition-transform duration-[1650ms] ease-[cubic-bezier(0.25,0.95,0.35,1)] sm:h-[66%] lg:h-[96%]"
            style={{ transform: `translateY(${leftParallax}px) scale(${leftScale})` }}
          />
          <img
            src={heroRightImage}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 h-[58%] w-auto object-contain transition-transform duration-[1800ms] ease-[cubic-bezier(0.25,0.95,0.35,1)] sm:h-[66%] lg:h-[96%]"
            style={{ transform: `translateY(${rightParallax}px) scale(${rightScale})` }}
          />
        </div>

        {/* Gradient overlay : transparent en haut → 100% crème en bas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(254,249,244,0) 0%, rgba(254,249,244,0) 30%, rgba(254,249,244,0.6) 60%, #fef9f4 90%)' }}
        />

        {/* Halo central flou pour lisibilité du contenu */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1347 600">
            <defs>
              <filter id="blur-filter" x="150" y="0" width="1050" height="900" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur stdDeviation="57" result="effect1_foregroundBlur" />
              </filter>
            </defs>
            <ellipse cx="673" cy="240" rx="420" ry="320" fill="white" fillOpacity="0.55" filter="url(#blur-filter)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center">
          <h1
            className="font-bold text-[#0F172A] text-center mb-6 sm:mb-12 max-w-[900px] tracking-tight"
            style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(34px, 7vw, 58px)', lineHeight: '1.16' }}
          >
            Donnez une seconde vie<br />au matériel du GHU
          </h1>

          {/* Key Stats — masqués sur mobile et tablette */}
          <div className="hidden lg:flex gap-6 -translate-y-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <BarChart3 className="size-6 text-[#0F172A]" />
                <div className="text-[34px] font-bold leading-none text-[#0F172A]">{displayStats.available}</div>
              </div>
              <div className="mt-2 text-sm text-[#71717A] leading-[18px]">Biens disponibles</div>
            </div>

            <div className="w-px self-stretch bg-[#0F172A]/14" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <TrendingUp className="size-6 text-[#0F172A]" />
                <div className="text-[34px] font-bold leading-none text-[#0F172A]">{displayStats.recent}</div>
              </div>
              <div className="mt-2 text-sm text-[#71717A] leading-[18px]">Ajouts récents</div>
            </div>

            <div className="w-px self-stretch bg-[#0F172A]/14" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <Building2 className="size-6 text-[#0F172A]" />
                <div className="text-[34px] font-bold leading-none text-[#0F172A]">{displayStats.establishments}</div>
              </div>
              <div className="mt-2 text-sm text-[#71717A] leading-[18px]">Établissements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search — gradient transparent en haut du filtre → crème en bas */}
      <div
        className="sticky top-[var(--sticky-header-offset,72px)] lg:top-[var(--sticky-header-offset-desktop,80px)] z-[60] transition-[top] duration-300"
        style={{ background: 'linear-gradient(to bottom, rgba(254,249,244,0) 0%, #fef9f4 100%)' }}
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8 pt-0 pb-0">
          <div
            className={`bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-4 lg:p-8 transition-[border-radius] duration-300 ${
              searchBarDocked ? 'rounded-b-2xl rounded-t-none' : 'rounded-2xl'
            }`}
          >
            <div ref={searchPanelRef} className="relative w-full">
              <label className="block text-sm font-semibold text-[#0F172A] mb-3">Recherchez</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#71717A]" />
                <input
                  type="text"
                  placeholder="Rechercher par titre ou description..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchResultsOpen(true);
                  }}
                  onFocus={() => setSearchResultsOpen(true)}
                  className="w-full pl-12 pr-4 py-3.5 border border-[#0F172A] rounded-xl text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                />
              </div>
              {renderSearchSuggestions()}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1040px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const CategoryIcon = categoryIcons[key as ItemCategory];
              const categoryStyle = categoryIconStyles[key as ItemCategory];

              return (
              <Link
                key={key}
                to={getBrowseLink({ category: key })}
                state={getNavigationState()}
                className="group min-w-[120px] rounded-[22px] border border-[#E5E5E4] bg-white px-3 py-3.5 text-center text-[#0F172A] transition-all hover:border-[#3B82F6] hover:shadow-md"
              >
                <div className={`mx-auto mb-2.5 flex size-10 items-center justify-center rounded-full ${categoryStyle.wrapper}`}>
                  <CategoryIcon className={`size-[18px] ${categoryStyle.icon}`} />
                </div>
                <div className="text-[13px] font-semibold leading-tight">{label}</div>
              </Link>
              );
            })}
          </div>
        </div>

        {filteredListings.length > 0 && (
          <div className="space-y-12 sm:space-y-14">
            {recentListings.length > 0 && (
              <section>
                <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
                  <div>
                    <h3 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fraunces, serif' }}>Les nouveautés</h3>
                  </div>
                  <Link
                    to={getBrowseLink({ section: 'newest' })}
                    state={getNavigationState()}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-[#E5E5E4] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F4F4F5] transition-colors"
                  >
                    Voir tout
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {recentListings.map(renderListingCard)}
                </div>
              </section>
            )}

            {categorySections.map((section) => (
              <section key={section.key}>
                <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
                  <div>
                    <h3 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fraunces, serif' }}>{section.label}</h3>
                    <p className="text-sm text-[#71717A] mt-1">
                      {section.listings.length} annonce{section.listings.length > 1 ? 's' : ''} disponible{section.listings.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  <Link
                    to={getBrowseLink({ category: section.key })}
                    state={getNavigationState()}
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-[#E5E5E4] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F4F4F5] transition-colors"
                  >
                    Voir tout
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {section.listings.slice(0, 4).map(renderListingCard)}
                </div>
              </section>
            ))}
          </div>
        )}

        {filteredListings.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-[#F4F4F5] rounded-2xl mb-6">
              <Package className="size-12 text-[#71717A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
              Aucun résultat trouvé
            </h3>
            <p className="text-[17px] text-[#71717A]">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
