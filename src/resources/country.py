from flask_restful import Resource

class Country(Resource):
  # retrieve one item by name
  def get(self, name):
    pass

  # create new item
  def post(self):
    pass

  # update item by name
  def put(self, name):
    pass

  # remove item by name
  def delete(self, name):
    pass


class CountryList(Resource):
  # retrieve all items
  def get(self):
    pass