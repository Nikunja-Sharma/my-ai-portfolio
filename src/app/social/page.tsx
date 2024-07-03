import  H1  from "@/components/ui/H1";
import  H2  from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
          I create daily short form content on YouTube, Instagram Reels, and
          TikTok. I also release about one multi-hour-long tutorial on Youtube
          every month. I put a ton of effort into my tutorials to make them as
          clear and concise as possible.
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          {/* <li>
            <a
              href="https://nikunja.online/youtube"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li> */}
          <li>
            <a
              href="https://nikunja.online/instagram"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          
          <li>
            <a
              href="https://nikunja.online/x"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          
          <li>
            <a
              href="https://nikunja.online/github"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://nikunja.online/linkedin"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          {/* <li>
            <a
              href="https://nikunja.online/blog"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li> */}
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on any project or your
          product, you can contact me via email at{" "}
          <a
            href="mailto:contactme@nikunja.online"
            className="text-primary hover:underline"
          >
            contactme@nikunja.online
          </a>
        </p>

      </section>
    </section>
  );
}