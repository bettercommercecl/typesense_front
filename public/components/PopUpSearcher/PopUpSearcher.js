'use client';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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

// Solo definir la clase si estamos en el navegador
let PopUpSearcher;
if (typeof window !== 'undefined') {
  PopUpSearcher = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }

    render() {
      const container = document.createElement('div');
      const root = createRoot(container);
      root.render(
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputBase placeholder="Buscar" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      );
      this.shadowRoot.appendChild(container);
    }
  };

  // Registrar el componente
  customElements.define('pop-up-searcher', PopUpSearcher);
}

export { PopUpSearcher };