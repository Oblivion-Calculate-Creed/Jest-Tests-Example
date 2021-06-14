const getToken = require('../example');
const axios = require('axios');

jest.mock('axios');

it('returns the access token', async () => {
  axios.post.mockResolvedValue({
    data: [
        {
            "access_token":"abcdefghijhijklmnopqrstuvwxyz123",
            "expires_in": 86400,
            "scope": "switch-api status-reporting supplier-name-key:test-supplier",
            "token_type": "Bearer" 
         }
    ]
  });

  const token = await getToken();
  expect(token).toEqual("abcdefghijhijklmnopqrstuvwxyz123");
});