export interface PackageResult {
	found: boolean;
	name: string;
	id: string;
	description: string;
	url: string;
	version: {
		used: string;
		latest: string;
	};
	license: {
		found: boolean;
		type: LicenseString;
	};
}

export type LicenseString = 'MIT' | 'GNU';

export enum PackageManager {
	NPM = 'npm',
	PIP = 'pip',
	CARGO = 'cargo',
}