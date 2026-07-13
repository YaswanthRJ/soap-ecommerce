import { db } from "@/db";
import { soaps } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const soapId = Number(id);

        if (Number.isNaN(soapId)) {
            return NextResponse.json(
                { error: "Invalid soap ID" },
                { status: 400 }
            );
        }

        const soap = await db
            .select()
            .from(soaps)
            .where(eq(soaps.id, soapId))
            .limit(1);

        if (soap.length === 0) {
            return NextResponse.json(
                { error: "Soap not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(soap[0]);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch soap" },
            { status: 500 }
        );
    }
}