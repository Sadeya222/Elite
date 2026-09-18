import type { ReactNode, SVGProps } from "react";
import * as I from "./Icons";
import { cn } from "../utils/cn";
import { assets } from "../config/content";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1180px] px-4 sm:px-6", className)}>{children}</div>;
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-caps text-neutral-900", className)}>{children}</p>;
}

/* --------------------------- icon name -> component --------------------------- */
const map: Record<string, (p: SVGProps<SVGSVGElement>) => ReactNode> = {
  crown: I.Crown,
  pin: I.MapPin,
  group: I.Group,
  groupSolid: I.GroupSolid,
  megaphone: I.Megaphone,
  camera: I.Camera,
  heart: I.Heart,
  heartOutline: I.HeartOutline,
  steering: I.SteeringWheel,
  beaker: I.Beaker,
  bolt: I.Bolt,
  ticket: I.Ticket,
  ticketSolid: I.TicketSolid,
  calendar: I.CalendarIcon,
  calendarCheck: I.CalendarCheck,
  flag: I.Flag,
  shield: I.Shield,
  instructor: I.Instructor,
  lock: I.Lock,
  headset: I.Headset,
  euro: I.Euro,
  gift: I.GiftBox,
  wish: I.Wish,
  sparkle: I.Sparkle,
  party: I.PartyPopper,
  bucket: I.BucketList,
  check: I.Check,
  checkCircle: I.CheckCircle,
  arrowRight: I.ArrowRight,
  chevronRight: I.ChevronRight,
  plus: I.Plus,
  star: I.Star,
  play: I.Play,
  pause: I.Pause,
  speakerOff: I.SpeakerOff,
  speakerOn: I.SpeakerOn,
  expand: I.Expand,
  user: I.UserIcon,
  cart: I.Cart,
  globe: I.Globe,
  instagram: I.Instagram,
  tiktok: I.TikTok,
  facebook: I.Facebook,
  paypal: I.PayPal,
  visa: I.Visa,
  mastercard: I.Mastercard,
  klarna: I.Klarna,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? I.Star;
  return <Cmp className={className} />;
}

/* ----------------------------------- logo ----------------------------------- */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={assets.logoImage}
      alt="Elite Sport Cars Club"
      decoding="async"
      className={cn("block h-9 w-[160px] object-contain sm:w-[230px]", className)}
    />
  );
}
