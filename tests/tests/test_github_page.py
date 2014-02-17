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


class TestGithubPage(BaseTest):

    @pytest.mark.nondestructive
    def test_that_clicking_on_logo_loads_home_page(self, mozwebqa):
        github_page = GithubPage(mozwebqa)
        github_page.go_to_page()
        new_page = home_page.click_on_navbar_logo()
        Assert.true(new_page.is_the_current_page)
    
    @pytest.mark.nondestructive
    def test_that_issue_table_is_present(self, mozwebqa):
        github_page = GithubPage(mozwebqa)
        github_page.go_to_page()
        Assert.true(github_page.check_for_issue_table())
