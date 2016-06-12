require 'webrick'
require 'json'

# default port to 3000 or overwrite with PORT variable by running
# $ PORT=3001 ruby server.rb
port = ENV['PORT'] ? ENV['PORT'].to_i : 3000

puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

server.mount_proc '/api/restaurants' do |req, res|
  restaurants = JSON.parse(File.read('./restaurants.json', encoding: 'UTF-8'))

  if req.request_method == 'POST'
    # Assume it's well formed
    restaurant = { id: (Time.now.to_f * 1000).to_i }
    req.query.each do |key, value|
      restaurant[key] = value.force_encoding('UTF-8') unless key == 'id'
    end
    restaurants << restaurant
    File.write(
      './restaurants.json',
      JSON.pretty_generate(restaurants, indent: '    '),
      encoding: 'UTF-8'
    )
  end

  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res['Access-Control-Allow-Origin'] = '*'
  res.body = JSON.generate(restaurants)
end

trap('INT') { server.shutdown }

server.start
