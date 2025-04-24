'use client';

import React from 'react';
import { createRoot } from 'react-dom/client';
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

class PopUpSearcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const container = document.createElement('div');
    const root = createRoot(container); // Crear el root
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
  
}

// Definir el nuevo elemento
customElements.define('pop-up-searcher', PopUpSearcher);