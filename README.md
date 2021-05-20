# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

b. Within a Github action that runs whenever code is pushed. As an application grows, it becomes much better to just automate all the repetitive tests instead of having to manually test each unit or feature before a push.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because this feature seems like it would include several functions and smaller features, which should all be tested by seperate unit tests. Some smaller unit tests might include making sure that writing to the message updates the data contained in the message, that clicking send on the message returns a success status, and that the receiver actually got the message.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, because testing the max length of a message is a feature that can be fit into a single function or small piece of code, which is what a unit test is designed for. This can be tested by just filling the message with dummy data and then checking to see if the check for message length works as intended.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

The same tests will run, but there will be no graphical user interface such as Chromium that is provided. You can't see what is happening on the user interface as you simulate user activity.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

Because our app is an SPA, we cannot just tell the app to go to the settings page via the URL. We would probably instead have to modify the page contents via simulating a user click to the settings page, which would change the page contents as well the URL to the right values.


