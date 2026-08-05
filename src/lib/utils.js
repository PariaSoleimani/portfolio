import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
	return twMerge(clsx(inputs));
};

const canUseStorage = () => typeof window !== 'undefined';

export const getStorageItem = (key, fallback = null) => {
	if (!canUseStorage()) {
		return fallback;
	}

	const value = localStorage.getItem(key);
	return value === null ? fallback : value;
};

export const setStorageItem = (key, value) => {
	if (!canUseStorage()) {
		return;
	}

	localStorage.setItem(key, String(value));
};

export const getStorageBoolean = (key, fallback = true) => {
	const value = getStorageItem(key);
	if (value === null) {
		return fallback;
	}

	return value === 'true';
};