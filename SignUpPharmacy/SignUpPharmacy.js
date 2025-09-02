Clerk.load({
  frontendApi: "pk_test_Y2VydGFpbi10dW5hLTUwLmNsZXJrLmFjY291bnRzLmRldiQ",
}).then(() => {
  const { clerk } = window;
  
  if (clerk.user) {
    console.log("logged user:", clerk.user);
  } else {
    console.log("No user logged in");
  }
});