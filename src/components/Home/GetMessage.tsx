/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMessages } from '@/service/message';
import React from 'react';

const GetMessage = async () => {
  const data = await getMessages();

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h2>📩 Get Message</h2>

      {data?.ok === false ? (
        <p style={{ color: 'red' }}>❌ {data.error}</p>
      ) : (
        <ul style={{ paddingLeft: 0 }}>
          {data?.messages?.map((msg: any) => (
            <li key={msg.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
              👉 {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetMessage;
