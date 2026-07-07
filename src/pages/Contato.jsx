import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import { useReveal } from '../utils/useReveal';
import heroTexture from '../assets/hero-texture.png';
import '../styles/components.css';
import './Contato.css';

export default function Contato() {
  const pageRef = useReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const areaElement = document.getElementById('area');
    const area = areaElement.options[areaElement.selectedIndex].text;
    const mensagem = document.getElementById('mensagem').value;
    
    const texto = `Olá! Meu nome é *${nome}*.\nTenho interesse na área de *${area}*.\n\n*Resumo da situação:*\n${mensagem}`;
    
    // Substitua pelo número real do WhatsApp do escritório (apenas números, com DDI e DDD)
    const numeroWhatsApp = "5511999999999"; 
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div ref={pageRef}>
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height-mobile) + 24px)' }}>
         <div style={{ padding: '24px 0', fontSize: '13px', color: 'var(--color-gray-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{transition: 'color var(--transition-fast)'}} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold-main)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-gray-text)'}>Início</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-off-white)' }}>Contato</span>
         </div>
      </div>

      <section className="hero" style={{ paddingTop: '24px', paddingBottom: '24px', backgroundImage: `url(${heroTexture})`, backgroundSize: 'cover' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,7,7,0.92)', zIndex: 0 }}></div>
        <div className="container hero__container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero__content">
            <div className="gold-line"></div>
            <span className="hero__eyebrow">Contato</span>
            <h1 className="hero__headline">Fale com o escritório.</h1>
            <p className="hero__subheadline">
              Descreva sua situação brevemente. Nossa equipe lê, avalia e retorna para indicar os próximos passos. Sem compromisso.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contato__grid">
          
          <div className="contato__form-wrapper reveal">
            {isSubmitted ? (
              <div style={{ padding: '48px 32px', textAlign: 'center', backgroundColor: 'var(--color-graphite)', border: '1px solid var(--color-gold-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <CheckCircle size={48} style={{ color: 'var(--color-gold-main)', margin: '0 auto 24px' }} />
                <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-off-white)', marginBottom: '16px' }}>Mensagem enviada!</h3>
                <p style={{ color: 'var(--color-gray-text)', lineHeight: '1.6', marginBottom: '32px' }}>
                  Recebemos as suas informações. Nossa equipe fará uma análise inicial e entrará em contato em breve via WhatsApp ou e-mail.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-secondary">Enviar outra mensagem</button>
              </div>
            ) : (
              <form className="contato__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">WhatsApp</label>
                  <input type="tel" id="telefone" placeholder="(00) 00000-0000" required maxLength="15" onChange={(e) => {
                    let v = e.target.value.replace(/\D/g, "");
                    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
                    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
                    e.target.value = v;
                  }} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Área de interesse</label>
                  <select id="area" defaultValue="" required>
                    <option value="" disabled>Selecione...</option>
                    <option value="tributario">Tributário (Impostos, Fiscal, Empresas)</option>
                    <option value="previdenciario">Previdenciário (INSS, Aposentadoria)</option>
                    <option value="nao-sei">Não tenho certeza</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">O que aconteceu?</label>
                  <textarea id="mensagem" rows="5" placeholder="Descreva o seu caso de forma simples." required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>Enviar mensagem</button>
                <p style={{ fontSize: '12px', color: 'var(--color-gray-text)', marginTop: '16px', textAlign: 'center', lineHeight: '1.5' }}>
                  Suas informações são confidenciais.
                </p>
              </form>
            )}
          </div>

          <div className="contato__info-wrapper reveal">
            <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '32px' }}>Canais diretos</h2>
            <div className="contato__info-list">
              <div className="contato__info-item">
                <Phone size={24} className="contato__info-icon" />
                <div>
                  <strong>WhatsApp / Telefone</strong>
                  <span>+55 (00) 00000-0000</span>
                </div>
              </div>
              <div className="contato__info-item">
                <Mail size={24} className="contato__info-icon" />
                <div>
                  <strong>E-mail</strong>
                  <span>contato@biffebarzaguiexemplo.com.br</span>
                </div>
              </div>
              <div className="contato__info-item">
                <MapPin size={24} className="contato__info-icon" />
                <div>
                  <strong>Endereço</strong>
                  <span>Rua Exemplo, 123 - Cidade, Estado</span>
                </div>
              </div>
            </div>

            <a href="#" className="btn-secondary" style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}>
               Falar direto no WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO OPCIONAL NO FINAL */}
      <section className="section section--light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Próximos passos</h2>
            <p style={{ color: 'var(--color-text-light-bg-sec)', maxWidth: '600px', margin: '0 auto 48px' }}>Entenda como conduzimos o atendimento após o seu primeiro contato.</p>
          </div>
          
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { num: '1', title: 'Triagem', text: 'Analisamos se o seu caso está dentro das nossas especialidades.' },
              { num: '2', title: 'Contato', text: 'Retornamos para entender melhor e pedir documentos.' },
              { num: '3', title: 'Orientação', text: 'Apresentamos um parecer inicial e os caminhos possíveis.' },
              { num: '4', title: 'Ação', text: 'Iniciamos o trabalho jurídico oficial caso faça sentido para você.' }
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <span style={{ color: 'var(--color-gold-dark)', fontFamily: 'var(--font-title)', fontSize: '32px', lineHeight: '1', display: 'block', marginBottom: '12px' }}>{step.num}</span>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-title)', color: 'var(--color-text-light-bg)' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-light-bg-sec)', marginTop: '8px' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
