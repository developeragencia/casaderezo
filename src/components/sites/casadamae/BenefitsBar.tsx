import { Truck, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

export function BenefitsBar() {
  const benefits = [
    {
      icon: Truck,
      title: "Frete Grátis",
      desc: "Em compras acima de R$ 299",
      color: "text-amber-700 bg-amber-50",
    },
    {
      icon: CreditCard,
      title: "Até 12x Sem Juros",
      desc: "Ou 5% de desconto à vista no Pix",
      color: "text-emerald-700 bg-emerald-50",
    },
    {
      icon: ShieldCheck,
      title: "Compra 100% Segura",
      desc: "Ambiente blindado e criptografado",
      color: "text-blue-700 bg-blue-50",
    },
    {
      icon: Sparkles,
      title: "Artigos com Tradição",
      desc: "Respeito e devoção na confecção",
      color: "text-purple-700 bg-purple-50",
    },
  ];

  return (
    <section className="bg-white border-b border-neutral-100 py-6" aria-label="Vantagens da loja">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-sm hover:border-amber-200 transition-all"
              >
                <div className={`size-11 rounded-lg flex items-center justify-center shrink-0 ${b.color}`}>
                  <Icon className="size-5.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-neutral-900 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
