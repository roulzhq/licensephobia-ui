export interface PackageResult {
	found: boolean;
	name: string;
	version: string;
	package: Package;
}

export type LicenseString = 'MIT' | 'GNU';

export interface ScanResponseMessage {
	type: 'package' | 'summary';
	data: PackageResult | SummaryResult;
}

export interface Package {
	id: string;
	name: string;
	description: string;
	latestVersion: string;
	license: License;
	author: string;
	homepage: string;
}

export interface PackageDetailResult {
	found: boolean;
	package: Package;
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
