// 2. Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users) using server-side rendering (SSR) with the App Router to handle errors gracefully. If the fetch request fails during SSR, display a user-friendly error message on the page. Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.


// ✅ Server Component - SSR + Retry Error Handling


import UserList from '@/app/Assignment-5/question-2/UserList';

const fetchUsers = async () => {
  try {
    const res = await fetch('https://randomuser.me/api/?results=10&nat=in', {
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    const users = data.results.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
    }));
    return { users };
  } catch (error) {
    return { error: 'Failed to load users. Please try again.' };
  }
};

const UsersPage = async () => {
  const { users, error } = await fetchUsers();

  return (
    <div>
      <p style={{ textAlign: 'center', margin: '2rem' }}>
        Question 2.Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users) using server-side rendering (SSR) with the App Router to handle errors gracefully. 
        If the fetch request fails during SSR, display a user-friendly error message on the page. Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.

      </p>

      <h1 style={{ textAlign: 'center' }}>Users</h1>
      <UserList initialUsers={users} initialError={error} />
    </div>
  );
};

export default UsersPage;
