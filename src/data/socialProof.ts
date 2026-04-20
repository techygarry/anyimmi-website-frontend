export interface SocialProofEntry {
  name: string;
  city: string;
  tier: 'TOOLKIT' | 'FIRM' | 'FOUNDER';
  ago: string;
}

// 30 curated rotations.
// Name mix: 12 South Asian, 8 Filipino/Vietnamese/Chinese,
// 6 African/Middle Eastern, 4 Anglo.
// Tier mix: 15 TOOLKIT (50%), 9 FIRM (30%), 6 FOUNDER (20%).
// Cities: Canadian RCIC hubs.
export const SOCIAL_PROOF_ROTATIONS: SocialProofEntry[] = [
  // South Asian (12)
  { name: 'Priya M.',       city: 'Brampton, ON',     tier: 'FOUNDER', ago: '2 minutes ago' },
  { name: 'Harpreet S.',    city: 'Surrey, BC',       tier: 'TOOLKIT', ago: 'just now' },
  { name: 'Rajdeep K.',     city: 'Mississauga, ON',  tier: 'FIRM',    ago: '5 minutes ago' },
  { name: 'Maya P.',        city: 'Edmonton, AB',     tier: 'TOOLKIT', ago: '12 minutes ago' },
  { name: 'Aman D.',        city: 'Calgary, AB',      tier: 'FOUNDER', ago: 'an hour ago' },
  { name: 'Neha B.',        city: 'Toronto, ON',      tier: 'TOOLKIT', ago: '3 minutes ago' },
  { name: 'Sukhwinder G.',  city: 'Winnipeg, MB',     tier: 'FIRM',    ago: '22 minutes ago' },
  { name: 'Inderpreet K.',  city: 'Surrey, BC',       tier: 'TOOLKIT', ago: '7 minutes ago' },
  { name: 'Gurpreet S.',    city: 'Brampton, ON',     tier: 'FOUNDER', ago: '2 hours ago' },
  { name: 'Vishal R.',      city: 'Vancouver, BC',    tier: 'TOOLKIT', ago: '14 minutes ago' },
  { name: 'Simran J.',      city: 'Ottawa, ON',       tier: 'FIRM',    ago: '38 minutes ago' },
  { name: 'Jasmeen K.',     city: 'Saskatoon, SK',    tier: 'TOOLKIT', ago: 'just now' },

  // Filipino / Vietnamese / Chinese (8)
  { name: 'Maria C.',       city: 'Toronto, ON',      tier: 'FIRM',    ago: '6 minutes ago' },
  { name: 'Mei L.',         city: 'Vancouver, BC',    tier: 'TOOLKIT', ago: '18 minutes ago' },
  { name: 'Jin W.',         city: 'Calgary, AB',      tier: 'FOUNDER', ago: '45 minutes ago' },
  { name: 'Trang N.',       city: 'Mississauga, ON',  tier: 'TOOLKIT', ago: '9 minutes ago' },
  { name: 'Carlos D.',      city: 'Edmonton, AB',     tier: 'FIRM',    ago: '2 minutes ago' },
  { name: 'Linh P.',        city: 'Halifax, NS',      tier: 'TOOLKIT', ago: 'an hour ago' },
  { name: 'Yuki T.',        city: 'London, ON',       tier: 'FIRM',    ago: '27 minutes ago' },
  { name: 'Wei Z.',         city: 'Toronto, ON',      tier: 'FOUNDER', ago: '3 hours ago' },

  // African / Middle Eastern (6)
  { name: 'Chidi O.',       city: 'Ottawa, ON',       tier: 'TOOLKIT', ago: '4 minutes ago' },
  { name: 'Fatima H.',      city: 'Brampton, ON',     tier: 'FIRM',    ago: '33 minutes ago' },
  { name: 'Ahmed K.',       city: 'Calgary, AB',      tier: 'TOOLKIT', ago: '11 minutes ago' },
  { name: 'Amina Y.',       city: 'Winnipeg, MB',     tier: 'FOUNDER', ago: '90 minutes ago' },
  { name: 'Omar J.',        city: 'Mississauga, ON',  tier: 'TOOLKIT', ago: 'just now' },
  { name: 'Aisha B.',       city: 'Saskatoon, SK',    tier: 'FIRM',    ago: '16 minutes ago' },

  // Anglo (4)
  { name: 'James W.',       city: 'London, ON',       tier: 'TOOLKIT', ago: '8 minutes ago' },
  { name: 'Sarah C.',       city: 'Halifax, NS',      tier: 'FIRM',    ago: '24 minutes ago' },
  { name: 'Michael T.',     city: 'Ottawa, ON',       tier: 'TOOLKIT', ago: '2 hours ago' },
  { name: 'Emily R.',       city: 'Vancouver, BC',    tier: 'TOOLKIT', ago: '13 minutes ago' },
];
