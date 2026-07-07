import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileSearch, Shield, Users } from 'lucide-react';
import { useReveal } from '../utils/useReveal';
import heroHome from '../assets/hero_home.png';
import taxDocs from '../assets/tax-docs.png';
import prevImg from '../assets/aposentadoria.png';
import logoImg from '../assets/logo.jpg';
import '../styles/components.css';

export default function Home() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* HERO SECTION - REDUZIDO E ESCURECIDO */}
      <section className="hero" style={{ 
        backgroundImage: `url(${heroHome})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,7,7,0.98) 0%, rgba(7,7,7,0.85) 50%, rgba(7,7,7,0.4) 100%)', zIndex: 0 }}></div>
        <div className="container hero__container" style={{ position: 'relative', zIndex: 1, padding: '64px 22px' }}>
          <div className="hero__content" style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src={logoImg} alt="B&B Advocacia" style={{ height: '48px' }} />
              <span style={{ color: 'var(--color-gold-main)', fontFamily: 'var(--font-title)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Advocacia e Consultoria</span>
            </div>
            <h1 className="hero__headline" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.1' }}>
              Decisões seguras para o seu negócio e aposentadoria.
            </h1>
            <p className="hero__subheadline" style={{ fontSize: '18px', color: 'var(--color-gray-text)', marginBottom: '40px' }}>
              Não espere perder dinheiro ou direitos para buscar um advogado. Atuação técnica, direta e sem juridiquês.
            </p>
            <div className="hero__actions">
              <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>Falar com Advogado</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS COM IMAGENS REAIS */}
      <section className="section section--light" id="areas">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Áreas de atuação</span>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Nossas áreas de especialização.</h2>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            
            <Link to="/tributario" className="card-lift" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-off-white)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', textDecoration: 'none' }}>
              <img src={taxDocs} alt="Direito Tributário" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: 'var(--color-gold-dark)', fontSize: '13px', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: 'bold' }}>Para empresas e produtores</span>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', color: 'var(--color-text-light-bg)', marginBottom: '16px', lineHeight: '1.15' }}>Direito Tributário</h3>
                <p style={{ color: 'var(--color-text-light-bg-sec)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', flex: 1 }}>
                  Cobranças indevidas, impostos pagos a mais, execução fiscal e enquadramento errado. Estancamos o prejuízo e organizamos o passivo.
                </p>
                <span style={{ color: 'var(--color-gold-dark)', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                  Sofre com isso? Nós resolvemos. <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link to="/previdenciario" className="card-lift" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-off-white)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', textDecoration: 'none' }}>
              <img src={prevImg} alt="Direito Previdenciário" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: 'var(--color-gold-dark)', fontSize: '13px', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: 'bold' }}>Para aposentados e segurados</span>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', color: 'var(--color-text-light-bg)', marginBottom: '16px', lineHeight: '1.15' }}>Direito Previdenciário</h3>
                <p style={{ color: 'var(--color-text-light-bg-sec)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', flex: 1 }}>
                  Benefício negado, cálculo errado, pensão por morte e trabalho rural. Analisamos seu caso antes de pedir para garantir o benefício certo.
                </p>
                <span style={{ color: 'var(--color-gold-dark)', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                  Sofre com isso? Nós resolvemos. <ArrowRight size={16} />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* VALORES DIRETOS - SEM FIRULA */}
      <section className="section section--accent">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Por que nos escolher?</h2>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: FileSearch, title: 'Análise antes da ação', text: 'Não protocolamos pedidos no escuro. Seu caso é estudado a fundo antes de qualquer recomendação.' },
              { icon: Shield, title: 'Expectativa real', text: 'Sem falsas promessas. Mostramos os riscos, os custos e as chances reais do seu caso.' },
              { icon: Users, title: 'Comunicação direta', text: 'Sem juridiquês. Você vai entender exatamente o que está acontecendo com o seu processo.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(26, 26, 26, 0.6)', backdropFilter: 'blur(4px)', border: '1px solid var(--color-graphite-light)', padding: '36px', borderRadius: 'var(--radius-sm)' }}>
                <item.icon size={32} style={{ color: 'var(--color-gold-main)', marginBottom: '20px' }} />
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '22px', color: 'var(--color-off-white)', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-gray-text)', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A EQUIPE */}
      <section className="section team">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">O escritório</span>
            <h2 className="section-title">Profissionais dedicados ao seu caso.</h2>
          </div>
          
          <div className="reveal-stagger team__cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="team__card card-lift" style={{ backgroundColor: 'var(--color-graphite)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
               <div className="img-placeholder" style={{ height: '300px' }}></div>
               <div style={{ padding: '24px' }}>
                 <h3 style={{ fontSize: '20px', color: 'var(--color-off-white)', fontFamily: 'var(--font-title)', marginBottom: '4px' }}>Nome do Sócio</h3>
                 <span style={{ color: 'var(--color-gold-main)', fontSize: '13px', display: 'block' }}>Advogado Tributarista</span>
               </div>
            </div>
            <div className="team__card card-lift" style={{ backgroundColor: 'var(--color-graphite)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
               <div className="img-placeholder" style={{ height: '300px' }}></div>
               <div style={{ padding: '24px' }}>
                 <h3 style={{ fontSize: '20px', color: 'var(--color-off-white)', fontFamily: 'var(--font-title)', marginBottom: '4px' }}>Nome do Sócio</h3>
                 <span style={{ color: 'var(--color-gold-main)', fontSize: '13px', display: 'block' }}>Advogado Previdenciário</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL CLARO */}
      <section className="cta-final" style={{ background: `linear-gradient(165deg, #0a0a0a 0%, #12100d 50%, #0a0a0a 100%)` }}>
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Não tome decisões importantes baseado em dúvidas.</h2>
          <p className="section-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
            Apresente o seu caso para a nossa equipe e receba uma orientação inicial sem compromisso.
          </p>
          <Link to="/contato" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>Falar com Advogado</Link>
        </div>
      </section>
    </div>
  );
}
