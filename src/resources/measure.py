from flask_restful import Resource

class Measure(Resource):
  # create new item
  def post(self):
    pass

  # remove item by id
  def delete(self, measure_id):
    pass

class MeasureList(Resource):
  # retrieve all items
  def get(self):
    pass

  # remove all items
  def delete(self):
    pass