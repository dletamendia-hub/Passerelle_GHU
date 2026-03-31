import { useState } from 'react';
import { Download, TrendingUp, Package, Users, CheckCircle } from 'lucide-react';
import { mockListings, mockRequests } from '../mock-data';
import { categoryLabels, listingStatusLabels, requestStatusLabels } from '../types';

export default function AdminDashboard() {
  const [exportFilter, setExportFilter] = useState({
    startDate: '',
    endDate: '',
    status: 'all'
  });

  // Calculate stats
  const totalListings = mockListings.length;
  const availableListings = mockListings.filter(l => l.status === 'published').length;
  const totalRequests = mockRequests.length;
  const validatedRequests = mockRequests.filter(r => r.status === 'validated').length;
  const pendingRequests = mockRequests.filter(r => r.status === 'pending_validation').length;

  const handleExport = () => {
    console.log('Exporting data with filters:', exportFilter);
    alert('Export Excel généré avec succès !');
  };

  // Group listings by category
  const listingsByCategory = mockListings.reduce((acc, listing) => {
    acc[listing.category] = (acc[listing.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-[#0F172A] leading-[1.2] mb-3">
          Tableau de bord administrateur
        </h1>
        <p className="text-lg text-[#71717A]">
          Supervision des flux et pilotage de la plateforme
        </p>
      </div>

      {/* Key Metrics - Asymmetric layout */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Large featured metric */}
        <div className="col-span-5 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl p-8 text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-sm opacity-90 mb-2">Total des biens</div>
              <div className="text-6xl font-semibold">{totalListings}</div>
            </div>
            <div className="p-3 bg-white/20 rounded-xl">
              <Package className="size-8" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div>
              <div className="text-3xl font-semibold">{availableListings}</div>
              <div className="text-sm opacity-90">Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">
                {mockListings.filter(l => l.status === 'transferred').length}
              </div>
              <div className="text-sm opacity-90">Transférés</div>
            </div>
          </div>
        </div>

        {/* Secondary metrics */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[#E5E5E4] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#DCFCE7] rounded-lg">
                <CheckCircle className="size-6 text-[#166534]" />
              </div>
              <div>
                <div className="text-xs text-[#71717A] mb-1">Demandes validées</div>
                <div className="text-3xl font-semibold text-[#0F172A]">{validatedRequests}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="size-4 text-[#10B981]" />
              <span className="text-[#10B981] font-medium">
                {totalRequests > 0 ? Math.round((validatedRequests / totalRequests) * 100) : 0}%
              </span>
              <span className="text-[#71717A]">taux de validation</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E5E4] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#FEF3C7] rounded-lg">
                <Users className="size-6 text-[#92400E]" />
              </div>
              <div>
                <div className="text-xs text-[#71717A] mb-1">Demandes en attente</div>
                <div className="text-3xl font-semibold text-[#0F172A]">{pendingRequests}</div>
              </div>
            </div>
            <div className="text-sm text-[#71717A]">
              Nécessitent une validation achat
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-xl border border-[#E5E5E4] p-6">
            <div className="text-sm font-medium text-[#71717A] mb-3">
              Total des demandes de transfert
            </div>
            <div className="text-4xl font-semibold text-[#0F172A] mb-4">
              {totalRequests}
            </div>
            <div className="flex gap-4 text-xs">
              <div>
                <span className="text-[#71717A]">Envoyées:</span>{' '}
                <span className="font-medium text-[#0F172A]">
                  {mockRequests.filter(r => r.status === 'sent').length}
                </span>
              </div>
              <div>
                <span className="text-[#71717A]">Refusées:</span>{' '}
                <span className="font-medium text-[#0F172A]">
                  {mockRequests.filter(r => r.status === 'refused').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Export section */}
        <div className="col-span-5">
          <div className="bg-white rounded-xl border border-[#E5E5E4] p-8">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">
              Export des données
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Date de début
                </label>
                <input
                  type="date"
                  value={exportFilter.startDate}
                  onChange={(e) => setExportFilter({ ...exportFilter, startDate: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Date de fin
                </label>
                <input
                  type="date"
                  value={exportFilter.endDate}
                  onChange={(e) => setExportFilter({ ...exportFilter, endDate: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Statut des demandes
                </label>
                <select
                  value={exportFilter.status}
                  onChange={(e) => setExportFilter({ ...exportFilter, status: e.target.value })}
                  className="w-full px-4 pr-10 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2371717A%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                >
                  <option value="all">Tous les statuts</option>
                  {Object.entries(requestStatusLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleExport}
              className="w-full px-6 py-3 bg-[#10B981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="size-4" />
              Générer l'export Excel
            </button>

            <div className="mt-6 p-4 bg-[#F4F4F5] rounded-lg">
              <div className="text-xs font-medium text-[#71717A] mb-2">Colonnes incluses</div>
              <div className="text-xs text-[#52525B] space-y-1">
                <div>• ID, Date, Demandeur, Service</div>
                <div>• Bien concerné, Catégorie, Lieu, UF</div>
                <div>• Statut, Décision achat, Dates clés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Statistics */}
        <div className="col-span-7 space-y-8">
          {/* Category distribution */}
          <div className="bg-white rounded-xl border border-[#E5E5E4] p-8">
            <h2 className="text-xl font-semibold text-[#0F172A] mb-6">
              Répartition par catégorie
            </h2>
            <div className="space-y-4">
              {Object.entries(listingsByCategory).map(([category, count]) => {
                const percentage = (count / totalListings) * 100;
                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#0F172A]">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </span>
                      <span className="text-sm text-[#71717A]">
                        {count} ({Math.round(percentage)}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#F4F4F5] rounded-full h-2">
                      <div
                        className="bg-[#3B82F6] rounded-full h-2 transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-xl border border-[#E5E5E4] p-8">
            <h2 className="text-xl font-semibold text-[#0F172A] mb-6">
              Dernières annonces
            </h2>
            <div className="space-y-3">
              {mockListings
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .slice(0, 5)
                .map(listing => (
                  <div
                    key={listing.id}
                    className="flex items-center justify-between py-3 border-b border-[#F4F4F5] last:border-0"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-[#0F172A] text-sm mb-1">
                        {listing.title}
                      </div>
                      <div className="text-xs text-[#71717A]">
                        {listing.service} • {categoryLabels[listing.category]}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#71717A] mb-1">
                        {new Date(listing.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        listing.status === 'published' ? 'bg-[#DCFCE7] text-[#166534]' :
                        listing.status === 'reserved' ? 'bg-[#FEF3C7] text-[#92400E]' :
                        'bg-[#F4F4F5] text-[#71717A]'
                      }`}>
                        {listingStatusLabels[listing.status]}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}