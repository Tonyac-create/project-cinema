import { NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET() {
  try {
    const result = await query('SELECT NOW()', []);
    return NextResponse.json({ 
      status: 'success',
      time: result.rows[0].now,
      message: 'Database connection successful!'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      status: 'error',
      message: 'Failed to connect to database',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
