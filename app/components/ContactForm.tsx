'use client';

import { useState, FormEvent } from 'react';

type ContactFormProps = {
    recipientEmail?: string;
    enabled?: boolean;
};

export default function ContactForm({ enabled = true }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    if (!enabled) return null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/contact/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Failed to submit form');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
        }
    };

    return (
        <div className="contact-form-container" style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px' }}>Send us a message</h3>

            {status === 'success' && (
                <div
                    style={{
                        padding: '15px',
                        backgroundColor: '#d4edda',
                        borderRadius: '4px',
                        marginBottom: '20px',
                        color: '#155724',
                    }}
                >
                    Thank you for your message! We will get back to you soon.
                </div>
            )}

            {status === 'error' && (
                <div
                    style={{
                        padding: '15px',
                        backgroundColor: '#f8d7da',
                        borderRadius: '4px',
                        marginBottom: '20px',
                        color: '#721c24',
                    }}
                >
                    {errorMessage || 'Failed to send message. Please try again.'}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
                        Name *
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
                        Email *
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="contact-subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
                        Subject *
                    </label>
                    <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
                        Message *
                    </label>
                    <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            resize: 'vertical',
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#4a90a4',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                        opacity: status === 'submitting' ? 0.7 : 1,
                    }}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
