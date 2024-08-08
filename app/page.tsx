"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

import { CalculatorForm } from "@/components/form";

import { AmountCard } from "@/components/card";
import { Button } from "@/components/ui/button";

function calculateEMI(
  principal: number,
  annualRate: number,
  tentureInMonths: number,
) {
  const monthlyRate = annualRate / 12 / 100;

  const numerator =
    principal * monthlyRate * Math.pow(1 + monthlyRate, tentureInMonths);
  const denominator = Math.pow(1 + monthlyRate, tentureInMonths) - 1;

  return numerator / denominator;
}

export default function Home() {
  const [formData, setFormData] = useState({
    principal: 0,
    annualRate: 0,
    tenureInMonths: 0,
  });
  const [emi, setEmi] = useState(0);

  const handleInputChange = useCallback(
    (field: "principal" | "annualRate" | "tenureInMonths", value: number) => {
      setFormData((prevState) => ({ ...prevState, [field]: value }));
    },
    [],
  );

  const handleCalculate = useCallback(() => {
    const { principal, annualRate, tenureInMonths } = formData;
    if (principal && annualRate && tenureInMonths) {
      const calculatedEMI = calculateEMI(principal, annualRate, tenureInMonths);
      setEmi(calculatedEMI);
    }
  }, [formData]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-2">
      <h1 className="text-2xl font-bold mt-6">Loan Calculator</h1>
      <div className="flex w-full max-w-lg flex-col items-center space-y-12 p-4">
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <CalculatorForm handleInputChange={handleInputChange} />
          <Button
            disabled={
              !formData.principal ||
              !formData.annualRate ||
              !formData.tenureInMonths
            }
            onClick={handleCalculate}
            variant="accent"
            size="default"
            className="w-full"
          >
            Calculate
          </Button>
        </section>
        <AmountCard
          amount={formData.principal}
          emi={emi}
          months={formData.tenureInMonths}
        />
      </div>
      <footer className="flex h-12 w-full flex-col text-center text-muted-foreground">
        <p className="text-sm">
          Crafted by{" "}
          <Link
            className="cursor-pointer"
            href="https://github.com/nuwanperera-me"
          >
            Nuwan Perera
          </Link>
        </p>
      </footer>
    </main>
  );
}
