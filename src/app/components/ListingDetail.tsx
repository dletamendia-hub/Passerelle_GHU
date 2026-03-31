import { useParams, Link, useLocation, useNavigate } from 'react-router';
import { MapPin, Package, Calendar, User as UserIcon, Phone, Heart, Copy, ArrowLeft, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockListings, currentUser } from '../mock-data';
import { categoryBadgeLabels, categoryLabels, conditionLabels } from '../types';
import StatusBadge from './StatusBadge';
import { useEffect, useRef, useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';

export default function ListingDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [contactCopied, setContactCopied] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const copyFeedbackTimeoutRef = useRef<number | null>(null);
  const [requestData, setRequestData] = useState({
    destinationService: currentUser.service,
    justification: '',
  });

  const listing = mockListings.find(l => l.id === id);

  if (!listing) {
    return (
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-12">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-2">Annonce introuvable</h2>
          <p className="text-[#71717A] mb-6">Cette annonce n'existe pas ou a été supprimée.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors">
            Voir le catalogue
          </Link>
        </div>
      </div>
    );
  }

  const canRequestTransfer = listing.status === 'published';
  const favorite = isFavorite(listing.id);
  const contactEmail = listing.contact.split(' - ')[0];
  const contactDetails = listing.contact.split(' - ').slice(1).join(' - ');
  const listingPhotos = listing.photos.length > 0 ? listing.photos : [''];
  const similarListings = mockListings
    .filter((item) => item.id !== listing.id && item.status === 'published' && item.category === listing.category)
    .slice(0, 4);

  const handleSubmitRequest = () => {
    console.log('Request submitted:', requestData);
    setShowRequestModal(false);
    alert('Votre demande de transfert a été envoyée avec succès !');
    navigate('/my-space');
  };

  const handleCopyContact = async () => {
    const contactText = listing.contact;

    try {
      await navigator.clipboard.writeText(contactText);
      setContactCopied(true);

      if (copyFeedbackTimeoutRef.current) {
        window.clearTimeout(copyFeedbackTimeoutRef.current);
      }

      copyFeedbackTimeoutRef.current = window.setTimeout(() => {
        setContactCopied(false);
        copyFeedbackTimeoutRef.current = null;
      }, 2000);
    } catch (error) {
      console.error('Failed to copy contact:', error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [id]);

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

  // ── Compact key-info strip ──────────────────────────────────────────
  const keyInfoStrip = (
    <div className="flex items-stretch divide-x divide-[#E5E5E4] border border-[#E5E5E4] rounded-xl overflow-hidden bg-white">
      {[
        { label: 'État',      value: conditionLabels[listing.condition] },
        { label: 'Quantité',  value: String(listing.quantity) },
        { label: 'UF',        value: listing.uf },
        { label: 'Service',   value: listing.service },
      ].map(({ label, value }) => (
        <div key={label} className="flex-1 px-2.5 sm:px-4 py-2.5 sm:py-3 min-w-0">
          <div className="text-[10px] uppercase tracking-wide text-[#71717A] mb-0.5 whitespace-nowrap">
            {label}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">
            {value}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-24 sm:pb-12">

        {/* ── Layout : 1 col mobile / 12 col desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-12">

          {/* ── Colonne gauche — image ── */}
          <div className="sm:col-span-7">
            <div className="sm:sticky sm:top-28">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F4F5] mb-4">
                <img
                  src={listingPhotos[selectedPhotoIndex]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                {listingPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedPhotoIndex((currentIndex) => (currentIndex === 0 ? listingPhotos.length - 1 : currentIndex - 1))}
                      className="absolute left-4 bottom-4 inline-flex size-10 items-center justify-center rounded-full border border-white/80 bg-white/92 text-[#0F172A] shadow-sm transition-colors hover:bg-white"
                      aria-label="Photo précédente"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPhotoIndex((currentIndex) => (currentIndex === listingPhotos.length - 1 ? 0 : currentIndex + 1))}
                      className="absolute bottom-4 right-4 inline-flex size-10 items-center justify-center rounded-full border border-white/80 bg-white/92 text-[#0F172A] shadow-sm transition-colors hover:bg-white"
                      aria-label="Photo suivante"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={handleBack}
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/92 px-4 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm hover:bg-white transition-colors"
                >
                  <ArrowLeft className="size-4" />
                  Retour
                </button>
              </div>

              {listingPhotos.length > 1 && (
                <div className="mb-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {listingPhotos.map((photo, index) => (
                    <button
                      key={`${photo}-${index}`}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(index)}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        selectedPhotoIndex === index
                          ? 'border-[#0F172A] ring-2 ring-[#0F172A]/10'
                          : 'border-[#E5E5E4] hover:border-[#3B82F6]'
                      }`}
                      aria-label={`Voir la photo ${index + 1}`}
                    >
                      <img src={photo} alt={`${listing.title} ${index + 1}`} className="aspect-[4/3] w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Key info — visible below image on desktop */}
              <div className="hidden sm:block">
                {keyInfoStrip}
              </div>
            </div>
          </div>

          {/* ── Colonne droite — contenu ── */}
          <div className="sm:col-span-5">

            {/* Badge + title + date */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <StatusBadge status={listing.status} />
                  <span className="text-sm text-[#71717A]">{categoryLabels[listing.category]}</span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite(listing.id)}
                  className={`inline-flex size-11 items-center justify-center rounded-full border transition-all ${
                    favorite
                      ? 'border-[#FBCFE8] bg-[#FFF1F5] text-[#E11D48]'
                      : 'border-[#E5E5E4] bg-white text-[#71717A] hover:text-[#E11D48]'
                  }`}
                  aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                  <Heart className={`size-5 ${favorite ? 'fill-current' : ''}`} />
                </button>
              </div>
              <h1
                className="font-semibold text-[#0F172A] leading-[1.2] mb-3"
                style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 4.4vw, 40px)' }}
              >
                {listing.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-[#71717A]">
                <Calendar className="size-3.5" />
                Publié le {new Date(listing.createdAt).toLocaleDateString('fr-FR', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </div>
            </div>

            {/* Key info strip — mobile only */}
            <div className="sm:hidden mb-5">
              {keyInfoStrip}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-2">
                Description
              </h2>
              <p className="text-[#52525B] leading-relaxed text-sm sm:text-base">
                {listing.description}
              </p>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-2">
                Localisation
              </h2>
              <div className="flex items-start gap-2 text-[#52525B]">
                <MapPin className="size-4 mt-0.5 text-[#71717A] flex-shrink-0" />
                <div>
                  <div className="font-medium text-[#0F172A] text-sm">{listing.location}</div>
                  {listing.site && <div className="text-xs text-[#71717A] mt-0.5">{listing.site}</div>}
                </div>
              </div>
            </div>

            {/* Dimensions */}
            {listing.dimensions && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-2">
                  Dimensions
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#52525B]">
                  <Package className="size-4 text-[#71717A]" />
                  {listing.dimensions}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-2">
                Contact
              </h2>
              <div className="rounded-xl border border-[#E5E5E4] bg-white p-4 sm:p-5">
                <div className="grid grid-cols-[20px_1fr] items-start gap-x-3 gap-y-4">
                  <UserIcon className="size-5 text-[#71717A]" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-[#0F172A]">{listing.author?.name}</div>
                    <div className="text-xs text-[#71717A]">{listing.author?.service ?? listing.service}</div>
                    {contactDetails && (
                      <div className="text-xs text-[#71717A] mt-0.5">{contactDetails}</div>
                    )}
                  </div>

                  <Phone className="size-4 text-[#71717A] translate-y-0.5" />
                  <div className="flex items-start justify-between gap-3 min-w-0">
                    <div className="min-w-0 text-sm text-[#52525B] break-words">
                      {contactEmail}
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyContact}
                      className="inline-flex min-w-[56px] justify-center rounded-lg px-2 py-2 text-xs font-medium text-[#71717A] transition-colors hover:bg-[#F4F4F5] hover:text-[#0F172A]"
                      aria-label="Copier l'email et les coordonnées"
                    >
                      {contactCopied ? 'Copié' : <Copy className="size-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA — desktop only */}
            <div className="hidden sm:block">
              {canRequestTransfer ? (
                <button
                  onClick={() => setShowRequestModal(true)}
                  className="w-full px-6 py-4 bg-[#3B82F6] text-white rounded-xl font-medium hover:bg-[#2563EB] transition-colors"
                >
                  Demander le transfert
                </button>
              ) : (
                <div className="w-full px-6 py-4 bg-[#F4F4F5] text-[#71717A] rounded-xl font-medium text-center text-sm">
                  {listing.status === 'reserved'   && 'Ce bien est déjà réservé'}
                  {listing.status === 'transferred' && 'Ce bien a été transféré'}
                  {listing.status === 'withdrawn'   && 'Cette annonce a été retirée'}
                  {listing.status === 'expired'     && 'Cette annonce a expiré'}
                </div>
              )}
            </div>

          </div>
        </div>

        {similarListings.length > 0 && (
          <section className="mt-14 sm:mt-16">
            <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
              <div>
                <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fraunces, serif' }}>Articles similaires</h2>
                <p className="text-sm text-[#71717A] mt-1">D’autres biens disponibles dans la même catégorie.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {similarListings.map((item) => (
                <Link
                  key={item.id}
                  to={`/listing/${item.id}`}
                  state={{
                    backTo: `${location.pathname}${location.search}`,
                    scrollY: window.scrollY,
                  }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-[#E5E5E4] hover:border-[#3B82F6]">
                    <div className="relative h-28 sm:h-40 overflow-hidden bg-[#F4F4F5]">
                      <img
                        src={item.photos[0]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 sm:p-5">
                      <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="inline-flex items-center rounded-full bg-[#F4F4F5] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-[#0F172A] whitespace-nowrap">
                          {categoryBadgeLabels[item.category]}
                        </span>
                        <span className="text-[10px] sm:text-xs text-[#71717A]">
                          {new Date(item.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0F172A] mb-1.5 sm:mb-2 line-clamp-2 text-[14px] sm:text-[17px] leading-tight">
                        {item.title}
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2 text-sm">
                        <div className="flex items-center gap-1.5 text-[#52525B]">
                          <Building2 className="size-3.5 sm:size-4 text-[#71717A]" />
                          <span className="truncate text-[11px] sm:text-xs">{item.site || item.author?.site}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 sm:gap-3">
                          <div className="flex items-center gap-1.5 text-[#71717A] min-w-0">
                            <MapPin className="size-3.5 sm:size-4" />
                            <span className="truncate text-[11px] sm:text-xs">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#0F172A] font-semibold flex-shrink-0">
                            <Package className="size-3.5 sm:size-4" />
                            <span className="text-[11px] sm:text-xs">{item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── Fixed bottom CTA — mobile only ── */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-white/95 backdrop-blur-sm border-t border-[#E5E5E4] px-4 py-3">
        {canRequestTransfer ? (
          <button
            onClick={() => setShowRequestModal(true)}
            className="w-full px-6 py-3.5 bg-[#3B82F6] text-white rounded-xl font-medium hover:bg-[#2563EB] transition-colors text-sm"
          >
            Demander le transfert
          </button>
        ) : (
          <div className="w-full px-6 py-3.5 bg-[#F4F4F5] text-[#71717A] rounded-xl font-medium text-center text-sm">
            {listing.status === 'reserved'   && 'Ce bien est déjà réservé'}
            {listing.status === 'transferred' && 'Ce bien a été transféré'}
            {listing.status === 'withdrawn'   && 'Cette annonce a été retirée'}
            {listing.status === 'expired'     && 'Cette annonce a expiré'}
          </div>
        )}
      </div>

      {/* ── Request Modal ── */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 px-0 sm:px-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg p-6 sm:p-8">
            <h2 className="font-semibold text-[#0F172A] mb-5" style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}>
              Demandez le transfert
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Service destinataire *
                </label>
                <input
                  type="text"
                  value={requestData.destinationService}
                  onChange={(e) => setRequestData({ ...requestData, destinationService: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="Ex : Secrétariat Cardiologie"
                />
                <p className="text-xs text-[#71717A] mt-1">Votre service est pré-rempli, modifiez si nécessaire</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Justification *
                </label>
                <textarea
                  value={requestData.justification}
                  onChange={(e) => setRequestData({ ...requestData, justification: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="Expliquez pourquoi vous avez besoin de ce matériel…"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowRequestModal(false)}
                className="flex-none px-5 py-3 border border-[#E5E5E4] text-[#0F172A] rounded-lg font-medium hover:bg-[#F4F4F5] transition-colors text-sm"
              >
                Annuler
              </button>
              <button
                onClick={handleSubmitRequest}
                disabled={!requestData.destinationService || !requestData.justification}
                className="flex-1 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Envoyer la demande
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
