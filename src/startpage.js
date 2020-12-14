const main = require("../main");

const generatePage = (main) => {
  // need to check the out put for each call
  const webTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="../dist/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <heading class="d-flex justify-content-center bg-danger p-3 text-white">TEAM</heading>
        <div class="d-inline-flex flex-row flex-wrap mt-5 mx-5 justify-content-center align-self-auto">
      ${main}
      <div>
    </body>
    </html>`;
  return webTemplate;
};

module.exports = generatePage;
