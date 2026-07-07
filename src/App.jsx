import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Tributario = lazy(() => import('./pages/Tributario'));
const Previdenciario = lazy(() => import('./pages/Previdenciario'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Contato = lazy(() => import('./pages/Contato'));

function SEOWrapper({ title, description, children }) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `https://biffebarzaguiexemplo.com.br${location.pathname}`;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = `https://biffebarzaguiexemplo.com.br${location.pathname}`;
  }, [title, description, location]);
  
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-black-deep)', color: 'var(--color-gold-main)', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.04em'}}>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <SEOWrapper 
                title="Biffe & Barzagui | Advocacia Tributária e Previdenciária" 
                description="Advocacia e consultoria jurídica em Direito Tributário e Previdenciário, com orientação técnica para decisões relevantes.">
                <Home />
              </SEOWrapper>
            } />
            <Route path="tributario" element={
              <SEOWrapper 
                title="Direito Tributário | Biffe & Barzagui Advocacia" 
                description="Atuação jurídica tributária para empresas, produtores rurais e profissionais que precisam analisar riscos fiscais, passivos, planejamento e obrigações.">
                <Tributario />
              </SEOWrapper>
            } />
            <Route path="previdenciario" element={
              <SEOWrapper 
                title="Direito Previdenciário | Biffe & Barzagui Advocacia" 
                description="Análise previdenciária para aposentadorias, benefícios, revisões e situações junto ao INSS, com orientação clara e responsável.">
                <Previdenciario />
              </SEOWrapper>
            } />
            <Route path="sobre" element={
              <SEOWrapper 
                title="O Escritório | Biffe & Barzagui Advocacia e Consultoria" 
                description="Conheça a forma de atuação do Biffe & Barzagui em questões Tributárias e Previdenciárias, com foco em análise, método e clareza.">
                <Sobre />
              </SEOWrapper>
            } />
            <Route path="contato" element={
              <SEOWrapper 
                title="Contato | Biffe & Barzagui Advocacia" 
                description="Entre em contato com o Biffe & Barzagui para apresentar sua situação e entender os próximos passos possíveis.">
                <Contato />
              </SEOWrapper>
            } />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
