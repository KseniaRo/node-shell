// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();
//   if (cmd === "pwd") {
//     process.stdout.write(process.cwd());
//     process.stdout.write("\nprompt > ");
//   }
//   //   const cmd = data.toString().trim();
//   process.stdout.write("you typed: " + cmd);
//   process.stdout.write("\nprompt > ");
// });

module.exports = process.cwd();

// process.stdout.write("prompt > ");
