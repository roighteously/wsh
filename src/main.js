const path = require("path");
const fs = require("fs");
const parse = require("./lib/parse");

const CLEAR = false;
const QUIET = true;

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
const fp = "./kosi/"
const folder = path.resolve(fp);
fs.readdirSync(folder).forEach((f) => {
	if(!f.endsWith('.ws')) return;
	if(f.endsWith('.wsd')) return;
  file = path.resolve(fp + f);
  const txt = fs.readFileSync(file).toString();
  const intLines = ["// Interpreted with WillySoft: HARD for JavaScript"];

  if (!QUIET) console.log("WillySoft: HARD is building your JS files {RootDir}.");
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

fs.readdirSync(folder).forEach((f) => {
  if (fs.statSync(path.resolve(folder, f)).isDirectory()) {
    fs.readdirSync(path.resolve(folder, f)).forEach((f2) => {
      file = path.resolve(folder, f + "/" + f2);
      const txt = fs.readFileSync(file).toString();
      const intLines = [
        "// Interpreted with WillySoft: HARD for JavaScript",
      ];

      if (!QUIET) console.log("WillySoft: HARD is building your JS files {MiscDir}.");
      txt.split("\n").forEach((line) => {
        intLines.push(parse.exec(line));
      });

      if (f2.includes(".mod")) {
        fs.writeFileSync(
          "./built/mod/" + f2.split(".")[0] + '.wsm',
          intLines.join("\n")
        );
        return;
      }
      if (!fs.existsSync("./built/" + f)) fs.mkdirSync("./built/" + f);
      fs.writeFileSync("./built/" +f +'/'+ f2 + ".js", intLines.join("\n"));
    });
  }
})

if (!QUIET) {
  console.log("=-=-=-=");
console.log("Now executing main.ws.js");
console.log("=-=-=-=");
}
if (CLEAR) console.clear();

if (fs.existsSync("./built/main.ws.js")) {
  require(path.resolve("./built/main.ws.js"));
}
