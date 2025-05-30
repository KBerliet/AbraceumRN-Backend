const mongoose = require("mongoose");

const doadorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
  status: Boolean,
});

module.exports = mongoose.model("Doador", doadorSchema);
