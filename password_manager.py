
def view():
  with open('password.txt','r')as f:
   for line in f.readlines():
    data = line.rstrip()
   if len(data.split()) >= 2:
    user, code = data.split()
    print(f'user: {user} password: {code} ')
def add():
 name = input('add your Account name please:')
 pwd = input('add your password please:')
 with open('password.txt','a')as f: 
  f.write(name + ' ' + pwd +'\n')

while True:
 mode=input('Would you like to add a new password or view existing ones (view, add) or press q to quit:').lower()
 if mode == 'q':
  break
 if mode == 'view':
  view()
 elif mode == 'add':
  add()
 else:
  print('invalid mode')
