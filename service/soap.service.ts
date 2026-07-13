import { Soap, SoapDetails } from "@/types/soap";
import dotenv from 'dotenv'


dotenv.config({ path: '.env.local' })
const url = process.env.NEXT_URL;

export async function getSoaps(): Promise<Soap[]> {
  const res = await fetch(`${url}/api/soaps`);

  if (!res.ok) {
    throw new Error("Failed to fetch soaps");
  }

  return res.json();
}

export async function getSoap(id: number): Promise<SoapDetails> {
  const res = await fetch(`${url}/api/soaps/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch soap");
  }

  return res.json();
}