# ADR 001 - Database tips

## Acessar o banco PostgreSQL

- psql -h localhost -U postgres -d todo_db

## Listar tabelas

\dt

## Listar propriedades da tabela

\d "`nome da tabela`"

\d+ "`nome da tabela`"
- Mostra detalhes extras

## Fazer a migração do schema para o banco

bunx prisma migrate dev --name create-task

- O nome (`--name`) funciona como uma mensagem de commit
- Cria/atualiza tabelas no banco
- Gera histórico em prisma/migrations

## Abrir interface visual do banco (opcional)

bunx prisma studio