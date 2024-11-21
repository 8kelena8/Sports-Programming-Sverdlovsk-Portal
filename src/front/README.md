Front-End построен на метафреймворке NextJS (React JS).

## Запуск

### Для разработки

```bash
npm run dev
```

### Для запуска в docker контейнере

```bash
docker build --tag 'fsp-front' .
docker run -p 3000:3000 --detach 'fsp-front'
```

### Для добавления в docker compose

```docker-compose
web:
  build: ./front/Dockerfile
  restart: always
  ports:
   - 3000:3000
```
