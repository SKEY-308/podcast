"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { podcastData } from '@/constants'
import PodcastCard from '@/components/PodcastCard'




const Home = () => {
  // const tasks = useQuery(api.tasks.get);

  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>

        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              imgURL={imgURL as string}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home