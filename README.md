#DEIVIDAS URBANAVIČIUS 2021-10
---

- This project is made with React.

- I used "Redux" where urls that user clicked on are stored in state. Also, when user clicks on "BACK" button, it deletes the latest url from that state and user can get back to the all previous pages (All information goes to console if you want to see it).
--- npm instal redux, npm install react-redux ---

- "Products" > "Offers Today" conditionCode (from API) image rendering works well. I've faced with CORS errors as It was said in task document and successfully fixed it by adding "proxy": "https://api.meteo.lt/" in 'package.json' file. The whole data is dispatched with reducer (File: MainSecondSection.jsx). If the API has not fetched yet, user sees loading image.

- The page is responsive. It looks good in both computer and mobile phone.

- The order/sandwich drop-down button also works well. It is made with CSS. There's also drop-down when user mouse over "Works" in the menu. There are 3 different drop-downs when resizing the screen.

- When a user applies a form, he receives an alert about his written statuses.

- I used SASS to create the style.

- When user clicks on any footer's link, scrollToTopAfterClick() function is called to automatically scroll to the top of the page.

- If user manually typed wrong address, he sees "Error 404 Page Not Found" component.

- ESLint is installed in this project.



Have a good day.

Deividas Urbanavičius
---
