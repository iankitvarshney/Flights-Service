const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

  // Bad Code Alert

  // const { Airport, City } = require("./models");
  // const bengaluru = await City.findByPk(1);
  // console.log(bengaluru);
  // const hblAirport = await Airport.create({name: "Hubballi Airport", code: "HBL", cityId: 1});
  // console.log(hblAirport);
  // const kmpAirport = await bengaluru.createAirport({
  //   name: "Kempegowda Airport",
  //   code: "BLR",
  // });
  // console.log(kmpAirport);

  // const airportsInBlr = await bengaluru.getAirports();
  // console.log(airportsInBlr);

  // const response = await bengaluru.removeAirport(kmpAirport);
  // console.log(response);

  // await City.destroy({
  //   where: {
  //     id: 1,
  //   },
  // });
});
