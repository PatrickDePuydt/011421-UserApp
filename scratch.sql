--// Models are always singular
--// Models are blueprints for users

-- Column Data Type
-- name:string
sequelize model:create --name user --attributes name:string,age:integer,email:string

sequelize db:migrate

sequelize db:migrate:undo

SELECT * FROM users;