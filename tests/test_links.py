import os
import unittest
from bs4 import BeautifulSoup


class TestLinkRelAttributes(unittest.TestCase):
    def test_external_links_have_rel(self):
        with open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'index.html')) as f:
            soup = BeautifulSoup(f, 'html.parser')
        for a in soup.find_all('a', target='_blank'):
            rel = (a.get('rel') or '').split()
            self.assertIn('noopener', rel)
            self.assertIn('noreferrer', rel)


if __name__ == '__main__':
    unittest.main()
