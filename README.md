# Library Management System

## Purpose
To facilitate efficient management of library resources, including book categorization, borrowing, and returning transactions, while providing a seamless and user-friendly experience for both users and administrators.

##  Live Site URL
[Visit the live site here!](https://batch10-assignment11-projects.web.app)

##  Features of the Website
- **Responsive Design:** The website offers an excellent view on mobile, tablet, and desktop devices.
- **User-Friendly Interface:**Enhances the user experience through a simple, elegant, and intuitive      design, making navigation seamless and enjoyable for all users.
- **Custom Animations:** Different interesting animations are shown in some sections. For which the user will feel attractive and comfortable to use the website.
- **Filter Functionality:** Users can easily see their All Books page Filter button for showing available books only.
- **Toggle**: All Books page Toggle view functionality (Card View/Table View).
- **Social Login**: Google authentication for quick login and registration.
- **Conditionally Function** Shows "Login" and "Register" if the user is not logged in.
Shows the user’s photo and "Logout" if the user is logged in.
- **Category Type**:  Displays 4 categories of books, each linking to a detailed page.
- **JWT Implement**:  JWT Authentication for email/password and social login. Proper handling of private routes with JWT.

### 11. **External Packages**
- **React Marquee**: Our client review section used marquee package.
- **React Lottie**: Our login and register page used react lottie files design.
- **React Tooltip**: Hovering over the photoURL in the navbar display name with the react Tooltip package.
- **Animation.Css**: Our popular books shown by animation css.
- **React-Toastify**: Users login, register, books update and books delete this operation successful and unsuccessful toast message show.


## Dependencies
- `@smastrom/react-rating`: Rating component for books.
- `animate.css`: CSS library for animations.
- `axios`: For making API requests.
- `firebase`: For authentication and backend.
- `framer-motion`: For animations in React.
- `localforage`: For storing data offline.
- `lottie-react`: For animations using Lottie.
- `match-sorter`: For sorting data.
- `motion`: For animations in React.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: For DOM manipulation in React.
- `react-fast-marquee`: Scrolling text component.
- `react-hot-toast`: Toast notifications.
- `react-icons`: For React component icons.
- `react-rating`: For implementing ratings.
- `react-rating-stars-component`: Star rating component for React.
- `react-router-dom`: For navigation within the app.
- `react-toastify`: For toast notifications.
- `react-tooltip`: For adding tooltips.
- `sort-by`: For sorting data.
- `sweetalert2`: For beautiful alerts.
- `swiper`: For creating sliders/carousels.

## Dev Dependencies
- `@eslint/js`: JavaScript linting with ESLint.
- `@types/react`: TypeScript types for React.
- `@types/react-dom`: TypeScript types for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: CSS prefixing for better compatibility.
- `daisyui`: TailwindCSS component library.
- `eslint`: Linter for identifying and fixing code quality issues.
- `eslint-plugin-react`: ESLint plugin for React.
- `eslint-plugin-react-hooks`: ESLint plugin for React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
- `globals`: For adding global variables support in linting.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Build tool that aims to provide a faster and leaner development experience.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jahidhasan6676/Batch10-Assignment11-client.git
   cd books-library