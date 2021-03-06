module.exports = (tbl) => {
  tbl.increments("id");
  tbl
    .integer("user_id")
    .references("id")
    .inTable("users")
    .onUpdate("CASCADE")
    .onDelete("CASCADE")
    .notNullable();
  tbl
    .integer("role_id")
    .references("id")
    .inTable("roles")
    .onUpdate("CASCADE")
    .onDelete("CASCADE")
    .notNullable();
};
