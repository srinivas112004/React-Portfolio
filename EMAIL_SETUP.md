# Setting Up Email Functionality for Contact Form

## Option 1: EmailJS (Recommended - Free & Easy)

### Step 1: Sign Up
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### Step 2: Set Up Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Install EmailJS

```bash
npm install @emailjs/browser
```

### Step 6: Update Contact.tsx

Replace the handleSubmit function with:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  // Replace these with your actual IDs
  const serviceId = 'YOUR_SERVICE_ID';
  const templateId = 'YOUR_TEMPLATE_ID';
  const publicKey = 'YOUR_PUBLIC_KEY';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
};
```

---

## Option 2: Netlify Forms (If deploying to Netlify)

### Step 1: Add to form tag in Contact.tsx

```tsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

### Step 2: Deploy to Netlify
Forms will automatically work!

---

## Option 3: Formspree (Free Tier Available)

### Step 1: Sign Up
1. Go to https://formspree.io/
2. Sign up for free account

### Step 2: Create Form
1. Create new form
2. Get your form endpoint URL

### Step 3: Update Contact.tsx

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus('idle'), 3000);
};
```

---

## Recommendation:
Use **EmailJS** - it's free, easy to set up, and works perfectly for portfolio sites.

Total setup time: ~10 minutes
