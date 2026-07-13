import { NextResponse } from 'next/server'
import { db } from '@/db'
import { soaps } from '@/db/schema'
import { isNull } from 'drizzle-orm'

// GET /api/soaps - List all active soaps
export async function GET() {
  try {
    const allSoaps = await db
      .select()
      .from(soaps)
      .where(isNull(soaps.deletedAt))

    return NextResponse.json(allSoaps)
  } catch (error) {
    console.error('Error fetching soaps:', error)
    return NextResponse.json(
      { error: 'Failed to fetch soaps' },
      { status: 500 }
    )
  }
}