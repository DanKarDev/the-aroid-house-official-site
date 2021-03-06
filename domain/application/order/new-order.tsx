import { server } from "config";
import { OrderAggregate } from "domain/models/aggregates/OrderAggregate";
import { IOrderRepo } from "domain/models/infrastructure/IOrderRepository";

interface INewOrder {
  orderRepo: IOrderRepo;
  orderAggregate: OrderAggregate;
}

export const newOrder = async ({ orderRepo, orderAggregate }: INewOrder) => {
  //no matter what save order first
  orderRepo.save(orderAggregate);

  await fetch(`${server}/api/notification/sendEmailInvoice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderAggregate),
  });
};
