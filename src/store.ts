
import { writable } from 'svelte/store';
import type { PackageResult } from './types';

function createPackages() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		add: (pkg: PackageResult) => {
      update(state => [...state, pkg])
    },
		reset: () => set([])
	};
}

export const packages = createPackages();