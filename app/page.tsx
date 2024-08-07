"use client";

import React, { useState } from "react";

export default function Page() {
  const [vars, setVars] = useState({
    a: 0.0,
    b: 0.0,
    c: 0,
  });
  // const [emi, setEmi] = useState();

  function calculateEMI(
    principal: number,
    annualRate: number,
    tentureInMonths: number,
  ): number {
    const monthlyRate = annualRate / 12 / 100;

    const numerator =
      principal * monthlyRate * Math.pow(1 + monthlyRate, tentureInMonths);
    const denominator = Math.pow(1 + monthlyRate, tentureInMonths) - 1;

    const emi = numerator / denominator;
    return emi;
  }

  return (
    <main>
      <form>
        <label htmlFor="a">a</label>
        <input
          id="a"
          type="text"
          onChange={(e) => setVars({ ...vars, a: parseFloat(e.target.value) })}
        />
        <label htmlFor="b">b</label>
        <input
          id="b"
          type="text"
          onChange={(e) => setVars({ ...vars, b: parseFloat(e.target.value) })}
        />
        <label htmlFor="c">c</label>
        <input
          id="c"
          type="text"
          onChange={(e) => setVars({ ...vars, c: parseFloat(e.target.value) })}
        />
      </form>
      <div>
        <p>a: {vars.a}</p>
        <p>b: {vars.b}</p>
        <p>c: {vars.c}</p>
        <p>s: {vars.a + vars.b + vars.c}</p>
      </div>
    </main>
  );
}
