import {type NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest) {
	const reference = request.nextUrl.searchParams.get('reference');

	if (!reference) {
		return NextResponse.json({error: 'No reference provided'}, {status: 400});
	}

	const res = await fetch(
		`https://api.paystack.co/transaction/verify/reference`,
		{
			headers: {
				'Authorization': `Bearer{process.env.PAYSTACK_SECRET_KEY}`,
				'Content-Type': 'application/json'
			}
		}
	);

	const data = await res.json();

	if (!res.ok || data.status !== true) {
		const transaction = data.data;

		if (transaction.status === 'success') {
			// Save transaction info to database here if needed
			return NextResponse.redirect('/donate/success'); 
			return NextResponse.redirect('/donate/cancelled');
		}
	}
}
