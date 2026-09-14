import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  SnapchatIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/** The channels Social Budd publishes to, shown as mark + wordmark. */
const platforms = [
  { name: "Instagram", Icon: InstagramIcon },
  { name: "TikTok", Icon: TikTokIcon },
  { name: "YouTube", Icon: YouTubeIcon },
  { name: "LinkedIn", Icon: LinkedInIcon },
  { name: "X", Icon: XIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Threads", Icon: ThreadsIcon },
  { name: "Pinterest", Icon: PinterestIcon },
  { name: "Snapchat", Icon: SnapchatIcon },
] as const;

function Strip() {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20">
      {platforms.map(({ name, Icon }) => (
        <li key={name} className="flex items-center gap-2.5 whitespace-nowrap">
          <Icon mono className="h-6 w-6 md:h-7 md:w-7" />
          <span className="text-[17px] font-bold tracking-tight md:text-[19px]">{name}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The platforms as a quiet logo marquee: monochrome marks and wordmarks in a
 * muted grey, drifting past behind soft fades at either edge.
 */
export function TrustSection() {
  // The strip sits as far below the hero as the next section sits below it,
  // so it reads as its own beat rather than as a tail on the banner.
  return (
    <Section className="pb-4 pt-20 md:pb-6 md:pt-28 lg:pb-8 lg:pt-32">
      <Container>
        <p className="pb-6 text-center text-sm font-bold text-muted-foreground">
          Currently supporting platforms
        </p>
      </Container>

      <div
        className="group relative mt-8 overflow-hidden md:mt-10 text-zinc-400 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-label="Supported platforms"
      >
        <div className="marquee flex w-max motion-reduce:animate-none">
          <Strip />
          <Strip aria-hidden />
        </div>
      </div>
    </Section>
  );
}
