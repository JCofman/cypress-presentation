const { Builder, By, until } = require("selenium-webdriver");

// (async function example() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("http://www.google.com/ncr");
//     await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
//     await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();

(async function exampleSecond() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3001/#/10");
    // await driver.findElement(By.className("glow-button"));
    //await driver.sleep(100000);
    await driver
      .wait(until.elementLocated(By.className("glow-button")), 1000)
      .then(button => {
        button.click();
      });
    await driver
      .wait(until.elementLocated(By.className("member__avatar")), 1000)
      .then(memberAvataer => {
        console.log("Member avatar exists");
      });
  } finally {
    console.log("test");
    await driver.quit();
  }
})();

// // instantiate the browser
// const builder = new Builder();
// builder.forBrowser("chrome");
// const driver = builder.build();
// // go to the url
// driver.get("http://localhost:3001/#/10").then(() => {
//   //   var button = driver.findElement(By.className("glow-button"));
//   //   console.log(button);
//   //   button.click();
//   console.log(until);
//   // driver.sleep(3000);
//   driver.wait(until.elementLocated(By.className("glow-button")), 6000);
//   // we wait for something on the page that verifies that we are logged in

//   driver.quit();

//   return driver.wait(until.elementLocated(By.linkText("Marketing")), 6000);
// });

// driver.get("http://localhost:3001/#/10");

// // print the title
// driver.getTitle().then(title => console.log(title));

// // Page has been loaded, now go to sleep for a few seconds.
// driver.sleep(3000);

// const button = driver.findElement(By.className("glow-button")).then(test => {
//   console.log(test);
//   driver.quit();
// });

// close the browser
// driver.quit();
