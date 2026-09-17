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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="sw-card">
        <h2 className="sw-step__title">Thank you — this lands directly with Ekta.</h2>
        <p className="sw-step__body">
          You&apos;ll hear back within one working day. If it&apos;s urgent,{' '}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> is faster.
        </p>
      </div>
    );
  }

  const set = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <form className="sw-form sw-card" onSubmit={handleSubmit}>
      <div className="sw-form__row">
        <label htmlFor="name">Name *</label>
        <input id="name" type="text" required value={formData.name} onChange={set('name')} placeholder="Your full name" />
      </div>

      <div className="sw-form__row">
        <label htmlFor="email">Work email *</label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={set('email')}
          placeholder="name@company.com"
        />
      </div>

      <div className="sw-form__grid">
        <div className="sw-form__row">
          <label htmlFor="company">Company *</label>
          <input id="company" type="text" required value={formData.company} onChange={set('company')} placeholder="Company name" />
        </div>
        <div className="sw-form__row">
          <label htmlFor="peopleCount">Roughly how many people</label>
          <input
            id="peopleCount"
            type="text"
            value={formData.peopleCount}
            onChange={set('peopleCount')}
            placeholder="e.g. 150"
          />
        </div>
      </div>

      <div className="sw-form__row">
        <label htmlFor="changeGoal">What&apos;s the one thing you need to change this year? *</label>
        <textarea
          id="changeGoal"
          required
          rows={5}
          value={formData.changeGoal}
          onChange={set('changeGoal')}
          placeholder="The objective, bottleneck, or capacity problem on your mind…"
        />
      </div>

      <button type="submit" className="rts-btn btn-primary">
        Send this to Ekta
      </button>
    </form>
  );
}
