// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange
import App from './App'; // sample taken for testing
// test case
// test('App comp has Success text', () => {
//   // Act
//   // writing the logic to test whether the app comp has success text or not
//   render(<App />); // Render into a container which is appended to document.
//   const successText = screen.getByText('Success!'); // DOM Querying

//   // Asserting
//   expect(successText).toBeInTheDocument();
// });
// 'it' is an alias of test
it('has proper App Component', () => {
  // Act -- (Optional)
  // Assert is mandatory for a test spec
  // toBeTruthy is a matcher frm '@testing-library/react'
  expect(App).toBeTruthy();
});
