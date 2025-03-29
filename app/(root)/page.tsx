import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practise & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="Nithya AI"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {/* <p>You haven&apos;t taken any interview yet</p> */}
          {dummyInterviews.map((interview, index) => (
            <InterviewCard {...interview} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interviews</h2>
        <div className="interviews-section">
          {/* <p>There are no interviews available</p> */}
          {dummyInterviews.map((interview, index) => (
            <InterviewCard {...interview} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
