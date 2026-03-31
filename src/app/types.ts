// Types pour l'application Passerelle GHU

export type ListingStatus = 
  | 'draft' 
  | 'published' 
  | 'reserved' 
  | 'transferred' 
  | 'withdrawn' 
  | 'expired';

export type RequestStatus = 
  | 'sent' 
  | 'pending_validation' 
  | 'in_review' 
  | 'validated' 
  | 'refused' 
  | 'cancelled' 
  | 'closed';

export type ItemCondition = 'excellent' | 'good' | 'fair' | 'functional';
export type BrokenMaterialCondition = 'broken_down' | 'works_poorly' | 'damaged' | 'missing_parts' | 'end_of_life';

export type ItemCategory = 
  | 'mobilier_bureau' 
  | 'mobilier_medical' 
  | 'equipement_informatique' 
  | 'equipement_medical' 
  | 'materiel_stockage' 
  | 'autre';

export type UserRole = 'agent' | 'achat' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  service: string;
  uf: string;
  site: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  category: ItemCategory;
  condition: ItemCondition;
  photos: string[];
  quantity: number;
  location: string;
  site?: string;
  uf: string;
  service: string;
  contact: string;
  status: ListingStatus;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author?: User;
  dimensions?: string;
}

export interface TransferRequest {
  id: string;
  listingId: string;
  listing?: Listing;
  requesterId: string;
  requester?: User;
  destinationService: string;
  justification: string;
  status: RequestStatus;
  createdAt: Date;
  decision?: {
    validated: boolean;
    reason: string;
    decidedAt: Date;
    decidedBy: string;
  };
}

export interface DepositRecord {
  id: string;
  userId: string;
  mode: 'donation' | 'broken';
  title: string;
  category: ItemCategory;
  condition: string;
  description: string;
  quantity: number;
  location: string;
  uf: string;
  service: string;
  contact: string;
  dimensions?: string;
  photos?: string[];
  photo?: string | null;
  createdAt: string;
}

export const categoryLabels: Record<ItemCategory, string> = {
  mobilier_bureau: 'Mobilier de bureau',
  mobilier_medical: 'Mobilier médical',
  equipement_informatique: 'Équipement informatique',
  equipement_medical: 'Équipement médical',
  materiel_stockage: 'Matériel de stockage',
  autre: 'Autre',
};

export const categoryBadgeLabels: Record<ItemCategory, string> = {
  mobilier_bureau: 'Bureau',
  mobilier_medical: 'Médical',
  equipement_informatique: 'Informatique',
  equipement_medical: 'Équipement',
  materiel_stockage: 'Stockage',
  autre: 'Autre',
};

export const conditionLabels: Record<ItemCondition, string> = {
  excellent: 'Excellent état',
  good: 'Bon état',
  fair: 'État correct',
  functional: 'Fonctionnel',
};

export const brokenConditionLabels: Record<BrokenMaterialCondition, string> = {
  broken_down: 'En panne',
  works_poorly: 'Fonctionne mal',
  damaged: 'Cassé / endommagé',
  missing_parts: 'Pièce manquante',
  end_of_life: 'Usé / en fin de vie',
};

export const listingStatusLabels: Record<ListingStatus, string> = {
  draft: 'Brouillon',
  published: 'Disponible',
  reserved: 'Réservé',
  transferred: 'Transféré',
  withdrawn: 'Retiré',
  expired: 'Expiré',
};

export const requestStatusLabels: Record<RequestStatus, string> = {
  sent: 'Envoyée',
  pending_validation: 'En attente validation',
  in_review: 'En cours d\'instruction',
  validated: 'Validée',
  refused: 'Refusée',
  cancelled: 'Annulée',
  closed: 'Clôturée',
};
