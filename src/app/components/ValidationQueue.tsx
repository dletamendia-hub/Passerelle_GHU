import { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { mockRequests, mockUsers } from '../mock-data';
import { categoryLabels, requestStatusLabels } from '../types';

export default function ValidationQueue() {
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [decision, setDecision] = useState({ reason: '', validated: false });

  // Filter requests pending validation
  const pendingRequests = mockRequests.filter(
    r => r.status === 'pending_validation' || r.status === 'in_review'
  );

  const handleValidate = (requestId: string, validated: boolean) => {
    console.log('Decision:', { requestId, validated, reason: decision.reason });
    alert(`Demande ${validated ? 'validée' : 'refusée'} avec succès`);
    setSelectedRequest(null);
    setDecision({ reason: '', validated: false });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-[#0F172A] leading-[1.2] mb-3">
          File de validation achat
        </h1>
        <p className="text-lg text-[#71717A]">
          Vérifiez et validez les demandes de transfert
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-[#E5E5E4] p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FEF3C7] rounded-lg">
              <Clock className="size-6 text-[#92400E]" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0F172A] mb-1">
                {pendingRequests.length}
              </div>
              <div className="text-sm text-[#71717A]">En attente</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#E5E5E4] p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#DCFCE7] rounded-lg">
              <CheckCircle className="size-6 text-[#166534]" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#10B981] mb-1">
                {mockRequests.filter(r => r.status === 'validated').length}
              </div>
              <div className="text-sm text-[#71717A]">Validées</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#E5E5E4] p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FEE2E2] rounded-lg">
              <XCircle className="size-6 text-[#991B1B]" />
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#EF4444] mb-1">
                {mockRequests.filter(r => r.status === 'refused').length}
              </div>
              <div className="text-sm text-[#71717A]">Refusées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests Queue */}
      <div className="space-y-6">
        {pendingRequests.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E5E5E4]">
            <div className="inline-block p-4 bg-[#F4F4F5] rounded-full mb-4">
              <Clock className="size-8 text-[#71717A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              Aucune demande en attente
            </h3>
            <p className="text-[#71717A]">
              Toutes les demandes ont été traitées
            </p>
          </div>
        ) : (
          pendingRequests.map(request => (
            <div
              key={request.id}
              className="bg-white rounded-xl border border-[#E5E5E4] overflow-hidden"
            >
              <div className="grid grid-cols-12">
                {/* Left: Listing info */}
                <div className="col-span-3 bg-[#F4F4F5] p-6">
                  {request.listing?.photos[0] && (
                    <div className="aspect-square rounded-lg overflow-hidden mb-4">
                      <img
                        src={request.listing.photos[0]}
                        alt={request.listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {request.listing && (
                    <>
                      <h3 className="font-semibold text-[#0F172A] mb-2">
                        {request.listing.title}
                      </h3>
                      <div className="text-sm text-[#71717A] space-y-1">
                        <div>{categoryLabels[request.listing.category]}</div>
                        <div>Quantité: {request.listing.quantity}</div>
                        <div className="text-xs pt-2">{request.listing.location}</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Middle: Request info */}
                <div className="col-span-5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]">
                      {requestStatusLabels[request.status]}
                    </span>
                    <span className="text-xs text-[#71717A]">
                      {new Date(request.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-medium text-[#71717A] mb-1">Demandeur</div>
                      <div className="text-sm text-[#0F172A]">
                        {request.requester?.name}
                      </div>
                      <div className="text-xs text-[#71717A]">
                        {request.requester?.service} - {request.requester?.uf}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-[#71717A] mb-1">Service destinataire</div>
                      <div className="text-sm font-medium text-[#0F172A]">
                        {request.destinationService}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-[#71717A] mb-1">Justification</div>
                      <div className="text-sm text-[#0F172A] bg-[#F4F4F5] rounded-lg p-3">
                        {request.justification}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="col-span-4 bg-[#FAFAF9] p-6 border-l border-[#E5E5E4]">
                  {selectedRequest === request.id ? (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0F172A] mb-4">
                        Décision
                      </h4>

                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Motif de la décision *
                        </label>
                        <textarea
                          value={decision.reason}
                          onChange={(e) => setDecision({ ...decision, reason: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2 border border-[#E5E5E4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                          placeholder="Ex: Matériel amorti, transfert autorisé"
                        />
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={() => handleValidate(request.id, true)}
                          disabled={!decision.reason}
                          className="w-full px-4 py-2.5 bg-[#10B981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <CheckCircle className="size-4" />
                          Valider le transfert
                        </button>
                        <button
                          onClick={() => handleValidate(request.id, false)}
                          disabled={!decision.reason}
                          className="w-full px-4 py-2.5 bg-[#EF4444] text-white rounded-lg font-medium hover:bg-[#DC2626] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <XCircle className="size-4" />
                          Refuser
                        </button>
                        <button
                          onClick={() => {
                            setSelectedRequest(null);
                            setDecision({ reason: '', validated: false });
                          }}
                          className="w-full px-4 py-2.5 border border-[#E5E5E4] text-[#0F172A] rounded-lg font-medium hover:bg-white transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-4">
                        Contrôle requis
                      </h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="size-5 rounded border-2 border-[#E5E5E4]" />
                          <span className="text-sm text-[#71717A]">Vérifier amortissement</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-5 rounded border-2 border-[#E5E5E4]" />
                          <span className="text-sm text-[#71717A]">Contrôler disponibilité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-5 rounded border-2 border-[#E5E5E4]" />
                          <span className="text-sm text-[#71717A]">Valider conformité</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedRequest(request.id)}
                        className="w-full px-4 py-2.5 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors"
                      >
                        Instruire la demande
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
