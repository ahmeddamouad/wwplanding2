export interface ContactEmailPayload {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export type EmailServiceErrorType = 'CONFIG_MISSING' | 'NETWORK_ERROR' | 'PROVIDER_REJECTED';

export class EmailServiceError extends Error {
  constructor(public type: EmailServiceErrorType, message: string) {
    super(message);
    this.name = 'EmailServiceError';
  }
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  if (!contactEmail) {
    throw new EmailServiceError('CONFIG_MISSING', 'Contact email address is not configured');
  }

  try {
    const body = {
      name: payload.fullName,
      fullName: payload.fullName,
      email: payload.email,
      company: payload.company || '',
      phone: payload.phone,
      message: payload.message,
      // FormSubmit special fields
      _subject: `[recruter.wwp] Nouvelle demande – ${payload.company || payload.fullName}`,
      _template: 'table',
      lead_source: typeof window !== 'undefined' ? window.location.href : 'https://recruter.wwp',
      // Honeypot — must be empty; bots may fill it and FormSubmit will discard the submission
      _honey: '',
    };

    const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new EmailServiceError('PROVIDER_REJECTED', `HTTP ${response.status}`);
    }

    const data = await response.json();

    if (data.success !== 'true' && data.success !== true) {
      throw new EmailServiceError('PROVIDER_REJECTED', data.message || 'FormSubmit rejected the request');
    }
  } catch (error) {
    if (error instanceof EmailServiceError) {
      throw error;
    }
    throw new EmailServiceError('NETWORK_ERROR', error instanceof Error ? error.message : 'Unknown network error');
  }
}