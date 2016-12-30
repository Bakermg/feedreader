# Project Overview
---

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. I had to write the rest of the test.


## To run the app
---

Download or clone repository and open index.html in your browser.
Scroll to the bottom of your page to see the Jasmine test section and confirm all test pass.
To view the page menu locate the button with three horizontal lines together(hamburger menu)
top left on page and click on it.



## Testing done
---
1 RSS Feeds
- Test to verify all varialbles have been defined.
- Test to verify that all URL's are defined.
- Test to verify that all feeds have names defined and not empty.

2 The Menu 
- Test to verify that menu is changing visibility.

3 Initial Entries
- Test to verify that loadFeed function is called and completes, and that there is a single entry element in the .feed containerd.

4 New Feed Section 
- Test to verify that when a new feed is loaded by the loadFeed function that the content changes.
