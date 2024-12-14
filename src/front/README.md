Front-End построен на метафреймворке NextJS (React JS).
Front-End build on top of NextJS metaphramework (React JS).

## Запуск (Start)

### Для разработки (For development)

```bash
npm run dev
```

### Для запуска в docker контейнере (For start in docker container)

Заполните файл env-example и переименуйте его в .env.local
Fill env-example file and rename it to .env.local

```bash
docker build --tag 'fsp-front' .
docker run -p 3000:3000 --detach 'fsp-front'
```

### Для добавления в docker compose (For start in docker-compose)

```docker-compose
web:
  build: ./front/Dockerfile
  restart: always
  ports:
   - 3000:3000
```
