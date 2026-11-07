"use client";

import { useState } from "react";
import { QuantityStepper } from "@/components/orvibo/ui/quantity-stepper";

export function QuantityDemo() {
  const [m, setM] = useState(1);
  const [s, setS] = useState(2);
  return (
    <div className="flex flex-wrap items-center gap-ov-4">
      <QuantityStepper max={3} onChange={setM} value={m} />
      <QuantityStepper onChange={setS} size="s" value={s} />
    </div>
  );
}
