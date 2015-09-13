from flask import Flask, abort, Response
from parsers import SectionParser
import traceback
import json
import logging
app = Flask(__name__)
logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s')
logger = logging.getLogger(__name__)


@app.route('/ping')
def ping():
    return 'PONG!'

@app.route('/departments/<dept>/courses/<course>/sections', methods=['GET'])
def get_sections(dept, course):
    try:
        sp = SectionParser(dept, course)
        sections = sp.get_sections()
        if not sections:
            abort(404)
        sections_json = json.dumps(sections)
    except Exception as e:
        logger.error(traceback.format_exc())
        abort(500)
    resp = Response(sections_json)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

if __name__ == '__main__':
        app.run(port='8080')
        
