import mongoose from "mongoose";

const listSchema = mongoose.Schema({
  title: String,
  description: String,
  when: {
    type: Date,
    default: null,
  },
  associatedPersons: [String],
  checklist: [
    {
      title: String,
      done: {
        type: Boolean,
        default: false
      },
    },
  ],
});

const ListModel = mongoose.model("ListModel", listSchema);

export default ListModel;
