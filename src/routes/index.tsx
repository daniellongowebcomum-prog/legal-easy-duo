import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Termos e Condições — Tours & Experiências | FeelAzores Sports" },
      {
        name: "description",
        content:
          "Termos e Condições dos Tours e Experiências FeelAzores Sports — versão em Português e Inglês.",
      },
      { property: "og:title", content: "Termos e Condições — FeelAzores Sports" },
      {
        property: "og:description",
        content:
          "Consulte os Termos e Condições aplicáveis aos Tours e Experiências FeelAzores (PT/EN).",
      },
    ],
  }),
  component: TermsPage,
});

const ptTerms = [
  "O tour é celebrado entre o FeelSãoMiguel - Hotelaria Lda, NIF: 518 916 502, e o cliente identificado na inscrição de tour.",
  "Os tours e atividades FeelAzores destinam-se a participantes com condições físicas adequadas à prática da atividade.",
  "A participação em atividades de ciclismo e outdoor envolve risco inerente de acidente, lesão ou danos materiais, sendo cada participante responsável pela sua participação e conduta durante a atividade.",
  "O participante compromete-se a cumprir as instruções dos guias e as normas de segurança aplicáveis durante toda a atividade.",
  "O uso de capacete é obrigatório durante os bike tours.",
  "Menores de idade apenas poderão participar mediante autorização e responsabilidade do respetivo representante legal ou adulto autorizado.",
  "Os tours realizam-se no local e horário previamente comunicados pela FeelAzores. Os tours e experiências poderão estar sujeitos a número mínimo e máximo de participantes, sendo essa informação comunicada ao cliente no momento da contratação do serviço.",
  "Em caso de não comparência, o tour será considerado realizado e não haverá lugar a reembolso.",
  "Cancelamentos ou alterações deverão ser comunicados e validados pela equipa com, pelo menos, 48 horas de antecedência relativamente ao início da atividade.",
  "As atividades realizadas pela FeelAzores encontram-se cobertas pelos seguros obrigatórios nos termos da legislação aplicável.",
  "Os serviços e atividades reservados são não reembolsáveis, incluindo em casos de utilização parcial ou não utilização.",
  "Em caso de condições meteorológicas adversas ou motivos de segurança, a FeelAzores poderá reagendar a atividade ou emitir voucher de valor equivalente.",
  "A FeelAzores reserva-se o direito de recusar a participação a pessoas sob influência de álcool, substâncias ilícitas, que apresentem comportamento inadequado ou inseguro.",
  "O participante autoriza a recolha e tratamento dos dados pessoais necessários à gestão da atividade, nos termos da legislação aplicável.",
];

const enTerms = [
  "This agreement is established between FeelSãoMiguel - Hotelaria Lda, with Tax Identification Number: 518 916 502, and the customer identified on the tour booking.",
  "FeelAzores tours and activities are intended for participants with adequate physical fitness for the activity.",
  "Participation in cycling and outdoor activities involves an inherent risk of accidents, injuries, or property damage; each participant is responsible for their own participation and conduct during the activity.",
  "Participants agree to follow the guides’ instructions and comply with all applicable safety rules throughout the activity.",
  "Wearing a helmet is mandatory during bike tours.",
  "Minors may only participate with the permission and under the responsibility of their legal representative or an authorized adult.",
  "The tours take place at the location and time previously announced by FeelAzores. Tours and experiences may be subject to minimum and maximum participant numbers; this information will be provided to the customer at the time of booking.",
  "If you fail to show up, the tour will be considered completed and there will be no refund.",
  "Cancellations or changes must be reported to and approved by the team at least 48 hours before the start of the activity.",
  "The activities carried out by FeelAzores are covered by the mandatory insurance required under applicable law.",
  "Reserved services and activities are non-refundable, including in cases of partial use or non-use.",
  "In the event of adverse weather conditions or for safety reasons, FeelAzores may reschedule the activity or issue a voucher of equivalent value.",
  "FeelAzores reserves the right to refuse entry to anyone under the influence of alcohol or illegal substances, or who exhibits inappropriate or unsafe behavior.",
  "The participant authorizes the collection and processing of the personal data necessary for the administration of the event, in accordance with applicable law.",
];

function TermsList({ items }: { items: string[] }) {
  return (
    <ol className="mx-auto max-w-3xl space-y-6">
      {items.map((text, i) => (
        <li key={i} className="flex gap-5 text-[15px] leading-relaxed text-foreground/85">
          <span className="font-display text-2xl leading-none text-primary tabular-nums shrink-0 w-8">
            {i + 1}.
          </span>
          <p className="pt-1">{text}</p>
        </li>
      ))}
    </ol>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wide text-primary">FeelAzores</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Sports
            </span>
          </div>
          <nav className="hidden gap-8 text-sm uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#pt" className="transition-colors hover:text-primary">Português</a>
            <a href="#en" className="transition-colors hover:text-primary">English</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">
          Tours &amp; Experiências
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-6xl">
          Termos e Condições
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          O documento abaixo apresenta as condições aplicáveis à participação em tours e
          experiências FeelAzores. Versão em Português, seguida da versão em Inglês.
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-accent/60" />
      </section>

      {/* PT */}
      <section id="pt" className="px-6 pb-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">PT</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
            Termos e Condições — Tours &amp; Experiências
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
            Terms and Conditions — Tours &amp; Experiences
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
