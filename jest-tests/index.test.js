const http = require('https');
const post = require('../index.js');

jest.mock('../index.js');
// allows you to replace functions in the module with mock ones that I control


test('returning sample response', async () => {
   post.mockResolvedValue({
               "access_token":"abcdefghijhijklmnopqrstuvwxyz123",
               "expires_in": 86400,
               "scope": "switch-api status-reporting supplier-name-key:test-supplier",
               "token_type": "Bearer" 
    })

const token = await post("/oauth/token", {
    grant_type: "client_credentials",
    audience: "https://staging-api.partners.uswitch.com/energy",
    client_id: "test",
    client_secret: "secret",
  });
expect(token.access_token).toEqual("abcdefghijhijklmnopqrstuvwxyz123")

});
