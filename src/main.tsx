import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App.tsx'

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  p {
    margin: 0;
  }
`;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyling />
    <App />
  </StrictMode>,
)
