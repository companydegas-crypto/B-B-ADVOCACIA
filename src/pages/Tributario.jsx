import { Link } from 'react-router-dom';
import { ChevronRight, FileSearch, ShieldCheck, Scale, FileText, ClipboardList, Lightbulb } from 'lucide-react';
import { useReveal } from '../utils/useReveal';
import heroTributario from '../assets/hero_tributario.png';
import taxDocs from '../assets/tax-docs.png';
import abstractLines from '../assets/abstract-lines.png';
import '../styles/components.css';

export default function Tributario() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height-mobile) + 24px)' }}>
         <div style={{ padding: '24px 0', fontSize: '13px', color: 'var(--color-gray-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{transition: 'color var(--transition-fast)'}} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold-main)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-gray-text)'}>Início</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-off-white)' }}>Tributário</span>
         </div>
      </div>

      <section className="hero" style={{ 
        backgroundImage: `url(${heroTributario})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,7,7,0.98) 0%, rgba(7,7,7,0.85) 50%, rgba(7,7,7,0.4) 100%)', zIndex: 0 }}></div>
        <div className="container hero__container" style={{ position: 'relative', zIndex: 1, padding: '48px 22px' }}>
          <div className="hero__content" style={{ maxWidth: '700px' }}>
            <span className="hero__eyebrow" style={{ color: 'var(--color-gold-main)' }}>Direito Tributário Empresarial</span>
            <h1 className="hero__headline" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Sua empresa pode estar perdendo dinheiro para o fisco agora mesmo.</h1>
            <p className="hero__subheadline" style={{ fontSize: '18px' }}>
              Enquadramento errado, cobrança indevida, passivo desorganizado. Atuamos para estancar as perdas fiscais e organizar o seu caixa com inteligência.
            </p>
            <div className="hero__actions">
              <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px' }}>Solicitar análise inicial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SITUAÇÕES COM CTA MAIS DISCRETO */}
      <section className="section" id="situacoes" style={{ paddingTop: '64px', backgroundColor: 'var(--color-black-main)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">O que tira o sono da sua empresa?</h2>
          </div>
          
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Cobrança que você não entende', text: 'Chegou notificação, CDA ou execução fiscal. Pagar sem analisar pode ser jogar dinheiro fora.', icon: FileText },
              { title: 'Imposto pago a mais', text: 'Muitas empresas pagam tributos indevidos por anos. Existe método para calcular e recuperar esses valores.', icon: FileSearch },
              { title: 'Enquadramento tributário', text: 'Se o regime não é o ideal para a sua operação, você está pagando mais do que deveria todo mês.', icon: Lightbulb },
              { title: 'Fiscalização e autuação', text: 'O fisco autuou sua empresa. Antes de pagar ou negociar, é preciso analisar se o auto tem fundamento.', icon: ShieldCheck },
              { title: 'Passivo fiscal acumulado', text: 'Dívidas fiscais viram bloqueio de contas e restrição. Organizar é urgente para destravar o caixa.', icon: ClipboardList },
              { title: 'Reestruturação societária', text: 'Compra de empresa, saída de sócio, venda de imóvel. Toda decisão societária tem forte impacto fiscal.', icon: Scale }
            ].map((card, i) => (
              <div key={i} className="card-lift" style={{ backgroundColor: 'var(--color-graphite)', padding: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-graphite-light)' }}>
                <card.icon size={28} style={{ color: 'var(--color-gold-main)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '12px', fontFamily: 'var(--font-title)', color: 'var(--color-off-white)' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.6' }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link to="/contato" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '15px' }}>Solicitar análise gratuita da minha empresa</Link>
          </div>
        </div>
      </section>

      {/* TEXTO DENSO ENXUTADO E DEIXADO SÓ O ESSENCIAL */}
      <section className="section section--light">
        <div className="container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="gold-line" style={{ backgroundColor: 'var(--color-gold-dark)' }}></div>
              <h2 className="section-title">O risco tributário é silencioso.</h2>
              <p className="section-text" style={{ fontSize: '18px', color: 'var(--color-text-light-bg)' }}>
                A maioria dos empresários não sabe quanto perde por ano por falta de análise fiscal. Um erro no enquadramento ou o pagamento de um tributo indevido sangram o caixa da empresa todos os meses.
              </p>
              <p className="section-text" style={{ fontSize: '16px', color: 'var(--color-text-light-bg-sec)' }}>
                Nós entramos para analisar o cenário antes que o prejuízo se concretize — ou para estancar a sangria de um passivo que já existe, com técnica e visão de negócios.
              </p>
            </div>
            <div className="reveal" style={{ position: 'relative' }}>
              <img src={taxDocs} alt="Documentos fiscais e planejamento tributário" style={{ width: '100%', borderRadius: 'var(--radius-sm)', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '80px', height: '80px', border: '2px solid var(--color-gold-dark)', borderRadius: 'var(--radius-sm)', zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final" style={{ background: 'linear-gradient(165deg, #0a0a0a 0%, #12100d 50%, #0a0a0a 100%)' }}>
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Cada mês sem análise é um mês pagando mais do que deveria.</h2>
          <p className="section-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
            Conte a situação da sua empresa. O escritório avalia se existe algo a ser feito — e mostra por onde começar.
          </p>
          <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px' }}>Solicitar análise inicial gratuita</Link>
        </div>
      </section>
    </div>
  );
}
