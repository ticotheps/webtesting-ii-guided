# Step By Step Follow Along

1) Runs 'yarn'.

2) Runs 'yarn add jest-dom --dev'.

3) Runs 'yarn add react-testing-library --dev'.

4) Imports 'render' from 'react-testing-library' into App.test.js.

5) Imports 'jest-dom/extend-expect' into App.test.js.

6) Creates a test case for 'renders successfully' (regarding <App />) in the App.test.js file.

7) Creates a test case for 'renders Hello World' (regarding <App />) in the App.test.js file.

8) Adds 'queryByText' to the list of desctructured items from the 'render' object inthe 'renders Hello World' test case.

9) Creates an assertion in the 'renders Hello World' test case using 'expect(queryByText(/hello world/i)).not.toBeNull();'.

10) 