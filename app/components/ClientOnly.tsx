'use client';
import React, { useEffect, useState } from 'react';

interface ClinetOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClinetOnlyProps> = ({ children }) => {
  const [hasMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!hasMount) {
    return null;
  }
  return <div>{children}</div>;
};

export default ClientOnly;
