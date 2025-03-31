import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="z-50 bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Personalized AI Mocks
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
            Double your chances of landing that job offer with our AI-powered interview prep
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
              Get Started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-8 bg-black z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl text-white">How it Works?</h2>
        <h2 className="text-md text-gray-400">Give mock interview in just 3 simple steps</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="block rounded-xl border bg-gray-900 border-gray-700 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <AtomIcon className="h-8 w-8 text-white" />
            <h2 className="mt-4 text-xl font-bold text-white">Fill the Dialog Box</h2>
            <p className="mt-1 text-sm text-gray-400">
              Write Your Role, Skills and Years of Experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="block rounded-xl border bg-gray-900 border-gray-700 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <Edit className="h-8 w-8 text-white" />
            <h2 className="mt-4 text-xl font-bold text-white">Record Answers</h2>
            <p className="mt-1 text-sm text-gray-400">
              Listen to the question and record your answers. Get a confirmation popup.
            </p>
          </div>

          {/* Card 3 */}
          <div className="block rounded-xl border bg-gray-900 border-gray-700 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
            <Share2 className="h-8 w-8 text-white" />
            <h2 className="mt-4 text-xl font-bold text-white">Check the Feedback</h2>
            <p className="mt-1 text-sm text-gray-400">
              View correct answers and AI-generated suggestions in feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
