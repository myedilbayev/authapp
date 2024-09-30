"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <main>
      <h1>Профиль</h1>
      <p>Имя: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} alt="Аватар" />
    </main>
  );
}
