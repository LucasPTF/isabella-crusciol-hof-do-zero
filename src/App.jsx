import { useEffect, useRef, useState } from "react";

const checkoutUrl = "";

const heroVariants = {
  "/a1": {
    eyebrow: "Workshop ao vivo / HOF do Zero",
    title: "Você não precisa começar grande. Precisa começar na ordem certa.",
    support:
      "Em uma aula ao vivo de 3 a 4 horas, entenda o que realmente precisa estruturar para iniciar na HOF com mais clareza, antes de gastar mais com cursos, materiais ou uma estrutura que ainda não precisa.",
    cta: "Quero começar na HOF",
  },
  "/a2": {
    eyebrow: "Workshop ao vivo / HOF do Zero",
    title: "O próximo curso técnico pode não resolver o que está te travando.",
    support:
      "Se você já entendeu que técnica é importante, mas ainda não sabe por onde começar, quanto investir, como cobrar ou como construir pacientes e posicionamento, o problema pode estar fora da seringa.",
    cta: "Quero entender o que vem além da técnica",
  },
  "/a3": {
    eyebrow: "Workshop ao vivo / HOF do Zero",
    title: "Se eu começasse na HOF do zero hoje, não começaria montando uma clínica.",
    support:
      "Eu começaria entendendo o que precisa vir primeiro e o que pode esperar. Foi assim que saí de uma rotina dividida entre trabalhos e sala alugada para construir meu próprio espaço.",
    cta: "Quero ver o caminho que eu faria hoje",
  },
};

const learningTopics = [
  {
    number: "01",
    title: "Minha jornada na HOF",
    text: "Como comecei com poucos recursos e sem uma estrutura pronta, passei pelo consultório e cheguei à clínica, incluindo decisões certas e erros que custaram tempo e dinheiro.",
  },
  {
    number: "02",
    title: "Os erros que atrasam o começo",
    text: "Investimento fora de hora, promoção sem margem, falta de gestão, excesso de foco em técnica e decisões sem direção.",
  },
  {
    number: "03",
    title: "O que existe por trás de uma clínica",
    text: "Gestão, financeiro, posicionamento, vendas, experiência, pacientes, recorrência e técnica como partes do mesmo sistema.",
  },
  {
    number: "04",
    title: "Do prejuízo ao lucro",
    text: "Faturamento e lucro, custo da hora clínica, precificação e decisões financeiras básicas para não começar sem enxergar os números.",
  },
  {
    number: "05",
    title: "Técnica não é tudo",
    text: "Como técnica e raciocínio clínico entram na construção profissional sem virar a única resposta para todos os problemas.",
  },
  {
    number: "06",
    title: "Posicionamento, personalidade e autoridade",
    text: "Como construir percepção de valor sem precisar fingir uma realidade que ainda não existe.",
  },
  {
    number: "07",
    title: "Diagnóstico e plano de ação",
    text: "Você identifica seu cenário, suas prioridades e os próximos passos que fazem sentido para a fase em que está.",
  },
];

const faqs = [
  {
    question: "Eu ainda sou estudante. Serve para mim?",
    answer:
      "Sim, se você está em fase final de formação e já está se preparando para entrar na HOF. O foco é ajudar a organizar decisões antes de começar.",
  },
  {
    question: "Eu já me formei, mas ainda não comecei. Serve para mim?",
    answer:
      "Sim. Esse é um dos principais momentos para usar o workshop, antes de transformar ansiedade em gasto e tentar resolver tudo ao mesmo tempo.",
  },
  {
    question: "Eu já fiz cursos de técnica. Ainda vale a pena?",
    answer:
      "Sim, se você continua sem clareza sobre gestão, preço, posicionamento, aquisição, recorrência e estruturação da carreira. O HOF do Zero não é mais um curso técnico.",
  },
  {
    question: "Eu ainda não tenho pacientes. Vou aproveitar?",
    answer:
      "Sim. A aula parte justamente da realidade de quem ainda está construindo sua base e precisa decidir o que vem primeiro.",
  },
  {
    question: "Preciso ter consultório próprio?",
    answer:
      "Não. A proposta é mostrar que uma estrutura própria não precisa ser o primeiro passo e que existem decisões anteriores que merecem atenção.",
  },
  {
    question: "Preciso ter muito dinheiro para começar?",
    answer:
      "Não existe um valor único que sirva para todo mundo. A aula ajuda você a enxergar prioridades e evitar tratar gastos de fases futuras como necessidades imediatas.",
  },
  {
    question: "Vai ensinar técnica?",
    answer:
      "Não é uma aula de execução de procedimentos. Técnica entra como um dos pilares da carreira, mas o foco é direção, gestão, financeiro, posicionamento e construção profissional.",
  },
  {
    question: "A aula é realmente ao vivo?",
    answer:
      "Sim. O HOF do Zero foi desenhado como um encontro ao vivo, com espaço reservado para perguntas ao final.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </svg>
  );
}

function CtaLink({ children, className = "" }) {
  const onClick = (event) => {
    if (!checkoutUrl) {
      event.preventDefault();
      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={`cta ${className}`}
      href={checkoutUrl || "#inscricao"}
      onClick={onClick}
      aria-label={`${children}. Ir para os detalhes da inscrição`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function Reveal({ as: Tag = "div", className = "", children }) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="HOF do Zero, voltar ao início">
      <span className="brand-mark">HOF</span>
      <span className="brand-copy">do zero</span>
    </a>
  );
}

function SalesPage({ hero }) {
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const statusRef = useRef(null);

  const showCheckoutStatus = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
      return;
    }
    setCheckoutMessage("O link de inscrição será liberado em breve.");
    window.setTimeout(() => statusRef.current?.focus(), 0);
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header" id="inicio">
        <div className="container header-inner">
          <Brand />
          <a className="header-link" href="#inscricao">
            Garantir meu lugar
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-item">{hero.eyebrow}</p>
              <h1 className="hero-item" id="hero-title">
                {hero.title}
              </h1>
              <p className="hero-support hero-item">{hero.support}</p>
              <div className="hero-action hero-item">
                <CtaLink>{hero.cta}</CtaLink>
                <p>Encontro único / conteúdo educacional</p>
              </div>
            </div>

            <div className="hero-portrait hero-item">
              <div className="portrait-rule" aria-hidden="true" />
              <img
                src="/images/isabella-hero.webp"
                alt="Dra. Isabella Crusciol em retrato profissional"
                width="1122"
                height="1402"
                fetchPriority="high"
              />
              <div className="live-card">
                <span className="live-dot" aria-hidden="true" />
                <span>
                  Aula ao vivo
                  <small>3 a 4 horas</small>
                </span>
              </div>
            </div>
          </div>

          <div className="container proof-strip" aria-label="Informações principais">
            <div>
              <span>Formato</span>
              <strong>Workshop ao vivo</strong>
            </div>
            <div>
              <span>Duração</span>
              <strong>3 a 4 horas</strong>
            </div>
            <div>
              <span>Experiência</span>
              <strong>Perguntas ao final</strong>
            </div>
            <div>
              <span>Investimento</span>
              <strong>R$ 29,90</strong>
            </div>
          </div>
        </section>

        <section className="section opening">
          <div className="container split-heading">
            <Reveal>
              <p className="eyebrow">O início que ninguém organiza</p>
              <h2>Você se formou. E agora?</h2>
            </Reveal>
            <Reveal className="opening-copy">
              <p className="lead">
                A faculdade te ensinou uma profissão. Os cursos técnicos te ensinam procedimentos. Mas entre aprender a executar e construir uma carreira existe uma parte que quase ninguém organiza para você.
              </p>
              <ul className="editorial-list">
                <li>O que realmente precisa vir primeiro quando o dinheiro é curto.</li>
                <li>Quanto faz sentido investir antes de ter pacientes recorrentes.</li>
                <li>Como pensar preço sem confundir faturamento com lucro.</li>
                <li>Como posicionamento, atendimento, vendas e gestão entram nessa construção.</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container dark-grid">
            <Reveal className="dark-copy">
              <p className="eyebrow eyebrow-light">O problema não é falta de vontade</p>
              <h2>Técnica é essencial. Só não é a empresa inteira.</h2>
              <p>
                Botox, preenchimento e raciocínio clínico fazem parte da carreira. Uma atuação profissional também depende de preço, custos, posicionamento, experiência do paciente, vendas, organização, recorrência e decisões de investimento.
              </p>
              <p>
                Quando tudo parece prioridade, é fácil gastar cedo demais, fazer mais um curso sem saber como aplicar e continuar com a sensação de que ainda falta alguma coisa.
              </p>
            </Reveal>

            <Reveal className="system-visual" role="img" aria-label="Elementos que sustentam uma carreira na HOF">
              <div className="system-center">
                <CompassIcon />
                <strong>Carreira HOF</strong>
              </div>
              <span className="orbit orbit-one">Técnica</span>
              <span className="orbit orbit-two">Gestão</span>
              <span className="orbit orbit-three">Financeiro</span>
              <span className="orbit orbit-four">Posicionamento</span>
              <span className="orbit orbit-five">Pacientes</span>
              <span className="orbit orbit-six">Recorrência</span>
            </Reveal>
          </div>
        </section>

        <section className="section map-section">
          <div className="container">
            <Reveal className="section-heading centered-heading">
              <p className="eyebrow">O Mapa de Construção HOF</p>
              <h2>Troque decisões no escuro por uma sequência que faça sentido.</h2>
              <p>
                No HOF do Zero, você organiza seu início em três movimentos simples e conectados à sua realidade.
              </p>
            </Reveal>

            <Reveal className="map-grid">
              <div className="map-line" aria-hidden="true" />
              <article className="map-card">
                <span>01</span>
                <h3>Diagnóstico</h3>
                <p>Entenda onde você está hoje, o que já tem e qual é o gargalo real do seu começo.</p>
              </article>
              <article className="map-card featured">
                <span>02</span>
                <h3>Ordem</h3>
                <p>Separe o que precisa ser feito agora do que pode esperar, sem tratar tudo como prioridade.</p>
              </article>
              <article className="map-card">
                <span>03</span>
                <h3>Plano</h3>
                <p>Transforme essa leitura em próximos passos para técnica, financeiro, gestão, posicionamento e aquisição.</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section curriculum-section">
          <div className="container curriculum-grid">
            <Reveal className="curriculum-intro">
              <p className="eyebrow">O que você vai aprender ao vivo</p>
              <h2>Uma visão completa para organizar o começo.</h2>
              <p>
                Não é uma lista infinita de tarefas. É uma leitura clara dos pilares que pedem atenção agora e daqueles que ainda podem esperar.
              </p>
              <CtaLink>Quero participar do workshop</CtaLink>
            </Reveal>

            <div className="curriculum-list">
              {learningTopics.map((topic, index) => (
                <Reveal as="article" className="topic" key={topic.number}>
                  <span>{topic.number}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section materials-section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Para transformar clareza em decisão</p>
              <h2>Você acompanha a aula com materiais que ajudam a colocar o cenário no papel.</h2>
            </Reveal>
            <div className="materials-grid">
              {[
                ["01", "Calculadora da Hora Clínica", "Para começar a enxergar custo e tempo com mais lógica."],
                ["02", "Diagnóstico HOF do Zero", "Checklist e plano de ação para identificar prioridades."],
                ["03", "Material de apoio", "Para acompanhar o encontro e organizar suas decisões."],
              ].map(([number, title, text]) => (
                <Reveal as="article" className="material-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section audience-section">
          <div className="container audience-grid">
            <Reveal className="audience-card audience-yes">
              <p className="eyebrow">Para quem é</p>
              <h2>Para quem quer começar com mais consciência.</h2>
              <ul className="check-list">
                {[
                  "Estudantes em fase final de formação que já pensam em seguir para a HOF.",
                  "Profissionais recém-formados que ainda não sabem o que priorizar.",
                  "Quem já fez cursos técnicos e continua sem clareza sobre carreira e gestão.",
                  "Quem tem poucos recursos e quer decidir melhor antes de montar uma estrutura maior.",
                  "Quem já começou a atender, mas sente que falta organização.",
                ].map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="audience-card audience-no">
              <p className="eyebrow">Para quem não é</p>
              <h2>Sem atalhos ou promessas que não se sustentam.</h2>
              <ul>
                <li>Para quem procura uma aula de execução de procedimentos.</li>
                <li>Para quem espera agenda cheia ou faturamento garantido.</li>
                <li>Para quem acredita que basta acumular técnicas sem olhar para o negócio.</li>
                <li>Para quem pretende atuar fora das regras da sua habilitação profissional.</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section authority-section">
          <div className="container authority-grid">
            <Reveal className="authority-photo">
              <img
                src="/images/isabella-authority.webp"
                alt="Dra. Isabella Crusciol em ambiente profissional"
                width="1003"
                height="1568"
                loading="lazy"
              />
              <div className="authority-stats">
                <div>
                  <strong>3 anos</strong>
                  <span>de atuação em HOF</span>
                </div>
                <div>
                  <strong>9 anos</strong>
                  <span>na área odontológica</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="authority-copy">
              <p className="eyebrow">Dra. Isabella Crusciol</p>
              <h2>Eu não comecei com uma clínica pronta.</h2>
              <p className="lead">
                No início, trabalhei em lugares diferentes e alugava uma sala por hora para atender meus próprios pacientes de harmonização.
              </p>
              <p>
                Abri meu consultório praticamente do zero e aprendi, na prática, que saber executar um procedimento não significa saber administrar uma empresa. Cometi erros de gestão, errei em decisões financeiras e precisei enxergar números, processos e posicionamento com a mesma seriedade da técnica.
              </p>
              <p>
                Hoje, a HOF faz parte da minha clínica. O HOF do Zero existe para entregar a quem está começando o tipo de direção que eu gostaria de ter recebido no meu início, sem romantizar e sem vender milagre.
              </p>
              <div className="signature">Isabella Crusciol</div>
            </Reveal>
          </div>
        </section>

        <section className="clinical-story">
          <div className="container clinical-grid">
            <Reveal className="clinical-image">
              <img
                src="/images/isabella-clinica.webp"
                alt="Dra. Isabella Crusciol acompanhando um atendimento clínico"
                width="1333"
                height="2000"
                loading="lazy"
              />
            </Reveal>
            <Reveal className="clinical-copy">
              <span className="chapter-number">01</span>
              <p className="eyebrow">Técnica com contexto</p>
              <h2>O procedimento é uma parte. A construção profissional é o sistema inteiro.</h2>
              <p>
                O workshop ajuda você a olhar para técnica, financeiro, posicionamento, atendimento e aquisição como decisões conectadas, sem fingir que uma única aula substitui a prática ou a experiência clínica.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section offer-section" id="inscricao">
          <div className="container offer-shell">
            <Reveal className="offer-copy">
              <p className="eyebrow eyebrow-light">Sua participação inclui</p>
              <h2>HOF do Zero</h2>
              <p>
                Um encontro ao vivo para enxergar seu cenário, colocar prioridades em ordem e sair com um plano mais claro para os próximos passos.
              </p>
              <ul className="offer-list">
                {[
                  "Workshop ao vivo com 3 a 4 horas de duração",
                  "Calculadora da Hora Clínica",
                  "Diagnóstico com checklist e plano de ação",
                  "Material de apoio da aula",
                  "Momento reservado para perguntas ao final",
                ].map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="price-card">
              <p>Investimento único</p>
              <div className="price">
                <span>R$</span>
                <strong>29,90</strong>
              </div>
              <p className="price-note">Workshop ao vivo / encontro único</p>
              <button className="cta cta-full" type="button" onClick={showCheckoutStatus}>
                <span>Quero começar na HOF</span>
                <ArrowIcon />
              </button>
              <p
                className={`checkout-status ${checkoutMessage ? "is-visible" : ""}`}
                ref={statusRef}
                role="status"
                tabIndex="-1"
              >
                {checkoutMessage}
              </p>
              <small>Conteúdo educacional para profissionais habilitados ou em formação.</small>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <Reveal className="faq-heading">
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Antes de decidir, tire suas dúvidas.</h2>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq) => (
                <Reveal as="details" className="faq-item" key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section closing-section">
          <div className="container closing-content">
            <Reveal>
              <p className="eyebrow">Se o que falta hoje é direção</p>
              <h2>Comece pelo mapa.</h2>
              <p>
                Você não precisa ter uma clínica pronta. Precisa enxergar seu cenário e escolher a próxima decisão com mais critério.
              </p>
              <CtaLink>Quero participar por R$ 29,90</CtaLink>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <Brand />
          <p>Workshop educacional com a Dra. Isabella Crusciol.</p>
          <a
            href="https://www.instagram.com/draisabellacrusciol/"
            target="_blank"
            rel="noreferrer"
          >
            @draisabellacrusciol
          </a>
        </div>
      </footer>
    </>
  );
}

function ThankYouPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-grain" aria-hidden="true" />
      <div className="container thanks-header">
        <Brand />
      </div>
      <section className="thanks-content">
        <div className="thanks-orbit" aria-hidden="true">
          <span>01</span>
        </div>
        <p className="eyebrow">HOF do Zero</p>
        <h1>Seu próximo passo começa com clareza.</h1>
        <p className="thanks-lead">
          Se você chegou até aqui depois da compra, sua inscrição foi registrada pelo checkout.
        </p>
        <div className="next-steps">
          <div>
            <span>01</span>
            <p>Confira a tela de confirmação e o e-mail usado na compra.</p>
          </div>
          <div>
            <span>02</span>
            <p>Aguarde as orientações oficiais sobre acesso e participação na aula.</p>
          </div>
          <div>
            <span>03</span>
            <p>Guarde o comprovante da inscrição até receber todas as instruções.</p>
          </div>
        </div>
        <a className="text-link" href="/a1">
          Voltar para o HOF do Zero <ArrowIcon />
        </a>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <Brand />
      <h1>Página não encontrada.</h1>
      <a className="cta" href="/a1">
        <span>Conhecer o HOF do Zero</span>
        <ArrowIcon />
      </a>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/a1";

  useEffect(() => {
    document.documentElement.classList.add("can-animate");
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    if (path === "/obrigado") {
      document.title = "Obrigado | HOF do Zero";
    } else {
      document.title = "HOF do Zero | Dra. Isabella Crusciol";
    }
  }, [path]);

  if (path === "/obrigado") {
    return <ThankYouPage />;
  }

  if (heroVariants[path]) {
    return <SalesPage hero={heroVariants[path]} />;
  }

  return <NotFound />;
}
