import React from 'react';

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  return (
    <div className="w-full h-full min-h-[500px] border p-4 bg-gray-50 rounded">
      <h2 className="text-xl font-bold mb-4">Email Editor Placeholder</h2>
      <p>Editing email for subject: {subjectTitle}</p>
      {/* TODO: Add regular email editor package such as react-email-editor */}
    </div>
  );
};

export default Emaileditor;
