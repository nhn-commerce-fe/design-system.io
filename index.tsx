import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { Header } from './src/layout/header/Header';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

class CommerceHeader {
  _header: HTMLElement | null = null;
  constructor() {}

  init() {
    this._header = document.getElementById('commerce-header');
  }

  create() {
    if (!this._header) return;
    const root = createRoot(this._header as HTMLElement);
    root.render(<Header type="test" />);
  }
}

/** @ts-ignore */
window.CommerceHeader = CommerceHeader;
