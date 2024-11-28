Types of components on react for SRP (Single Responsibility Principle):
1- UI Components => responsible for rendering/displaying the data, no more. No side-effects, no fetching, no functions there. Just take the data and display it.
2- Feature Components => they handle a feature, it handles functions. They are always made up of small UI components.
3- Page Components => They handle the functions of the page (like on load useEffects), manage and provide the context for ui components.