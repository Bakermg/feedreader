/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

        /* This is a test suite - This suite is all about the RSS
         * feeds definitions, the allFeeds variable in our application.
         */

    describe('RSS Feeds', function() {

        /* This ia a test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('contains URLs', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('contains names', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            })
        })
    });

        /* This is a new test suite named "The menu" */

    describe('The menu', function() {

        /* This is a test that ensures the menu element is
         * hidden by default. */

        it('menu is hidden', function() {
            expect(document.body.className).toContain('menu-hidden');
        });

        /* This is a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('expect menu shown after click', function() {
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toBe('menu-hidden');
        });

        it('expect menu not shown after clicked again', function() {
            $('a.menu-icon-link').click();
            expect(document.body.className).toBe('menu-hidden');
        });
    });

        /* This is a new test suite named "Initial Entries" */

    describe('Initial Entries', function(done) {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        it('feed was loaded with one entry', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

        /* This is a new test suite named "New Feed Selection"*/

    describe('New Feed Selection', function() {

        /* First load a new feed entry to compare to old entry*/

        var newfeeds;

        beforeEach(function(done) {
            loadFeed(1, function() {
                newfeeds = $('.feed .entry h2').text();
                loadFeed(0, done);
            });
        });

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        it('loads new feed and content changes', function() {
            expect($('.feed .entry h2').text()).not.toBe(newfeeds);
        });
    });
}());
