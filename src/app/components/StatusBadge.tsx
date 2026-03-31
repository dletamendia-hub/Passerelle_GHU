import { listingStatusLabels, type ListingStatus } from '../types';

interface StatusBadgeProps {
  status: ListingStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: ListingStatus) => {
    switch (status) {
      case 'published':
        return 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]';
      case 'reserved':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      case 'transferred':
        return 'bg-[#E0E7FF] text-[#3730A3] border-[#C7D2FE]';
      case 'withdrawn':
        return 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]';
      case 'expired':
        return 'bg-[#F4F4F5] text-[#52525B] border-[#E5E5E4]';
      case 'draft':
        return 'bg-[#F4F4F5] text-[#71717A] border-[#E5E5E4]';
      default:
        return 'bg-[#F4F4F5] text-[#71717A] border-[#E5E5E4]';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusStyles(status)}`}>
      {listingStatusLabels[status]}
    </span>
  );
}
