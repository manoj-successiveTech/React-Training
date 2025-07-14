// (16) Question 12. Create a higher-order component (HOC) named with Data Fetching where the data fetching happens in a Server Component using SSR. The fetched data should then be passed as props to a Client Component wrapped by the HOC, which displays the data.


import withDataFetching from '@/components/withDataFetching';
import DataDisplay from '@/components/DataDisplay';

// Wrap the client component with HOC


const DataDisplayWithFetching = withDataFetching(DataDisplay);

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (


    <main>
        <div>
      <h1>SSR Data Fetching with HOC</h1>
      <DataDisplayWithFetching data={data} />
      </div>
    </main>
  );
}