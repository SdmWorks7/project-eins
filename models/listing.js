const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1792208900103-cd3088eec006?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        set: (v)=>v===""?"https://images.unsplash.com/photo-1792208900103-cd3088eec006?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D": v,
    },
    price: String,
    location: String,
    country: String,
});

const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;