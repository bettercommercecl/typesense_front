
import React from 'react';
import { createRoot } from 'react-dom/client';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// Solo definir la clase si estamos en el navegador
let PopUpSearcher;
if (typeof window !== 'undefined') {
  PopUpSearcher = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.loadDependencies().then(() => this.render());
    }

    async loadDependencies() {
      // Cargar React y ReactDOM desde CDN
      await Promise.all([
        this.loadScript('https://unpkg.com/react@18/umd/react.production.min.js'),
        this.loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'),
        this.loadScript('https://unpkg.com/@mui/material@5.15.10/umd/material-ui.production.min.js'),
        this.loadScript('https://unpkg.com/@emotion/react@11.11.3/dist/emotion-react.umd.min.js'),
        this.loadScript('https://unpkg.com/@emotion/styled@11.11.0/dist/emotion-styled.umd.min.js')
      ]);
    }

    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    render() {
      const container = document.createElement('div');
      const root = ReactDOM.createRoot(container);
      
      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      root.render(
        React.createElement(Search, null,
          React.createElement(SearchIconWrapper, null,
            React.createElement(SearchIcon)
          ),
          React.createElement(InputBase, {
            placeholder: "Buscar",
            inputProps: { 'aria-label': 'search' }
          })
        )
      );
      
      this.shadowRoot.appendChild(container);
    }
  };

  // Registrar el componente
  customElements.define('pop-up-searcher', PopUpSearcher);
}

export { PopUpSearcher };