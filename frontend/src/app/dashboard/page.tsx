"use client";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#556B2F]">
      {/* Background Image */}
      <div
        className="absolute inset-x-10 top-5 bottom-5 w-[calc(100vw-100px)] h-[calc(100vh-80px)] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/BG.jpg')" }}
      ></div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <SignedOut>
          <p className="text-white text-lg mb-4">You must be signed in to access the dashboard.</p>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <h1 className="text-[#556B2F] font-semibold text-2xl font-bold mb-4 mt-100 mr-160">Input Data</h1>

          {/* Button to navigate to Prediction Form */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#cce7b0]-700 transition"
            onClick={() => router.push("/dashboard/prediction")}
          >
            Enter Input
          </button>
        </SignedIn>
      </div>
    </div>
  );
}
