import { useSyncExternalStore } from 'react';
import type { DepositRecord } from '../types';

const STORAGE_KEY = 'passerelle-ghu-deposits';
const DEPOSITS_EVENT = 'passerelle:deposits-change';
const EMPTY_DEPOSITS: DepositRecord[] = [];

let cachedRawValue: string | null = null;
let cachedDeposits: DepositRecord[] = EMPTY_DEPOSITS;

function readDeposits(): DepositRecord[] {
  if (typeof window === 'undefined') {
    return EMPTY_DEPOSITS;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  if (rawValue === cachedRawValue) {
    return cachedDeposits;
  }

  cachedRawValue = rawValue;

  if (!rawValue) {
    cachedDeposits = EMPTY_DEPOSITS;
    return cachedDeposits;
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    cachedDeposits = Array.isArray(parsedValue) ? parsedValue : EMPTY_DEPOSITS;
    return cachedDeposits;
  } catch {
    cachedDeposits = EMPTY_DEPOSITS;
    return cachedDeposits;
  }
}

function writeDeposits(deposits: DepositRecord[]) {
  if (typeof window === 'undefined') {
    return;
  }

  const nextRawValue = JSON.stringify(deposits);
  cachedRawValue = nextRawValue;
  cachedDeposits = deposits;
  window.localStorage.setItem(STORAGE_KEY, nextRawValue);
  window.dispatchEvent(new CustomEvent(DEPOSITS_EVENT));
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => onStoreChange();
  window.addEventListener('storage', handleChange);
  window.addEventListener(DEPOSITS_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(DEPOSITS_EVENT, handleChange);
  };
}

export function useDeposits() {
  const deposits = useSyncExternalStore(subscribe, readDeposits, () => EMPTY_DEPOSITS);

  const addDeposit = (deposit: DepositRecord) => {
    writeDeposits([deposit, ...deposits]);
  };

  return {
    deposits,
    addDeposit,
  };
}
