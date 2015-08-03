from flask import Flask, abort
from parsers import SectionParser
import traceback
import json
import logging
app = Flask(__name__)
logger = logging.getLogger(__name__)
hdlr = logging.FileHandler('/var/tmp/{0}.log'.format(__name__))
formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
hdlr.setFormatter(formatter)
logger.addHandler(hdlr)

@app.route('/ping')
def ping():
    return 'PONG!'

@app.route('/departments/<dept>/courses/<course>/sections', methods=['GET'])
def get_sections(dept, course):
    sp = SectionParser(dept, course)
    sections = sp.get_sections()
    if not sections:
        abort(404)
    sections_json = json.dumps(sections)
    return sections_json

if __name__ == '__main__':
        app.run(port='8080')
        
