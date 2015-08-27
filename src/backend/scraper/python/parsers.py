#! /usr/bin/python
from bs4 import BeautifulSoup as bs
import requests
from time import strptime
UBC_COURSE_URL="https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=3&dept={0}&course={1}"
class SectionParser(object):
    def __init__(self, dept, course):
        self.course = course
        self.dept = dept
        self.webpage = requests.get(UBC_COURSE_URL.format(dept,course))
    def get_sections(self):
        soup = bs(self.webpage.text, "html.parser")
        coursetable = soup.find('table', class_="section-summary")
        if not coursetable:
            return []
        sections = []
        for row in coursetable.find_all('tr')[1:]:
            cols = row.findAll('td')
            try:
                if  cols[2].string == "Distance Education":
                    continue
                # We dont care if these are blank so provide sane defaults
                status = cols[0].string.strip() if isinstance(cols[0].string, basestring) else ''
                interval = cols[4].string.strip() if isinstance(cols[4].string, basestring) else ''
                # If any of the rest of the strings are None, dont include the row in the output
                section = cols[1].a.string.replace('\n','').replace('  ','')
                if section not in [s["section"] for s in sections]:
                    sections.append({'status': status,
                                     'section': section,
                                     'activity': cols[2].string,
                                     'term': cols[3].string.split('-'),
                                     'interval': interval,
                                     'days': cols[5].string.strip().split(' '),
                                     'start': cols[6].string,
                                     'end': cols[7].string
                                 })
            except AttributeError:
                continue
            
        return sections
