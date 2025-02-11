import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
            <b>Hey, I'm Hesam Seyf</b> <br/>
            I build things for the web—frontend and backend.
            I’ve been a software developer for over six years, working with JavaScript, React, and other modern web technologies. <br/>
            I love architecture principles such as clean architecture and DDD. <br/><br/>
            While I'm not coding, you probably find me in book stores or hiking. Sometimes I write stuff about development in my <a href='https://medium.com/@hesam.seyf' target='_blank'>Medium</a> account.
        </p>
      </div>
    </section>
  );
}
