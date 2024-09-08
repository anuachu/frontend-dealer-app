## :computer: The project is deployed and can be viewed at [GitHub Pages][Click here](https://anuachu.github.io/frontend-dealer-app) to see my Live Demo!

- **Responsive Design:** The website is designed to be fully responsive and maintains functionality across all resolutions.

- **Mobile Compatibility:** Optimized for mobile devices with resolutions down to 375px, including both iOS and Android platforms.

- **Desktop Support:** Adapted for desktop screens starting from 1920px resolution, ensuring a seamless experience on iOS, Windows, and other desktop environments.

- **Component Structure:** 
  - Created a `Banner` component and integrated it into `App.js`.
  - Developed a `Card` component with sub-components: `CardImage`, `CardHeader`, and `CardBody`.
  - Reused a `Button` component for both the `Banner` and `Card` components.
  - Utilized props for styling and content management within `App.js`, allowing for easy future updates.

- **Styling:** 
  - Employed minimal media queries with three breakpoints: 1440px (desktop), 768px (tablet), and default for screens less than 768px.
  - Applied careful attention to detail in padding, border radius, box shadow, overlays, and alignment as per the design requirements.

- **State Management:** Implemented state management to handle border switching for cards. The middle card has a border by default on page load, and clicking a card's button transfers the border to the clicked card.
