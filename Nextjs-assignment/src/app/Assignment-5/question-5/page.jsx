// 5. Create a Next.js component that fetches data from a public API (like JSONPlaceholder) using Axios and displays the results on the page. Use the App Router conventions and perform the data fetching on the server side.


// app/users/page.jsx
import axios from "axios";
import "@/app/styles/welcome5.css"; // Make sure the path is correct

// Server-side data fetching using Axios
const FetchUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // Handle errors gracefully
  }
};

const UsersPage = async () => {
  const users = await FetchUsers();

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        5. Create a Next.js component that fetches data from a public API (like
        JSONPlaceholder) using Axios and displays the results on the page. Use
        the App Router conventions and perform the data fetching on the server
        side.
      </p>

      <main className="container-for-user">
        <h1>Users List (SSR with Axios)</h1>

        {users ? (
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "red" }}>Failed to load users.</p>
        )}
      </main>
    </div>
  );
};

export default UsersPage;
