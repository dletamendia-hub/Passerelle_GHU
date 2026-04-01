import { useState } from 'react';
import { Link } from 'react-router';
import { Package, Send, Calendar, MapPin, FolderOpen, Wrench, ChevronDown } from 'lucide-react';
import { mockListings, mockRequests, currentUser } from '../mock-data';
import { brokenConditionLabels, categoryLabels, requestStatusLabels } from '../types';
import StatusBadge from './StatusBadge';
import { useDeposits } from '../hooks/useDeposits';

export default function MySpace() {
  const [activeTab, setActiveTab] = useState<'deposits' | 'requests'>('requests');
  const [transferSectionOpen, setTransferSectionOpen] = useState(true);
  const [brokenSectionOpen, setBrokenSectionOpen] = useState(true);
  const { deposits } = useDeposits();

  const myListings = mockListings.filter(l => l.authorId === currentUser.id);
  const myRequests = mockRequests.filter(r => r.requesterId === currentUser.id);
  const myDeposits = deposits.filter((deposit) => deposit.userId === currentUser.id);
  const transferDeposits = myDeposits.filter((deposit) => deposit.mode === 'donation');
  const brokenDeposits = myDeposits.filter((deposit) => deposit.mode === 'broken');
  const getDepositPhoto = (deposit: (typeof myDeposits)[number]) => deposit.photos?.[0] ?? deposit.photo ?? null;

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-12">

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1
          className="font-semibold text-[#0F172A] leading-[1.2] mb-2 sm:mb-3"
          style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400, fontSize: 'clamp(26px, 4.4vw, 40px)' }}
        >
          Mon espace
        </h1>
        <p className="text-[#71717A]" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
          Gérez vos dépôts et suivez vos demandes de transfert
        </p>
      </div>

      {/* Stats — même template bande infos que ListingDetail */}
      <div className="flex items-stretch divide-x divide-[#E5E5E4] border border-[#E5E5E4] rounded-xl overflow-hidden bg-white mb-8 sm:mb-12">
        {[
          { label: 'Mes dépôts', value: String(myListings.length + myDeposits.length),                        color: '#0F172A' },
          { label: 'Matériel cassé', value: String(brokenDeposits.length),                                    color: '#F59E0B' },
          { label: 'Mes demandes', value: String(myRequests.length),                                          color: '#0F172A' },
          { label: 'Validées',     value: String(myRequests.filter(r => r.status === 'validated').length),    color: '#3B82F6' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex-1 px-3 sm:px-6 py-3 sm:py-4 min-w-0">
            <div className="text-[10px] uppercase tracking-wide text-[#71717A] mb-0.5 whitespace-nowrap">
              {label}
            </div>
            <div className="text-lg sm:text-2xl font-semibold truncate" style={{ color }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs — flex-1 so they always stay on one line */}
      <div className="flex gap-2 mb-6 sm:mb-8">
        <button
          onClick={() => setActiveTab('requests')}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
            activeTab === 'requests'
              ? 'bg-[#0F172A] text-white'
              : 'bg-white text-[#71717A] hover:bg-[#F4F4F5] border border-[#E5E5E4]'
          }`}
        >
          <Send className="size-4 flex-shrink-0" />
          Demandes
        </button>
        <button
          onClick={() => setActiveTab('deposits')}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
            activeTab === 'deposits'
              ? 'bg-[#0F172A] text-white'
              : 'bg-white text-[#71717A] hover:bg-[#F4F4F5] border border-[#E5E5E4]'
          }`}
        >
          <FolderOpen className="size-4 flex-shrink-0" />
          Dépôt
        </button>
      </div>

      {/* ── Dépôt ── */}
      {activeTab === 'deposits' && (
        <div>
          <div className="space-y-8">
            <section>
              <div className="overflow-hidden rounded-xl border border-[#E5E5E4] bg-white">
                <button
                  type="button"
                  onClick={() => setTransferSectionOpen((value) => !value)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2">
                    <Package className="size-4 text-[#0F172A]" />
                    <h2 className="text-[22px] font-semibold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400 }}>Annonces de transfert</h2>
                  </div>
                  <ChevronDown className={`size-4 text-[#71717A] transition-transform ${transferSectionOpen ? 'rotate-180' : ''}`} />
                </button>
                {transferSectionOpen && (myListings.length + transferDeposits.length === 0 ? (
                  <div className="border-t border-[#E5E5E4] text-center py-16">
                    <div className="inline-block p-4 bg-[#F4F4F5] rounded-full mb-4">
                      <Package className="size-8 text-[#71717A]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Aucun dépôt de transfert</h3>
                    <p className="text-[#71717A] mb-6">Commencez par déposer du matériel disponible</p>
                    <Link
                      to="/create"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
                    >
                      Déposer du matériel
                    </Link>
                  </div>
                ) : (
                  <div className="border-t border-[#E5E5E4] divide-y divide-[#E5E5E4]">
                    {myListings.map(listing => (
                      <Link
                        key={listing.id}
                        to={`/listing/${listing.id}`}
                        className="flex gap-3 sm:gap-5 p-3 sm:p-5 hover:bg-[#F8F8F7] transition-colors group"
                      >
                        <div
                          className="flex-shrink-0 rounded-lg overflow-hidden bg-[#F4F4F5]"
                          style={{ width: 'clamp(68px, 14vw, 120px)', aspectRatio: '4/3' }}
                        >
                          <img
                            src={listing.photos[0]}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <StatusBadge status={listing.status} />
                            <span className="text-xs text-[#71717A]">{categoryLabels[listing.category]}</span>
                            <span className="hidden sm:flex items-center gap-1 text-xs text-[#71717A] ml-auto flex-shrink-0">
                              <Calendar className="size-3" />
                              {new Date(listing.createdAt).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <h3 className="font-semibold text-[#0F172A] truncate mb-1" style={{ fontSize: 'clamp(13px, 2vw, 17px)' }}>
                            {listing.title}
                          </h3>
                          <p className="hidden sm:block text-xs text-[#71717A] line-clamp-1 mb-2">
                            {listing.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-[#71717A]">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3" />
                              <span className="truncate max-w-[120px] sm:max-w-none">{listing.location}</span>
                            </span>
                            <span className="flex-shrink-0">
                              Qté&nbsp;: <span className="font-medium text-[#0F172A]">{listing.quantity}</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {transferDeposits.map((deposit) => (
                      <div key={deposit.id} className="flex gap-3 sm:gap-5 p-3 sm:p-5">
                        <div
                          className="flex-shrink-0 rounded-lg overflow-hidden bg-[#F4F4F5]"
                          style={{ width: 'clamp(68px, 14vw, 120px)', aspectRatio: '4/3' }}
                        >
                          {getDepositPhoto(deposit) ? (
                            <img src={getDepositPhoto(deposit) ?? ''} alt={deposit.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="size-6 text-[#71717A]" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border bg-[#DBEAFE] text-[#1D4ED8] border-[#BFDBFE]">
                              Déposé
                            </span>
                            <span className="text-xs text-[#71717A]">{categoryLabels[deposit.category]}</span>
                            <span className="hidden sm:flex items-center gap-1 text-xs text-[#71717A] ml-auto flex-shrink-0">
                              <Calendar className="size-3" />
                              {new Date(deposit.createdAt).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <h3 className="font-semibold text-[#0F172A] truncate mb-1" style={{ fontSize: 'clamp(13px, 2vw, 17px)' }}>
                            {deposit.title}
                          </h3>
                          <p className="hidden sm:block text-xs text-[#71717A] line-clamp-1 mb-2">
                            {deposit.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-[#71717A]">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3" />
                              <span className="truncate max-w-[120px] sm:max-w-none">{deposit.location}</span>
                            </span>
                            <span className="flex-shrink-0">
                              Qté&nbsp;: <span className="font-medium text-[#0F172A]">{deposit.quantity}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="overflow-hidden rounded-xl border border-[#E5E5E4] bg-white">
                <button
                  type="button"
                  onClick={() => setBrokenSectionOpen((value) => !value)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2">
                    <Wrench className="size-4 text-[#0F172A]" />
                    <h2 className="text-[22px] font-semibold text-[#0F172A] leading-[1.1]" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400 }}>Matériel cassé</h2>
                  </div>
                  <ChevronDown className={`size-4 text-[#71717A] transition-transform ${brokenSectionOpen ? 'rotate-180' : ''}`} />
                </button>
                {brokenSectionOpen && (brokenDeposits.length === 0 ? (
                  <div className="border-t border-[#E5E5E4] text-center py-16">
                    <div className="inline-block p-4 bg-[#FFF7ED] rounded-full mb-4">
                      <Wrench className="size-8 text-[#EA580C]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Aucun matériel cassé déclaré</h3>
                    <p className="text-[#71717A] mb-6">Déclarez ici le matériel qui doit suivre la procédure de casse</p>
                    <Link
                      to="/create"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
                    >
                      Déclarer un matériel
                    </Link>
                  </div>
                ) : (
                  <div className="border-t border-[#E5E5E4] divide-y divide-[#E5E5E4]">
                    {brokenDeposits.map((deposit) => (
                      <div key={deposit.id} className="flex gap-3 sm:gap-5 p-3 sm:p-5">
                        <div
                          className="flex-shrink-0 rounded-lg overflow-hidden bg-[#F4F4F5]"
                          style={{ width: 'clamp(68px, 14vw, 120px)', aspectRatio: '4/3' }}
                        >
                          {getDepositPhoto(deposit) ? (
                            <img src={getDepositPhoto(deposit) ?? ''} alt={deposit.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Wrench className="size-6 text-[#71717A]" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]">
                              Procédure casse
                            </span>
                            <span className="text-xs text-[#71717A]">{categoryLabels[deposit.category]}</span>
                            <span className="hidden sm:flex items-center gap-1 text-xs text-[#71717A] ml-auto flex-shrink-0">
                              <Calendar className="size-3" />
                              {new Date(deposit.createdAt).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <h3 className="font-semibold text-[#0F172A] truncate mb-1" style={{ fontSize: 'clamp(13px, 2vw, 17px)' }}>
                            {deposit.title}
                          </h3>
                          <p className="hidden sm:block text-xs text-[#71717A] line-clamp-1 mb-2">
                            {deposit.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-[#71717A]">
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3" />
                              <span className="truncate max-w-[120px] sm:max-w-none">{deposit.location}</span>
                            </span>
                            <span className="flex-shrink-0">
                              État&nbsp;: <span className="font-medium text-[#0F172A]">{brokenConditionLabels[deposit.condition as keyof typeof brokenConditionLabels] ?? deposit.condition}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* ── Demandes ── */}
      {activeTab === 'requests' && (
        <div>
          {myRequests.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-[#E5E5E4]">
              <div className="inline-block p-4 bg-[#F4F4F5] rounded-full mb-4">
                <Send className="size-8 text-[#71717A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Aucune demande envoyée</h3>
              <p className="text-[#71717A] mb-6">Parcourez le catalogue pour trouver du matériel</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
              >
                Voir le catalogue
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[#E5E5E4] border border-[#E5E5E4] rounded-xl overflow-hidden bg-white">
              {myRequests.map(request => {
                const statusStyle =
                  request.status === 'validated'
                    ? 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]'
                    : request.status === 'refused'
                    ? 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]'
                    : 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';

                return (
                  <div key={request.id} className="p-4 sm:p-5">
                    {/* Row 1: status badge + title + date */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border flex-shrink-0 mt-0.5 ${statusStyle}`}>
                        {requestStatusLabels[request.status]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#0F172A] truncate text-sm sm:text-base">
                          {request.listing?.title}
                        </h3>
                        {request.listing && (
                          <span className="text-xs text-[#71717A]">{categoryLabels[request.listing.category]}</span>
                        )}
                      </div>
                      <span className="text-xs text-[#71717A] flex-shrink-0 hidden sm:block">
                        {new Date(request.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>

                    {/* Row 2: service destinataire */}
                    <div className="text-xs text-[#71717A] mb-3">
                      Service destinataire&nbsp;:{' '}
                      <span className="font-medium text-[#0F172A]">{request.destinationService}</span>
                      <span className="sm:hidden ml-2 text-[#A1A1AA]">
                        · {new Date(request.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>

                    {/* Row 3: justification */}
                    <div className="bg-[#F4F4F5] rounded-lg px-3 py-2.5 mb-3">
                      <div className="text-xs font-medium text-[#71717A] mb-0.5">Justification</div>
                      <div className="text-xs sm:text-sm text-[#0F172A] line-clamp-2">{request.justification}</div>
                    </div>

                    {/* Row 4: decision */}
                    {request.decision && (
                      <div className={`rounded-lg px-3 py-2.5 ${request.decision.validated ? 'bg-[#DCFCE7]' : 'bg-[#FEE2E2]'}`}>
                        <div
                          className="text-xs font-medium mb-0.5"
                          style={{ color: request.decision.validated ? '#166534' : '#991B1B' }}
                        >
                          Décision de l'équipe achat
                        </div>
                        <div
                          className="text-xs sm:text-sm"
                          style={{ color: request.decision.validated ? '#166534' : '#991B1B' }}
                        >
                          {request.decision.reason}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
