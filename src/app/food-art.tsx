import React from "react";

// ─── Main Kitchen ─────────────────────────────────────────────────────────────

function ChickenArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ck-body" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#FDC356" />
          <stop offset="100%" stopColor="#B04E08" />
        </radialGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="90" rx="32" ry="6" fill="rgba(0,0,0,0.12)" />
      {/* Breast shape */}
      <path d="M 22 62 Q 18 34 42 22 Q 62 14 74 30 Q 86 48 78 66 Q 68 82 50 84 Q 30 84 22 62 Z" fill="url(#ck-body)" />
      {/* Grill marks */}
      <path d="M 30 48 Q 48 44 66 50" fill="none" stroke="rgba(80,28,0,0.45)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 28 58 Q 46 54 64 60" fill="none" stroke="rgba(80,28,0,0.45)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 32 38 Q 50 34 66 40" fill="none" stroke="rgba(80,28,0,0.35)" strokeWidth="3" strokeLinecap="round" />
      {/* Depth stroke */}
      <path d="M 22 62 Q 18 34 42 22 Q 62 14 74 30 Q 86 48 78 66 Q 68 82 50 84 Q 30 84 22 62 Z" fill="none" stroke="#8B3C04" strokeWidth="1.5" />
      {/* Top highlight */}
      <path d="M 38 26 Q 54 18 68 28" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function BeefArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bf-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E85040" />
          <stop offset="100%" stopColor="#981820" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="90" rx="34" ry="5" fill="rgba(0,0,0,0.13)" />
      {/* Steak body */}
      <path d="M 14 38 Q 16 20 50 18 Q 82 18 86 38 Q 90 62 80 76 Q 64 88 36 86 Q 16 80 14 62 Z" fill="url(#bf-body)" />
      {/* White fat rim left */}
      <path d="M 14 38 Q 16 20 22 18 Q 18 32 16 54 Q 15 68 18 76" fill="none" stroke="#F8F0E8" strokeWidth="7" strokeLinecap="round" />
      {/* Marbling blobs */}
      <ellipse cx="45" cy="46" rx="7" ry="3.5" fill="rgba(255,240,235,0.55)" transform="rotate(-15 45 46)" />
      <ellipse cx="62" cy="58" rx="5" ry="2.5" fill="rgba(255,240,235,0.50)" transform="rotate(20 62 58)" />
      <ellipse cx="54" cy="34" rx="4" ry="2" fill="rgba(255,240,235,0.45)" transform="rotate(-8 54 34)" />
      <ellipse cx="38" cy="68" rx="6" ry="2.5" fill="rgba(255,240,235,0.45)" transform="rotate(10 38 68)" />
      {/* Depth stroke */}
      <path d="M 14 38 Q 16 20 50 18 Q 82 18 86 38 Q 90 62 80 76 Q 64 88 36 86 Q 16 80 14 62 Z" fill="none" stroke="#6A0818" strokeWidth="1.5" />
      {/* Highlight */}
      <path d="M 30 22 Q 54 16 74 24" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function SalmonArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sm-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9907A" />
          <stop offset="100%" stopColor="#D84840" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="90" rx="32" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Fillet body */}
      <path d="M 16 72 Q 14 32 36 18 Q 60 10 82 26 Q 90 44 84 70 Q 70 86 40 86 Z" fill="url(#sm-body)" />
      {/* Dark skin edge on left */}
      <path d="M 16 72 Q 14 32 36 18" fill="none" stroke="#8C2820" strokeWidth="6" strokeLinecap="round" />
      {/* White diagonal flesh lines */}
      <line x1="30" y1="72" x2="56" y2="26" stroke="rgba(255,255,255,0.38)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="78" x2="68" y2="32" stroke="rgba(255,255,255,0.34)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="82" x2="80" y2="38" stroke="rgba(255,255,255,0.30)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Depth stroke */}
      <path d="M 16 72 Q 14 32 36 18 Q 60 10 82 26 Q 90 44 84 70 Q 70 86 40 86 Z" fill="none" stroke="#A83020" strokeWidth="1.5" />
      {/* Top highlight */}
      <path d="M 36 20 Q 58 12 78 26" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function TofuArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="91" rx="32" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Left face */}
      <path d="M 18 44 L 18 78 L 50 88 L 50 54 Z" fill="#E8E4D0" />
      {/* Right face */}
      <path d="M 50 54 L 50 88 L 80 76 L 80 42 Z" fill="#D8D4BE" />
      {/* Top face */}
      <path d="M 18 44 L 50 54 L 80 42 L 48 32 Z" fill="#F8F5E8" />
      {/* Strokes */}
      <path d="M 18 44 L 18 78 L 50 88 L 50 54 Z" fill="none" stroke="#C0BC9C" strokeWidth="1.2" />
      <path d="M 50 54 L 50 88 L 80 76 L 80 42 Z" fill="none" stroke="#B4B098" strokeWidth="1.2" />
      <path d="M 18 44 L 50 54 L 80 42 L 48 32 Z" fill="none" stroke="#C8C4AC" strokeWidth="1.2" />
      {/* Top-left highlight */}
      <path d="M 20 44 L 48 34" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PastaArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="92" rx="30" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Penne 1 */}
      <g transform="translate(18,30) rotate(-30)">
        <rect x="0" y="0" width="30" height="13" rx="6" fill="#ECC84A" stroke="#C8A028" strokeWidth="1" />
        <ellipse cx="0" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="30" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="0" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
        <ellipse cx="30" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
      </g>
      {/* Penne 2 */}
      <g transform="translate(52,16) rotate(15)">
        <rect x="0" y="0" width="30" height="13" rx="6" fill="#ECC84A" stroke="#C8A028" strokeWidth="1" />
        <ellipse cx="0" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="30" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="0" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
        <ellipse cx="30" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
      </g>
      {/* Penne 3 */}
      <g transform="translate(14,58) rotate(20)">
        <rect x="0" y="0" width="30" height="13" rx="6" fill="#ECC84A" stroke="#C8A028" strokeWidth="1" />
        <ellipse cx="0" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="30" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="0" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
        <ellipse cx="30" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
      </g>
      {/* Penne 4 */}
      <g transform="translate(50,56) rotate(-20)">
        <rect x="0" y="0" width="30" height="13" rx="6" fill="#ECC84A" stroke="#C8A028" strokeWidth="1" />
        <ellipse cx="0" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="30" cy="6.5" rx="5" ry="6.5" fill="#D4A820" />
        <ellipse cx="0" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
        <ellipse cx="30" cy="6.5" rx="2.5" ry="3.5" fill="#B88E10" />
      </g>
    </svg>
  );
}

function RiceArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[
        [24,22],[38,18],[52,20],[66,24],[78,32],
        [18,38],[32,34],[46,32],[60,36],[74,42],
        [22,54],[36,50],[50,48],[64,52],[76,58],
        [28,68],[44,66],[60,68],
      ].map(([cx, cy], i) => {
        const a = (i * 37) % 180;
        return (
          <g key={i} transform={`translate(${cx},${cy}) rotate(${a - 60})`}>
            <ellipse cx="0" cy="0" rx="6" ry="3" fill="#FAFAF5" stroke="#DDDACF" strokeWidth="0.8" />
            <ellipse cx="-1" cy="-0.5" rx="2" ry="1" fill="rgba(255,255,255,0.9)" />
          </g>
        );
      })}
    </svg>
  );
}

function EggsArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="egg-yolk" cx="42%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#FFE860" />
          <stop offset="100%" stopColor="#D09000" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="34" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* White blob */}
      <path d="M 12 54 Q 10 32 28 26 Q 44 22 58 30 Q 76 26 84 40 Q 90 56 80 70 Q 66 84 46 82 Q 18 82 12 54 Z" fill="#FEFEF8" stroke="#E8E4D4" strokeWidth="1.2" />
      {/* Yolk */}
      <circle cx="48" cy="52" r="18" fill="url(#egg-yolk)" />
      <circle cx="48" cy="52" r="18" fill="none" stroke="#C07800" strokeWidth="1" />
      {/* Yolk highlight */}
      <ellipse cx="42" cy="45" rx="5" ry="3.5" fill="rgba(255,255,255,0.65)" transform="rotate(-20 42 45)" />
    </svg>
  );
}

function BroccoliArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="br-floret" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#32BC22" />
          <stop offset="100%" stopColor="#228B14" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="22" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Stem */}
      <rect x="43" y="62" width="14" height="28" rx="5" fill="#3E6E18" />
      {/* Florets */}
      <circle cx="50" cy="46" r="18" fill="url(#br-floret)" />
      <circle cx="30" cy="52" r="15" fill="url(#br-floret)" />
      <circle cx="70" cy="52" r="15" fill="url(#br-floret)" />
      <circle cx="40" cy="36" r="13" fill="url(#br-floret)" />
      <circle cx="60" cy="36" r="13" fill="url(#br-floret)" />
      <circle cx="50" cy="28" r="11" fill="url(#br-floret)" />
      {/* Highlights on florets */}
      <ellipse cx="44" cy="40" rx="5" ry="4" fill="rgba(255,255,255,0.30)" />
      <ellipse cx="26" cy="45" rx="4" ry="3.5" fill="rgba(255,255,255,0.28)" />
      <ellipse cx="64" cy="45" rx="4" ry="3.5" fill="rgba(255,255,255,0.28)" />
    </svg>
  );
}

function TomatoArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tm-body" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#F86858" />
          <stop offset="100%" stopColor="#C01818" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="32" ry="5" fill="rgba(0,0,0,0.12)" />
      <circle cx="50" cy="52" r="36" fill="url(#tm-body)" />
      {/* 8 divider segments */}
      {[0,1,2,3,4,5,6,7].map(i => {
        const angle = (i * 45) * Math.PI / 180;
        return <line key={i} x1="50" y1="52" x2={50 + 34 * Math.cos(angle)} y2={52 + 34 * Math.sin(angle)} stroke="rgba(150,10,10,0.30)" strokeWidth="1.2" />;
      })}
      {/* Center circle */}
      <circle cx="50" cy="52" r="6" fill="#F09080" />
      {/* Seeds in segments */}
      {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((deg, i) => {
        const a = deg * Math.PI / 180;
        const r = 20;
        return <ellipse key={i} cx={50 + r * Math.cos(a)} cy={52 + r * Math.sin(a)} rx="3" ry="4.5" fill="rgba(255,220,200,0.70)" transform={`rotate(${deg} ${50 + r * Math.cos(a)} ${52 + r * Math.sin(a)})`} />;
      })}
      <circle cx="50" cy="52" r="36" fill="none" stroke="#901010" strokeWidth="1.5" />
      {/* Top highlight */}
      <ellipse cx="40" cy="28" rx="10" ry="6" fill="rgba(255,255,255,0.40)" transform="rotate(-20 40 28)" />
    </svg>
  );
}

function GarlicArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gl-body" cx="42%" cy="36%" r="60%">
          <stop offset="0%" stopColor="#FEFCF0" />
          <stop offset="100%" stopColor="#D8D0B8" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="28" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Bulb */}
      <path d="M 22 60 Q 18 32 50 20 Q 82 32 78 60 Q 74 82 50 86 Q 26 82 22 60 Z" fill="url(#gl-body)" />
      {/* Clove division lines */}
      <path d="M 50 20 Q 50 54 50 86" fill="none" stroke="rgba(160,140,100,0.40)" strokeWidth="1.5" />
      <path d="M 34 28 Q 36 56 38 80" fill="none" stroke="rgba(160,140,100,0.30)" strokeWidth="1.2" />
      <path d="M 66 28 Q 64 56 62 80" fill="none" stroke="rgba(160,140,100,0.30)" strokeWidth="1.2" />
      {/* Green stem */}
      <path d="M 46 20 Q 44 10 48 4 Q 50 2 52 4 Q 56 10 54 20" fill="#6A9820" stroke="#4A7010" strokeWidth="1" />
      {/* Depth stroke */}
      <path d="M 22 60 Q 18 32 50 20 Q 82 32 78 60 Q 74 82 50 86 Q 26 82 22 60 Z" fill="none" stroke="#C0B090" strokeWidth="1.5" />
      {/* Side highlight */}
      <ellipse cx="32" cy="44" rx="6" ry="9" fill="rgba(255,255,255,0.45)" transform="rotate(-15 32 44)" />
    </svg>
  );
}

function OnionArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="91" rx="32" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Outermost ring */}
      <circle cx="50" cy="52" r="34" fill="none" stroke="#8040B0" strokeWidth="9" />
      {/* Middle ring */}
      <circle cx="50" cy="52" r="24" fill="none" stroke="#A060C8" strokeWidth="7" />
      {/* Inner ring */}
      <circle cx="50" cy="52" r="15" fill="none" stroke="#C080E0" strokeWidth="5" />
      {/* Center */}
      <circle cx="50" cy="52" r="7" fill="#D898F0" />
      {/* Subtle fill behind */}
      <circle cx="50" cy="52" r="34" fill="rgba(200,160,230,0.08)" />
      {/* Highlight arc */}
      <path d="M 24 34 Q 40 24 58 28" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function PotatoArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pt-body" cx="42%" cy="36%" r="60%">
          <stop offset="0%" stopColor="#ECC870" />
          <stop offset="100%" stopColor="#B08040" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="32" ry="5" fill="rgba(0,0,0,0.11)" />
      {/* Wedge body */}
      <path d="M 18 72 L 26 24 Q 46 12 72 22 Q 88 36 84 66 Q 72 88 44 88 Z" fill="url(#pt-body)" />
      {/* Dark brown skin edge */}
      <path d="M 18 72 L 26 24" fill="none" stroke="#7A5018" strokeWidth="7" strokeLinecap="round" />
      {/* Interior grain lines */}
      <path d="M 34 32 Q 58 28 76 40" fill="none" stroke="rgba(180,130,60,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 30 46 Q 54 42 72 54" fill="none" stroke="rgba(180,130,60,0.30)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 26 60 Q 50 56 68 68" fill="none" stroke="rgba(180,130,60,0.28)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 24 74 Q 46 70 64 80" fill="none" stroke="rgba(180,130,60,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Depth stroke */}
      <path d="M 18 72 L 26 24 Q 46 12 72 22 Q 88 36 84 66 Q 72 88 44 88 Z" fill="none" stroke="#906030" strokeWidth="1.5" />
      {/* Highlight */}
      <path d="M 32 28 Q 54 18 70 26" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ─── Snack Kitchen ────────────────────────────────────────────────────────────

function NutsArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nt-alm" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#F0C070" />
          <stop offset="100%" stopColor="#A07030" />
        </radialGradient>
      </defs>
      {/* Almond 1 */}
      <g transform="translate(22,24) rotate(-15)">
        <path d="M 0 0 Q 10 -16 20 0 Q 10 16 0 0 Z" fill="url(#nt-alm)" stroke="#906020" strokeWidth="1" />
        <path d="M 3 0 Q 10 -10 17 0" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Almond 2 */}
      <g transform="translate(52,14) rotate(25)">
        <path d="M 0 0 Q 10 -16 20 0 Q 10 16 0 0 Z" fill="url(#nt-alm)" stroke="#906020" strokeWidth="1" />
        <path d="M 3 0 Q 10 -10 17 0" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Almond 3 */}
      <g transform="translate(16,58) rotate(10)">
        <path d="M 0 0 Q 10 -16 20 0 Q 10 16 0 0 Z" fill="url(#nt-alm)" stroke="#906020" strokeWidth="1" />
        <path d="M 3 0 Q 10 -10 17 0" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Almond 4 */}
      <g transform="translate(54,56) rotate(-25)">
        <path d="M 0 0 Q 10 -16 20 0 Q 10 16 0 0 Z" fill="url(#nt-alm)" stroke="#906020" strokeWidth="1" />
        <path d="M 3 0 Q 10 -10 17 0" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Cashew crescent */}
      <g transform="translate(70,32) rotate(30)">
        <path d="M 0 10 Q -4 -4 6 -8 Q 18 -10 20 2 Q 18 12 8 14 Q 2 14 0 10 Z" fill="url(#nt-alm)" stroke="#906020" strokeWidth="1" />
        <path d="M 2 8 Q -1 0 8 -4" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function CheeseArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ch-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE040" />
          <stop offset="100%" stopColor="#D8A010" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="36" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Wedge */}
      <path d="M 10 80 L 50 14 L 90 80 Z" fill="url(#ch-body)" stroke="#B88010" strokeWidth="1.5" />
      {/* Bottom rectangle rind */}
      <rect x="10" y="78" width="80" height="10" rx="3" fill="#E89008" stroke="#B86808" strokeWidth="1" />
      {/* Holes */}
      <circle cx="38" cy="56" r="6" fill="rgba(200,140,8,0.45)" stroke="#C89010" strokeWidth="1" />
      <circle cx="62" cy="62" r="5" fill="rgba(200,140,8,0.45)" stroke="#C89010" strokeWidth="1" />
      <circle cx="52" cy="40" r="4" fill="rgba(200,140,8,0.45)" stroke="#C89010" strokeWidth="1" />
      {/* Top highlight */}
      <path d="M 40 22 Q 50 16 60 22" fill="none" stroke="rgba(255,255,255,0.60)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function CrackersArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Cracker 1 */}
      <g transform="translate(12,16) rotate(-8)">
        <rect x="0" y="0" width="52" height="52" rx="4" fill="#ECC070" stroke="#C09040" strokeWidth="1.5" />
        {/* Grid lines */}
        <line x1="17" y1="0" x2="17" y2="52" stroke="#C09040" strokeWidth="1" opacity="0.5" />
        <line x1="34" y1="0" x2="34" y2="52" stroke="#C09040" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="17" x2="52" y2="17" stroke="#C09040" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="34" x2="52" y2="34" stroke="#C09040" strokeWidth="1" opacity="0.5" />
        {/* Dot pattern */}
        {[8,25,42].map(cx => [8,25,42].map(cy => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#C09040" opacity="0.5" />
        )))}
        {/* Corner highlight */}
        <path d="M 2 2 L 16 2 L 2 16 Z" fill="rgba(255,255,255,0.35)" />
      </g>
      {/* Cracker 2 on top */}
      <g transform="translate(34,34) rotate(12)">
        <rect x="0" y="0" width="52" height="52" rx="4" fill="#D8A858" stroke="#B08038" strokeWidth="1.5" />
        <line x1="17" y1="0" x2="17" y2="52" stroke="#B08038" strokeWidth="1" opacity="0.5" />
        <line x1="34" y1="0" x2="34" y2="52" stroke="#B08038" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="17" x2="52" y2="17" stroke="#B08038" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="34" x2="52" y2="34" stroke="#B08038" strokeWidth="1" opacity="0.5" />
        {[8,25,42].map(cx => [8,25,42].map(cy => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#B08038" opacity="0.5" />
        )))}
        <path d="M 2 2 L 16 2 L 2 16 Z" fill="rgba(255,255,255,0.35)" />
      </g>
    </svg>
  );
}

function AppleArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ap-body" cx="42%" cy="36%" r="58%">
          <stop offset="0%" stopColor="#F87060" />
          <stop offset="100%" stopColor="#A01010" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="30" ry="5" fill="rgba(0,0,0,0.10)" />
      {/* Apple body */}
      <path d="M 50 22 Q 28 18 20 40 Q 14 62 26 78 Q 36 90 50 90 Q 64 90 74 78 Q 86 62 80 40 Q 72 18 50 22 Z" fill="url(#ap-body)" />
      {/* Leaf */}
      <path d="M 50 22 Q 56 10 70 12 Q 62 20 56 26 Q 52 28 50 22 Z" fill="#30A020" stroke="#208010" strokeWidth="1" />
      {/* Brown stem */}
      <path d="M 50 22 Q 51 16 52 10" fill="none" stroke="#7A4810" strokeWidth="3" strokeLinecap="round" />
      {/* White highlight */}
      <ellipse cx="36" cy="38" rx="9" ry="6" fill="rgba(255,255,255,0.45)" transform="rotate(-20 36 38)" />
      {/* Depth stroke */}
      <path d="M 50 22 Q 28 18 20 40 Q 14 62 26 78 Q 36 90 50 90 Q 64 90 74 78 Q 86 62 80 40 Q 72 18 50 22 Z" fill="none" stroke="#780808" strokeWidth="1.5" />
    </svg>
  );
}

function BananaArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bn-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF080" />
          <stop offset="100%" stopColor="#D09010" />
        </linearGradient>
      </defs>
      {/* Banana curved shape */}
      <path d="M 16 72 Q 10 44 28 20 Q 44 8 66 12 Q 84 14 90 28 Q 84 26 72 26 Q 54 26 42 38 Q 28 52 28 72 Z" fill="url(#bn-body)" />
      {/* Dark tapered tip left */}
      <path d="M 16 72 Q 12 76 14 82 Q 18 80 22 74 Z" fill="#7A5010" />
      {/* Dark tapered tip right */}
      <path d="M 90 28 Q 96 26 96 22 Q 92 18 88 22 Z" fill="#7A5010" />
      {/* Bright highlight along top curve */}
      <path d="M 26 22 Q 54 8 84 20" fill="none" stroke="rgba(255,255,220,0.75)" strokeWidth="4.5" strokeLinecap="round" />
      {/* Depth stroke */}
      <path d="M 16 72 Q 10 44 28 20 Q 44 8 66 12 Q 84 14 90 28 Q 84 26 72 26 Q 54 26 42 38 Q 28 52 28 72 Z" fill="none" stroke="#B07810" strokeWidth="1.5" />
    </svg>
  );
}

function YogurtArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Container trapezoid body */}
      <path d="M 20 36 L 14 84 Q 14 90 50 90 Q 86 90 86 84 L 80 36 Z" fill="#F0F0E8" stroke="#D8D4C4" strokeWidth="1.5" />
      {/* Rim ellipse */}
      <ellipse cx="50" cy="36" rx="30" ry="10" fill="#E4E0D0" stroke="#C8C4B0" strokeWidth="1.5" />
      {/* Yogurt surface */}
      <ellipse cx="50" cy="36" rx="26" ry="8" fill="#FAFAF2" />
      {/* Pink swirl */}
      <path d="M 42 34 Q 50 30 58 36 Q 56 40 50 38 Q 44 36 46 32" fill="none" stroke="#E06090" strokeWidth="2.5" strokeLinecap="round" />
      {/* Berry circles */}
      <circle cx="36" cy="38" r="3.5" fill="#E83060" />
      <circle cx="62" cy="34" r="3" fill="#E83060" />
      <circle cx="52" cy="42" r="2.5" fill="#C82050" />
      {/* Label rectangle */}
      <rect x="22" y="54" width="56" height="20" rx="4" fill="#E8E4D4" stroke="#C8C4B0" strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="38" cy="38" rx="5" ry="3" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}

function PopcornArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[
        [22, 28, 14, 9],
        [44, 20, 12, 8],
        [65, 24, 13, 8],
        [80, 38, 11, 8],
        [14, 50, 13, 9],
        [36, 48, 14, 10],
        [58, 44, 12, 8],
        [76, 58, 12, 8],
        [26, 68, 13, 9],
      ].map(([cx, cy, rx, ry], i) => {
        const bg = i % 2 === 0 ? "#FFF0A8" : "#FAE870";
        return (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={bg} stroke="#D8C040" strokeWidth="1" />
            <ellipse cx={cx - rx * 0.3} cy={cy - ry * 0.3} rx={rx * 0.35} ry={ry * 0.35} fill="rgba(255,255,255,0.65)" />
          </g>
        );
      })}
    </svg>
  );
}

function ChocolateArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cc-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A3818" />
          <stop offset="100%" stopColor="#3C1808" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="91" rx="38" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Bar */}
      <rect x="10" y="20" width="80" height="62" rx="6" fill="url(#cc-body)" stroke="#2A1004" strokeWidth="1.5" />
      {/* Grid lines — 2 vertical, 1 horizontal = 6 segments */}
      <line x1="10" y1="51" x2="90" y2="51" stroke="#2A1004" strokeWidth="2" />
      <line x1="37" y1="20" x2="37" y2="82" stroke="#2A1004" strokeWidth="2" />
      <line x1="63" y1="20" x2="63" y2="82" stroke="#2A1004" strokeWidth="2" />
      {/* Top-left corner highlight */}
      <path d="M 12 22 L 36 22 L 12 50 Z" fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}

// ─── Drink Kitchen ────────────────────────────────────────────────────────────

function CoffeeArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cof-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8C8B0" />
          <stop offset="45%" stopColor="#F8F2E8" />
          <stop offset="100%" stopColor="#C8B898" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="92" rx="25" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Mug body */}
      <path d="M 28 44 L 28 76 Q 30 85 50 85 Q 70 85 72 76 L 72 44 Z" fill="url(#cof-body)" />
      {/* Body outline */}
      <path d="M 28 44 L 28 76 Q 30 85 50 85 Q 70 85 72 76 L 72 44" fill="none" stroke="#A88860" strokeWidth="1.5" />
      {/* Top rim */}
      <ellipse cx="50" cy="44" rx="22" ry="7" fill="#E8DCF0" stroke="#A88860" strokeWidth="1.5" />
      {/* Coffee inside */}
      <ellipse cx="50" cy="44" rx="18" ry="5.5" fill="#2C1004" />
      {/* Cream swirl */}
      <path d="M 40 42 Q 50 36 60 42 Q 56 50 50 48 Q 44 46 40 42 Z" fill="#E8D0A0" opacity="0.90" />
      {/* Handle outer */}
      <path d="M 72 54 Q 90 54 90 65 Q 90 76 72 76" fill="none" stroke="#C0A878" strokeWidth="7" strokeLinecap="round" />
      {/* Handle inner highlight */}
      <path d="M 72 54 Q 86 54 86 65 Q 86 76 72 76" fill="none" stroke="#F0E8D8" strokeWidth="3.5" strokeLinecap="round" />
      {/* Left highlight */}
      <path d="M 33 50 L 33 78" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Steam */}
      <path d="M 38 30 Q 34 22 38 14" fill="none" stroke="rgba(170,150,130,0.55)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 26 Q 46 18 50 10" fill="none" stroke="rgba(170,150,130,0.55)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 62 30 Q 58 22 62 14" fill="none" stroke="rgba(170,150,130,0.55)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function TeaArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tea-cup" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4C8A8" />
          <stop offset="45%" stopColor="#F8F4EC" />
          <stop offset="100%" stopColor="#C4B898" />
        </linearGradient>
      </defs>
      {/* Saucer shadow */}
      <ellipse cx="50" cy="94" rx="30" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Saucer */}
      <ellipse cx="50" cy="84" rx="30" ry="8" fill="#E8E0CC" stroke="#C0B898" strokeWidth="1.5" />
      <ellipse cx="50" cy="84" rx="18" ry="5" fill="#DDD5C0" />
      {/* Cup body */}
      <path d="M 32 54 Q 30 72 34 78 Q 42 82 50 82 Q 58 82 66 78 Q 70 72 68 54 Z" fill="url(#tea-cup)" />
      <path d="M 32 54 Q 30 72 34 78 Q 42 82 50 82 Q 58 82 66 78 Q 70 72 68 54" fill="none" stroke="#A89870" strokeWidth="1.5" />
      {/* Top rim */}
      <ellipse cx="50" cy="54" rx="18" ry="6" fill="#E4DCF0" stroke="#A89870" strokeWidth="1.5" />
      {/* Tea inside */}
      <ellipse cx="50" cy="54" rx="14" ry="4.5" fill="#B87820" />
      <ellipse cx="44" cy="52" rx="4" ry="2" fill="rgba(255,220,120,0.55)" transform="rotate(-15 44 52)" />
      {/* Tea bag string over rim */}
      <path d="M 58 40 Q 62 47 60 54" fill="none" stroke="#7A5018" strokeWidth="1.8" strokeLinecap="round" />
      {/* Tea bag */}
      <rect x="53" y="33" width="12" height="10" rx="2.5" fill="#C89848" stroke="#7A5018" strokeWidth="1.2" />
      <path d="M 56 36 L 62 40" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
      {/* Handle */}
      <path d="M 68 60 Q 80 60 80 68 Q 80 76 68 76" fill="none" stroke="#B8A888" strokeWidth="6" strokeLinecap="round" />
      <path d="M 68 60 Q 77 60 77 68 Q 77 76 68 76" fill="none" stroke="#F4EEE4" strokeWidth="3" strokeLinecap="round" />
      {/* Left highlight */}
      <path d="M 36 58 L 36 74" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function JuiceArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jc-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E88020" />
          <stop offset="50%" stopColor="#FFD060" />
          <stop offset="100%" stopColor="#D07018" />
        </linearGradient>
        <linearGradient id="jc-glass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="92" rx="20" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Glass body filled with juice */}
      <path d="M 33 24 L 31 80 Q 31 87 50 87 Q 69 87 69 80 L 67 24 Z" fill="url(#jc-fill)" />
      {/* Glass overlay (transparent sheen) */}
      <path d="M 33 24 L 31 80 Q 31 87 50 87 Q 69 87 69 80 L 67 24 Z" fill="url(#jc-glass)" />
      {/* Outline */}
      <path d="M 33 24 L 31 80 Q 31 87 50 87 Q 69 87 69 80 L 67 24" fill="none" stroke="#B06018" strokeWidth="1.5" />
      {/* Top rim */}
      <ellipse cx="50" cy="24" rx="17" ry="5.5" fill="#FFE090" stroke="#C07020" strokeWidth="1.5" />
      {/* Left glass highlight */}
      <path d="M 37 30 L 35 78" fill="none" stroke="rgba(255,255,255,0.60)" strokeWidth="4" strokeLinecap="round" />
      {/* Right edge shadow */}
      <path d="M 65 30 L 64 78" fill="none" stroke="rgba(160,80,0,0.25)" strokeWidth="3" strokeLinecap="round" />
      {/* Orange slice on rim */}
      <circle cx="63" cy="22" r="11" fill="#FF9020" stroke="#C06010" strokeWidth="1" />
      <circle cx="63" cy="22" r="8.5" fill="white" />
      <circle cx="63" cy="22" r="6.5" fill="#FFAE30" />
      {Array.from({ length: 6 }, (_, i) => {
        const a = (i * 60) * Math.PI / 180;
        return <line key={i} x1="63" y1="22" x2={63 + 6.5 * Math.cos(a)} y2={22 + 6.5 * Math.sin(a)} stroke="rgba(190,90,0,0.38)" strokeWidth="0.9" />;
      })}
      {/* Straw */}
      <rect x="61" y="6" width="5" height="56" rx="2.5" fill="#FF5878" stroke="#CC2848" strokeWidth="1" />
      <path d="M 61 6 L 61 26" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SmoothieArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sm-cup" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B020C0" />
          <stop offset="50%" stopColor="#E850D8" />
          <stop offset="100%" stopColor="#9010A8" />
        </linearGradient>
        <linearGradient id="sm-dome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(200,180,220,0.30)" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="93" rx="22" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Cup body — tapered (wider at top) */}
      <path d="M 34 44 L 38 82 Q 38 88 50 88 Q 62 88 62 82 L 66 44 Z" fill="url(#sm-cup)" />
      <path d="M 34 44 L 38 82 Q 38 88 50 88 Q 62 88 62 82 L 66 44" fill="none" stroke="#6808A0" strokeWidth="1.5" />
      {/* Left highlight on cup */}
      <path d="M 38 50 L 40 80" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Fruit bits visible through cup */}
      <circle cx="44" cy="68" r="4.5" fill="#FF3888" opacity="0.70" />
      <circle cx="56" cy="72" r="3.5" fill="#FF80C0" opacity="0.70" />
      <circle cx="50" cy="60" r="3" fill="#CC10A0" opacity="0.70" />
      {/* Dome lid */}
      <path d="M 34 44 Q 34 30 50 28 Q 66 30 66 44 Z" fill="url(#sm-dome)" stroke="#9010A8" strokeWidth="1.5" />
      {/* Dome highlight */}
      <path d="M 38 40 Q 42 32 50 30" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rim between dome and cup */}
      <ellipse cx="50" cy="44" rx="16" ry="4" fill="rgba(255,255,255,0.18)" stroke="#8010A0" strokeWidth="1.2" />
      {/* Straw */}
      <rect x="52" y="8" width="5" height="58" rx="2.5" fill="#FF80E0" stroke="#C040C0" strokeWidth="1" />
      <path d="M 52 8 L 52 28" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SodaArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sd-can" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1868C0" />
          <stop offset="35%" stopColor="#3898E8" />
          <stop offset="65%" stopColor="#2080D8" />
          <stop offset="100%" stopColor="#1058A8" />
        </linearGradient>
        <linearGradient id="sd-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0A8B8" />
          <stop offset="50%" stopColor="#D8DCE4" />
          <stop offset="100%" stopColor="#909AAA" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="93" rx="20" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Can body */}
      <path d="M 30 28 L 30 80 Q 30 88 50 88 Q 70 88 70 80 L 70 28 Z" fill="url(#sd-can)" />
      {/* Outline */}
      <path d="M 30 28 L 30 80 Q 30 88 50 88 Q 70 88 70 80 L 70 28" fill="none" stroke="#0848A0" strokeWidth="1.5" />
      {/* White label stripe */}
      <rect x="30" y="46" width="40" height="18" fill="rgba(255,255,255,0.18)" />
      {/* Bubbles on label */}
      <circle cx="40" cy="55" r="3" fill="rgba(255,255,255,0.45)" />
      <circle cx="50" cy="52" r="4" fill="rgba(255,255,255,0.45)" />
      <circle cx="60" cy="56" r="3" fill="rgba(255,255,255,0.45)" />
      {/* Left highlight */}
      <path d="M 34 32 L 34 82" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="4" strokeLinecap="round" />
      {/* Top lid */}
      <ellipse cx="50" cy="28" rx="20" ry="6" fill="url(#sd-top)" stroke="#808898" strokeWidth="1.2" />
      {/* Pull ring */}
      <ellipse cx="54" cy="24" rx="6" ry="3" fill="none" stroke="#A0A8B8" strokeWidth="2" />
      <line x1="50" y1="25" x2="54" y2="24" stroke="#A0A8B8" strokeWidth="2" strokeLinecap="round" />
      {/* Bottom curve */}
      <ellipse cx="50" cy="80" rx="20" ry="6" fill="url(#sd-top)" stroke="#808898" strokeWidth="1.2" />
    </svg>
  );
}

function WaterArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wt-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(160,210,240,0.80)" />
          <stop offset="40%" stopColor="rgba(210,238,255,0.90)" />
          <stop offset="100%" stopColor="rgba(130,190,225,0.80)" />
        </linearGradient>
        <linearGradient id="wt-label" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B0D8F0" />
          <stop offset="50%" stopColor="#D8F0FF" />
          <stop offset="100%" stopColor="#A0C8E0" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="93" rx="18" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Bottle body */}
      <path d="M 35 36 L 33 78 Q 33 88 50 88 Q 67 88 67 78 L 65 36 Z" fill="url(#wt-body)" />
      {/* Outline */}
      <path d="M 35 36 L 33 78 Q 33 88 50 88 Q 67 88 67 78 L 65 36" fill="none" stroke="#5898C0" strokeWidth="1.5" />
      {/* Bottle neck */}
      <rect x="41" y="20" width="18" height="18" rx="4" fill="rgba(190,225,245,0.85)" stroke="#5898C0" strokeWidth="1.5" />
      {/* Cap */}
      <rect x="42" y="12" width="16" height="12" rx="4" fill="#2878B0" stroke="#1858A0" strokeWidth="1.2" />
      <rect x="42" y="12" width="16" height="5" rx="3" fill="rgba(255,255,255,0.30)" />
      {/* Label */}
      <rect x="34" y="48" width="32" height="24" rx="3" fill="url(#wt-label)" opacity="0.90" />
      {/* Label water wave decoration */}
      <path d="M 36 58 Q 42 54 50 58 Q 58 62 64 58" fill="none" stroke="#60A8D0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 36 63 Q 42 59 50 63 Q 58 67 64 63" fill="none" stroke="#60A8D0" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left highlight */}
      <path d="M 37 40 L 36 80" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Neck highlight */}
      <path d="M 43 22 L 43 34" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function WineArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wn-bowl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.30)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.20)" />
        </linearGradient>
        <linearGradient id="wn-wine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A1030" />
          <stop offset="50%" stopColor="#C83050" />
          <stop offset="100%" stopColor="#6A0828" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="94" rx="24" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Base */}
      <ellipse cx="50" cy="88" rx="20" ry="5" fill="#D8D0C8" stroke="#A89888" strokeWidth="1.5" />
      {/* Stem */}
      <rect x="47" y="66" width="6" height="24" rx="3" fill="#D8D0C8" stroke="#A89888" strokeWidth="1.2" />
      {/* Glass bowl — outlined trapezoid shape */}
      <path d="M 30 22 Q 28 50 34 62 Q 40 70 50 70 Q 60 70 66 62 Q 72 50 70 22 Z" fill="rgba(220,240,250,0.25)" stroke="#A0A0B0" strokeWidth="1.5" />
      {/* Wine fill */}
      <path d="M 31 44 Q 30 56 35 63 Q 41 70 50 70 Q 59 70 65 63 Q 70 56 69 44 Z" fill="url(#wn-wine)" />
      {/* Wine surface */}
      <ellipse cx="50" cy="44" rx="19" ry="5" fill="#D84060" />
      {/* Wine shimmer */}
      <ellipse cx="42" cy="42" rx="7" ry="2.5" fill="rgba(255,180,190,0.45)" transform="rotate(-10 42 42)" />
      {/* Glass left highlight */}
      <path d="M 32 26 Q 31 46 34 60" fill="none" stroke="rgba(255,255,255,0.60)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Glass overlay sheen */}
      <path d="M 30 22 Q 28 50 34 62 Q 40 70 50 70 Q 60 70 66 62 Q 72 50 70 22 Z" fill="url(#wn-bowl)" />
    </svg>
  );
}

function BobaArt() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bb-cup" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(240,210,170,0.85)" />
          <stop offset="45%" stopColor="rgba(255,235,200,0.90)" />
          <stop offset="100%" stopColor="rgba(210,180,140,0.85)" />
        </linearGradient>
        <linearGradient id="bb-dome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.60)" />
          <stop offset="100%" stopColor="rgba(210,200,190,0.30)" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="50" cy="93" rx="21" ry="5" fill="rgba(0,0,0,0.12)" />
      {/* Cup body — wider at top, tapered */}
      <path d="M 31 46 L 35 82 Q 35 89 50 89 Q 65 89 65 82 L 69 46 Z" fill="url(#bb-cup)" />
      <path d="M 31 46 L 35 82 Q 35 89 50 89 Q 65 89 65 82 L 69 46" fill="none" stroke="#A07838" strokeWidth="1.5" />
      {/* Boba balls visible through cup */}
      {([[38,76],[50,80],[62,76],[42,68],[58,70],[50,62]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5.5" fill="#2A1408" />
          <ellipse cx={cx-1.5} cy={cy-1.5} rx="1.8" ry="1.2" fill="rgba(200,140,80,0.45)" />
        </g>
      ))}
      {/* Left highlight */}
      <path d="M 35 52 L 37 80" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Dome lid */}
      <path d="M 31 46 Q 31 30 50 28 Q 69 30 69 46 Z" fill="url(#bb-dome)" stroke="#A07838" strokeWidth="1.5" />
      {/* Dome highlight */}
      <path d="M 35 42 Q 40 33 50 30" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rim */}
      <ellipse cx="50" cy="46" rx="19" ry="5" fill="rgba(255,255,255,0.20)" stroke="#908060" strokeWidth="1.2" />
      {/* Thick boba straw */}
      <rect x="48" y="6" width="8" height="54" rx="4" fill="#D09050" stroke="#A06820" strokeWidth="1.2" />
      <path d="M 49 6 L 49 28" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Export Map ───────────────────────────────────────────────────────────────

export const FOOD_ART: Record<string, React.FC> = {
  chicken: ChickenArt, beef: BeefArt, salmon: SalmonArt, tofu: TofuArt,
  pasta: PastaArt, rice: RiceArt, eggs: EggsArt, broccoli: BroccoliArt,
  tomato: TomatoArt, garlic: GarlicArt, onion: OnionArt, potato: PotatoArt,
  nuts: NutsArt, cheese: CheeseArt, crackers: CrackersArt, apple: AppleArt,
  banana: BananaArt, yogurt: YogurtArt, popcorn: PopcornArt, chocolate: ChocolateArt,
  coffee: CoffeeArt, tea: TeaArt, juice: JuiceArt, smoothie: SmoothieArt,
  soda: SodaArt, water: WaterArt, wine: WineArt, boba: BobaArt,
};
