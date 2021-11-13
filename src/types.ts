export interface PackageResult {
	found: boolean;
	name: string;
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
