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

  const percentage = ((Interest / TotalPayment) * 100).toString().concat("%");

  const copyContent = async (text: string | number) => {
    try {
      await navigator.clipboard.writeText(text.toString());
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="gap-4- flex w-full flex-col items-center rounded-lg border border-border bg-secondary p-4">
      <div className="mb-12 text-center font-normal">
        <p className="mb-6 font-semibold">Equated Monthly Installment</p>
        <p
          className="cursor-pointer text-3xl font-semibold text-accent-foreground hover:underline"
          onClick={() => copyContent(formatedEmi)}
        >
          {formatedEmi}
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
            onClick={() => copyContent(formatedPayemnt)}
          >
            {formatedPayemnt}
          </span>
        </p>
        <p>
          Total Amount:{" "}
          <span
            className=" cursor-pointer font-semibold text-primary-foreground hover:underline"
            onClick={() => copyContent(formatedAmount)}
          >
            {formatedAmount}
          </span>
        </p>
        <p>
          Total Interest:{" "}
          <span
            className="cursor-pointer font-semibold text-primary-foreground hover:underline"
            onClick={() => copyContent(formatedInterest)}
          >
            {formatedInterest}
          </span>
        </p>
      </div>
    </section>
  );
};
