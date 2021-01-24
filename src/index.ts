import { Selector } from "testcafe";

fixture`Getting Started`.page`https://www.tumblr.com/login`;

test("uWu", async (t) => {
  await t
    .resizeWindow(1920, 1080)
    //Sign In
    .typeText("#signup_determine_email", process.env.USERNAME)
    .click("#signup_forms_submit")
    .click(".forgot_password_link")
    .typeText("#signup_password", process.env.PASSWORD)
    .setNativeDialogHandler(() => {})
    .click("#signup_forms_submit")
    // Open Messages
    .navigateTo("https://www.tumblr.com/inbox")
    .click(".tab_messaging button")
    // TODO Not selecting
    .click("a .inbox-row");

  // Grab messages

  // Find messages we've seen before

  // Look for someone to send to
});
