import { Schema } from 'mongoose';
import IBook from 'src/interfaces/IBook';

const bookSchema = new Schema<IBook>(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    pages: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
  },
  {
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export default bookSchema;
