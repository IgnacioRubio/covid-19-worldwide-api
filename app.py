from flask import Flask
from flask_restful import Api

from src.resources.country import Country, CountryList
from src.resources.measure import Measure, MeasureList
from src.resources.record import Record, RecordList

app = Flask(__name__)
api = Api(app)

# all endpoints
api.add_resource