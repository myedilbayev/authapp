"use client";

import { useSession } from 'next-auth/react';
import './globals.css';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="container">
      <h1>Добро пожаловать в наше приложение!</h1>
    </main>
  );
}

