#! /usr/bin/python
from parsers import SectionParser
from pprint import pprint
sp = SectionParser("CPSC","213")
pprint(sp.get_sections())
sp = SectionParser("PSYC","350A")
pprint(sp.get_sections())
sp = SectionParser("ENGL","301")
pprint(sp.get_sections())
