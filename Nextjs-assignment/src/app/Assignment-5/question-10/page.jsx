// (14.) Question 10. Create a higher-order component (HOC) named withAuth that restricts access to a component only to authenticated users. Implement this HOC on a sample component and demonstrate how it protects routes or pages in a Next.js application.


'use client';

import withAuth from '@/components/withAuth';
import ProtectedComponent from '@/components/ProtectedCompnent';


const Page = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <ProtectedComponent />
    </div>
  );
};

export default withAuth(Page);