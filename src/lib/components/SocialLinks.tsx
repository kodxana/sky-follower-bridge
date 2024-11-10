const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center">
      <a
        href="https://github.com/kawamataryo/sky-follower-bridge"
        target="_blank"
        rel="noreferrer"
        className="bg-base-100 p-2 rounded-full hover:opacity-80 w-8 h-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <a
        href="https://bsky.app/profile/kawamataryo.bsky.social"
        target="_blank"
        rel="noreferrer"
        className="bg-base-100 p-2 rounded-full hover:opacity-80 w-8 h-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5.65 1.83c2.77 2.08 5.75 6.3 6.85 8.56 1.09-2.26 4.07-6.48 6.85-8.56 2-1.5 5.24-2.66 5.24 1.03 0 0.74-0.42 6.2-0.67 7.09-0.86 3.08-4.01 3.87-6.8 3.39 4.89 0.83 6.13 3.59 3.45 6.34-5.1 5.23-7.33-1.31-7.9-2.99-0.1-0.31-0.15-0.45-0.15-0.33 0-0.12-0.05 0.02-0.15 0.33-0.57 1.68-2.8 8.22-7.9 2.99-2.68-2.75-1.44-5.51 3.45-6.34-2.79 0.48-5.94-0.31-6.8-3.39-0.25-0.89-0.67-6.35-0.67-7.09 0-3.69 3.24-2.53 5.24-1.03z" />
        </svg>
      </a>
      <a
        href="https://twitter.com/KawamataRyo"
        target="_blank"
        rel="noreferrer"
        className="bg-base-100 p-2 rounded-full hover:opacity-80 w-8 h-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;