// (15.) Question 11. Build a higher-order component (HOC) named withLogger that logs component lifecycle events like mounting, unmounting, and updating. Apply this HOC to a component and ensure the logs appear in the browser console.


'use client';

import withLogger from '@/components/withLogger';
import SampleComponent from '@/components/SampleComponent';

const LoggedSampleComponent = withLogger(SampleComponent);

export default function QuestionPage() {
  return (

    <>
    <div>
      <h1>Logger HOC Demo</h1>
      <LoggedSampleComponent message="Hello! Watch console for logs." />
    </div>
    </>
    
  );
}