import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, {params}) => {
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    try{
        const response = await bookingCollection.deleteOne({_id: new ObjectId(params.id)});
        return Response.json({message: "Booking deleted successfully!", response})
    } catch( error ){
        return Response.json({message: "Something went wrong!"})
    }
}