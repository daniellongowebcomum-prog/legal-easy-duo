import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aluguer")({
  head: () => ({
    meta: [
      { title: "Termos e Condições — Aluguer de Bicicletas | FeelAzores Sports" },
      {
        name: "description",
        content:
          "Termos e Condições do Aluguer de Bicicletas e Equipamentos FeelAzores Sports — versão em Português e Inglês.",
      },
      { property: "og:title", content: "Aluguer de Bicicletas — Termos e Condições | FeelAzores Sports" },
      {
        property: "og:description",
        content:
          "Consulte os Termos e Condições aplicáveis ao Aluguer de Bicicletas e Equipamentos FeelAzores (PT/EN).",
      },
    ],
  }),
  component: RentalTermsPage,
});

type TermItem = { text: string; sub?: string[] };

const ptTerms: TermItem[] = [
  { text: "O aluguer é celebrado entre o FeelSãoMiguel - Hotelaria Lda., NIF 518 916 502, e o cliente identificado na ficha de aluguer." },
  { text: "O cliente declara receber o equipamento em bom estado de funcionamento e compromete-se a devolvê-lo nas mesmas condições, exceto desgaste normal de utilização." },
  {
    text: "O período de aluguer inicia-se na entrega do equipamento e termina na sua devolução aos colaboradores da FeelAzores, dentro do horário de funcionamento.",
    sub: [
      "A devolução do equipamento após o termo do período de aluguer contratado implica a cobrança do período adicional correspondente, de acordo com a tabela de preços em vigor.",
    ],
  },
  { text: "O cliente é responsável pelo equipamento durante todo o período de aluguer, incluindo perda, roubo, furto ou danos causados por utilização indevida, negligente ou contrária às instruções fornecidas." },
  {
    text: "Em caso de perda, roubo ou destruição total do equipamento, o cliente será responsável pelo respetivo valor de substituição. Em caso de dano parcial, será responsável pelos custos de reparação. Para mera referência do valor comercial dos equipamentos (PVP), as bicicletas encontram-se enquadradas nas seguintes categorias:",
    sub: [
      "MTB / Gravel — PVP entre € 1 100 e € 1 700",
      "E-City Bike — PVP € 3 300",
      "Gravel Carbon / Road Carbon / E-Gravel / E-MTB — PVP entre € 3 600 e € 5 600",
      "Junior Bikes — PVP entre € 400 e € 650",
    ],
  },
  { text: "Qualquer avaria ou problema técnico deve ser comunicado de imediato à FeelAzores. Não são permitidas reparações por terceiros sem autorização prévia." },
  { text: "O equipamento deve ser utilizado de forma prudente, de acordo com a legislação em vigor e apenas para o fim a que se destina." },
  { text: "O equipamento não poderá ser cedido ou subalugado a terceiros sem autorização prévia da FeelAzores, exceto nos casos de operadores, parceiros ou entidades devidamente autorizadas." },
  { text: "A FeelAzores reserva-se o direito de recusar alugueres a pessoas sob influência de álcool ou substâncias, ou que não apresentem condições adequadas para utilização segura do equipamento." },
  { text: "A utilização de equipamentos por menores de idade requer autorização e responsabilidade do respetivo representante legal ou adulto autorizado." },
  { text: "Os pagamentos efetuados não são reembolsáveis por devolução antecipada ou utilização parcial do período contratado." },
  { text: "O cliente reconhece que a utilização de bicicletas e equipamentos desportivos envolve risco de acidente ou lesão, assumindo a responsabilidade pela sua utilização." },
  { text: "Os dados pessoais recolhidos serão utilizados exclusivamente para gestão do aluguer e cumprimento de obrigações legais, nos termos da legislação aplicável." },
  { text: "Para qualquer litígio é competente o foro da comarca dos Açores, com renúncia expressa em qualquer outro." },
];

const enTerms: TermItem[] = [
  { text: "This agreement is established between FeelSãoMiguel - Hotelaria LDA, with Tax Identification Number: 518 916 502, and the customer identified on the rental form." },
  { text: "The customer acknowledges that the equipment was received in good working order and agrees to return it in the same condition, except for normal wear and tear." },
  {
    text: "The rental period begins when the equipment is picked up and ends when it is returned to FeelAzores staff during business hours.",
    sub: [
      "Returning the equipment after the end of the contracted rental period will result in a charge for the corresponding additional period, in accordance with the current price list.",
    ],
  },
  { text: "The customer is responsible for the equipment throughout the rental period, including loss, theft, or damage caused by misuse, negligence, or failure to follow the provided instructions." },
  {
    text: "In the event of loss, theft, or total destruction of the equipment, the customer will be responsible for the replacement cost. In the event of partial damage, the customer will be responsible for the repair costs. For reference purposes only regarding the retail price of the equipment, the bicycles fall into the following categories:",
    sub: [
      "MTB / Gravel — Retail price between €1,100 and €1,700",
      "E-City Bike — Retail price €3,300",
      "Gravel Carbon / Road Carbon / E-Gravel / E-MTB — Retail price between €3,600 and €5,600",
      "Junior Bikes — Retail price between €400 and €650",
    ],
  },
  { text: "Any malfunction or technical issue must be reported immediately to FeelAzores. Repairs by third parties are not permitted without prior authorization." },
  { text: "The equipment must be used with care, in accordance with applicable laws and regulations, and only for its intended purpose." },
  { text: "The equipment may not be lent or subleased to third parties without prior authorization from FeelAzores, except in the case of duly authorized operators, partners, or entities." },
  { text: "FeelAzores reserves the right to refuse rentals to persons under the influence of alcohol or substances, or who are not in a suitable condition to use the equipment safely." },
  { text: "The use of equipment by minors requires the authorization and responsibility of their legal representative or authorized adult." },
  { text: "Payments made are non-refundable in the event of early cancellation or partial use of the contracted period." },
  { text: "The customer acknowledges that the use of bicycles and sports equipment involves a risk of accident or injury and assumes responsibility for their use." },
  { text: "The personal data collected will be used exclusively for the purpose of managing the rental and complying with legal obligations, in accordance with applicable law." },
  { text: "For any dispute, the jurisdiction of Azores is competent, with express waiver of any other." },
];

function TermsList({ items }: { items: TermItem[] }) {
  return (
    <ol className="mx-auto max-w-3xl space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-5 text-[15px] leading-relaxed text-foreground/85">
          <span className="font-display text-2xl leading-none text-primary tabular-nums shrink-0 w-8">
            {i + 1}.
          </span>
          <div className="pt-1 space-y-3">
            <p>{item.text}</p>
            {item.sub && (
              <ul className="ml-2 space-y-1.5 text-foreground/75">
                {item.sub.map((s, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-accent">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function RentalTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wide text-primary">FeelAzores</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Sports
            </span>
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#pt" className="transition-colors hover:text-primary">Português</a>
            <a href="#en" className="transition-colors hover:text-primary">English</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">
          Aluguer de Bicicletas &amp; Equipamentos
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-6xl">
          Termos e Condições
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          O documento abaixo apresenta as condições aplicáveis ao aluguer de bicicletas e
          equipamentos FeelAzores. Versão em Português, seguida da versão em Inglês.
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-accent/60" />
      </section>

      {/* PT */}
      <section id="pt" className="px-6 pb-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">PT</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
            Termos e Condições — Aluguer de Bicicletas e Equipamentos
          </h2>
        </div>
        <TermsList items={ptTerms} />
      </section>

      {/* Divider */}
      <div className="mx-auto my-4 flex max-w-3xl items-center gap-4 px-6">
        <span className="h-px flex-1 bg-border" />
        <span className="font-display text-xl text-accent">·</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      {/* EN */}
      <section id="en" className="px-6 pt-16 pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">EN</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
            Terms &amp; Conditions — Bike and Equipment Rental
          </h2>
        </div>
        <TermsList items={enTerms} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <span>FeelSãoMiguel — Hotelaria Lda.</span>
          <span>RNAT n.º · NIF 518 916 502</span>
        </div>
      </footer>
    </div>
  );
}
