#!/usr/bin/env python

# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import datetime

from BeautifulSoup import BeautifulStoneSoup    # Only required for the test that doesn't use Selenium
import pytest
import requests
from unittestzero import Assert

from pages.home import HomePage
from base_test import BaseTest


class TestHomePage(BaseTest):

    @pytest.mark.nondestructive
    def test_that_clicking_on_logo_loads_home_page(self, mozwebqa):
        home_page = HomePage(mozwebqa)
        new_page = home_page.click_on_navbar_logo()
        Assert.true(new_page.is_the_current_page)
    
    @pytest.mark.nondestructive
    def test_that_clicking_on_mozilla_image_loads_bugs_page(self, mozwebqa):
        home_page = HomePage(mozwebqa)
        bugs_page = home_page.click_on_mozilla_image()
        Assert.true(bugs_page.is_the_current_page)

    @pytest.mark.nondestructive
    def test_that_clicking_on_github_image_loads_issue_page(self, mozwebqa):
        home_page = HomePage(mozwebqa)
        issue_page = home_page.click_on_github_image()
        Assert.true(issue_page.is_the_current_page)
