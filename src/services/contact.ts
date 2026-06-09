export type ContactPayload = {
  email: string;
  message: string;
  name: string;
};

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export function isContactFormConfigured() {
  return Boolean(FORMSPREE_ENDPOINT);
}

export async function submitContactForm(payload: ContactPayload) {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error("Formspree endpoint not configured");
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to submit contact form");
  }
}
