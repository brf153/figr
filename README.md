# Identity Web Application

Identity is a web application that allows users to generate and manage design systems. This application provides users with the ability to define and customize various design tokens (like colors, radius, and spacing) and apply these tokens to style HTML components such as buttons, inputs, and select elements.

## Features

1. **User Authentication**
   - Users can create accounts and log in to the application.

2. **Default Project Creation**
   - Upon account creation, a default project is created for each user.
   - Users can add and manage design tokens such as colors, radius, and spacing.

3. **Customizable Components**
   - Users can style the following HTML components using the defined design tokens:
     - Button
     - Input (Text, Radio, Checkbox)
     - Select
   - Users can change the following styles of each component:
     - Background color
     - Text color
     - Border color and radius
     - Padding in X and Y axis

4. **Local Storage**
   - All changes made by the user are saved in the browser's local storage.
   - When the user reopens the web app, their previous changes are automatically loaded and reflected.

5. **Component Variants (Bonus)**
   - Users can create different variants of components.
     - For example, a primary button can have a blue background, while a secondary button can have a green background.
