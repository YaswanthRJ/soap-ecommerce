import { SoapDetails } from "./SoapDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <SoapDetails id={Number(id)} />;
}