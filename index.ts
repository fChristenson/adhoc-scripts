import { program } from "commander";
import { checkGithub } from "./src/libs/github";
import { getRandomNumber } from "./src/libs/random";

program
  .command("github")
  .description("Checks the http status code of http://github.com")
  .action(function () {
    return checkGithub();
  });

program
  .command("random [numDigits]")
  .description("Get a random number. Defaults to a single digit.")
  .action(function (numDigits) {
    return getRandomNumber(numDigits);
  });

program.parse(process.argv);
