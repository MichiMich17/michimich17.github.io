import { useTonConnectUI } from '@tonconnect/ui-react';
import { useEffect } from 'react';

export default function WalletModal({ isOpen, onClose }) {
  const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    if (isOpen) {
      tonConnectUI.openModal();
    }
  }, [isOpen]);

  return null; // Сам интерфейс отображается через SDK
}