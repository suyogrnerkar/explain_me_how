def cube_equate 
  n = 10;
  map = Hash.new { |h, k| h[k] = [] }
  for c in (1..n)
    for d in (1..n)
      sum = (c**3) + (d**3)
      puts "c: #{c} d: #{d} Sum: #{sum} " 
      map[sum] << [c,d]
    end
  end
  puts map.inspect
end

cube_equate()