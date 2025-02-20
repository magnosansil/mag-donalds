import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({ where: { slug }, include: { menuCategories: { include: { products: true } } } });

  if (!restaurant) {
    return notFound();
  }

  return restaurant;
}