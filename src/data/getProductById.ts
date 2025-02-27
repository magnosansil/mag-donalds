import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

export const getProductById = async (id: string, slug: string) => {
  const product = await db.product.findUnique({ where: { id }, include: { restaurant: { select: { name: true, avatarImageUrl: true, slug: true } } } });


  if (!product || product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }


  return product;
}