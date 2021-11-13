
import { writable } from 'svelte/store';
import type { PackageResult } from './types';

function createPackages() {
	const { subscribe, set, update } = writable([] as PackageResult[]);

	return {
		subscribe,
		add: (pkg: PackageResult) => {
      update(state => [...state, pkg])
    },
		reset: () => set([])
	};
}

export const packages = createPackages();

// a flag used to have a single source of truth for wheather the app is currently scanning.
export const scanning = writable(false);