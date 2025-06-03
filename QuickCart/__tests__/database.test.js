require('dotenv').config({ path: '.env.local' });

const sanityClient = require('@sanity/client');
const fetch = require('node-fetch'); // npm install node-fetch@2

const client = sanityClient.createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-01-01',
});

describe('Sanity Integration Tests', () => {
  let createdUserId;

  afterAll(async () => {
    // Clean up: delete created user document
    if (createdUserId) {
      await client.delete(createdUserId);
    }
  });

  test('should create and retrieve user', async () => {
    const userData = { email: 'test@example.com', _type: 'user' };
    // Make sure your Next.js dev server is running on port 3000!
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty('_id');
    createdUserId = body._id;

    // Verify user exists in Sanity
    const sanityUser = await client.getDocument(createdUserId);
    expect(sanityUser).toBeTruthy();
    expect(sanityUser.email).toBe(userData.email);
    expect(sanityUser._type).toBe('user');
  });
});