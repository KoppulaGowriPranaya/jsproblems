n=12345634
m=n
c=0
sum1=0
while(n>0):
    c+=1
    n=n//10
while(m>0):
    r=m%10
    if c%2==0:
        sum1+=r
    c-=1
    m=m//10
print(sum1)