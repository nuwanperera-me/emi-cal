"use client";

import { Input } from "./ui/input";

type FormProps = {
  handleInputChange: (
    field: "principal" | "annualRate" | "tenureInMonths",
    value: number,
  ) => void;
};

export const CalculatorForm = ({ handleInputChange }: FormProps) => {
  const safeConvert = (s: string) => {
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  };

  return (
    <form className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="principal" className="text-sm font-semibold">
          Principal Amount:
        </label>
        <div
          className="inline-flex items-center overflow-hidden rounded-md border
          "
        >
          <Input
            id="principal"
            type="number"
            placeholder="100 000"
            className="rounded-none rounded-l-sm  border-none"
            onChange={(e) =>
              handleInputChange("principal", safeConvert(e.target.value))
            }
          />
          <div className="inline-flex h-full w-12 select-none items-center justify-center bg-muted text-lg font-semibold text-muted-foreground">
            <p>$</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="annualRate" className="text-sm font-semibold">
          Annual Interest Rate:
        </label>
        <div
          className="inline-flex items-center overflow-hidden rounded-md border
          "
        >
          <Input
            id="annualRate"
            type="number"
            placeholder="12%"
            className="rounded-none rounded-l-sm border-none"
            onChange={(e) =>
              handleInputChange("annualRate", safeConvert(e.target.value))
            }
          />
          <div className="inline-flex h-full w-12 select-none items-center justify-center bg-muted text-lg font-semibold text-muted-foreground">
            <p>%</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tenureInMonths" className="text-sm font-semibold">
          Tenure (in months):
        </label>
        <div
          className="inline-flex items-center overflow-hidden rounded-md border
          "
        >
          <Input
            id="tenureInMonths"
            type="number"
            placeholder="24"
            min={1}
            className="rounded-sm  border-none"
            onChange={(e) =>
              handleInputChange("tenureInMonths", safeConvert(e.target.value))
            }
          />
        </div>
      </div>
    </form>
  );
};
