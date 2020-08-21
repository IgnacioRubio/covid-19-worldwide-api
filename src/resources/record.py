from flask_restful import Resource


class Record(Resource):
  # remove one item by id
  def delete(self, record_id):
    pass

  # create new item
  def post(self):
    pass


class RecordList(Resource):
  # retrieve all items
  def get(self):
    pass
  
  # remove all items
  def delete(self):
    pass


class RecordListCountry(Resource):
  # retrieve all records by country
  def get(self, country_id):
    pass


class RecordListContinent(Resource):
  # retrieve all records by continent
  def get(self, continent_name):
    pass
