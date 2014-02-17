#!/usr/bin/env python
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this file,
# You can obtain one at http://mozilla.org/MPL/2.0/.

import time
import datetime

from selenium.webdriver.common.by import By

from base import Base
from page import PageRegion


class GithubPage(Base):
    """This Page Object models the Github Issues Page (https://bitgeeky.github.io/bugbin/github)."""

    # The title of this page, which is used by is_the_current_page() in page.py
    _page_title = u'Github Issues'

    # Locators for the home page
    _navbar_locator = (By.ID, 'navbar')

    def go_to_page(self):
        """Open the github page."""
        self.open('/github')
