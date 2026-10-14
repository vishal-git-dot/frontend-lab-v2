/*
  Frontend Lab — experiment registry.

  This is plain data, loaded with a <script> tag (not fetch), so the
  gallery works even when index.html is opened straight from disk —
  no local server required.

  To add a new experiment:
    1. Duplicate any folder under /experiments/<category>/ and build
       your snippet in its index.html / style.css / script.js.
    2. Add one object below pointing at that folder.
  That's it — no build step, no generator script to run.
*/

const EXPERIMENTS = [
  {
    id: "magnetic-button",
    title: "Magnetic Button",
    category: "buttons",
    description:
      "A button that leans toward the cursor and springs back on release, using pointer tracking and a soft transform.",
    path: "experiments/buttons/magnetic-button/",
  },
  {
    id: "gradient-border-button",
    title: "Gradient Border Button",
    category: "buttons",
    description:
      "A button outlined by a slowly rotating conic gradient that brightens on hover.",
    path: "experiments/buttons/gradient-border-button/",
  },
  {
    id: "ripple-button",
    title: "Ripple Click Button",
    category: "buttons",
    description:
      "A material-style ripple that expands outward from the exact point you click.",
    path: "experiments/buttons/ripple-button/",
  },
  {
    id: "tilt-card",
    title: "Tilt Card",
    category: "cards",
    description:
      "A card that tilts in 3D toward the cursor, driven by perspective and rotateX/rotateY.",
    path: "experiments/cards/tilt-card/",
  },
  {
    id: "spotlight-card",
    title: "Spotlight Card",
    category: "cards",
    description:
      "A card with a soft light that follows the cursor across its surface, positioned with CSS custom properties.",
    path: "experiments/cards/spotlight-card/",
  },
  {
    id: "flip-card",
    title: "Flip Card",
    category: "cards",
    description:
      "A two-sided card that flips 180° on hover to reveal detail on the back.",
    path: "experiments/cards/flip-card/",
  },
  {
    id: "dot-pulse-loader",
    title: "Dot Pulse Loader",
    category: "loaders",
    description:
      "Three dots pulsing in a staggered wave — a lightweight, dependency-free loading indicator.",
    path: "experiments/loaders/dot-pulse-loader/",
  },
  {
    id: "gradient-ring-loader",
    title: "Gradient Ring Loader",
    category: "loaders",
    description:
      "A spinning ring with a soft gradient tail, built from a single masked conic gradient.",
    path: "experiments/loaders/gradient-ring-loader/",
  },
  {
    id: "elastic-tab-bar",
    title: "Elastic Tab Bar",
    category: "navigation",
    description:
      "A pill-shaped tab bar where the active indicator slides and stretches to reach the selected tab.",
    path: "experiments/navigation/elastic-tab-bar/",
  },
  {
    id: "morph-hamburger-menu",
    title: "Morphing Hamburger Menu",
    category: "navigation",
    description:
      "A hamburger icon that morphs into a close icon as a menu panel slides into view.",
    path: "experiments/navigation/morph-hamburger-menu/",
  },
  {
    id: "underline-sweep-link",
    title: "Underline Sweep",
    category: "hover-effects",
    description:
      "A link underline that sweeps in from one edge on hover and reverses out on exit.",
    path: "experiments/hover-effects/underline-sweep-link/",
  },
  {
    id: "image-zoom-overlay",
    title: "Image Zoom Overlay",
    category: "hover-effects",
    description:
      "An image that zooms in slightly and reveals a caption overlay on hover.",
    path: "experiments/hover-effects/image-zoom-overlay/",
  },
  {
    id: "glitch-text-hover",
    title: "Glitch Text",
    category: "hover-effects",
    description:
      "Text that briefly splits into offset color layers when you hover over it.",
    path: "experiments/hover-effects/glitch-text-hover/",
  },
  {
    id: "animated-toggle-switch",
    title: "Animated Toggle Switch",
    category: "micro-interactions",
    description:
      "An on/off switch with a smooth thumb transition and a subtle track color change.",
    path: "experiments/micro-interactions/animated-toggle-switch/",
  },
  {
    id: "confetti-burst-button",
    title: "Confetti Burst Button",
    category: "micro-interactions",
    description:
      "A button that bursts a handful of small particles outward on click.",
    path: "experiments/micro-interactions/confetti-burst-button/",
  },
    {
    id: "glow-threads",
    title: "Glow Threads",
    category: "micro-interactions",
    description:
      "",
    path: "experiments/micro-interactions/glow-threads/",
  },
  {
  id: "3d-press-button",
  title: "3D Press Button",
  category: "buttons",
  description:
    "A raised 3D button with layered shadows, smooth hover effects, and a satisfying press-down animation.",
  path: "experiments/buttons/3d-press-button/",
},
];

const CATEGORIES = [
  { id: "buttons", label: "Buttons" },
  { id: "cards", label: "Cards" },
  { id: "loaders", label: "Loaders" },
  { id: "navigation", label: "Navigation" },
  { id: "hover-effects", label: "Hover Effects" },
  { id: "micro-interactions", label: "Micro-interactions" },
];
