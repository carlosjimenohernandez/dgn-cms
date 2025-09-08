Restomatic.utils.buildSqlCreateTableBySource = function(modelId, columnsSource) {
  const modelIdSanitized = Restomatic.utils.escapeId(modelId);
  let sql = `CREATE TABLE ${modelIdSanitized} (\n`;
  sql += "  `id` INTEGER PRIMARY KEY AUTOINCREMENT";
  if(columnsSource) {
    sql += ",";
    sql += columnsSource;
  }
  sql += `\n);`;
  return sql;
};