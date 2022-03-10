import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setStatus('sending');
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    });

    const statusCode = response.status;
    const data = await response.json();
    console.log(data);

    if (statusCode < 200 || statusCode > 299) {
      setStatus('error');
      setMessage(data.message);
    } else {
      setStatus('success');
      setMessage('Thank you for signing up for the newsletter.');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div>
        {status === 'sending' && (
          <div className="text-white font-bold">sending...</div>
        )}
        {status === 'error' && (
          <div
            className="text-white font-bold"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            className="text-white font-bold"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status !== 'success' && (
        <>
          <label className="text-white block">
            Email:
          </label>
          <div className="flex flex-row flex-wrap">
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="form-input px-4 py-2 rounded-lg w-full md:w-auto"
            />
            <input type="submit" value="Submit" className="bg-white px-4 py-2 rounded-lg mt-4 md:mt-0 md:ml-4 w-full md:w-auto"  />
          </div>
        </>
      )}
    </form>
  );
}