with open("problem_67_resource.txt") as f:
	lines = [line.split() for line in f]
	# for line in lines:
	# 	print(line)

for i in range(98,-1,-1):
	for j in range(0,i+1):
		lines[i][j] = max(int(lines[i][j])+int(lines[i+1][j]),int(lines[i][j])+int(lines[i+1][j+1]))

print(lines[0][0])

# print()
# for line in lines:
# 		print(line)