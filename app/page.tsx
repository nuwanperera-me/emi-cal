"use client";

import { AmountCard } from "@/components/card";
import { CalculatorForm } from "@/components/form";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

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
    <main className="mx-auto flex h-screen w-full max-w-md flex-col items-center justify-center- space-y-12 p-4">
      <h1 className="text-3xl font-semibold">Loan Calculator</h1>
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
          size="sm"
          className="w-full max-w-md"
        >
          Calculate
        </Button>
      </section>
      {/* <div>
        <p>Principal Amount: {formData.principal}</p>
        <p>Annual Interest Rate: {formData.annualRate}%</p>
        <p>Tenure: {formData.tenureInMonths} months</p>
        <p>Equated Monthly Installment (EMI): {emi.toFixed(2)}</p>
      </div> */}

      <AmountCard amount={formData.principal} emi={emi} months={formData.tenureInMonths} />
      {/* <div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl">Equated Monthly Installment</h2>
          <p>{(parseInt(formData.tenureInMonths / 12).toString())} year{(formData.tenureInMonths/12)}</p>
          <p className="text-3xl text-accent-foreground">$ {emi.toFixed(2)}</p>
        </div>
      </div> */}
    </main>
  );
}
