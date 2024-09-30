"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <nav>
        <Link href="/">Главная</Link>
        {session ? (
          <>
            <Link href="/profile">Профиль</Link>
            <button onClick={() => signOut()}>Выйти</button>
          </>
        ) : (
          <Link href="/login">Войти</Link>
        )}
      </nav>
    </header>
  );
}
