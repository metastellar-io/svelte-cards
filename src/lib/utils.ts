import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getCurrentTimeStamp(): number {
	const dNow = new Date();
	return dNow.valueOf(); // 1673445066359
}
