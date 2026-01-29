// //initialization ka logic likenge

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
    
//   await Listing.deleteMany({}); //jo phle ka data h usko delete kr denge 
//   initData.data = initData.data.map((obj) => ({
//   ...obj,
//   owner: new mongoose.Types.ObjectId("6959e2dc0733180f3c2f7cd2"),
// }));

//   await Listing.insertMany(initData.data); //data.js wala data insert kiya
//   console.log("data was initialized");
// };

// initDB();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function seedDB() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");

  await Listing.deleteMany({});

  const listings = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("6959e2dc0733180f3c2f7cd2"),
  }));

  await Listing.insertMany(listings);
  console.log("data was initialized");

  await mongoose.connection.close();
}

seedDB().catch(console.error);
