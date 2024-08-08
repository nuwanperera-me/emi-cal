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


  const TotalPayment = emi * months;
  const Interest = TotalPayment - amount;
  const formatedPayemnt = USDollar.format(TotalPayment);
  const formatedEmi = USDollar.format(emi);
  const formatedAmount = USDollar.format(amount);
  const formatedInterest = USDollar.format(Interest);

  const percentage = (Interest / TotalPayment * 100).toString().concat("%")


  return (
    <section className="flex w-full flex-col items-center gap-4- rounded-lg border border-border bg-secondary p-4">
      <div className="text-center font-normal mb-12">
        <p className="mb-6 font-semibold">Equated Monthly Installment</p>
        <p className="text-3xl font-semibold text-accent-foreground">
          {formatedEmi}
        </p>
        <p>
          {/* @ts-ignore */}
          {parseInt(months / 12)} year{months <= 12 ? "" : "s"} and{" "}
          {months % 12} month{months % 12 > 1 ? "s" : ""}
        </p>
      </div>
      <div className="w-full mb-4">
        <div className="relative mb-2 h-2 w-full overflow-hidden rounded-sm bg-primary-foreground">
          <div className="absolute right-0 h-full w-[] bg-accent" style={{width: percentage}}></div>
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
          <span className=" font-semibold text-primary-foreground">
            {formatedPayemnt}
          </span>
        </p>
        <p>
          Total Amount:{" "}
          <span className=" font-semibold text-primary-foreground">
            {formatedAmount}
          </span>
        </p>
        <p>
          Total Interest:{" "}
          <span className="font-semibold text-primary-foreground">
            {formatedInterest}
          </span>
        </p>
      </div>
    </section>
  );
};
