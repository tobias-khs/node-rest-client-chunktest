## What
Sample App for node-rest-client <=1.0.0 that checks whether the received chunks are put together correctly.

## Usage
Console 1:
> cd server  
> ./server.sh

Console 2:
> npm install  
> npm run start

### Sample Output:
[small] Data received.  
[small] Contains corrupted character �: false  
[large] Data received.  
[large] Contains corrupted character �: false

## Note
Corrupted characters only appear when chunks split 
unicode characters which will create string starting 
or ending in corrupted characters.
If the received chunks are bigger than the file,
then there won't be any corrupted characters.


