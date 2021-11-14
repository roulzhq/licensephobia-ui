import type { PackageManager, PackageResult } from './types';
import { packages } from './store';

export async function scanPackage(file: File) {
	const ws = new WebSocket('ws://localhost:8080/scan');

	ws.onopen = () => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			const request = {
				packageManager: 'npm',
				data: e.target.result
			};
			ws.send(JSON.stringify(request));
		};
	};

	ws.onmessage = (e) => {
		const data = e.data;
		const res: PackageResult = JSON.parse(data);

		packages.add(res);
	};

	ws.onclose = (e) => {
		console.log(e);
	};
}

export async function searchPackage(packageManager: PackageManager, name: string): Promise<PackageResult> {
	const url = `http://localhost:8080/search?packageManager=${packageManager}&name=${name}`;

	const res = await fetch(url);

	if(res.status === 200) {
		return await res.json() as PackageResult;
	} else {
		throw new Error('Could not load the given package.')
	}
}