try {
  if (process.env.PORT_NUMBER === undefined) throw new Error("Enviroment variable 'PORT_NUMBER' not defined.");
  if (process.env.MONGODB_HOST === undefined) throw new Error("Enviroment variable 'MONGODB_HOST' not defined.");
  if (process.env.MONGODB_DATABASE === undefined) throw new Error("Enviroment variable 'MONGODB_DATABASE' not defined.");

} catch (err) {
  throw err;
}