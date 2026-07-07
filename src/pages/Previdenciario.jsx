import { Link } from 'react-router-dom';
import { ChevronRight, FileSearch, AlertCircle, FileClock, ShieldAlert, HeartHandshake, Map } from 'lucide-react';
import { useReveal } from '../utils/useReveal';
import aposentadoriaImg from '../assets/aposentadoria.png';
import '../styles/components.css';

export default function Previdenciario() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height-mobile) + 24px)' }}>
         <div style={{ padding: '24px 0', fontSize: '13px', color: 'var(--color-gray-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{transition: 'color var(--transition-fast)'}} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold-main)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-gray-text)'}>Início</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-off-white)' }}>Previdenciário</span>
         </div>
      </div>

      <section className="hero" style={{ 
        backgroundImage: `url(${aposentadoriaImg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,7,7,0.98) 0%, rgba(7,7,7,0.85) 50%, rgba(7,7,7,0.4) 100%)', zIndex: 0 }}></div>
        <div className="container hero__container" style={{ position: 'relative', zIndex: 1, padding: '48px 22px' }}>
          <div className="hero__content" style={{ maxWidth: '650px' }}>
            <span className="hero__eyebrow" style={{ color: 'var(--color-gold-main)' }}>INSS e Aposentadorias</span>
            <h1 className="hero__headline" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>Entrar no INSS sozinho pode custar a sua aposentadoria.</h1>
            <p className="hero__subheadline" style={{ fontSize: '18px' }}>
              Se você pedir errado, pode perder o direito, demorar anos para receber ou ganhar menos para o resto da vida. Analisamos o seu caso para você não errar.
            </p>
            <div className="hero__actions">
              <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px' }}>Falar com o escritório</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SITUAÇÕES COM NOVO TEXTO DE CTA */}
      <section className="section" id="situacoes" style={{ paddingTop: '64px', backgroundColor: 'var(--color-black-main)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">O que aconteceu com você?</h2>
          </div>
          
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Vou pedir aposentadoria', text: 'Tem medo de pedir e ser negado? A gente faz o cálculo e organiza os papéis para pedir com segurança na melhor regra.', icon: Map },
              { title: 'Tive benefício negado', text: 'O INSS negou seu pedido? A gente avalia o motivo e entra com recurso ou processo para buscar o seu direito.', icon: AlertCircle },
              { title: 'Meu valor veio muito baixo', text: 'Acha que está ganhando menos do que devia? A gente refaz as contas e, se houver erro do INSS, pede a revisão.', icon: FileSearch },
              { title: 'Doente e sem auxílio', text: 'O INSS cortou seu auxílio-doença ou negou a perícia? A gente te ajuda a brigar por esse benefício na justiça.', icon: ShieldAlert },
              { title: 'Preciso da pensão por morte', text: 'Perdeu alguém da família e o INSS está complicando a pensão? A gente cuida da papelada para você.', icon: HeartHandshake },
              { title: 'Trabalhei na roça (Rural)', text: 'Trabalhou na roça e não tem carteira assinada? Tem como provar e usar esse tempo. A gente ajuda a juntar as provas.', icon: FileClock }
            ].map((card, i) => (
              <div key={i} className="card-lift" style={{ backgroundColor: 'var(--color-graphite)', padding: '24px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-graphite-light)' }}>
                <card.icon size={28} style={{ color: 'var(--color-gold-main)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '12px', fontFamily: 'var(--font-title)', color: 'var(--color-off-white)' }}>{card.title}</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-gray-text)', lineHeight: '1.5' }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link to="/contato" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '15px' }}>Gostaria de analisar meu caso gratuitamente</Link>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="gold-line" style={{ backgroundColor: 'var(--color-gold-dark)', margin: '0 auto 24px' }}></div>
            <h2 className="section-title">Anos de trabalho não aparecem na tela do INSS.</h2>
            <p className="section-text" style={{ fontSize: '18px', lineHeight: '1.5', color: 'var(--color-text-light-bg)' }}>
              O INSS faz a conta apenas com o que está no sistema deles. Se faltar alguma coisa, você recebe menos pelo resto da vida. E voltar atrás depois é muito mais difícil.
            </p>
            <p className="section-text" style={{ fontSize: '16px' }}>
              Nosso trabalho é pegar a sua história real, cruzar com as leis e mostrar para o INSS o que é justo. Tudo bem explicado, sem enrolação e com honestidade.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-final" style={{ background: 'linear-gradient(165deg, #0a0a0a 0%, #12100d 50%, #0a0a0a 100%)' }}>
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Não espere passar o tempo para buscar o seu direito.</h2>
          <p className="section-text" style={{ fontSize: '18px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Mande uma mensagem explicando o que aconteceu. Nós vamos te responder se podemos ajudar.
          </p>
          <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px' }}>Solicitar análise gratuita agora</Link>
        </div>
      </section>
    </div>
  );
}
