# harry-portfolio

This is my personal portfolio showcasing my skills, projects, and experience. The project is built using `React` and the `MUI (Material-UI)` component library, with simple animations implemented via `animate.css` and form handling done through `Formspree`.

## Tech Stack

- **Frontend Framework**: React
- **UI Component Library**: MUI (Material-UI)
- **Animation Library**: animate.css
- **Form Handling**: Formspree
- **Build Tool**: Create React App
- **Styling**: CSS
- 
## Project Structure

- `src/`: Source code of the project
  - `components/`: Contains all React components along with their respective CSS
  - `assets/`: Stores images, fonts, and other assets
- `public/`: Contains static files such as the resume and other assets
  - `TianyuCV.pdf`: My resume (example)
  - `favicon.ico`: Favicon for the website

## External Dependencies

### 1. **@mui/material**
- **Purpose**: Provides core Material-UI components for building modern, responsive UIs.
- **Usage**: Includes components like `Button`, `Card`, `Typography`, `Grid`, etc.

### 2. **@mui/icons-material**
- **Purpose**: Provides Material Design icons for use in your UI.
- **Usage**: Use icons like `<ChatIcon />`, `<EmailIcon />`, etc.

### 3. **@mui/lab**
- **Purpose**: Experimental components and features from Material-UI.
- **Usage**: Includes components like `Timeline`, `TimelineItem`, `TabList`, etc.

### 4. **animate.css**
- **Purpose**: Adds pre-built CSS animations for easy use.
- **Usage**: Adds animations like `fadeIn`, `bounce`, `zoomIn`, etc.

### 5. **@formspree/react**
- **Purpose**: Handles form submissions via Formspree without a backend.
- **Usage**: Easily integrate with forms to send data to an email.

### 6. **react-intersection-observer**
- **Purpose**: Detects when elements enter the viewport for lazy loading or triggering animations.
- **Usage**: Triggers actions when elements come into view.

## Local Installation and Setup Guide

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 16.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation Steps

1. **Clone the Repository Locally**

   Start by cloning the repository using Git:

   ```bash
   git clone https://github.com/Harry-Liu97/harry-portfolio.git
   ```

2. **Install Dependencies**

    Use npm or yarn to install the required dependencies:
    
   ```
   npm install
   ```

   Or if you are using yarn:

       
   ```
    yarn install
   ```

3. **Create a new .env file**

    ```
    touch .env
    ```

4. **Update the .env file with your actual API keys, replacing the placeholders. It should look like this**

    ```
    REACT_APP_ENDPOINT=your_actual_formspree_api_key
    ```

5. **Start the Development Server**

    Run the React development server locally:

    ```
    npm start
    ```

    Or using yarn:

    ```
    yarn start
    ```

## Future Enhancements

- **Responsive Design**: Improve mobile responsiveness.
- **Dark Mode**: Add a light/dark mode toggle.
- **Performance**: Optimize assets and implement lazy loading.
- **Component Refactoring**: Refactor components under the `component` folder.
- **Live Chat**: Integrate a live chat feature.
- **Testing**: Add automated tests for React components.
- **Image Redesign**: Update images to better align with section themes.