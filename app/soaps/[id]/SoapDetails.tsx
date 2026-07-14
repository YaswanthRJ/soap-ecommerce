import { getSoap } from "@/service/soap.service";

interface SoapDetailsProps {
  id: number;
}

export async function SoapDetails({ id }: SoapDetailsProps) {
  const soap = await getSoap(id);
  console.log(soap)

  return (
    <>
      <h1>{soap.name}</h1>
    </>
  );
}