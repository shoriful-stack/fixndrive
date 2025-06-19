import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");

  try {
    const response = await bookingCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({
      message: "Booking deleted successfully!",
      response,
    });
  } catch (error) {
    return Response.json({ message: "Something went wrong!" });
  }
};

export const PATCH = async (request, { params }) => {
  const updatedDoc = await request.json();
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");

  try {
    const response = await bookingCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
            ...updatedDoc
        },
      },
      { upsert: true }
    );
    return Response.json({ message: "Updated Successfully!" });
  } catch (error) {
    return Response.json({ message: "Something went wrong!" });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");

  try {
    const response = await bookingCollection.findOne({ _id: new ObjectId(params.id) });
    return Response.json({ message: "Single booking found", response});
  } catch (error) {
    return Response.json({ message: "Something went wrong!" });
  }
};
