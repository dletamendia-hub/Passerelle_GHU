import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'passerelle-ghu-favorites';
const FAVORITES_EVENT = 'passerelle:favorites-change';
const EMPTY_FAVORITES: string[] = [];
let cachedRawValue: string | null = null;
let cachedFavoriteIds: string[] = EMPTY_FAVORITES;

function readFavoriteIds(): string[] {
  if (typeof window === 'undefined') {
    return EMPTY_FAVORITES;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  if (rawValue === cachedRawValue) {
    return cachedFavoriteIds;
  }

  cachedRawValue = rawValue;

  if (!rawValue) {
    cachedFavoriteIds = EMPTY_FAVORITES;
    return cachedFavoriteIds;
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    cachedFavoriteIds = Array.isArray(parsedValue)
      ? parsedValue.filter((value): value is string => typeof value === 'string')
      : EMPTY_FAVORITES;

    return cachedFavoriteIds;
  } catch {
    cachedFavoriteIds = EMPTY_FAVORITES;
    return cachedFavoriteIds;
  }
}

function writeFavoriteIds(favoriteIds: string[]) {
  if (typeof window === 'undefined') {
    return;
  }

  const nextRawValue = JSON.stringify(favoriteIds);
  cachedRawValue = nextRawValue;
  cachedFavoriteIds = favoriteIds;
  window.localStorage.setItem(STORAGE_KEY, nextRawValue);
  window.dispatchEvent(new CustomEvent(FAVORITES_EVENT));
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => onStoreChange();

  window.addEventListener('storage', handleChange);
  window.addEventListener(FAVORITES_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(FAVORITES_EVENT, handleChange);
  };
}

export function useFavorites() {
  const favoriteIds = useSyncExternalStore(subscribe, readFavoriteIds, () => EMPTY_FAVORITES);

  const isFavorite = (listingId: string) => favoriteIds.includes(listingId);

  const toggleFavorite = (listingId: string) => {
    const nextFavoriteIds = isFavorite(listingId)
      ? favoriteIds.filter((id) => id !== listingId)
      : [...favoriteIds, listingId];

    writeFavoriteIds(nextFavoriteIds);
  };

  return {
    favoriteIds,
    favoriteCount: favoriteIds.length,
    isFavorite,
    toggleFavorite,
  };
}
