'use client';
import { on } from 'events';
import React, { useCallback, useEffect, useState } from 'react';
interface ModalComponentProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionable?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  onSubmit,
  footer,
  body,
  actionable,
  disabled,
  title,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleModalClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onClose, disabled]);

  //   secondaryAction
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='flex justify-center inset-0 overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none bg-neutral-800/70'></div>
    </>
  );
};

export default Modal;
