import type { PackageManager, PackageResult, ScanResponseMessage, SummaryResult } from './types';
import { packages, summary } from './store';

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
		const res: ScanResponseMessage = JSON.parse(data);

		if (res.type === 'package') {
			packages.add(res.data as PackageResult);
		} else if (res.type === 'summary') {
			summary.set(res.data as SummaryResult);
		}
	};

	ws.onclose = (e) => {
		console.log(e);
	};
}

export async function searchPackage(
	packageManager: PackageManager,
	name: string
): Promise<ScanResponseMessage> {
	const url = `http://localhost:8080/search?packageManager=${packageManager}&name=${name}`;

	const res = await fetch(url);

	if (res.status === 200) {
		return (await res.json()) as ScanResponseMessage;
	} else {
		throw new Error('Could not load the given package.');
	}
}
