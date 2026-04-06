require("dotenv").config();
const mongoose = require("mongoose");

(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const Treasury = mongoose.model(
    "Treasury",
    new mongoose.Schema({
      name: String,
      organizationName: String,
      chainId: Number,
      walletAddresses: [String],
    }),
    "treasuries"
  );

  const treasuries = await Treasury.find();

  const seen = new Set();
  const duplicates = [];

  for (const t of treasuries) {
    const key = `${t.name}-${t.organizationName}-${t.chainId}-${t.walletAddresses.join(",")}`;

    if (seen.has(key)) {
      duplicates.push(t._id);
    } else {
      seen.add(key);
    }
  }

  if (duplicates.length > 0) {
    await Treasury.deleteMany({ _id: { $in: duplicates } });
    console.log("Deleted duplicates:", duplicates.length);
  } else {
    console.log("No duplicates found");
  }

  process.exit(0);
})();
