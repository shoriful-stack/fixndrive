import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/service";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    try{
        await servicesCollection.deleteMany();
        const response = await servicesCollection.insertMany(services);
        return Response.json({message: "Seeded Successfully!"})
    } catch(error) {
        return error;
    }
}