'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '../../data/site';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    peopleCount: '',
    changeGoal: '',
  });

  // The home page's "Start here" form arrives as /contact?email=… — carry the address over.
  useEffect(() => {
    const email = new URLSearchParams(window.location.search).get('email');
    if (email) setFormData((current) => ({ ...current, email }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Record submission state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="p-4 p-md-5 rounded-3 border"
        style={{
          backgroundColor: '#F0FDFA',
          borderColor: '#5EEAD4',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#0D7A85',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '1.2rem',
          }}
        >
          ✓
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
          Thank you — this lands directly with Ekta.
        </h3>
        <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
          You'll hear back within one working day. If it's urgent, {CONTACT.phone} is faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 p-md-5 rounded-3 border bg-white" style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-semibold" style={{ color: '#0F172A' }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          className="form-control"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: '12px 14px', borderRadius: '6px', borderColor: '#CBD5E1' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#0F172A' }}>
          Work email *
        </label>
        <input
          type="email"
          id="email"
          required
          className="form-control"
          placeholder="name@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: '12px 14px', borderRadius: '6px', borderColor: '#CBD5E1' }}
        />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="company" className="form-label fw-semibold" style={{ color: '#0F172A' }}>
            Company *
          </label>
          <input
            type="text"
            id="company"
            required
            className="form-control"
            placeholder="Company name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            style={{ padding: '12px 14px', borderRadius: '6px', borderColor: '#CBD5E1' }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="peopleCount" className="form-label fw-semibold" style={{ color: '#0F172A' }}>
            Roughly how many people
          </label>
          <input
            type="text"
            id="peopleCount"
            className="form-control"
            placeholder="e.g. 150"
            value={formData.peopleCount}
            onChange={(e) => setFormData({ ...formData, peopleCount: e.target.value })}
            style={{ padding: '12px 14px', borderRadius: '6px', borderColor: '#CBD5E1' }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="changeGoal" className="form-label fw-semibold" style={{ color: '#0F172A' }}>
          What's the one thing you need to change this year? *
        </label>
        <textarea
          id="changeGoal"
          required
          rows={4}
          className="form-control"
          placeholder="The objective, bottleneck, or capacity problem on your mind..."
          value={formData.changeGoal}
          onChange={(e) => setFormData({ ...formData, changeGoal: e.target.value })}
          style={{ padding: '12px 14px', borderRadius: '6px', borderColor: '#CBD5E1' }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100 py-3 fw-semibold"
        style={{
          backgroundColor: '#0D7A85',
          borderColor: '#0D7A85',
          fontSize: '1.05rem',
          borderRadius: '6px',
        }}
      >
        Send this to Ekta
      </button>
    </form>
  );
}
