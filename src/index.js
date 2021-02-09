import "./scss/index.scss";

async function start() {
  return await Promise.resolve("working2");
}

start().then(console.log);

console.log("start");
