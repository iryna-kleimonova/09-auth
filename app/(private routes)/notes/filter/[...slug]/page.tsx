import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from '@tanstack/react-query';
import { fetchServerNotes as fetchNotes } from '@/lib/api/serverApi';
import NotesClient from './Notes.client';
import { NoteTag } from '@/types/note';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = slug?.[0];
  const tag = !res || res.toLowerCase() === 'all' ? 'All' : res;

  const title = `Notes — ${tag} | NoteHub`;
  const description = `Browse your notes filtered by: ${tag}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://08-zustand-oc4p.vercel.app/notes/filter/${tag}`,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default async function NotesPage({ params }: Props) {
  const slug = (await params).slug?.[0];

  const tag =
    !slug || slug.toLowerCase() === 'all' ? undefined : (slug as NoteTag);

  const queryClient = new QueryClient();

  const initialNotes = await fetchNotes({
    page: 1,
    perPage: 12,
    search: '',
    tag,
  });

  queryClient.setQueryData(['notes', 1, '', tag ?? 'all'], initialNotes);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialNotes={initialNotes} initialTag={tag} />
    </HydrationBoundary>
  );
}
