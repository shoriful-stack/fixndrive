import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");

  try {
    const newBooking = await bookingCollection.insertOne(booking);
    return Response.json({ message: "Service Booked successfully!" });
  } catch (error) {
    console.log(error);
  }
};
