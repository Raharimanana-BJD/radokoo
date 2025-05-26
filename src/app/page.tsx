"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to Radokoo
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Radokoo is a platform for teleconsultation in Madagascar. It was
              created to make it easier for people to get medical consultations
              from anywhere in the country. With Radokoo, you can consult with
              doctors and other healthcare professionals from anywhere in
              Madagascar, without having to travel to a clinic or hospital. This
              makes it easier for people to get the medical care they need,
              especially those living in rural areas or those who have
              difficulty traveling.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="default" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
