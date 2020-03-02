import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ZipCode = new Schema (
  {
    name: {
      type: String
    },
  },
  {
    timestamps: true
  }
)


// const ZipCode = mongoose.model("ZipCode", ZipCode);

// export default ZipCode