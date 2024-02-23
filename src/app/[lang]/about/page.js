import { getDictionary } from '@/dictionaries';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <h1>{`${dict.about.title} (${lang})`}</h1>
      <p>{dict.about.description}</p>
    </main>
  );
}
