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
		known: boolean;
		type: LicenseString;
	};
}

export type LicenseString = 'MIT' | 'GNU';

export interface SummaryResult {
	conditions: SummaryConditions;
}

export interface SummaryConditions {
	permissions: string[];
	conditions: string[];
	limitations: string[];
}

export enum PackageManager {
	NPM = 'npm',
	PIP = 'pip',
	CARGO = 'cargo'
}
