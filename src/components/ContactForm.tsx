'use client';

import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to send message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-card">
        <div className="text-center py-8">
          <div className="text-4xl mb-3">&#10003;</div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#0F2B46' }}>
            Message Sent!
          </h3>
          <p className="text-slate-500 mb-4">
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn contact-form__send"
            type="button"
          >
            <span className="contact-form__send-text">SEND ANOTHER</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="row g-3 contact-form__top">
          <div className="col-md-4">
            <label className="visually-hidden" htmlFor="c_name">Your Name</label>
            <input
              id="c_name"
              type="text"
              className="contact-form__input"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="visually-hidden" htmlFor="c_email">Your Email</label>
            <input
              id="c_email"
              type="email"
              className="contact-form__input"
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="visually-hidden" htmlFor="c_subject">Subject</label>
            <input
              id="c_subject"
              type="text"
              className="contact-form__input"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className="contact-form__middle">
          <label className="visually-hidden" htmlFor="c_message">Message</label>
          <textarea
            id="c_message"
            rows={4}
            className="contact-form__textarea"
            placeholder="Message (Tell us about your project)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {status === 'error' && (
          <p className="text-center" style={{ color: '#C8102E', fontSize: '14px', margin: '8px 0' }}>
            {errorMsg}
          </p>
        )}

        <div className="contact-form__footer">
          <button
            type="submit"
            className="btn contact-form__send"
            aria-label="Send"
            disabled={status === 'sending'}
            style={{ opacity: status === 'sending' ? 0.7 : 1 }}
          >
            <span className="contact-form__send-text">
              {status === 'sending' ? 'SENDING...' : 'SEND'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
