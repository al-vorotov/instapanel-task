# API endpoint: https://api.punkapi.com/v2/beers
# Documentation: https://punkapi.com/documentation/v2
Constraints:
- If you would rather work in your local environment, feel free to copy this prompt, then upload to a git repo so we can review.
- okay to use Google
- okay to use essential libraries (e.g. Redux)
- try not to rely on all-in-one libraries, this is a chance to show your skills!

API endpoint: https://api.punkapi.com/v2/beers
Documentation: https://punkapi.com/documentation/v2

Goals:
1. Display a table of beers from the API
   Each table row should have these columns:
    - Name
    - Tagline
    - Photo
    - ABV
      The table should support pagination at the API level, so clicking between pages triggers a new set of results from the API
      example: /v2/beers?page=2&per_page=25

2. Click on a photo to view more details
   (This can be a modal or new page)
   New details should be:
    - Name
    - Tagline
    - Photo
    - ABV
    - Description
    - Date first brewed
    - Brewer's tips

3. Sort list of beers from Step 1 by ABV

4. Display a bar chart at the top of the list of beers. This should
   display the ABV as the x-axis
   (example) https://developers.google.com/chart/interactive/docs/gallery/columnchart

5. Clicking a bar of the bar chart should display the beer detail modal or page and should be consistent with clicking on the photo.
