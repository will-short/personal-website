const http = require("http");
const { readFileSync } = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });
  req.on("end", () => {
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    if (req.method === "GET" && req.url === "/") {
      console.log(req.url);
      const resBody = readFileSync("./home/home.html");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(resBody);
      return;
    }

    const ext = path.extname(req.url);
    if (req.method === "GET" && ext) {
      try {
        console.log(req.url);
        const resBody = readFileSync(`.${req.url}`);
        res.statusCode = 200;
        if (ext === ".jpg" || ext === ".jpeg") {
          res.setHeader("Content-Type", "image/jpeg");
        } else if (ext === ".css") {
          res.setHeader("Content-Type", "text/css");
        } else if (ext === ".js") {
          res.setHeader("Content-Type", "text/javascript");
        }
        res.end(resBody);
        return;
      } catch {
        console.error(
          "Cannot find asset",
          path.basename(req.url),
          "in assets folder"
        );
      }
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    const resBody = "Page Not Found";
    res.write(resBody);
    res.end();
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(server.listening + " on port " + port));
