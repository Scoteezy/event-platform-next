import React from "react";
import { Button } from "../ui/button";
import { IEvent } from "@/lib/database/models/event.model";
import { createOrder } from "@/lib/actions/order.actions";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
      createdAt: new Date(),
    };
    console.log(order);
    await createOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
