// Developer notes for the ETICO partner dashboard, written up from my KYC review,
// withdrawals and events / IPO handoff docs (September to October 2026).
// No customer data here, and no internal names, keys or account numbers.

export const eticoPartnerNotes = {
  title: 'ETICO Partner Dashboard',
  subtitle: 'How the brokerage back office works · Next.js, Supabase · 2026',

  brief: [
    "ETICO is a stock trading app, but the trading accounts themselves sit with a licensed brokerage, PAC Securities. Before anyone can trade, PAC has to check who they are and open a CSCS account for them. When an investor asks for money out, PAC is the one that pays it. This dashboard is where PAC's staff do all of that.",
    "It lives inside the same Next.js app as the investor side, under its own /partner area, and it is private. Below is how it works, without showing anyone's details.",
  ],

  sections: [
    {
      title: 'Signing in and keeping it locked down',
      points: [
        "Partner staff don't have normal ETICO accounts. The login is checked on the server against credentials kept in the hosting environment, using a constant-time comparison.",
        "A correct login sets a signed, httpOnly cookie that only works under /partner. It ends when the browser closes, and the signature carries a 12 hour expiry as a backstop.",
        'Login attempts are rate limited per IP, and every page and server action checks the session again before it reads or writes anything.',
        "Because database security stops a user from reading anyone else's profile, the dashboard reads and writes through a server-only service role. None of that ever reaches the browser.",
      ],
    },
    {
      title: 'KYC review: opening the trading account',
      points: [
        'When an investor finishes KYC on the app or the web (BVN check, settlement bank account, next of kin, selfie), they land in the review queue as "Awaiting review".',
        'The reviewer sees one list with Awaiting and All tabs and a search across every identifier they might be given. Opening someone shows everything PAC needs, their selfie through a short-lived signed link, and an Export PDF of the full record.',
        'Approving needs the CSCS number and the CHN. Saving them unlocks trading for that investor on both the app and the web straight away, because both read the same status.',
        'On approval the dashboard also asks the backend to link the CSCS number and CHN to the investor\'s account on PAC\'s side. A live progress panel shows each step as it actually happens, with the raw reply if PAC refuses and a retry button.',
        "Rejecting means ticking one or more reasons from a fixed list and adding a note if needed. The investor gets those reasons in the app, by push and by email, with a Redo KYC button that puts them back in the queue.",
        "Once approved, an account is final here. It can't be rejected or approved again, and the check happens inside the database update itself, so two reviewers acting at the same moment can't both change it.",
      ],
    },
    {
      title: 'Withdrawals: PAC pays, ETICO records',
      points: [
        "The investor's cash is held at PAC, so ETICO never moves the money. The investor asks to withdraw, PAC pays it to the bank account verified at KYC, and the dashboard is where that gets tracked.",
        "Before a request is saved, the server checks the investor's password (or app PIN) in the same request, then reads their balance live from PAC and holds back anything tied up in open buy orders. If PAC can't be read, the request is refused. It never guesses.",
        'Each request is saved with a snapshot of everything PAC needs and emailed to PAC as a branded ETICO × PAC PDF. A database rule allows only one pending request per investor.',
        "On the dashboard, PAC staff see Pending and All, search, export to CSV or PDF, and can resend the email. Then they mark a request paid with the payment reference, or reject it with a reason. Each decision is made once and the investor is told straight away.",
        "Payouts can only go to the verified settlement account. A database trigger stops anyone changing that account, or the PAC account ID, after approval, so a stolen login can't redirect the money.",
      ],
    },
    {
      title: 'IPO events',
      points: [
        "Offers like the Dangote Refinery IPO are set up as events. Investors only pick how many shares they want. Everything PAC's order form asks for comes from their verified profile.",
        "Each event gets a page on the dashboard with the totals, the live balance of the account the payments go into, and one row per subscriber with shares × price = amount paid.",
        "Staff export the list as CSV, place the orders with PAC, then mark each subscriber as placed. Anything missing on a profile is flagged so it doesn't slip through.",
        "Prices and totals are only ever worked out in the database. A payment that can't be confirmed stays as processing until it can be checked against the payment provider's history. It is never refunded on a guess.",
      ],
    },
    {
      title: 'Why it is built this way',
      points: [
        'Money and approval rules are enforced in the database (row locks, unique indexes, triggers and service-role-only functions), not just hidden in the UI.',
        "Every decision tells the investor in the app, by push to every device they're signed in on, and by email, so nobody is left wondering.",
        "The screenshots on this card are real, with names, emails, phone numbers, BVNs, account numbers, CSCS / CHN numbers and selfies blurred out before they went anywhere near this site.",
      ],
    },
  ],

  figures: {
    title: 'Screens',
    note: 'Personal details are blurred.',
    items: [
      { src: '/gallery/etico-partner/01.jpg', caption: 'KYC review queue with the customer details panel.' },
      { src: '/gallery/etico-partner/02.jpg', caption: 'An approved account, with the CSCS and CHN and the button that syncs them to PAC.' },
      { src: '/gallery/etico-partner/03.jpg', caption: 'Withdrawal requests with totals and payout details.' },
      { src: '/gallery/etico-partner/04.jpg', caption: 'A withdrawal with balances and the payout decision.' },
    ],
  },
};
