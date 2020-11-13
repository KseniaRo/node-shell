process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(getPwd);
    process.stdout.write("\nprompt > ");
  }  else if (cmd === "ls") {
    process.stdout.write(fs)
  }
 else {
    //   const cmd = data.toString().trim();
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

const getPwd = require("./pwd");
const fs = require("./ls")

