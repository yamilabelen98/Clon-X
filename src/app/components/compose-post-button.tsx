import React from 'react';
import { useFormStatus } from 'react-dom';

export  function ComposePostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end hover:bg-sky-600 transition-colors"
    >
      {pending ? 'Posteando...' : 'Postear'}
    </button>
  );
}
