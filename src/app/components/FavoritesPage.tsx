import { Link, useLocation, useNavigate } from 'react-router';
import { ArrowLeft, Building2, Heart, MapPin, Package } from 'lucide-react';
import { useEffect } from 'react';
import { mockListings } from '../mock-data';
import { categoryBadgeLabels } from '../types';
import { useFavorites } from '../hooks/useFavorites';

export default function FavoritesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const favoriteListings = mockListings
    .filter((listing) => listing.status === 'published' && favoriteIds.includes(listing.id))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

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

  const getNavigationState = () => ({
    backTo: `${location.pathname}${location.search}`,
    scrollY: window.scrollY,
  });

  return (
    <div className="mx-auto max-w-[1040px] px-4 pb-12 pt-24 sm:px-8 sm:pt-32">
      <button
        type="button"
        onClick={handleBack}
        className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E5E5E4] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#F4F4F5]"
      >
        <ArrowLeft className="size-4" />
        Retour
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-[#FFF1F5] text-[#E11D48]">
            <Heart className="size-5 fill-current" />
          </div>
          <h1
            className="text-[34px] font-bold leading-[1.1] text-[#0F172A] sm:text-[42px]"
            style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400 }}
          >
            Favoris
          </h1>
        </div>
        <p className="mt-2 text-sm text-[#71717A] sm:text-base">
          Retrouvez ici tous les biens que vous avez enregistrés pour les consulter plus tard.
        </p>
      </div>

      {favoriteListings.length === 0 ? (
        <div className="rounded-xl border border-[#E5E5E4] bg-white py-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-[#FFF1F5] p-4">
            <Heart className="size-8 text-[#E11D48]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#0F172A]">Aucun favori pour le moment</h2>
          <p className="mb-6 text-[#71717A]">Ajoutez des articles avec le coeur depuis le catalogue ou une fiche produit.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2563EB]"
          >
            Voir le catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {favoriteListings.map((listing) => (
            <Link
              key={listing.id}
              to={`/listing/${listing.id}`}
              state={getNavigationState()}
              className="group h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[#E5E5E4] bg-white transition-shadow hover:border-[#3B82F6] hover:shadow-xl">
                <div className="relative h-28 overflow-hidden bg-[#F4F4F5] sm:h-40">
                  <img
                    src={listing.photos[0]}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      toggleFavorite(listing.id);
                    }}
                    className={`absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-full border transition-all sm:right-3 sm:top-3 sm:size-10 ${
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
                  <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3 sm:gap-3">
                    <span className="inline-flex items-center whitespace-nowrap rounded-full bg-[#F4F4F5] px-2 py-0.5 text-[9px] font-semibold text-[#0F172A] sm:px-2.5 sm:py-1 sm:text-[10px]">
                      {categoryBadgeLabels[listing.category]}
                    </span>
                    <span className="text-[10px] text-[#71717A] sm:text-xs">
                      {new Date(listing.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <h3 className="mb-1.5 min-h-[2.5rem] line-clamp-2 text-[14px] font-bold leading-tight text-[#0F172A] sm:mb-2 sm:min-h-[2.75rem] sm:text-[17px]">
                    {listing.title}
                  </h3>
                  <div className="mt-auto space-y-1.5 text-sm sm:space-y-2">
                    <div className="flex items-center gap-1.5 text-[#52525B]">
                      <Building2 className="size-3.5 text-[#71717A] sm:size-4" />
                      <span className="truncate text-[11px] sm:text-xs">{listing.site || listing.author?.site}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div className="flex min-w-0 items-center gap-1.5 text-[#71717A]">
                        <MapPin className="size-3.5 sm:size-4" />
                        <span className="truncate text-[11px] sm:text-xs">{listing.location}</span>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-1.5 font-semibold text-[#0F172A]">
                        <Package className="size-3.5 sm:size-4" />
                        <span className="text-[11px] sm:text-xs">{listing.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
