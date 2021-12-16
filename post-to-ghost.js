// Post to Ghost
// RV 2021-12-16, 03:07

// Use Drafts to post to your Ghost blog

/* In order to use this, you'll need to create a custom integration in Ghost, where you'll get your API URL and Admin API Key. */

// See: https://demo.ghost.io/integrations/

let credential = Credential.create("Add your API Key");

credential.addURLField("url", "API URL");
credential.addPasswordField("API key", "API Key");

credential.authorize();
