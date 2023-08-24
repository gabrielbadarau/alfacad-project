'use client';

import React, { useState, useEffect } from 'react';

interface Client {
  children: React.ReactNode;
}

const Client: React.FC<Client> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default Client;
