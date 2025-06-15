import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../lib/db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get('query');

  if (!searchQuery) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const result = await query(
      'SELECT * FROM films WHERE LOWER(title) LIKE LOWER($1)',
      [`%${searchQuery}%`]
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error searching films:', error);
    return NextResponse.json({ error: 'Failed to search films' }, { status: 500 });
  }
}
