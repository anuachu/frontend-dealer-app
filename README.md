## :computer: The project is deployed and can be viewed at [GitHub Pages] [Click here](https://anuachu.github.io/frontend-dealer-app). to see my Live Demo!

- **Responsive Design:** The website is fully responsive and functions well across all screen resolutions, from 1920px on desktop to 375px on mobile.

- **Component Structure:**
  - Created a `Banner` component and integrated it into `App.js`.
  - Developed a `Card` component with sub-components: `CardImage`, `CardHeader`, and `CardBody`.
  - **Reusable Button Component:** Created a reusable `Button` component, stored in a separate folder, which is used in both the `Banner` and `Card` components.
  - **Reusable Components:** Both the `Banner` and `Card` components are reusable, leveraging props for styling and content, allowing for easy future updates through `App.js`.

- **Styling:**
  - Implemented minimal media queries with three breakpoints: 1440px for desktop, 768px for tablet, and a default for smaller screens.
  - Focused on design details such as padding, border radius, box shadow, overlays, and alignment.

- **State Management:** Utilized React hooks to manage the border switching for the cards. The middle card has a border by default on page load, and clicking a card's button transfers the border to that card.

