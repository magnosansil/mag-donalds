import { db } from "@/lib/prisma";

import { isValidCPF, removeCpfPonctuation } from "../menu/helpers/cpf";
import CpfForm from "./components/cpf-form";
import OrderList from "./components/order-list";

interface OrderPageProps {
  searchParams: Promise<{ cpf: string }>;
}
const OrdersPage = async ({ searchParams }: OrderPageProps) => {
  const { cpf } = await searchParams;

  if (!cpf || !isValidCPF(cpf)) {
    return <CpfForm />;
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      customerCpf: removeCpfPonctuation(cpf),
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return <OrderList orders={orders} />;
};

export default OrdersPage;
