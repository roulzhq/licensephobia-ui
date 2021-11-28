export interface PackageResult {
	found: boolean;
	name: string;
	version: string;
	package: Package;
	author: string;
	homepage: string;
}

export type LicenseString = 'MIT' | 'GNU';

export interface WebsocketMessage {
	type: 'package' | 'summary';
	data: 'PackageResult' | 'SummaryResult';
}

export interface Package {
	id: string;
	name: string;
	description: string;
	latestVersion: string;
	license: License;
}

export interface PackageDetailResult {
	found: boolean;
	package: {
		id: string;
		name: string;
		description: string;
		latestVersion: string;
		license: License;
		author: string;
		homepage: string;
	};
}

export interface License {
	found: boolean;
	known: boolean;
	type: LicenseString;
}

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
