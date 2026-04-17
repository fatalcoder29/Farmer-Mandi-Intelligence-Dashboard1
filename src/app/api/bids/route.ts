import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Bid from '@/models/Bid';

// GET all bids
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const stateFilter = searchParams.get('state');
    const cropFilter = searchParams.get('crop');

    await connectToDatabase();
    
    let query: any = {};
    if (stateFilter && stateFilter !== 'All') {
      // For mock logic, we'll assume distance contains state-like names if needed, 
      // but in a real DB we'd have a 'state' field.
      // query.state = stateFilter;
    }
    
    let bids = await Bid.find(query).sort({ createdAt: -1 });
    
    // Auto-seed data for hackathon demo if empty
    if (bids.length === 0) {
      const MOCK_BIDS = [
        { buyer: 'Zomato Fresh Supply', price: '₹2,550', qty: '50 Quintals', distance: '12 km (Bihar)', status: 'active', time: 'Closing in 2h' },
        { buyer: 'Reliance Retail', price: '₹2,500', qty: '100 Quintals', distance: '45 km (UP)', status: 'active', time: 'Closing in 5h' },
        { buyer: 'Local Traders Pvt', price: '₹2,300', qty: '20 Quintals', distance: '5 km (Bihar)', status: 'ended', time: 'Closed' },
        { buyer: 'BigBasket Agri', price: '₹2,600', qty: '80 Quintals', distance: '30 km (Punjab)', status: 'active', time: 'Closing in 1h' }
      ];
      await Bid.insertMany(MOCK_BIDS);
      bids = await Bid.find(query).sort({ createdAt: -1 });
    }

    // Client-side filtering simulation for the demo if the DB query is complex
    if (stateFilter && stateFilter !== 'All') {
      bids = bids.filter((b: any) => b.distance.toLowerCase().includes(stateFilter.toLowerCase()));
    }

    return NextResponse.json({ success: true, count: bids.length, data: bids });
  } catch (error) {
    console.warn("Database connection failed, falling back to mock data:", error);
    const MOCK_BIDS = [
      { _id: '1', buyer: 'Zomato Fresh Supply', price: '₹2,550', qty: '50 Quintals', distance: '12 km', status: 'active', time: 'Closing in 2h' },
      { _id: '2', buyer: 'Reliance Retail', price: '₹2,500', qty: '100 Quintals', distance: '45 km', status: 'active', time: 'Closing in 5h' },
      { _id: '3', buyer: 'Local Traders Pvt', price: '₹2,300', qty: '20 Quintals', distance: '5 km', status: 'ended', time: 'Closed' }
    ];
    return NextResponse.json({ success: true, count: 3, data: MOCK_BIDS, offline: true });
  }
}

// POST a new bid
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const bid = await Bid.create(body);
    return NextResponse.json({ success: true, data: bid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create bid' }, { status: 400 });
  }
}
