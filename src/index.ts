import { Selector } from "testcafe";

fixture`Getting Started`.page`https://www.tumblr.com/login`;

test("uWu", async (t) => {
  await t
    .typeText("#signup_determine_email", "brooksbecton@aol.com")
    .click("#signup_forms_submit")
    .click(".forgot_password_link")
    .typeText("#signup_password", "8AkN2LdzrsrK4pmyNUei")
    .click("#signup_forms_submit")
    // Open Messages
    .click('[aria-label="Messaging"]')
    .click(".inbox-row");
});
