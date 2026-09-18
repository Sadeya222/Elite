import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ----------------------------- utility icons ----------------------------- */

export function ArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Check(p: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function CheckCircle(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="10.2" fill="currentColor" />
      <path
        d="M7.4 12.4l3 3 6.2-6.8"
        stroke="#fff"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Plus(p: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...p}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Star(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.4l-5.8 3.1 1.1-6.45-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export function Play(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8 5.2v13.6L19 12z" />
    </svg>
  );
}

export function Pause(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <rect x="7" y="5" width="3.4" height="14" rx="1" />
      <rect x="13.6" y="5" width="3.4" height="14" rx="1" />
    </svg>
  );
}

export function SpeakerOff(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M11 5L6.5 9H3v6h3.5L11 19z" />
      <path d="M15.5 9.5l5 5" />
      <path d="M20.5 9.5l-5 5" />
    </svg>
  );
}

export function SpeakerOn(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M11 5L6.5 9H3v6h3.5L11 19z" />
      <path d="M15.5 9a4.2 4.2 0 010 6" />
      <path d="M18.3 6.6a8 8 0 010 10.8" />
    </svg>
  );
}

export function Expand(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4H4v5" />
      <path d="M15 20h5v-5" />
      <path d="M20 9V4h-5" />
      <path d="M4 15v5h5" />
    </svg>
  );
}

/* ------------------------------- nav / cart ------------------------------- */

export function UserIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M4.6 20.2c.9-3.6 3.8-5.6 7.4-5.6s6.5 2 7.4 5.6" />
    </svg>
  );
}

export function Cart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.6 3.6h2.5l2.3 11.2h10.4" />
      <path d="M6.6 6.4h14.2l-1.6 7.1H8.1" />
      <circle cx="9.4" cy="19.4" r="1.4" />
      <circle cx="17.4" cy="19.4" r="1.4" />
    </svg>
  );
}

/* ---------------------------------- hero ---------------------------------- */

export function Crown(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 18.2l1.5-9 4 3.4L12 5.4l3.5 7.2 4-3.4 1.5 9z" />
      <rect x="3.4" y="19" width="17.2" height="1.9" rx="0.9" />
      <circle cx="4.5" cy="6.6" r="1.3" />
      <circle cx="19.5" cy="6.6" r="1.3" />
      <circle cx="12" cy="3.4" r="1.3" />
    </svg>
  );
}

export function MapPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s6.4-6.3 6.4-11A6.4 6.4 0 005.6 10c0 4.7 6.4 11 6.4 11z" />
      <circle cx="12" cy="9.9" r="2.4" />
      <path d="M12 2.2v1.4M4.4 5.2l1.1.9M19.6 5.2l-1.1.9" strokeWidth={1.2} />
    </svg>
  );
}

export function Group(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="9.2" cy="7.4" r="3.2" />
      <path d="M3.2 19.4c.7-3.2 3.1-5 6-5s5.3 1.8 6 5" />
      <circle cx="17.4" cy="8.6" r="2.5" />
      <path d="M15.6 14.7c2.6-.3 4.6 1.2 5.2 4" />
    </svg>
  );
}

export function GroupSolid(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="9.2" cy="7.6" r="3.4" />
      <path d="M2.7 20c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6z" />
      <circle cx="17.6" cy="9" r="2.6" />
      <path d="M15.9 14.9c2.7-.4 4.9 1.2 5.6 4.1h-3.2c-.4-1.6-1.2-3-2.4-4.1z" />
    </svg>
  );
}

/* --------------------------------- moment --------------------------------- */

export function Megaphone(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 11.4h3.6L17 5.6v13.2L6.6 13H3z" fill="currentColor" />
      <path d="M6.6 13v5.6h3.2V13.9" fill="currentColor" />
      <path d="M19.4 9.6a3.6 3.6 0 010 5.2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M21.8 7.2a7 7 0 010 10" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function Camera(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M2.6 7.4h3.6l1.6-2.4h8.4l1.6 2.4h3.6v11.2H2.6z" fill="currentColor" />
      <circle cx="12" cy="12.9" r="3.6" fill="#fff" />
      <circle cx="12" cy="12.9" r="2.1" fill="currentColor" />
    </svg>
  );
}

export function Heart(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 20.4S3.4 14.9 3.4 9.4A4.9 4.9 0 0112 6.5a4.9 4.9 0 018.6 2.9c0 5.5-8.6 11-8.6 11z" />
    </svg>
  );
}

export function HeartOutline(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20.2S3.6 15 3.6 9.6A4.7 4.7 0 0112 6.8a4.7 4.7 0 018.4 2.8c0 5.4-8.4 10.6-8.4 10.6z" />
    </svg>
  );
}

export function SteeringWheel(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M9.4 12H3.4M14.6 12h6M12 14.6V20.6" />
    </svg>
  );
}

export function Beaker(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3h6M10.4 3v6.2L5.6 18a2 2 0 001.7 3h9.4a2 2 0 001.7-3l-4.8-8.8V3" />
      <path d="M7.4 14.4h9.2" />
    </svg>
  );
}

export function Bolt(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.4 2L5.6 13.4h4.6L9.4 22l8-11.6h-4.6z" />
    </svg>
  );
}

/* ---------------------------------- steps --------------------------------- */

export function Ticket(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 8.4a1.8 1.8 0 011.8-1.8h14.4A1.8 1.8 0 0121 8.4v1.8a2 2 0 000 3.6v1.8a1.8 1.8 0 01-1.8 1.8H4.8A1.8 1.8 0 013 15.6v-1.8a2 2 0 000-3.6z" />
      <path d="M9.6 7v10" strokeDasharray="2 2.2" />
      <path d="M13.6 10.4h4M13.6 13.4h2.6" />
    </svg>
  );
}

export function TicketSolid(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M2.6 8.6a2 2 0 012-2h14.8a2 2 0 012 2v1.5a2 2 0 000 3.8v1.5a2 2 0 01-2 2H4.6a2 2 0 01-2-2v-1.5a2 2 0 000-3.8z"
        fill="currentColor"
      />
      <path d="M9.4 6.6v10.8" stroke="#fff" strokeWidth={1.4} strokeDasharray="2 2" />
      <path d="M13 10.4h4.4M13 13.4h3" stroke="#fff" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.2" y="5" width="17.6" height="15.8" rx="2" />
      <path d="M3.2 9.6h17.6M8 3v4M16 3v4" />
      <path d="M7.4 13h1.4M11.3 13h1.4M15.2 13h1.4M7.4 16.6h1.4M11.3 16.6h1.4M15.2 16.6h1.4" />
    </svg>
  );
}

export function CalendarCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.2" y="5" width="17.6" height="15.8" rx="2" />
      <path d="M3.2 9.6h17.6M8 3v4M16 3v4" />
      <path d="M9 14.6l2.2 2.2 4.2-4.4" strokeWidth={1.8} />
    </svg>
  );
}

export function Flag(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.6 21V4.2M6.6 4.6c4.4-2 7.4 1.6 11.8 0v9c-4.4 1.6-7.4-2-11.8 0" />
    </svg>
  );
}

/* ---------------------------------- trust --------------------------------- */

export function Shield(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2.6l7.6 2.6v6.2c0 4.6-3.2 8-7.6 10-4.4-2-7.6-5.4-7.6-10V5.2z" fill="currentColor" />
      <path d="M12 8.4l1 2.1 2.3.35-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.35z" fill="#fff" />
    </svg>
  );
}

export function Instructor(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="9.4" cy="7.2" r="3.2" fill="currentColor" />
      <path d="M3 20c.6-3.4 3.2-5.3 6.4-5.3 1.5 0 2.9.4 4 1.1V20z" fill="currentColor" />
      <circle cx="17.6" cy="12.4" r="4.6" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <path
        d="M17.6 10.2l.7 1.5 1.6.25-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Lock(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="4.6" y="10" width="14.8" height="10.8" rx="2" fill="currentColor" />
      <path d="M8.2 10V7.8a3.8 3.8 0 017.6 0V10" stroke="currentColor" strokeWidth={1.8} fill="none" />
      <circle cx="12" cy="15.2" r="1.5" fill="#fff" />
    </svg>
  );
}

export function Headset(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4.6 15.4v-3.2a7.4 7.4 0 0114.8 0v3.2" />
      <rect x="2.8" y="13.8" width="4" height="6" rx="1.6" />
      <rect x="17.2" y="13.8" width="4" height="6" rx="1.6" />
      <path d="M19.2 19.8c0 1.4-1.6 2.2-4.2 2.2" />
      <circle cx="14.2" cy="22" r="0.9" />
    </svg>
  );
}

export function Euro(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M15.6 8.6a4.4 4.4 0 100 6.8" />
      <path d="M8.4 11h5.2M8.4 13.4h5.2" />
    </svg>
  );
}

/* ---------------------------------- gift ---------------------------------- */

export function GiftBox(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.2" y="8.4" width="17.6" height="4.2" rx="1.2" />
      <path d="M4.8 12.6v7.4h14.4v-7.4" />
      <path d="M12 8.4v11.6M12 8.4s-3.6.3-4.6-2c-.7-1.7.6-3 2-2.6 1.7.5 2.6 4.6 2.6 4.6zM12 8.4s3.6.3 4.6-2c.7-1.7-.6-3-2-2.6C12.9 4.3 12 8.4 12 8.4z" />
    </svg>
  );
}

export function Wish(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 19.6S4.6 15 4.6 10.4A4.2 4.2 0 0112 8.1a4.2 4.2 0 017.4 2.3c0 4.6-7.4 9.2-7.4 9.2z" />
      <path d="M12 6.4V2.8M9.4 4l2.6 2.4L14.6 4" />
    </svg>
  );
}

export function Sparkle(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M11 3.4l1.3 5 5 1.3-5 1.3-1.3 5-1.3-5-5-1.3 5-1.3z" />
      <path d="M18.4 14.2l.7 2.6 2.5.7-2.5.7-.7 2.6-.7-2.6-2.5-.7 2.5-.7z" />
      <path d="M5.6 15.4l.5 1.9 1.9.5-1.9.5-.5 1.9-.5-1.9-1.9-.5 1.9-.5z" />
    </svg>
  );
}

export function PartyPopper(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 21l5.6-15 9.4 9.4z" />
      <circle cx="18.4" cy="4.6" r="1.4" />
      <circle cx="21" cy="9.6" r="1" />
      <circle cx="13.6" cy="2.6" r="1" />
      <path d="M19.6 13.6c-1.2-1.4-1.6-3.6-.6-5.4M10.4 20c1.6 1 4.4 1.2 6.2.2" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function BucketList(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="11.6" height="3.4" rx="1.2" />
      <path d="M5.4 7.4v7.4M9 7.4v7.4M12.4 7.4v7.4" />
      <path d="M3 14.8h11.6" />
      <circle cx="18.4" cy="8.6" r="2.2" />
      <path d="M14.6 18.6c.4-2.2 2-3.4 3.8-3.4s3.4 1.2 3.8 3.4" />
    </svg>
  );
}

/* -------------------------------- payments -------------------------------- */

export function PayPal(p: IconProps) {
  return (
    <svg viewBox="0 0 40 16" fill="none" {...p}>
      <path
        d="M6.2 15.2H2.9L5.6 1.2h6.2c3 0 4.7 1.6 4.2 4.3-.5 3-2.8 4.6-6.1 4.6H7.9z"
        fill="#253B80"
      />
      <path
        d="M13.6 15.2h-3.3l2.7-14h6.2c3 0 4.7 1.6 4.2 4.3-.5 3-2.8 4.6-6.1 4.6h-1.9z"
        fill="#179BD7"
      />
      <text
        x="22.6"
        y="12.6"
        fill="#253B80"
        fontFamily="Montserrat, sans-serif"
        fontSize="10"
        fontWeight="700"
      >
        PayPal
      </text>
    </svg>
  );
}

export function Mastercard(p: IconProps) {
  return (
    <svg viewBox="0 0 44 28" fill="none" {...p}>
      <rect x="1" y="4.5" width="42" height="19" rx="3" fill="#1a1a1a" />
      <circle cx="18" cy="14" r="5.4" fill="#eb001b" />
      <circle cx="26" cy="14" r="5.4" fill="#f79e1b" fillOpacity="0.9" />
    </svg>
  );
}

export function Visa(p: IconProps) {
  return (
    <svg viewBox="0 0 44 28" fill="none" {...p}>
      <rect x="1" y="4.5" width="42" height="19" rx="3" fill="#1a1a1a" />
      <text
        x="22"
        y="18.6"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Montserrat, sans-serif"
        fontSize="10"
        fontWeight="800"
        fontStyle="italic"
      >
        VISA
      </text>
    </svg>
  );
}

export function Klarna(p: IconProps) {
  return (
    <svg viewBox="0 0 52 18" fill="none" {...p}>
      <text x="0" y="13.6" fill="#0a0a0a" fontFamily="Montserrat, sans-serif" fontSize="11" fontWeight="700">
        Klarna.
      </text>
    </svg>
  );
}

export function Instagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function TikTok(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16.2 2.4h-3.1v13.2a2.6 2.6 0 11-2.2-2.6v-3.2a5.8 5.8 0 105.3 5.8V9.2a6.6 6.6 0 003.6 1.1V7.1a3.6 3.6 0 01-3.6-3.6z" />
    </svg>
  );
}

export function Facebook(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.6 21.6v-8.2h2.8l.4-3.2h-3.2V8.1c0-.9.3-1.6 1.7-1.6h1.6V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.2H7.4v3.2h2.5v8.2z" />
    </svg>
  );
}

export function Globe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.6 12h16.8M12 3.4c2.4 2.4 3.4 5.4 3.4 8.6S14.4 18.2 12 20.6c-2.4-2.4-3.4-5.4-3.4-8.6S9.6 5.8 12 3.4z" />
    </svg>
  );
}

/* ---------------------------------- logo ---------------------------------- */

export function EliteMark(p: IconProps) {
  return (
    <svg viewBox="0 0 40 28" fill="none" {...p}>
      <path
        d="M2 25L11 3l7 9.5L25 3l6 10.5 4.5 11.5H28L24.5 16 20 24l-4.5-8-3.5 9z"
        fill="currentColor"
      />
      <path d="M4 26.5h32" stroke="currentColor" strokeWidth={1.6} />
    </svg>
  );
}
