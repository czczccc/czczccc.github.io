import profile from "@/data/profile.json";

type LinkItem = {
  label: string;
  href: string;
  kind: "github" | "twitter" | "youtube" | "bilibili" | "email";
  external: boolean;
};

type ProfileData = {
  name: string;
  avatarText?: string;
  bio: string;
  links: LinkItem[];
};

const data = profile as ProfileData;

function resolveAvatarText(input: ProfileData) {
  const manualText = input.avatarText?.trim();

  if (manualText) {
    return manualText.slice(0, 2).toUpperCase();
  }

  return input.name.trim().slice(0, 1).toUpperCase();
}

function SocialIcon({ kind }: { kind: LinkItem["kind"] }) {
  switch (kind) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.93.68 1.87 0 1.35-.01 2.43-.01 2.76 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M18.9 2H22l-6.77 7.74L23.2 22h-6.27l-4.9-7.49L5.48 22H2.36l7.24-8.28L1.95 2h6.42l4.43 6.81L18.9 2Zm-1.1 18h1.74L7.42 3.9H5.55L17.8 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.12C17.63 4.57 12 4.57 12 4.57s-5.63 0-7.48.5a2.98 2.98 0 0 0-2.1 2.12c-.5 1.88-.5 5.81-.5 5.81s0 3.93.5 5.81a2.98 2.98 0 0 0 2.1 2.12c1.85.5 7.48.5 7.48.5s5.63 0 7.48-.5a2.98 2.98 0 0 0 2.1-2.12c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81ZM9.75 16.58V9.42L15.75 13l-6 3.58Z"
            fill="currentColor"
          />
        </svg>
      );
    case "bilibili":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7.2 4.5 9.3 2.4a.9.9 0 1 1 1.28 1.28L8.48 5.78H15.5l-2.08-2.1A.9.9 0 1 1 14.7 2.4l2.1 2.1h1.36c1.9 0 3.44 1.56 3.44 3.49v8.52c0 1.93-1.54 3.49-3.44 3.49H5.84c-1.9 0-3.44-1.56-3.44-3.49V7.99C2.4 6.06 3.94 4.5 5.84 4.5H7.2Zm10.96 2.1H5.84c-.75 0-1.36.63-1.36 1.39v8.52c0 .76.61 1.39 1.36 1.39h12.32c.75 0 1.36-.63 1.36-1.39V7.99c0-.76-.61-1.39-1.36-1.39ZM9.1 10.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm5.8 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.4-.65a.85.85 0 0 0-.56.2L12 12.28l7.16-5.98a.85.85 0 0 0-.56-.2H5.4Zm13.5 3.14-5.6 4.68a2.02 2.02 0 0 1-2.6 0L5.1 9.24v8.01c0 .36.29.65.65.65h12.5c.36 0 .65-.29.65-.65V9.24Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const avatarText = resolveAvatarText(data);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="profile-name">
        <div className="avatar" aria-hidden="true">
          <span>{avatarText}</span>
        </div>

        <div className="profile-copy">
          <p className="eyebrow">Personal hub</p>
          <h1 id="profile-name">{data.name}</h1>
          <p className="bio">{data.bio}</p>
        </div>

        <nav aria-label="Personal links">
          <ul className="link-list">
            {data.links.map((link) => (
              <li key={link.label}>
                <a
                  className="link-button"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  aria-label={`Open ${link.label}`}
                >
                  <span className="link-icon">
                    <SocialIcon kind={link.kind} />
                  </span>
                  <span className="link-label">{link.label}</span>
                  <span className="link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
