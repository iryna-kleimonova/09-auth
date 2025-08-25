import css from '@/components/ProfilePage/ProfilePage.module.css';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'User Profile | NoteHub',
  description:
    'View and manage your user profile, update personal details and settings.',
  openGraph: {
    title: 'User Profile | NoteHub',
    description:
      'View and manage your user profile, update personal details and settings.',
    url: 'http://localhost:3001/profile',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub User Profile',
      },
    ],
    type: 'website',
  },
};

const Profile = () => {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src="Avatar"
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
