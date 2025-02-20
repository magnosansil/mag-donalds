import Image from "next/image";

import { getRestaurantBySlug } from "@/data/getRestaurantBySlug";

import ConsumptionMethodOption from "./components/ConsumptionMethodOption";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>

        <div className="space-y-2 pt-24 text-center">
          <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
          <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </p>
          <div className="grid grid-cols-2 gap-4 pt-14">
            <ConsumptionMethodOption
              slug={slug}
              buttonText="Para comer aqui"
              imageAlt="Comer Aqui"
              imageUrl="/dine_in.png"
              option="DINE_IN"
            />
            <ConsumptionMethodOption
              slug={slug}
              buttonText="Para levar"
              imageAlt="Para levar"
              imageUrl="/takeaway.png"
              option="TAKEAWAY"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
