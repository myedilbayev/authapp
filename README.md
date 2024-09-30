# Приложение с AUTH авторизацией

## Введение

Это приложение позволяет пользователям авторизоваться с помощью Google и GitHub. 

**Технический стек:**
- Next.js
- NextAuth

## Установка

1. Установите зависимости:

   ```bash
   npm install

2. Добавьте файл в корневой директории .env.local и пропишите следующие данные:
    GOOGLE_CLIENT_ID="822419353941-8c4f8ur79hoamt60cte6hom41gs7kbtc.apps.googleusercontent.com"
    GOOGLE_CLIENT_SECRET="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"

    GITHUB_CLIENT_ID="Ov23litUlHcaWzMe24vX"
    GITHUB_CLIENT_SECRET="c39faa3cfac053573bd471a87b10bcb52805c985"

    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="supersecret"

3. Запустите приложение локально используя команду в терминале:
    npm run dev
