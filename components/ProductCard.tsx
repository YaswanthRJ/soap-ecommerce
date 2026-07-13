import Image from "next/image";
import Link from "next/link";

import { Eye } from "lucide-react";
import { Soap } from "@/types/soap";

interface ProductCardProps {
    soap: Soap;
}

export function ProductCard({ soap }: ProductCardProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-300 bg-white">
            <Link href={`/soaps/${soap.id}`}>
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={soap.picture}
                        alt={soap.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm">
                        <Eye className="h-3.5 w-3.5 text-gray-700" />
                    </div>
                </div>
            </Link>

            <div className="flex flex-col gap-2 p-2">
                <div>
                    <h2 className="line-clamp-2 text-sm">
                        {soap.name}
                    </h2>

                    <p className="text-sm text-gray-700">
                        ₹{soap.price}
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    <button
                        className="w-full max-w-32 rounded-md bg-black px-3 py-2 text-xs text-white transition-colors hover:bg-gray-800"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}