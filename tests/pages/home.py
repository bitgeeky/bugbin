#!/usr/bin/env python
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this file,
# You can obtain one at http://mozilla.org/MPL/2.0/.

import time
import datetime

from selenium.webdriver.common.by import By

from base import Base
from page import PageRegion


class HomePage(Base):
    """This Page Object models the Bugbin Home Page (https://bitgeeky.github.io/bugbin)."""

    # The title of this page, which is used by is_the_current_page() in page.py
    _page_title = u'BugBin'

    # Locators for the home page
    _navbar_locator = (By.ID, 'navbar')
    _githublink_locator = (By.ID, 'githublink')
    _mozillalink_locator = (By.ID, 'mozillalink')
    _mozillaimage_locator = (By.ID, 'mozilla_image')
    _githubimage_locator = (By.ID, 'github_image')

    def go_to_page(self):
        """Open the home page."""
        self.open('/')

    def click_on_navbar_logo(self):
        self.selenium.find_element(*self._navbar_locator).click()
        from pages.home import HomePage
        return HomePage(self.testsetup)
    
    def click_on_github_image(self):
        self.selenium.find_element(*self._githublink_locator).click()
        from pages.github import GithubPage
        return GithubPage(self.testsetup)
    
    def click_on_mozilla_image(self):
        self.selenium.find_element(*self._mozillalink_locator).click()
        from pages.mozilla import MozillaPage
        return MozillaPage(self.testsetup)

