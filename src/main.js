const path = require("path");
const fs = require("fs");
const parse = require("./lib/parse");

const CLEAR = true;

// const fileName = 'modone.ws';
// const file = path.resolve('./ws/' + fileName);
if(fs.existsSync("./built")) fs.rmdirSync("./built", { recursive: true, force: true });
if(fs.existsSync("./_wf_sandbox"))fs.rmdirSync("./_wf_sandbox", { recursive: true, force: true });

if (!fs.existsSync("./built")) fs.mkdirSync("./built");
if (!fs.existsSync("./built/lib")) fs.mkdirSync("./built/lib");

fs.writeFileSync("./built/lib/_wf.js", fs.readFileSync("./src/wsm/_wf.js"));
fs.writeFileSync(
  "./built/package.json",
  fs.readFileSync("./src/wsm/_pkg.json")
);

const folder = path.resolve("./ws/");
fs.readdirSync(folder).forEach((f) => {
	if(!f.endsWith('.ws')) return;
	if(f.endsWith('.wsd')) return;
  file = path.resolve("./ws/" + f);
  const txt = fs.readFileSync(file).toString();
  const intLines = ["// Interpreted with WillySoft: HARD for JavaScript"];

  console.log("WillySoft: HARD is building your JS file.");
  txt.split("\n").forEach((line) => {
    intLines.push(parse.exec(line));
  });

  if (f.includes(".mod")) {
		if (!fs.existsSync("./built/mod")) fs.mkdirSync("./built/mod");
    fs.writeFileSync(
      "./built/mod/" + f.split(".")[0] + '.wsm',
      intLines.join("\n")
    );
    return;
  }
  fs.writeFileSync("./built/" + f + ".js", intLines.join("\n"));
});

console.log("=-=-=-=");
console.log("Now executing main.ws.js");
console.log("=-=-=-=");
if (CLEAR) console.clear();

if (fs.existsSync("./built/main.ws.js")) {
  require(path.resolve("./built/main.ws.js"));
}
