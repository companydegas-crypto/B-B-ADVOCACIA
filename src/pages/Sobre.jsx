import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useReveal } from '../utils/useReveal';
import officeDesk from '../assets/office-desk.png';
import abstractLines from '../assets/abstract-lines.png';
import '../styles/components.css';

export default function Sobre() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height-mobile) + 24px)' }}>
         <div style={{ padding: '24px 0', fontSize: '13px', color: 'var(--color-gray-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{transition: 'color var(--transition-fast)'}} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold-main)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-gray-text)'}>Início</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-off-white)' }}>Sobre</span>
         </div>
      </div>

      <section className="hero" style={{ paddingTop: '24px' }}>
        <div className="container hero__container">
          <div className="hero__content">
            <div className="gold-line"></div>
            <span className="hero__eyebrow">O escritório</span>
            <h1 className="hero__headline">Um escritório que existe para você decidir com informação, não com pressa.</h1>
            <p className="hero__subheadline">
              Direito Tributário e Previdenciário. Duas áreas onde a diferença entre uma boa e uma má decisão pode custar anos ou patrimônio.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="gold-line" style={{ backgroundColor: 'var(--color-gold-dark)' }}></div>
              <h2 className="section-title">Por que esse escritório existe.</h2>
              <p className="section-text">
                Porque a maioria das pessoas toma decisões tributárias e previdenciárias sem entender o que está em jogo. Pagam o que não deviam. Pedem o que não deviam pedir. Aceitam o que não precisavam aceitar.
              </p>
              <p className="section-text">
                O Biffe & Barzagui nasceu para mudar isso: dar clareza antes da ação. Analisar antes de recomendar. Explicar antes de cobrar decisão.
              </p>
            </div>
            <div className="reveal" style={{ position: 'relative' }}>
              <img src={officeDesk} alt="Ambiente de trabalho do escritório" style={{ width: '100%', borderRadius: 'var(--radius-sm)', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', width: '120px', height: '120px', border: '2px solid var(--color-gold-dark)', borderRadius: 'var(--radius-sm)', zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section--accent">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">O que você pode esperar de nós.</h2>
            <p className="section-text" style={{ marginBottom: '48px' }}>
              Não vamos te dizer o que você quer ouvir. Vamos te dizer o que você precisa saber.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
            {[
              { num: '1', title: 'Clareza', text: 'Você vai entender o que está acontecendo com o seu caso. Sem juridiquês, sem enrolação.' },
              { num: '2', title: 'Técnica', text: 'Toda orientação parte de estudo. Não damos opinião — damos análise fundamentada.' },
              { num: '3', title: 'Responsabilidade', text: 'Não criamos expectativa que não tem base. Se não dá, a gente fala.' },
              { num: '4', title: 'Discrição', text: 'Seus assuntos jurídicos ficam entre você e o escritório. Sempre.' },
              { num: '5', title: 'Método', text: 'Cada etapa tem lógica. Não trabalhamos no improviso.' }
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-gold-main)', fontFamily: 'var(--font-title)', fontSize: '28px', fontWeight: 'bold', lineHeight: '1', flexShrink: 0 }}>{p.num}.</span>
                <div>
                  <h3 style={{ color: 'var(--color-off-white)', fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-gray-text)', fontSize: '15px', lineHeight: '1.6' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.06, backgroundImage: `url(${abstractLines})`, backgroundSize: 'cover' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal">
            <h2 className="section-title">Quem cuida do seu caso</h2>
          </div>
          <div className="reveal-stagger team__cards" style={{ marginTop: '48px' }}>
            
            <div className="team__card card-lift">
               <div className="team__placeholder-img img-placeholder" style={{ marginBottom: '24px' }}></div>
               <h3 style={{ fontSize: '24px', color: 'var(--color-off-white)', fontFamily: 'var(--font-title)' }}>Nome do sócio</h3>
               <span style={{ color: 'var(--color-gold-main)', fontSize: '13px', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '16px' }}>OAB/UF 000.000</span>
               <div style={{ borderTop: '1px solid var(--color-graphite-light)', paddingTop: '16px' }}>
                 <strong style={{ display: 'block', color: 'var(--color-off-white)', fontSize: '14px', marginBottom: '8px' }}>Atuação:</strong>
                 <span style={{ display: 'block', color: 'var(--color-gray-text)', fontSize: '14px', marginBottom: '16px' }}>Direito Tributário / Direito Previdenciário</span>
                 <p style={{ color: 'var(--color-gray-text)', fontSize: '14px', lineHeight: '1.6' }}>Breve descrição profissional, com foco em atuação, formação e forma de condução dos casos.</p>
               </div>
            </div>

            <div className="team__card card-lift">
               <div className="team__placeholder-img img-placeholder" style={{ marginBottom: '24px' }}></div>
               <h3 style={{ fontSize: '24px', color: 'var(--color-off-white)', fontFamily: 'var(--font-title)' }}>Nome do sócio</h3>
               <span style={{ color: 'var(--color-gold-main)', fontSize: '13px', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '16px' }}>OAB/UF 000.000</span>
               <div style={{ borderTop: '1px solid var(--color-graphite-light)', paddingTop: '16px' }}>
                 <strong style={{ display: 'block', color: 'var(--color-off-white)', fontSize: '14px', marginBottom: '8px' }}>Atuação:</strong>
                 <span style={{ display: 'block', color: 'var(--color-gray-text)', fontSize: '14px', marginBottom: '16px' }}>Direito Tributário / Direito Previdenciário</span>
                 <p style={{ color: 'var(--color-gray-text)', fontSize: '14px', lineHeight: '1.6' }}>Breve descrição profissional, com foco em atuação, formação e forma de condução dos casos.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-final" style={{ background: 'linear-gradient(165deg, #0a0a0a 0%, #12100d 50%, #0a0a0a 100%)' }}>
        <div className="container reveal">
          <div className="gold-line" style={{ margin: '0 auto var(--space-24)' }}></div>
          <h2 className="section-title">Se você tem uma questão tributária ou previdenciária, a conversa começa aqui.</h2>
          <p className="section-text">
            Sem compromisso. Apresente a situação e o escritório avalia se pode ajudar.
          </p>
          <Link to="/contato" className="btn-primary">Falar com o escritório</Link>
        </div>
      </section>
    </div>
  );
}
