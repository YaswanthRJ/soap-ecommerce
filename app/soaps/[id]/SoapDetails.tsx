import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { getSoap } from "@/service/soap.service";
import { CartButton } from "@/components/CartButton";

interface SoapDetailsProps {
  id: number;
}

export async function SoapDetails({ id }: SoapDetailsProps) {
  const soap = await getSoap(id);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-5 p-4">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1 text-sm text-gray-600 transition-colors hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to soaps
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-gray-200">
          <Image
            src={soap.picture}
            alt={soap.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-lg tracking-tight">
              {soap.name}
            </h1>

            <p className="mt-1 text-gray-800">
              ₹{soap.price}
            </p>
          </div>

          <CartButton soap={soap} />

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Description
            </h2>

            <p className="text-sm leading-7 text-gray-700">
              {soap.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}