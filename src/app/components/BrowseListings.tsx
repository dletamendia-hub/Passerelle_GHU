import { Link, useLocation, useNavigate, useSearchParams } from 'react-router';
import { ArrowLeft, Building2, Heart, MapPin, Package, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { mockListings } from '../mock-data';
import { categoryBadgeLabels, categoryLabels, type ItemCategory, type Listing } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { useEffect, useRef, useState } from 'react';

export default function BrowseListings() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement | null>(null);

  const categoryParam = searchParams.get('category') as ItemCategory | null;
  const sectionParam = searchParams.get('section');
  const siteParam = searchParams.get('site') || 'all';
  const dateParam = searchParams.get('date') || 'all';

  const availableListings = mockListings.filter((listing) => listing.status === 'published');
  const siteOptions = [...new Set(
    availableListings
      .map((listing) => listing.site || listing.author?.site)
      .filter((site): site is string => Boolean(site))
  )].sort((a, b) => a.localeCompare(b));

  const filteredListings = availableListings.filter((listing) => {
    const matchesCategory = categoryParam ? listing.category === categoryParam : true;
    const matchesSite = siteParam === 'all' || (listing.site || listing.author?.site) === siteParam;
    const daysSincePublished = Math.floor((Date.now() - listing.createdAt.getTime()) / (1000 * 60 * 60 * 24));
    const matchesDate = dateParam === 'all'
      || (dateParam === '7' && daysSincePublished <= 7)
      || (dateParam === '30' && daysSincePublished <= 30);
    return matchesCategory && matchesSite && matchesDate;
  });

  const listings = sectionParam === 'newest'
    ? [...filteredListings].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    : filteredListings;

  const pageTitle = sectionParam === 'newest'
    ? 'Les nouveautés'
    : categoryParam
    ? categoryLabels[categoryParam]
    : 'Toutes les annonces';

  const pageDescription = sectionParam === 'newest'
    ? 'Les annonces les plus récemment publiées, toutes catégories confondues.'
    : categoryParam
    ? `Tous les biens disponibles pour la catégorie ${categoryLabels[categoryParam].toLowerCase()}.`
    : 'Tous les biens actuellement disponibles.';

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>, listingId: string) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(listingId);
  };

  const getNavigationState = () => ({
    backTo: `${location.pathname}${location.search}`,
    scrollY: window.scrollY,
  });

  useEffect(() => {
    const restoreKey = `scroll:${location.pathname}${location.search}`;
    const savedScroll = window.sessionStorage.getItem(restoreKey);

    if (savedScroll) {
      window.scrollTo({ top: Number(savedScroll), behavior: 'auto' });
      window.sessionStorage.removeItem(restoreKey);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  useEffect(() => {
    setFiltersOpen(false);
  }, [siteParam, dateParam]);

  useEffect(() => {
    if (!filtersOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!filtersRef.current?.contains(event.target as Node)) {
        setFiltersOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [filtersOpen]);

  const handleBack = () => {
    const previousLocation = location.state?.backTo as string | undefined;
    const previousScroll = location.state?.scrollY as number | undefined;

    if (previousLocation) {
      if (typeof previousScroll === 'number') {
        window.sessionStorage.setItem(`scroll:${previousLocation}`, String(previousScroll));
      }
      navigate(previousLocation);
      return;
    }

    navigate('/');
  };

  const handleSiteChange = (site: string) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (site === 'all') {
      nextSearchParams.delete('site');
    } else {
      nextSearchParams.set('site', site);
    }

    setSearchParams(nextSearchParams);
  };

  const handleDateChange = (date: string) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (date === 'all') {
      nextSearchParams.delete('date');
    } else {
      nextSearchParams.set('date', date);
    }

    setSearchParams(nextSearchParams);
  };

  const clearFilters = () => {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.delete('site');
    nextSearchParams.delete('date');
    setSearchParams(nextSearchParams);
  };

  const activeFilterCount = (siteParam !== 'all' ? 1 : 0) + (dateParam !== 'all' ? 1 : 0);

  const renderListingCard = (listing: Listing) => (
    <Link
      key={listing.id}
      to={`/listing/${listing.id}`}
      state={getNavigationState()}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[#E5E5E4] bg-white transition-shadow hover:shadow-xl hover:border-[#3B82F6]">
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
        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="inline-flex items-center rounded-full bg-[#F4F4F5] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-[#0F172A] whitespace-nowrap">
              {categoryBadgeLabels[listing.category]}
            </span>
            <span className="text-[10px] sm:text-xs text-[#71717A]">
              {new Date(listing.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
            </span>
          </div>
          <h3 className="min-h-[2.5rem] sm:min-h-[2.75rem] font-bold text-[#0F172A] mb-1.5 sm:mb-2 line-clamp-2 text-[14px] sm:text-[17px] leading-tight">
            {listing.title}
          </h3>
          <div className="mt-auto space-y-1.5 sm:space-y-2 text-sm">
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
    <div className="max-w-[1040px] mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-12">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5E4] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F4F4F5] transition-colors mb-6"
      >
        <ArrowLeft className="size-4" />
        Retour
      </button>

      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[34px] sm:text-[42px] font-bold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400 }}>{pageTitle}</h1>
            <p className="text-sm sm:text-base text-[#71717A] mt-2">{pageDescription}</p>
            {activeFilterCount > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {siteParam !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleSiteChange('all')}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0F172A] bg-white px-3 py-1.5 text-xs font-medium text-[#0F172A] hover:bg-[#F4F4F5] transition-colors"
                  >
                    <span className="truncate max-w-[220px]">Établissement : {siteParam}</span>
                    <X className="size-3.5" />
                  </button>
                )}
                {dateParam !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleDateChange('all')}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0F172A] bg-white px-3 py-1.5 text-xs font-medium text-[#0F172A] hover:bg-[#F4F4F5] transition-colors"
                  >
                    <span>Date : {dateParam === '7' ? '7 derniers jours' : '30 derniers jours'}</span>
                    <X className="size-3.5" />
                  </button>
                )}
                {activeFilterCount > 1 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-medium text-[#71717A] hover:text-[#0F172A] transition-colors"
                  >
                    Tout effacer
                  </button>
                )}
              </div>
            )}
          </div>
          <div ref={filtersRef} className="relative z-20 sm:flex-shrink-0">
            <button
              type="button"
              onClick={() => setFiltersOpen((value) => !value)}
              className={`relative inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                activeFilterCount > 0
                  ? 'border-[#0F172A] bg-[#0F172A] text-white'
                  : 'border-[#E5E5E4] bg-white text-[#0F172A] hover:bg-[#F4F4F5]'
              }`}
            >
              <SlidersHorizontal className="size-4" />
              Filtres
              {activeFilterCount > 0 && (
                <span className={`inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                  activeFilterCount > 0 ? 'bg-white text-[#0F172A]' : ''
                }`}>
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown className={`size-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>

            {filtersOpen && (
              <div className="mt-3 w-full sm:absolute sm:right-0 sm:mt-2 sm:w-[360px] rounded-2xl border border-[#E5E5E4] bg-white p-4 shadow-xl z-30">
                <div className="space-y-4">
                  {activeFilterCount > 0 && (
                    <div className="flex items-center justify-between gap-3 border-b border-[#E5E5E4] pb-3">
                      <div className="text-sm text-[#71717A]">
                        {activeFilterCount} filtre{activeFilterCount > 1 ? 's' : ''} actif{activeFilterCount > 1 ? 's' : ''}
                      </div>
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="text-sm font-medium text-[#0F172A] hover:text-[#3B82F6] transition-colors"
                      >
                        Effacer
                      </button>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2 tracking-wide">ÉTABLISSEMENT</label>
                    <div className="relative">
                      <select
                        value={siteParam}
                        onChange={(e) => handleSiteChange(e.target.value)}
                        className="w-full px-4 pr-10 py-3 border-2 border-[#E5E5E4] rounded-xl text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="all">Tous les établissements</option>
                        {siteOptions.map((site) => (
                          <option key={site} value={site}>{site}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-[#71717A]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2 tracking-wide">DATE D’AJOUT</label>
                    <div className="relative">
                      <select
                        value={dateParam}
                        onChange={(e) => handleDateChange(e.target.value)}
                        className="w-full px-4 pr-10 py-3 border-2 border-[#E5E5E4] rounded-xl text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="all">Toutes les dates</option>
                        <option value="7">7 derniers jours</option>
                        <option value="30">30 derniers jours</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-[#71717A]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {listings.map(renderListingCard)}
      </div>
    </div>
  );
}
