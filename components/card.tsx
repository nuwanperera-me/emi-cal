"use client";

import { useState } from "react";

import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";

export const AmountCard = ({
  emi,
  months,
  amount,
}: {
  emi: number;
  months: number;
  amount: number;
}) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [copied, setCopied] = useState(false);

  const TotalPayment = emi * months;
  const Interest = TotalPayment - amount;

  const formattedPayemnt = USDollar.format(TotalPayment);
  const formattedEmi = USDollar.format(emi);
  const formattedAmount = USDollar.format(amount);
  const formattedInterest = USDollar.format(Interest);

  const percentage = ((Interest / TotalPayment) * 100).toString().concat("%");
  const formattedText = `Equated Monthly Installment: ${formattedEmi}
Total Amount(principal): ${formattedAmount}
Total Payemt: ${formattedPayemnt}
Total Interest: ${formattedInterest}
  `;
  const copyContent = async (text: string | number) => {
    try {
      await navigator.clipboard.writeText(text.toString());
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center rounded-lg border border-border bg-secondary p-4">
      <Button
        className="group absolute right-2 top-2 hover:bg-muted"
        variant="secondary"
        size="icon"
        onClick={() => {
          copyContent(formattedText);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        <ClipboardDocumentCheckIcon
          className={`opacity-1 absolute h-4 w-4 text-muted-foreground transition-colors duration-150 group-hover:text-primary-foreground ${copied ? "opacity-0" : "opacity-100"} transition-opacity`}
        />

        <CheckIcon
          className={`h-4 w-4 text-emerald-600 ${copied ? "opacity-100" : "opacity-0"} transition-opacity duration-150`}
        />
        <p className="sr-only">Copy to clipboard</p>
      </Button>
      <div className="mb-12 text-center font-normal">
        <p className="mb-6 font-semibold">Equated Monthly Installment</p>
        <p
          className="cursor-pointer text-3xl font-semibold text-accent-foreground hover:underline"
          onClick={() => copyContent(formattedEmi)}
        >
          {formattedEmi}
        </p>
        <p>
          {/* @ts-ignore */}
          {parseInt(months / 12)} year{months <= 12 ? "" : "s"} and{" "}
          {months % 12} month{months % 12 > 1 ? "s" : ""}
        </p>
      </div>
      <div className="mb-4 w-full">
        <div className="relative mb-2 h-2 w-full overflow-hidden rounded-sm bg-primary-foreground">
          <div
            className="absolute right-0 h-full bg-accent transition-transform duration-300"
            style={{ width: percentage }}
          ></div>
        </div>
        <div className="mb-1 flex justify-between text-xs">
          <p className="flex items-center justify-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground"></span>
            Principle
          </p>
          <p className="flex items-center justify-start gap-2">
            Interest
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1 text-left text-xs text-muted-foreground ">
        <p>
          Total Payment:{" "}
          <span
            className=" cursor-pointer font-semibold text-primary-foreground hover:underline"
            onClick={() => copyContent(formattedPayemnt)}
          >
            {formattedPayemnt}
          </span>
        </p>
        <p>
          Total Amount:{" "}
          <span
            className=" cursor-pointer font-semibold text-primary-foreground hover:underline"
            onClick={() => copyContent(formattedAmount)}
          >
            {formattedAmount}
          </span>
        </p>
        <p>
          Total Interest:{" "}
          <span
            className="cursor-pointer font-semibold text-primary-foreground hover:underline"
            onClick={() => copyContent(formattedInterest)}
          >
            {formattedInterest}
          </span>
        </p>
      </div>
    </section>
  );
};
