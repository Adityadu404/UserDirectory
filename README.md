
# **User List App**

This is a simple React Native application that displays a list of users and allows searching for a specific user. The app fetches data from an API, handles errors gracefully, and provides a clean and intuitive user interface.

---

## **Features**

1. **User List Display**  
   - A FlatList to display a list of users fetched from the API.
   - Each user item shows the user's name and email.

2. **Search Functionality**  
   - Users can search for a specific user by name.
   - If a matching user is found, their details are displayed in a dedicated `UserCard`.
   - If no user is found, an error message (`User Not Found`) is displayed.

3. **Error Handling**  
   - Handles API failures gracefully with appropriate error messages.

4. **Responsive and Modern UI**  
   - Clean and responsive design with proper spacing and styling.
   - Includes a loading spinner when data is being fetched.

5. **User Details Screen**  
   - Clicking on a user card navigates to a detailed screen displaying the user's address and company information.

---

## **How to Run the App**

### **Prerequisites**

- Install [Node.js](https://nodejs.org/) (v14 or later).
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/) globally:
  ```bash
  npm install -g expo-cli
  ```
- Have a mobile device or emulator with Expo Go installed.

### **Steps**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Scan the QR code using the Expo Go app on your device or run the app on an emulator (Android Studio or iOS Simulator).

---

## **Implemented Features**

1. **Data Fetching:**  
   Fetches a list of users from a mock API using a utility function (`GetUserData`). Displays data in a FlatList.

2. **Search Functionality:**  
   - Filters users by name and renders the matching user in a `UserCard` component.
   - Displays an error message if no matching user is found.

3. **Error Handling:**  
   - Handles API failures using `try/catch`.

4. **Navigation:**  
   - Uses `react-navigation` to navigate between the user list and user details screens.

5. **UI/UX Enhancements:**  
   - Responsive and visually appealing design with proper spacing and alignment.
   - Includes a loading spinner while fetching data.

---

## **Challenges Faced**

1. **Integrating Search and List Display:**  
   Initially, both the search bar and list components were rendered independently. Handling the state to toggle between the list and the search results required careful coordination.

2. **Error Handling:**  
   Adding error handling for failed API calls and ensuring a smooth user experience during network failures.

3. **Navigation Issues:**  
   Setting up `react-navigation` and passing props between screens for user details took some extra effort to debug and implement.

4. **UI Improvements:**  
   Enhancing the UI to make it user-friendly and responsive required iterative design and testing.

---

## **Future Enhancements**

- Add pagination or lazy loading for large user datasets.
- Improve the search functionality with partial name matching or fuzzy search.
- Add a theme switcher (light/dark mode).
- Include automated tests for the app.

---

## **Technologies Used**

- **React Native**: For building the app.
- **Expo**: For easy development and testing.
- **React Navigation**: For navigation between screens.
- **JavaScript (ES6+)**: For writing logic and components.

---

## **Screenshots**

### **User List Screen**![Screenshot 2024-12-14 130324](https://github.com/user-attachments/assets/2be232a2-df9e-4dc7-b63b-fd329c57b42a)

### **User Details Screen**![Screenshot 2024-12-14 130333](https://github.com/user-attachments/assets/a50164d1-389b-4e11-aad2-8605e6fb08e7)

---

Feel free to clone and modify the project as needed! Contributions are always welcome. 😊
